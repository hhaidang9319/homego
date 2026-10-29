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

window.HOMEGO_PRODUCTS = [
  {
    "category": "thiet-bi-thong-minh",
    "categoryLabel": "Thiết bị thông minh",
    "name": "Máy Rửa Thực Phẩm Sóng Siêu Âm Masuto Smart",
    "image": "https://images.unsplash.com/photo-1585659722983-3867c5e20ef9?auto=format&fit=crop&q=80&w=400",
    "imageAlt": "Máy rửa thực phẩm",
    "price": "790.000đ",
    "oldPrice": "1.200.000đ",
    "badge": "Bán chạy",
    "flashSale": "-35% OFF",
    "shopeeUrl": "https://shopee.vn",
    "tiktokUrl": "https://tiktok.com"
  },
  {
    "category": "nha-bep",
    "categoryLabel": "Đồ dùng nhà bếp",
    "name": "Nồi Chiên Không Dầu Điện Tử 6L Đa Năng",
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400",
    "imageAlt": "Nồi chiên không dầu",
    "price": "1.150.000đ",
    "oldPrice": "1.950.000đ",
    "badge": "",
    "flashSale": "-40% OFF",
    "shopeeUrl": "https://shopee.vn",
    "tiktokUrl": "https://tiktok.com"
  },
  {
    "category": "don-dep",
    "categoryLabel": "Dọn dẹp nhà cửa",
    "name": "Máy Hút Bụi Cầm Tay Không Dây Lực Hút Cực Mạnh",
    "image": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=400",
    "imageAlt": "Máy hút bụi",
    "price": "590.000đ",
    "oldPrice": "850.000đ",
    "badge": "",
    "flashSale": "-30% OFF",
    "shopeeUrl": "https://shopee.vn",
    "tiktokUrl": "https://tiktok.com"
  },
  {
    "category": "phong-tam",
    "categoryLabel": "Phòng tắm",
    "name": "Kệ Đựng Đồ Nhà Tắm Thông Minh Không Cần Khoan Tường",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400",
    "imageAlt": "Kệ phòng tắm",
    "price": "189.000đ",
    "oldPrice": "250.000đ",
    "badge": "",
    "flashSale": "-25% OFF",
    "shopeeUrl": "https://shopee.vn",
    "tiktokUrl": "https://tiktok.com"
  },
  {
    "category": "noi-that",
    "categoryLabel": "Bàn ghế & Nội thất",
    "name": "Bàn Trà Sofa Thông Minh Gấp Gọn Tiện Lợi",
    "image": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=400",
    "imageAlt": "Bàn trà",
    "price": "450.000đ",
    "oldPrice": "650.000đ",
    "badge": "",
    "flashSale": "",
    "shopeeUrl": "https://shopee.vn",
    "tiktokUrl": "https://tiktok.com"
  },
  {
    "category": "phong-ngu",
    "categoryLabel": "Phòng ngủ",
    "name": "Đèn Ngủ Cảm Ứng Thông Minh Đổi Màu Kiêm Sạc Không Dây",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=400",
    "imageAlt": "Đèn ngủ",
    "price": "299.000đ",
    "oldPrice": "420.000đ",
    "badge": "",
    "flashSale": "",
    "shopeeUrl": "https://shopee.vn",
    "tiktokUrl": "https://tiktok.com"
  },
  {
    "category": "dien-gia-dung",
    "categoryLabel": "Thiết bị điện",
    "name": "Quạt Kẹp Đa Năng Xoay 360 Độ Pin Trâu 5000mAh",
    "image": "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=400",
    "imageAlt": "Quạt",
    "price": "210.000đ",
    "oldPrice": "350.000đ",
    "badge": "",
    "flashSale": "",
    "shopeeUrl": "https://shopee.vn",
    "tiktokUrl": "https://tiktok.com"
  },
  {
    "category": "den-chieu-sang",
    "categoryLabel": "Đèn chiếu sáng",
    "name": "Đèn LED Thanh Dán Tủ Cảm Ứng Chuyển Động Pin Sạc",
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=400",
    "imageAlt": "Đèn LED",
    "price": "135.000đ",
    "oldPrice": "199.000đ",
    "badge": "",
    "flashSale": "",
    "shopeeUrl": "https://shopee.vn",
    "tiktokUrl": "https://tiktok.com"
  }
];
