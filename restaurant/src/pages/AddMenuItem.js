import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

function AddMenuItem() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">Jerry's Berrys</Navbar.Brand>
              <Button variant="outline-info">Select Restaurant</Button>
              <Button variant="outline-info">View Active Orders</Button>
              <Button href="#" variant="outline-info">Edit Menu</Button>
          </Navbar>
          <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Add Item</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl inputRef={ref => { this.myInput = ref; }}
                    aria-label="Add Item"
                    aria-describedby="inputGroup-sizing-default"
                />
                <Button as="input" type="submit" value="Submit" />{' '}
          </InputGroup>
      </div>
    );
  }
  
  export default AddMenuItem;
