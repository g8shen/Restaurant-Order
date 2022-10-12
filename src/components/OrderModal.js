import { Modal } from "react-bootstrap"
import { useMenus } from "../contexts/MenuContexts"

export default function OrderModal({ show, handleClose }) {
    const { items } = useMenus()

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Your Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                {items.map(function(orderItem, idx){
                    return (<li key={idx}>{orderItem.name}, {orderItem.price}</li>)
                })}
                </div>
            </Modal.Body>
        </Modal>
    )
}