/* =====================================================================
   HOMEGO - DỮ LIỆU SẢN PHẨM  (data/products.js)
   ---------------------------------------------------------------------
   CÁCH THÊM SẢN PHẨM : copy 1 khối { ... } bên dưới, dán vào cuối danh sách
                        (nhớ có dấu phẩy giữa các khối) rồi sửa nội dung.
   CÁCH THAY THẾ      : sửa trực tiếp các dòng của sản phẩm đó.
   CÁCH XÓA           : xóa nguyên khối { ... } của sản phẩm.
   CÁCH ĐƯA VÀO FLASH SALE : điền flashSale: "-35% OFF" (để "" nếu không muốn).
   Thứ tự trong danh sách = thứ tự hiển thị trên web.

   category phải là 1 trong các mã sau (khớp với nút Danh mục trên web):
     thiet-bi-thong-minh | nha-bep | noi-that | phong-tam | phong-ngu
     dien-gia-dung | don-dep | trang-tri | den-chieu-sang | san-vuon
   ===================================================================== */
// Ảnh tạm khi chưa có ảnh thật. Dùng HOMEGO_NO_IMAGE hoặc thay bằng link ảnh của bạn.
var HOMEGO_NO_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23F3F4F6'/%3E%3Ctext x='50%25' y='50%25' fill='%239CA3AF' font-family='sans-serif' font-size='20' text-anchor='middle'%3ECh%C6%B0a c%C3%B3 %E1%BA%A3nh%3C/text%3E%3C/svg%3E";

window.HOMEGO_PRODUCTS = [];
