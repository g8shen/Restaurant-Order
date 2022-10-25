import { Modal, Button } from "react-bootstrap"
import { useMenus } from "../contexts/MenuContexts"

export default function MenuItemModal({ name, price, extras, description, show, handleClose }) {
    const { addItem } = useMenus()
    function modalAddItem(name,price){
        addItem(name, price)
        handleClose()

    }
    return (
        <Modal contentClassName="modalHeight" show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{name} <span className="notBold">${price}</span></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {description}
                
                {extras.map(extra => {
            return (
              <li><input type="checkbox"></input> {extra.name} ${extra.price}</li>
            )
          })}
            </Modal.Body>
            <Modal.Footer>
            <Button
              onClick={() => modalAddItem(name, price)}
              >
              Add 
            </Button>
            </Modal.Footer>
        </Modal>
    )
}