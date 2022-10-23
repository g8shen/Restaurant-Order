import { Modal, Button } from "react-bootstrap"
import { useMenus } from "../contexts/MenuContexts"

export default function MenuItemModal({ name, price, show, handleClose }) {
    const { addItem } = useMenus()
    return (
        <Modal contentClassName="modal-height" show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
            <Button
              variant="primary"
              className="ms-auto"
              onClick={() => addItem(name, price)}
              >
              Add 
            </Button>
            </Modal.Footer>
        </Modal>
    )
}