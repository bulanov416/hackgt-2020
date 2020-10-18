import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

function AddMenuItem(props) {
    const { database } = props

    const [ itemName, setItemName ] = useState("");
    const [ price, setPrice] = useState(0);
    const [ category, setCategory ] = useState("Breakfast");
    const [ description, setDescription ] = useState("");

    const menuItemChangeHandler = (event) => {
        setItemName(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    }

    const categoryChangeHandler = (event) => {
        setCategory(event.target.value);
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }

    return (
        <div className="App">
            <Container>
                <Form>
                    <Form.Group controlId="menuForm.ControlInput1">
                        <Form.Label>Menu Item</Form.Label>
                        <Form.Control placeholder='10" Pizza' onChange={menuItemChangeHandler}/>
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
                                onChange={priceChangeHandler}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="menuForm.ControlSelect1">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" onChange={categoryChangeHandler}>
                            <option>Appetizer</option>
                            <option>Entree</option>
                            <option>Side</option>
                            <option>Dessert</option>
                            <option>Beverage</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="menuForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={descriptionChangeHandler}/>
                    </Form.Group>
                    <Button size = {'lg'} variant="primary" type="" block onClick={() => {
                        let tempName = itemName;
                        console.log("ITS HAPPENING");
                        let tempPrice = price;
                        let tempCategory = category;
                        let tempDescription = description;
                        database.collection('restaurants').doc('rFxSt5fTT3Kp4NphAomx').collection('menuItems').doc(uuidv4()).set({
                            Category: tempCategory,
                            Name: tempName,
                            Price: tempPrice,
                            Description: tempDescription
                        })
                        .then(function() {
                            console.log("IT WORKED");
                            document.location = "/";
                        })
                        .catch(function(err) {
                            console.error("error: ", err);
                        })
                    }}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
  }

  export default AddMenuItem;
