import { Button, Card, Stack } from "react-bootstrap"
import { useMenus } from "../contexts/MenuContexts"
import { useEffect } from "react";

export default function MenuItem({
name,
price
}) {
  const { addItem } = useMenus()
  return (
    <Card>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            ${price}
          </div>
        </Card.Title>
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button
              variant="primary"
              className="ms-auto"
              onClick={() => addItem(name, price)}
              >
              Add 
            </Button>
          </Stack>
      </Card.Body>
    </Card>
  )
}