import React from "react";
import { useState } from "react";
import "../App.css";

function About() {
  const [fullname, setFullname] = useState([
    {
      name: "",
      number: "",
      email: "",
      address: "",
    },
  ]);
  const [formerror, setFormerror] = useState({});
  const [errors, setErrors] = useState(true);
  // const [show, setShow] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullname.name, fullname.age);
    setFormerror(fullform(fullname));

    setErrors(true);
  };
  const fullform = (value) => {
    const errors = {};
    if (!value.name) {
      errors.name = "pls enter the name";
    }
    if (!value.number) {
      errors.number = "pls enter the number";
    }
    if (!value.email) {
      errors.email = "pls enter the email";
    }
    if (!value.address) {
      errors.address = "pls enter the address";
    }
    return errors;
  };

  return (
    <div>
      <form className="form-group">
        <h6>personal detail</h6>
        <label>Name</label>
        <input
          className="input"
          type="text"
          value={fullname.name}
          onChange={(e) => {
            setFullname({ ...fullname, name: e.target.value });
          }}
        ></input>

        <h6 className="error">{formerror.name}</h6>
        <br></br>
        <label>Number</label>
        <input
          className="input"
          type="number"
          value={fullname.number}
          onChange={(m) => {
            setFullname({ ...fullname, number: m.target.value });
          }}
        ></input>

        <h6 className="error">{formerror.number}</h6>

        <label>Email</label>
        <input
          className="input"
          type="text"
          value={fullname.email}
          onChange={(e) => {
            setFullname({ ...fullname, email: e.target.value });
          }}
        ></input>

        <h6 className="error">{formerror.email}</h6>
        <br></br>
        <label>Address</label>
        <input
          className="input"
          type="text"
          value={fullname.address}
          onChange={(e) => {
            setFullname({ ...fullname, address: e.target.value });
          }}
        ></input>
        <br></br>
        <h6 className="error">{formerror.address}</h6>

        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
}

export default About;
