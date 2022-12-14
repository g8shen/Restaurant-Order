import { Modal, Button } from "react-bootstrap"
import { useMenus } from "../contexts/MenuContexts"
import { FaTrash } from 'react-icons/fa';
import { useEffect, useState } from "react";

export default function OrderModal({ show, handleClose }) {
    const { items } = useMenus()
    const { deleteItem } = useMenus()
    const [totalPrice, setTotalPrice] = useState(0)
    const { send } = useMenus()
    useEffect(() => {
        var newPrice = 0
        for(let i=0; i<items.length; i++){
            newPrice = newPrice + items[i].price
        }
        setTotalPrice(newPrice)
      });
    return (
        <Modal contentClassName="modal-height" show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Your Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                {items.map(function(orderItem, idx){
                    return (<div className="mt-4" key={idx}><b>{orderItem.name}</b> ${orderItem.price}<Button style={{position: "absolute", right: 15}} onClick={ () => deleteItem(orderItem.id)}>  <FaTrash /> </Button></div>)
                })}
                </div>
            </Modal.Body>
            <Modal.Footer>
                Order cost: ${totalPrice} <Button onClick={() => send()}> Send </Button>
            </Modal.Footer>
        </Modal>
    )
}