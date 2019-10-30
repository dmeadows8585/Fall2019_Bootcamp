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
        const name = data[listingId].name;
        const code = data[listingId].code;
        let latitude = '';
        let longitude = '';
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
                    <br/>

                    {'Name: '}
                    {name} <br/>
                    {'Code: '}
                    {code} <br/>
                    {'Latitude: '}
                    {latitude} <br/>
                    {'Longitude: '}
                    {longitude} <br/>

                </p>
            </div>
        );
    }
}

export default ViewBuilding;
