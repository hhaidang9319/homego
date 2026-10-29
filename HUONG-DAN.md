# HomeGo – Quản lý bằng GitHub + trang Admin

## Bước 1. Tạo GitHub và đưa code lên
1. Đăng ký tại github.com → **New repository** → tên `homego` → **Create repository**.
2. Giải nén `homego.zip` ra máy (chuột phải → Extract All).
3. Trên trang repo vừa tạo, bấm liên kết **uploading an existing file**. GitHub sẽ mở trang có một **khung nét đứt**
   ghi "Drag files here to add them to your repository".
4. Mở thư mục vừa giải nén, nhấn Ctrl+A để chọn TOÀN BỘ bên trong (index.html, 404.html, admin, data, images...),
   rồi **kéo thả vào khung nét đứt đó** trên trang GitHub (cửa sổ trình duyệt Chrome/Edge).
   Cũng có thể bấm **choose your files** trong khung để chọn file, nhưng cách kéo thả mới giữ được các thư mục con.
5. Đợi thanh tải lên chạy xong, kéo xuống cuối trang, bấm nút xanh **Commit changes**.
   Trong repo phải thấy `index.html` ngay trang đầu, cùng các thư mục `admin`, `data`, `images`.

## Bước 2. Nối Cloudflare Pages với GitHub
1. Cloudflare → Workers & Pages → Create → tab **Pages** → **Connect to Git** → chọn repo `homego`.
2. Build command: để trống. Output directory: để trống (hoặc `/`). → **Save and Deploy**.
3. Chuyển tên miền `homego.online` sang dự án mới (làm sau khi dự án mới đã deploy xong và mở được địa chỉ `.pages.dev` mới):
   a. **Gỡ khỏi dự án cũ:** Cloudflare → Workers & Pages → bấm vào dự án cũ (tên `homego-9ec`) → tab **Custom domains**
      → bấm dấu **⋮** (ba chấm) cạnh `homego.online` → **Remove domain** → xác nhận.
   b. **Thêm vào dự án mới:** quay lại Workers & Pages → bấm dự án mới → tab **Custom domains**
      → **Set up a custom domain** → gõ `homego.online` → **Continue** → **Activate domain**.
   c. Nếu Cloudflare hỏi có cập nhật bản ghi DNS không, chọn **Update record** (bản ghi CNAME `homego.online`
      phải trỏ tới địa chỉ `.pages.dev` của dự án mới). Nếu tên miền quản lý DNS ở nhà đăng ký khác (không phải Cloudflare),
      vào đó sửa bản ghi CNAME `homego.online` thành địa chỉ `.pages.dev` mới.
   d. Đợi 5–15 phút để Cloudflare cấp chứng chỉ SSL. Trạng thái chuyển sang **Active** là xong, mở `https://homego.online` kiểm tra.
   Mẹo: trong lúc chờ, web vẫn dùng được qua địa chỉ `.pages.dev` mới. Chưa cần xóa dự án cũ, cứ giữ lại để dự phòng.

## Bước 3. Tạo token cho trang Admin
GitHub → ảnh đại diện → Settings → Developer settings → Personal access tokens → **Fine-grained tokens** → Generate new token:
- Repository access: **Only select repositories** → chọn `homego`
- Permissions → Repository permissions → **Contents: Read and write**
- Expiration: tùy bạn → Generate → **copy token** (chỉ hiện 1 lần).

## Bước 4. Dùng trang Admin
1. Mở `https://homego.online/admin/`.
2. Nhập repo `tên-github/homego`, nhánh `main`, dán token → **Kết nối**.
3. Tab **Sản phẩm**: nhập tên, giá, **link affiliate Shopee/TikTok**, chọn ảnh → **Lưu & đăng lên web**.
   Tab **Bài viết**: nhập tiêu đề, nội dung, ưu/nhược điểm, link affiliate → Lưu & đăng.
4. Khoảng 1 phút sau website tự cập nhật. Dùng ↑ ↓ để đổi thứ tự, Sửa/Xóa để chỉnh.

## Lưu ý bảo mật
- Token chỉ lưu trong trình duyệt của bạn. Không gửi token cho ai; dùng máy cá nhân.
- Chỉ cấp quyền cho đúng 1 repo như Bước 3. Nếu lộ token, vào GitHub xóa (Revoke) ngay.
- Muốn thêm lớp khóa cho trang /admin/: Cloudflare → Zero Trust → Access → bảo vệ đường dẫn `/admin/*`.
- Liên hệ (Zalo, hotline...) vẫn sửa trực tiếp file `data/contacts.js` trên GitHub.
