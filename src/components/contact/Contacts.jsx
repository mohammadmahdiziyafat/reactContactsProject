import React from "react";
import Contact from "./Contact";
import { PINK} from "../../helpers/colors";
const Contacts = () => {
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
      <section className="container">
        <div className="row">
          {/* Contact */}
          <Contact />
        </div>
      </section>
      
    </React.Fragment>
  );
};
export default Contacts;
