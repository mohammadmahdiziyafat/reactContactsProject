import { CURRENTLINE, CYAN, ORANGE, PURPLE, RED } from '../../helpers/colors'

const Contact = () => {
  return (
    <div className="col md-6">
      {" "}
      <div style={{ backgroundColor: CURRENTLINE }} className="my-2">
        <div className="card-body">
          <div className="row align-items-center d-flex justify-content-around">
            <div className="col-md-4 col-sm-4">
              <img
                src="https://placehold.co/200x200"
                alt="fd"
                style={{ border: `1px solid ${PURPLE}` }}
                className="img-fluid rounded"
              ></img>
            </div>
            <div className="col-md-7 col-sm-7">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark">
                  نام و نام خانوادگی :{" "}
                  <span className="fw-bold">محمد مهدی ضیافت</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  شماره موبایل:{" "}
                  <span className="fw-bold">09909173537</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  آدرس ایمیل :{" "}
                  <span className="fw-bold">
                    mohammadmahdiziafat@gmail.com
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1  d-flex flex-column aligm-item-center">
              <button
                className=" btn mu-1 "
                style={{ backgroundColor: ORANGE }}
              >
                <i className="fa fa-eye"></i>
              </button>
              <button
                className=" btn mu-1 "
                style={{ backgroundColor: CYAN }}
              >
                <i className="fa fa-pen"></i>
              </button>
              <button
                className=" btn mu-1 "
                style={{ backgroundColor: RED }}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact