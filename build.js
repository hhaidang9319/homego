/* HomeGo build: tạo trang HTML riêng cho từng bài viết + sitemap.xml
   Chạy tự động trên Cloudflare Pages (Build command: node build.js, Output directory: dist) */
const fs = require('fs'), path = require('path'), vm = require('vm');
const SITE = 'https://homego.online', OUT = 'dist';

// 1. Sao chép toàn bộ website vào dist/
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT);
const skip = new Set(['.git', '.github', 'node_modules', OUT, 'build.js', 'package.json', 'README.md', 'HUONG-DAN.md']);
for (const f of fs.readdirSync('.')) if (!skip.has(f)) fs.cpSync(f, path.join(OUT, f), { recursive: true });

// 2. Đọc danh sách bài từ data/blog.js
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync('data/blog.js', 'utf8'), ctx);
const posts = (ctx.window.HOMEGO_BLOG || []).filter(p => p.slug);

const CATS = {
    'review-meo-hay': { name: 'Review & Mẹo hay', desc: 'Đánh giá thực tế và mẹo hay đồ gia dụng thông minh giúp bạn mua sắm thông thái.' },
    'nha-cua-doi-song': { name: 'Nhà cửa & Đời sống', desc: 'Kinh nghiệm, mẹo vặt và gợi ý giúp nhà cửa gọn gàng, tiện nghi hơn.' }
};
posts.forEach(p => { if (!CATS[p.category]) p.category = 'review-meo-hay'; });
const esc = v => String(v == null ? '' : v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const rel = u => !u ? '' : /^(https?:|data:)/.test(u) ? u : '/' + u.replace(/^\//, '');
const abs = u => /^https?:/.test(rel(u)) ? rel(u) : SITE + rel(u);
const fmt = d => d ? d.split('-').reverse().join('/') : '';
const li = it => typeof it === 'string' ? `<li>• ${esc(it)}</li>` : `<li${it.bold ? ' class="font-semibold"' : ''}>• ${esc(it.text)}</li>`;
const body = t => String(t || '').split(/\n\s*\n/).map(x => x.trim()).filter(Boolean).map(x =>
    x.startsWith('## ') ? `<h2 class="font-heading font-bold text-lg md:text-xl mt-6 mb-2">${esc(x.slice(3))}</h2>`
        : `<p class="text-sm md:text-base text-gray-700 leading-relaxed mb-4">${esc(x).replace(/\n/g, '<br>')}</p>`).join('\n');
const card = b => `
<a href="/bai-viet/${esc(b.slug)}/" class="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden hover:shadow-md transition flex flex-col">
  <img src="${esc(rel(b.image))}" alt="${esc(b.title)}" loading="lazy" class="w-full h-44 object-cover bg-gray-100">
  <div class="p-4 flex flex-col flex-1">
    <span class="text-[10px] font-bold text-[#0F5132] uppercase tracking-wider">${esc(b.tag || 'Đánh giá chi tiết')}</span>
    <h3 class="font-heading font-bold text-sm md:text-base mt-1 mb-2 line-clamp-2">${esc(b.title)}</h3>
    <p class="text-xs text-gray-600 line-clamp-3 mb-3">${esc(b.intro)}</p>
    <span class="mt-auto text-xs font-bold text-[#FF8A2B]">Đọc tiếp →</span>
  </div>
</a>`;

const layout = ({ title, desc, url, image, inner, ld }) => `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="HomeGo">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
${image ? `<meta property="og:image" content="${esc(image)}">` : ''}
${ld ? `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>` : ''}
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>body{font-family:'Inter',sans-serif}h1,h2,h3,h4,.font-heading{font-family:'Montserrat',sans-serif}</style>
</head>
<body class="bg-[#F7F7F2] text-[#222222]">
<header class="bg-white border-b border-[#E5E7EB]"><div class="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
  <a href="/" class="font-heading font-extrabold text-xl text-[#0F5132]"><i class="fa-solid fa-house-chimney mr-1"></i>Home<span class="text-[#FF8A2B]">Go</span></a>
  <nav class="text-xs md:text-sm font-semibold flex gap-4"><a href="/" class="hover:text-[#FF8A2B]">Trang chủ</a><a href="/nha-cua-doi-song/" class="hover:text-[#FF8A2B]">Nhà cửa &amp; Đời sống</a><a href="/review-meo-hay/" class="hover:text-[#FF8A2B]">Review &amp; Mẹo hay</a></nav>
</div></header>
<main class="max-w-4xl mx-auto px-4 py-6 md:py-10">
${inner}
</main>
<footer class="text-center text-xs text-gray-500 py-8">© HomeGo. Có chứa link tiếp thị liên kết (Affiliate).</footer>
</body>
</html>
`;

const write = (rel_, html) => { const f = path.join(OUT, rel_); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); };

// 3. Trang từng bài
for (const b of posts) {
    const url = `${SITE}/bai-viet/${b.slug}/`;
    const desc = String(b.intro || b.title).replace(/\s+/g, ' ').slice(0, 160);
    const others = posts.filter(p => p !== b && p.category === b.category).slice(0, 3);
    const inner = `
<article class="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-8 border border-[#E5E7EB] shadow-sm">
  <a href="/${b.category}/" class="block text-xs font-semibold text-[#0F5132] hover:text-[#FF8A2B] mb-3">← ${CATS[b.category].name}</a>
  <span class="bg-[#0F5132]/10 text-[#0F5132] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">${esc(b.tag || 'Đánh giá chi tiết')}</span>
  <h1 class="text-2xl sm:text-3xl font-heading font-extrabold mt-3 mb-2">${esc(b.title)}</h1>
  <p class="text-xs text-gray-500 mb-4">${fmt(b.date)}</p>
  ${b.image ? `<img src="${esc(rel(b.image))}" alt="${esc(b.title)}" class="w-full rounded-2xl mb-5 object-cover max-h-[420px]">` : ''}
  <p class="text-sm md:text-base text-gray-700 leading-relaxed mb-4 font-medium">${esc(b.intro)}</p>
  ${body(b.content)}
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
    <div class="bg-[#F7F7F2] p-4 rounded-xl border border-gray-200"><h4 class="font-bold text-xs text-[#0F5132] uppercase mb-2">✓ Ưu điểm</h4><ul class="text-xs md:text-sm text-gray-600 space-y-1">${(b.pros || []).map(li).join('')}</ul></div>
    <div class="bg-[#F7F7F2] p-4 rounded-xl border border-gray-200"><h4 class="font-bold text-xs text-red-600 uppercase mb-2">✗ Nhược điểm</h4><ul class="text-xs md:text-sm text-gray-600 space-y-1">${(b.cons || []).map(li).join('')}</ul></div>
  </div>
  <div class="flex flex-wrap gap-3">
    ${b.shopeeUrl ? `<a href="${esc(b.shopeeUrl)}" target="_blank" rel="nofollow sponsored noopener" class="bg-[#FF8A2B] hover:bg-[#e07520] text-white px-5 py-3 rounded-xl font-heading font-bold text-xs shadow"><i class="fa-solid fa-bag-shopping mr-1"></i>${esc(b.shopeeText || 'Mua trên Shopee')}</a>` : ''}
    ${b.tiktokUrl ? `<a href="${esc(b.tiktokUrl)}" target="_blank" rel="nofollow sponsored noopener" class="bg-[#222222] hover:bg-black text-white px-5 py-3 rounded-xl font-heading font-bold text-xs shadow"><i class="fa-brands fa-tiktok mr-1"></i>${esc(b.tiktokText || 'Săn deal trên TikTok Shop')}</a>` : ''}
  </div>
</article>
${others.length ? `<h2 class="font-heading font-extrabold text-lg mt-8 mb-3">Bài viết khác</h2><div class="grid grid-cols-1 sm:grid-cols-3 gap-4">${others.map(card).join('')}</div>` : ''}`;
    write(`bai-viet/${b.slug}/index.html`, layout({
        title: `${b.title} - HomeGo`, desc, url, image: b.image ? abs(b.image) : '', inner,
        ld: { '@context': 'https://schema.org', '@type': 'Article', headline: b.title, description: desc, image: b.image ? abs(b.image) : undefined,
            datePublished: b.date, dateModified: b.date, mainEntityOfPage: url, author: { '@type': 'Organization', name: 'HomeGo' }, publisher: { '@type': 'Organization', name: 'HomeGo' } }
    }));
}

// 4. Trang mục: chỉ hiện danh sách tiêu đề, bấm vào để đọc bài
const row = b => `
<a href="/bai-viet/${esc(b.slug)}/" class="flex items-center gap-3 md:gap-4 p-3 md:p-4 hover:bg-[#F7F7F2] transition">
  ${b.image ? `<img src="${esc(rel(b.image))}" alt="${esc(b.title)}" loading="lazy" class="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover bg-gray-100 flex-shrink-0">` : ''}
  <div class="flex-1 min-w-0"><h2 class="font-heading font-bold text-sm md:text-base line-clamp-2">${esc(b.title)}</h2><p class="text-xs text-gray-500 mt-1">${fmt(b.date)}</p></div>
  <span class="text-gray-400 text-xs">›</span>
</a>`;
for (const [key, c] of Object.entries(CATS)) {
    const list = posts.filter(p => p.category === key);
    write(`${key}/index.html`, layout({
        title: `${c.name} - HomeGo`, desc: c.desc, url: `${SITE}/${key}/`, image: '',
        inner: `<h1 class="font-heading font-extrabold text-2xl mb-4">${esc(c.name)}</h1>` +
            (list.length ? `<div class="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm divide-y divide-[#E5E7EB]">${list.map(row).join('')}</div>` : '<p class="text-sm text-gray-500">Chưa có bài viết nào trong mục này.</p>')
    }));
}

// 5. sitemap.xml tự cập nhật
const urls = [{ loc: `${SITE}/`, pr: '1.0' }, ...Object.keys(CATS).map(k => ({ loc: `${SITE}/${k}/`, pr: '0.8' })), ...posts.map(b => ({ loc: `${SITE}/bai-viet/${b.slug}/`, pr: '0.7', d: b.date }))];
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u => `  <url><loc>${u.loc}</loc>${u.d ? `<lastmod>${u.d}</lastmod>` : ''}<priority>${u.pr}</priority></url>`).join('\n') + `\n</urlset>\n`);
console.log(`Build xong: ${posts.length} bài viết, ${urls.length} URL trong sitemap.`);
