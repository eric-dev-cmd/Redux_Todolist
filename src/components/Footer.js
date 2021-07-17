function Footer() {
  return (
    <div>
      <footer className="footer bg-danger">
        <div
          className="grid wide footer__content~"
          style={{ padding: "10px 0 ", marginLeft: "110px" }}
        >
          <div className="row">
            <div className="col col-3">
              <h3 className="footer__heading text-white">
                <b>Lịch sử mua hàng</b>
              </h3>
              <ul
                className="footer_list"
                style={{ listStyleType: "none", paddingLeft: "0px" }}
              >
                <li className="footer_item">
                  <a className="text-decoration-none text-white footer_item-link">
                    Cộng tác bán hàng cùng TGDĐ
                  </a>
                </li>
                <li className="footer_item">
                  <a className="text-decoration-none text-white footer_item-link">
                    Tìm hiểu về mua trả góp
                  </a>
                </li>
                <li className="footer_item">
                  <a className="text-decoration-none text-white footer_item-link">
                    Chính sách bảo hành
                  </a>
                </li>
                <li className="footer_item">
                  <a className="text-decoration-none text-white footer_item-link">
                    Giới thiệu mua hàng
                  </a>
                </li>
              </ul>
            </div>
            <div className="col col-3">
              <h3 className="footer__heading text-white">
                <b>Giới thiệu</b>
              </h3>
              <ul
                className="footer_list"
                style={{ listStyleType: "none", paddingLeft: "0px" }}
              >
                <li className="footer_item">
                  <a className="text-decoration-none text-white footer_item-link">
                    Giới thiệu công ty (MWG.vn)
                  </a>
                </li>
                <li className="footer_item">
                  <a className="text-decoration-none text-white footer_item-link">
                    Tuyển dụng
                  </a>
                </li>
                <li className="footer_item">
                  <a className="text-decoration-none text-white footer_item-link">
                    Gửi góp ý, khiếu nại
                  </a>
                </li>
                <li className="footer_item">
                  <a className="text-decoration-none text-white footer_item-link">
                    Tìm siêu thị (2.599 shop)
                  </a>
                </li>
              </ul>
            </div>
            <div className="col col-3">
              <h3 className="footer__heading text-white">
                <b>Tổng đài hỗ trợ</b>
              </h3>
              <ul
                className="footer_list"
                style={{ listStyleType: "none", paddingLeft: "0px" }}
              >
                <li className="footer_item">
                  <a className="text-decoration-none text-white footer_item-link">
                    Gọi mua: 1800.1060
                  </a>
                </li>
                <li className="footer_item">
                  <a className="text-decoration-none text-white footer_item-link">
                    Kỹ thuật: 1800.1763
                  </a>
                </li>
                <li className="footer_item">
                  <a className="text-decoration-none text-white footer_item-link">
                    Khiếu nại: 1800.1062
                  </a>
                </li>
                <li className="footer_item">
                  <a className="text-decoration-none text-white footer_item-link">
                    Bảo hành: 1800.1064
                  </a>
                </li>
              </ul>
            </div>
            <div className="col col-3">
              <h3 className="footer__heading text-white">
                <b>Social Media</b>
              </h3>
              <ul
                className="footer_list"
                style={{ listStyleType: "none", paddingLeft: "0px" }}
              >
                <li className="footer_item">
                  <a className="text-decoration-none text-white footer_item-link">
                    <i className="footer_item-icon fab fa-facebook" />
                    Facebook
                  </a>
                </li>
                <li className="footer_item">
                  <a className="text-decoration-none text-white footer_item-link">
                    <i className="footer_item-icon fab fa-instagram-square" />
                    Instagram
                  </a>
                </li>
                <li className="footer_item">
                  <a className="text-decoration-none text-white footer_item-link">
                    <i className="footer_item-icon fab fa-linkedin" />
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
