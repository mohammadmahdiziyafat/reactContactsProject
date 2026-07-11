import React from "react";
import { NavLink } from "react-router-dom";
import Contact from "./Contact";
import { CURRENTLINE, ORANGE } from "../../helpers/colors";
// spinner loading
import Spinner from "../Spinner";
const Contacts = ({ getContacts, loading }) => {
  return (
    <React.Fragment>
      <section className="container ">
        <div className="grid">
          <div className="row btn">
            <div className="col btn-bg">
              
                <NavLink
                  to={"/contacts/Add"}
                  className=" btn-inner"
                  
                >
                  <p className="h3">
                  ساخت مخاطب جدید
                  <i className="fa fa-plus-circle mx-2"></i>
                   </p>
                </NavLink>
             
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <section className="container not-found">
          <div className="row">
            {/* Contact */}
            {getContacts.length > 0 ? (
              getContacts.map((c) => <Contact key={c.id} contact={c} />)
            ) : (
              <div
                className="text-center py-5"
                style={{ backgroundColor: CURRENTLINE, borderRadius: "20px" }}
              >
                <p className="h3 " style={{ color: ORANGE, fontSize: "2rem" }}>
                  مخاطب یافت نشد...
                </p>
                <img
                  src={require("../../assets/no-found.gif")}
                  alt="not found"
                  className="w-25"
                ></img>
              </div>
            )}
          </div>
        </section>
      )}
    </React.Fragment>
  );
};
export default Contacts;
