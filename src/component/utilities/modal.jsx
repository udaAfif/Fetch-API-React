import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import { createPortal } from "react-dom"
import { Button, Modal } from "react-bootstrap"

const Modals = ({ children, activator }) => {
  const [show, setShow] = useState(false)

  const content = show && (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Detail POST API</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setShow(false)
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )

  return (
    <>
      {activator({ setShow })}
      {createPortal(
        <CSSTransition
          in={show}
          timeout={200}
          classNames="modal-transition"
          unmountOnExit
        >
          {() => <div>{content}</div>}
        </CSSTransition>,
        document.body
      )}
    </>
  )
}

export default Modals
