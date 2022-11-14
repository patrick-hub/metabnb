import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import metaicon from "../asset/metaicon.png"
import Modal from 'react-bootstrap/Modal';
import arrow from "../asset/Vector1.png"
import walletconnect from "../asset/walletconnect.png"

function ConnectModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type="submit" onClick={handleShow} className="connect_btn btn pt-2">Connect Wallet</button>


      <Modal show={show} onHide={handleClose} animation={false} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body className=''>Choose your preferred Wallet:</Modal.Body>

        <Modal.Body className='meta--body'>
            <div>
            <img src={metaicon} alt="" />
            Metamask
            </div>
            <div>
            <img src={arrow} alt="" />
            </div>
        </Modal.Body>

        <Modal.Body className='meta--body'>
            <div>
            <img src={walletconnect} alt="" />
            WalletConnect
            </div>
            <div>
            <img src={arrow} alt="" />
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ConnectModal

