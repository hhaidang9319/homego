# HomeGo – Hướng dẫn quản trị nội dung

## Cấu trúc thư mục
```
index.html          Giao diện (thường không cần sửa)
404.html            Trang báo lỗi khi sai đường dẫn
data/products.js    Sản phẩm + Flash Sale
data/contacts.js    Thông tin liên hệ, mạng xã hội, nút Zalo/Messenger
data/blog.js        Bài review & mẹo hay
images/             Ảnh sản phẩm (images/blog/ cho ảnh bài viết)
```

## Thêm sản phẩm
1. Upload ảnh vào thư mục `images/` (Add file → Upload files).
2. Mở `data/products.js` → bấm biểu tượng bút chì (Edit) → copy 1 khối `{ ... }` dán lên đầu danh sách → sửa nội dung → **Commit changes**.
3. Chờ khoảng 1 phút, website tự cập nhật.

## Thay / xóa sản phẩm
Sửa hoặc xóa trực tiếp khối `{ ... }` của sản phẩm trong `data/products.js` rồi Commit.
Lưu ý dấu phẩy `,` giữa các khối `{ }`: khối cuối cùng không có dấu phẩy.

## Đăng bài review
Mở `data/blog.js` → copy 1 khối `{ ... }` dán lên đầu danh sách (bài mới nhất hiện trên cùng) → sửa → Commit.
Ảnh bài viết: upload vào `images/blog/` rồi ghi `image: "images/blog/ten-anh.jpg"`.

## Đổi thông tin liên hệ
Sửa `data/contacts.js` rồi Commit.

## Mã danh mục (`category`)
thiet-bi-thong-minh, nha-bep, noi-that, phong-tam, phong-ngu,
dien-gia-dung, don-dep, trang-tri, den-chieu-sang, san-vuon

## Khi web không hiện sản phẩm
Nhấn F12 → tab Console. Nếu có lỗi đỏ kèm tên file và số dòng, thường là thiếu/thừa dấu phẩy hoặc dấu ngoặc.
