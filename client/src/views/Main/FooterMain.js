const FooterMain = () => {
  return (
    <footer className="site-footer-main">
      <div className="container">
        <form className="form">
          <input
            className="form-input"
            type="text"
            placeholder="Enter your email"
          ></input>
          <button className="btn-sbs">Subscribe</button>
        </form>

        <div className="footer-description">
          <a href="/" className="logo-footer">
            AppCo
          </a>
          <p>All rights reserved by ThemeTags</p>
          <p>Copyrights © 2019. </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
