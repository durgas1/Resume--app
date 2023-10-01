import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./Edit.css";

function Edit() {
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
    navigate("/view", {
      state: {
        userName: userName,
        userNumber: userNumber,
        userEmail: userEmail,
        userAddress: userAddress,
      },
    });
  };

  return (
    <div>
      <form className="lable">
        <label>Name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>

        <label>Number</label>
        <input
          type="text"
          value={userNumber}
          onChange={(e) => {
            setUserNumber(e.target.value);
          }}
        ></input>
        <label>Email</label>
        <br></br>
        <input
          type="text"
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        ></input>
        <label>Address</label>
        <input
          type="text"
          value={userAddress}
          onChange={(e) => {
            setUserAddress(e.target.value);
          }}
        ></input>

        <Button
          onClick={handleSubmit}
          type="submit"
          variant="primary"
          className="box-button"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Edit;
