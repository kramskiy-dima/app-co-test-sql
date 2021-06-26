import { Link } from "react-router-dom";
import routes from "../../routes";
import { ReactComponent as IconIphoneX } from "../../images/iPhoneX.svg";

const HeaderMain = () => {
  return (
    <header className="header-site-main">
      <div className="container site-header">
        <nav className="nav">
          <Link className="header-logo" to={routes.main}>
            AppCo
          </Link>
        </nav>
      </div>
      <div className="section-hero container">
        <div className="content-hero">
          <h1>Brainstorming for desired perfect Usability</h1>
          <p>
            Our design projects are fresh and simple and will benefit your
            business greatly. Learn more about our work!
          </p>
          <Link className="btn-hero" to={routes.users}>
            Views Stats
          </Link>
        </div>

        <div className="img-hero">
          <IconIphoneX />
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
