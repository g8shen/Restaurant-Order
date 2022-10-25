import { Card } from "react-bootstrap"
import { useState } from "react"
import MenuItemModal from "./MenuItemModal"
export default function MenuItem({name, price, description, extras}) {
  const [showMenuItemModal, setShowMenuItemModal] = useState(false)
  return (
    <>
    <Card onClick={() => setShowMenuItemModal(true)}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            ${price}
          </div>
        </Card.Title>
      </Card.Body>
    </Card>
    <MenuItemModal name={name} price={price} extras={extras} description={description} show={showMenuItemModal} handleClose={() => setShowMenuItemModal(false)}/>
    </>
  )
}
