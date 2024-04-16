import { Link } from "react-router-dom";
import "./TopMenu.css";

export default function TopMenu() {
  return (
    <div className="TopMenu">
      <div className="MenuItem">
        <Link className="Link" to="/">
          Home
        </Link>
      </div>
      <div className="MenuItem">
        <Link className="Link" to="/esther">
          Esther
        </Link>
      </div>
      <div className="MenuItem">
        <Link className="Link" to="/exodus">
          Exodus
        </Link>
      </div>
      <div className="MenuItem">
        <Link className="Link" to="/genesis">
          Genesis
        </Link>
      </div>
      <div className="MenuItem">
        <Link className="Link" to="/psalms">
          Psalms
        </Link>
      </div>
    </div>
  );
}
