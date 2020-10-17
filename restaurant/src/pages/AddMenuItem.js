import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';

function AddMenuItem() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">Jerry's Berrys</Navbar.Brand>
              <Button variant="outline-info">Select Restaurant</Button>
              <Button variant="outline-info">View Active Orders</Button>
              <Button href="#" variant="outline-info">Edit Menu</Button>
          </Navbar>
          <Container>
              <Form>
                  <Form.Group controlId="menuForm.ControlInput1">
                      <Form.Label>Menu Item</Form.Label>
                      <Form.Control placeholder='10" Pizza'/>
                  </Form.Group>
                  <Form.Group  controlId="menuForm.ControlInput2">
                      <Form.Label>Price</Form.Label>
                      <InputGroup>
                          <InputGroup.Prepend>
                              <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                              type="number"
                              placeholder="5.00"
                              aria-describedby="inputGroupPrepend"
                              name="price"
                          />
                      </InputGroup>
                  </Form.Group>
                  <Form.Group controlId="menuForm.ControlSelect1">
                      <Form.Label>Category</Form.Label>
                      <Form.Control as="select">
                          <option>Breakfast</option>
                          <option>Lunch</option>
                          <option>Dinner</option>
                          <option>Drinks</option>
                      </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="menuForm.ControlTextarea1">
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                  <Button size = {'lg'} variant="primary" type="submit" block>
                      Submit
                  </Button>
              </Form>
          </Container>
      </div>
    );
  }

  export default AddMenuItem;
