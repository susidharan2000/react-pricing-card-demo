import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";
const Cards = (props) => {
  return (
    < >
      <div className="row row-cols-1 row-cols-lg-3  g-4 mt-5">
        {props.data.map((element, index) => {
          return (
              <div key={index}>
                <div className="col">
                  <div className="card">
                    <div className="card-body ">
                      <h4 className="card-title text-center text-d">{element.title}</h4>
                      <h4 className="card-pricing  text-center">{element.price}</h4>
                      <hr></hr>
                      <p className="card-content"><FaCheck /> {element.user}</p>
                      <p className="card-content"><FaCheck /> {element.storage}</p>
                      <p className="card-content"><FaCheck /> {element.publicProjects}</p>
                      <p className="card-content"><FaCheck /> {element.access}</p>
                      {element.IsprivateProject?<p className="card-content"><FaCheck /> {element.privateProject}</p>:<p className="card-content text-muted"><MdClose /> {element.privateProject}</p>}
                      {element.Issupport?<p className="card-content"><FaCheck /> {element.support}</p>:<p className="card-content text-muted"><MdClose /> {element.support}</p>}
                      {element.Isdomain?<p className="card-content"><FaCheck /> {element.domain}</p>:<p className="card-content text-muted"><MdClose /> {element.domain}</p>}
                      {element.Isstatus? <p className="card-content"><FaCheck /> {element.status}</p>: <p className="card-content text-muted"><MdClose /> {element.status}</p>}
                    </div>
                    <div className="text-center mb-3">
                      <button >BUTTON</button>
                    </div>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
