import React from "react";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
function View() {
  const { state } = useLocation();
  const { userName, userNumber, userEmail, userAddress } = state;

  return (
    <div>
      <form>
        Name: {userName}
        <br></br>
        Number:{userNumber}
        <br></br>
        Email:{userEmail}
        <br></br>
        Address:{userAddress}
        <br></br>
      </form>
      <br></br>

      <Button href="/edit" variant="primary">
        Go to Edit
      </Button>
    </div>
  );
}

export default View;
