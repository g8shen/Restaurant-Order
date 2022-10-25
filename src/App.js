import { Container } from 'react-bootstrap';
import { Button, Stack } from "react-bootstrap"
import './App.css';
import MenuItem from "./components/MenuItem"
import OrderModal from "./components/OrderModal"
import { useState } from "react"
import { useMenus } from "./contexts/MenuContexts"

function App() {
  const [showOrderModal, setShowOrderModal] = useState(false)

  const { menuItems } = useMenus()
  return (
    <>
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Restaurant</h1>
        <Button variant="primary" onClick={() => setShowOrderModal(true)}> Cart </Button>
      </Stack>
      <div
        style={{display:"grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "flex-start"}}>
          {menuItems.map(menuItem => {
            return (
              <MenuItem
                key = {menuItem.ID}
                name = {menuItem.name}
                price = {menuItem.price}
                extras = {menuItem.extras}
                description = {menuItem.description}
              />
            )
          })}
        </div>
    </Container>
    <OrderModal show={showOrderModal} handleClose={() => setShowOrderModal(false)}/>
    </>
  );
}

export default App;
