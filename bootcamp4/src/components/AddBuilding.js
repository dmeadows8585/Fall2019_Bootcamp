/*
Add a building to the listings
 */

import React from 'react'

class AddBuilding extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buildings: this.props.data
        };

        this.addBuilding = this.addBuilding.bind(this);
    }

    addBuilding(event) {
        event.preventDefault();

        if (this.name.value !== "") {
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
        }

        this.props.listingUpdate(newBuilding);

    }

    render() {
        return (
            <div className="addBuildMain">
                <div className="header">
                    <form onSubmit={this.addBuilding}>
                        <label>
                            name:
                            <input
                                type="text"
                                ref={(value) => {
                                    this.name = value
                                }}
                                // onChange={this.handleChange}
                            />
                        </label>
                        <label>
                            code:
                            <input
                                type="text"
                                ref={(value) => {
                                    this.code = value
                                }}
                                // onChange={this.handleChange}
                            />
                        </label>
                        <label>
                            address:
                            <input
                                type="text"
                                ref={(value) => {
                                    this.address = value
                                }}
                                // onChange={this.handleChange}
                            />
                        </label>
                        <label>
                            latitude:
                            <input
                                type="text"
                                ref={(value) => {
                                    this.latitude = value
                                }}
                                // onChange={this.handleChange}
                            />
                        </label>
                        <label>
                            longitude:
                            <input
                                type="text"
                                ref={(value) => {
                                    this.longitude = value
                                }}
                                // onChange={this.handleChange}
                            />
                        </label>
                        {/*<input type="submit" value="add"/>*/}
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddBuilding;
