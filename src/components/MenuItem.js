import { Button, Card, Stack } from "react-bootstrap"
import { useMenus } from "../contexts/MenuContexts"
import { useState } from "react"
import MenuItemModal from "./MenuItemModal"
export default function MenuItem({name, price, description}) {
  const [showMenuItemModal, setShowMenuItemModal] = useState(false)
  const { addItem } = useMenus()
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
    <MenuItemModal name={name} price={price} description={description} show={showMenuItemModal} handleClose={() => setShowMenuItemModal(false)}/>
    </>
  )
}
