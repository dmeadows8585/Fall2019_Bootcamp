/*
ViewBuilding.js - This is a React Component that allows to view additional listing details
for the current selected building when a user clicks on a listing
 */

import React from 'react';
import {Table, ControlLabel} from "react-bootstrap";


class ViewBuilding extends React.Component {
    render() {
        const {data, selectedBuilding} = this.props;
        let building;
        data.filter(listing => {
            if (listing.id === selectedBuilding) {
                building = listing;
            }
        });

        const code = building.code;
        const name = building.name;
        const address = building.address;
        let latitude = '';
        let longitude = '';
        console.log('code: ', building.code);
        console.log('id: ', building.id);


        if (building.coordinates !== undefined) {
            latitude = building.coordinates.latitude;
        }
        if (building.coordinates !== undefined) {
            longitude = building.coordinates.longitude;
        }

        console.log(name);
        return (
            <div>
                <Table striped bordered hover>
                    <tbody>
                    <tr>
                        <td>Code</td>
                        <td>{code}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Latitude</td>
                        <td>{latitude}</td>
                    </tr>
                    <tr>
                        <td>Longitude</td>
                        <td>{longitude}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{address}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ViewBuilding;
