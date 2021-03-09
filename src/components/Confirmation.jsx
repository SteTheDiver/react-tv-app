import React, { useState } from "react";
import Modal from "react-modal";
import Button from "@material-ui/core/Button";

Modal.setAppElement("#root");

export default function Confirmation() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={toggleModal}
      >
        <span>Check out</span>
      </Button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="mymodal__content">
          <div>
            Your order has been confirmed!
            <br></br> Enjoy our channels!
          </div>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            onClick={toggleModal}
          >
            <span>Close</span>
          </Button>
        </div>
      </Modal>
    </div>
  );
}
