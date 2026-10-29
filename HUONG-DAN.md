# HomeGo – Quản lý bằng GitHub + trang Admin

## Bước 1. Tạo GitHub và đưa code lên
1. Đăng ký tại github.com → **New repository** → tên `homego` → **Create repository**.
2. Giải nén `homego.zip`. Bấm **uploading an existing file**, mở thư mục đã giải nén, Ctrl+A chọn TOÀN BỘ bên trong
   (index.html, 404.html, admin, data, images...) rồi kéo thả vào trình duyệt → **Commit changes**.

## Bước 2. Nối Cloudflare Pages với GitHub
1. Cloudflare → Workers & Pages → Create → tab **Pages** → **Connect to Git** → chọn repo `homego`.
2. Build command: để trống. Output directory: để trống (hoặc `/`). → **Save and Deploy**.
3. Gắn tên miền: xóa `homego.online` khỏi dự án cũ, thêm vào dự án mới (Custom domains).

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
