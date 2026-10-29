/* =====================================================================
   HOMEGO - THÔNG TIN LIÊN HỆ  (contacts.js)
   Sửa nội dung bên dưới, lưu file và tải lại trang là xong.
   Dùng cho: cột "Liên Hệ Hợp Tác" ở chân trang, các nút mạng xã hội
   và 2 nút chat nổi (Zalo, Messenger) góc phải màn hình.
   ===================================================================== */
window.HOMEGO_CONTACTS = {
  address: "60A Trường Sơn, phường Tân Sơn Hòa, thành phố Hồ Chí Minh, Việt Nam",
  phoneLabel: "Hotline/Zalo",
  phone: "0379.645.095",
  emailLabel: "Email",
  email: "admin@homego.online",

  // Nút chat nổi góc phải
  zaloUrl: "https://zalo.me/0379645095",
  messengerUrl: "https://m.me/",

  // Biểu tượng mạng xã hội ở chân trang (đổi url "#" thành link thật).
  // Muốn thêm: copy 1 dòng, đổi icon (tên icon FontAwesome) và url.
  socials: [
    { title: "Facebook", icon: "fa-brands fa-facebook-f", url: "https://facebook.com/homego.online" },
    { title: "TikTok",   icon: "fa-brands fa-tiktok",     url: "#" },
    { title: "Shopee",   icon: "fa-solid fa-bag-shopping", url: "#" },
    { title: "Zalo",     icon: "fa-solid fa-z",           url: "#" }
  ]
};