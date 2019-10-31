/*
ViewBuilding.js - This is a React Component that allows to view additional listing details
for the current selected building when a user clicks on a listing
 */

import React from 'react';

class ViewBuilding extends React.Component {
    render() {
        const {data, selectedBuilding} = this.props;
        // subtract 1 to make the id match the data index
        const listingId = selectedBuilding - 1;
        const id = data[listingId].id;
        const code = data[listingId].code;
        const name = data[listingId].name;
        let latitude = '';
        let longitude = '';
        const address = data[listingId].address;

        if (data[listingId].coordinates !== undefined) {
            latitude = data[listingId].coordinates.latitude;
        }
        if (data[listingId].coordinates !== undefined) {
            longitude = data[listingId].coordinates.longitude;
        }


        console.log(name);
        return (
            <div>
                <p>
                    {' '}
                    <i>Click on a code or name to view more information</i> <br/>

                    <h3>{'Code: '} {code}</h3>
                    <h3>{'Name: '} {name}</h3>
                    <h3>{'Latitude: '} {latitude} </h3>
                    <h3>{'Longitude: '} {longitude} </h3>
                    <h3>{'Address: '} {address} </h3>
                </p>
            </div>
        );
    }
}

export default ViewBuilding;
