/*
BuildingList.js - This is a React Component that prints the building code and the name to the screen
 */
import React from 'react';

class BuilingList extends React.Component {
    render() {
        //console.log('This is my directory file', this.props.data);
        const {data, filterText, selectedUpdate} = this.props;

        const buildingList = data
            .filter(listing => {
                //console.log(listing)
                // remove names that do not match current filter text
                return listing.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
                    listing.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
            })
            .map(directory => {
                return (
                    <tr key={directory.id}
                        onClick={() => {
                            selectedUpdate(directory.id)
                            console.log('directory id: ', directory.id)
                        }}
                    >
                        <td>{directory.code} </td>
                        <td> {directory.name} </td>
                    </tr>
                );
            });

        return (
            < div>
                {buildingList}
            </div>
        );
    }
}

export default BuilingList;
