import { PURPLE } from "../../helpers/colors";
const SearchContact = () => {
  return (
    <div className="input-group w-75 mx-2 " dir="ltr">
      <span
        className="input-group-text "
        id="basic-addon1"
        style={{ backgroundColor: PURPLE }}
      >
        <i className="fas fa-search"></i>
      </span>
      <input
        className="form-control"
        type="text"
        dir="rtl"
        aria-label="search"
        aria-describedby="basic-addon1"
        style={{ borderColor: PURPLE }}
        placeholder="جستجوی مخاطبین"
      ></input>
    </div>
  );
};
export default SearchContact;
