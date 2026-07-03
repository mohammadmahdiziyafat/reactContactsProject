import React from "react";
import Contact from "./Contact";
import { CURRENTLINE, PINK } from "../../helpers/colors";
// spinner loading
import Spinner from "../Spinner";
const Contacts = ({ Contacts, loading }) => {
  return (
    <React.Fragment>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <button className="btn mx-2" style={{ backgroundColor: PINK }}>
                  ساخت مخاطب جدید
                  <i className="fa fa-plus-circle mx-2"></i>
                </button>
              </p>
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
            {Contacts.length > 0 ? (
              Contacts.map((c) => <Contact key={c.id} Contact={c} />)
            ) : (
              <div
                className="text-center py-5"
                style={{ backgroundColor: CURRENTLINE, borderRadius: "20px" }}
              >
                <p className="h3">مخاطب یافت نشد</p>
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
