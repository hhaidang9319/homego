/* =====================================================================
   HOMEGO - BÀI REVIEW & MẸO HAY  (blog.js)
   ---------------------------------------------------------------------
   CÁCH VIẾT BÀI MỚI : copy 1 khối { ... } bên dưới, dán lên ĐẦU danh sách
                        (bài mới nhất hiển thị trên cùng), rồi sửa nội dung.
   CÁCH SỬA / XÓA     : sửa hoặc xóa trực tiếp khối của bài đó.
   Mỗi bài cần slug riêng (chữ thường, không dấu, nối bằng gạch ngang) để tạo link post.html?p=slug.
   Mục ưu/nhược điểm: mỗi dòng là 1 chuỗi. Muốn in đậm dòng nào thì viết
   dạng { text: "Nội dung", bold: true }.
   ===================================================================== */
window.HOMEGO_BLOG = [
  {
    slug: "review-may-rua-thuc-pham-masuto",
    date: "2026-10-29",
    tag: "Đánh giá chi tiết",
    title: "[Review Thực Tế] Máy Rửa Thực Phẩm Sóng Siêu Âm Masuto Có Thật Sự Thần Thánh?",
    image: "https://images.unsplash.com/photo-1585659722983-3867c5e20ef9?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Review Masuto",
    content: "",   // nội dung dài: các đoạn cách nhau 1 dòng trống, dòng bắt đầu bằng ## là tiêu đề nhỏ
    intro: "Trong thời điểm an toàn thực phẩm được đặt lên hàng đầu, máy rửa rau củ quả sóng siêu âm đang là món đồ gia dụng quốc dân được chị em săn lùng. Cùng HomeGo đánh giá xem thiết bị này khử trùng thuốc trừ sâu tốt đến mức nào và có đáng tiền đầu tư không nhé!",
    pros: [
      "Công nghệ sóng siêu âm đánh bay tạp chất",
      { text: "Không dùng hóa chất độc hại", bold: true },
      "Thiết kế nhỏ gọn, dễ dàng vệ sinh"
    ],
    cons: [
      "Dung tích chậu rửa vừa phải",
      "Cần cắm điện trực tiếp khi sử dụng"
    ],
    shopeeText: "Mua chính hãng trên Shopee",
    shopeeUrl: "https://shopee.vn",
    tiktokText: "Săn deal trên TikTok Shop",
    tiktokUrl: "https://tiktok.com"
  }
];
