import { NavLink } from "react-router-dom";

import Spinner from "../Spinner";
import { COMMENT, GREEN, PURPLE } from "../../helpers/colors";


const AddContact = ({
  loading,
  form,
  setContactInfo,
  groups,
  createContactForm,
}) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="p-3">
            <img
              src={require("../../assets/man-taking-note.png")}
              alt="man add"
              style={{
                position: "absolute",

                zIndex: "-1",
                top: "130px",
                left: "100px",
                opacity: "50%",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  <p
                    className="h4 fw-bold text-center"
                    style={{ color: GREEN }}
                  >
                    ساخت مخاطب جدید
                  </p>
                </div>
              </div>
              <hr style={{ backgroundColor: GREEN }} />
              <div className="row mt-5">
                <div className="col-md-4">
                  <form onSubmit={createContactForm}>
                    <div className="mb-2">
                      <input
                        name="fullName"
                        value={form.fullName}
                        onChange={setContactInfo}
                        type="text"
                        className="form-control"
                        placeholder="نام و نام خانوادگی"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="photo"
                        value={form.photo}
                        onChange={setContactInfo}
                        className="form-control"
                        placeholder="آدرس تصویر"
                        type="text"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="mobile"
                        value={form.mobile}
                        onChange={setContactInfo}
                        type="number"
                        className="form-control"
                        placeholder="شماره موبایل"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="email"
                        value={form.email}
                        onChange={setContactInfo}
                        placeholder="آدرس ایمیل"
                        type="email"
                        className="form-control"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="job"
                        value={form.job}
                        onChange={setContactInfo}
                        type="text"
                        className="form-control"
                        placeholder="شغل"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <select
                        name="group"
                        value={form.group}
                        onChange={setContactInfo}
                        required={true}
                        className="form-control"
                      >
                        <option value="">انتخاب گروه</option>
                        {groups.length > 0 &&
                          groups.map((group) => (
                            <option key={group.id} value={group.id}>
                              {group.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="mx-2">
                      <input
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: PURPLE }}
                        value="ساخت مخاطب"
                      />
                      <NavLink
                        to={"/contacts"}
                        className="btn mx-2"
                        style={{ backgroundColor: COMMENT }}
                      >
                        انصراف
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default AddContact;
