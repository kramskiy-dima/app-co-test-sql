import { Link } from "react-router-dom";
import routes from "../../routes";

const Header = () => {
  return (
    <header className="header-site">
      <div className="container site-header">
        <Link exact className="header-logo" to={routes.main}>
          AppCo
        </Link>
      </div>
    </header>
  );
};

export default Header;
