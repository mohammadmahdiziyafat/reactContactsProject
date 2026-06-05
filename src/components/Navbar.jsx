import SearchContact from "./contact/SearchContacts";
// root
import { PURPLE, BACKGROUND } from "../helpers/colors";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-sm shdow-lg "
      style={{ backgroundColor: BACKGROUND }}
    >
      <div className="container ">
        <div className="row w-100">
          <div className="col">
            <div className="navbar-brand">
              <i className="fas fa-id-badge" style={{ color: PURPLE }}></i> وب
              اپلیکیشن مدیریت <span style={{ color: PURPLE }}>مخاطبین</span>
            </div>
          </div>
          <div className="col">
            <SearchContact />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
