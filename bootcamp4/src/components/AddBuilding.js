/*
Add a building to the listings
 */

import React from 'react'
import {Form, FormControl, ControlLabel} from "react-bootstrap";


class AddBuilding extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buildings: this.props.data
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        const {data} = this.props;
        event.preventDefault();

        if (this.name.value !== "" && this.code.value !== "") {
            var newId = this.props.data.length + 1; //get the id of the last element and increment it.
            console.log('new id: ', newId);
            var newBuilding = {
                id: newId,
                code: this.code.value.toUpperCase(),
                name: this.name.value,
                address: this.address.value,
                coordinates: {
                    latitude: this.latitude.value,
                    longitude: this.longitude.value
                }
            };

            this.props.addUpdate(data.concat(newBuilding));

            alert("Building has been added!");
            event.target.reset();
        } else {
            alert("Name and Code fields must be filled out");
        }

    }

    handleClearForm(event) {
        event.preventDefault();
        this.setState({})
    }

    render() {
        return (
            <div className="addBuildMain">
                <div className="header">
                    <b>Add Building </b>

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Enter building Name"
                                          ref={(value) => {
                                              this.name = value
                                          }}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCode">
                            <Form.Label>Code</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Enter building Code"
                                          ref={(value) => {
                                              this.code = value
                                          }}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter building Address"
                                          ref={(value) => {
                                              this.address = value
                                          }}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicAddress">
                            <Form.Label>Latitude</Form.Label>
                            <Form.Control type="text" placeholder="Enter building Latitude"
                                          ref={(value) => {
                                              this.latitude = value
                                          }}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicAddress">
                            <Form.Label>Longitude</Form.Label>
                            <Form.Control type="text" placeholder="Enter building Longitude"
                                          ref={(value) => {
                                              this.longitude = value
                                          }}
                            />
                        </Form.Group>
                        <button type="submit">Submit</button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default AddBuilding;
