/*
App.js - This is the main application.

-It prints out the directory listings
-It has a Textbox for searching/filtering the results
-It has a display box for printing out more details about the selected building
-It imports and uses several React Component files to implement this functionality
 */

import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            selectedBuilding: 1,
            buildingListings: this.props.data
        };
    }

    /*
    filterUpdate() function - to set the state of filter
     */
    filterUpdate(value) {
        //set the filterText property of state to the value passed into this function
        this.setState({
            filterText: value
        })
    }

    addUpdate(updatedList) {
        this.setState({
            // buildingListings: this.state.buildingListings.concat(newBuilding)
            buildingListings: updatedList,
        });
        this.selectedUpdate(updatedList[0].id)

    }

    // remove listing from BuildingList
    removeUpdate(updatedList) {
        this.setState({
            buildingListings: updatedList,
        });
        this.selectedUpdate(updatedList[0].id)
    }

    /*
    selectUpdate() function - to set the state of selected building
     */
    selectedUpdate(id) {
        //update the selectedBuilding property of state to the id passed into this function
        console.log('id to selected update: ', id);
        this.setState({
            selectedBuilding: id
        })
    }

    render() {

        return (
            <div className="bg">
                <div className="row">
                    <h1>UF Directory App</h1>
                </div>

                <Search
                    filterText={this.state.filterText}
                    filterUpdate={this.filterUpdate.bind(this)}
                />
                <main>
                    <div className="row">
                        <div className="column1">
                            <div className="tableWrapper">
                                <table className="table table-striped table-hover">

                                    <tr>
                                        <td>
                                            <b>Code Building</b>
                                        </td>
                                    </tr>
                                    <BuildingList
                                        data={this.state.buildingListings}
                                        filterText={this.state.filterText}
                                        selectedUpdate={this.selectedUpdate.bind(this)}
                                    />
                                </table>
                            </div>
                        </div>
                        <div className="column2">
                            <ViewBuilding
                                selectedBuilding={this.state.selectedBuilding}
                                data={this.props.data}
                                data={this.state.buildingListings}

                            />
                            <RemoveBuilding
                                removeUpdate={this.removeUpdate.bind(this)}
                                selectedBuilding={this.state.selectedBuilding}
                                data={this.state.buildingListings}
                            />
                            <AddBuilding
                                addUpdate={this.addUpdate.bind(this)}
                                data={this.state.buildingListings}
                            />
                        </div>
                    </div>


                    <Credit/>
                </main>
            </div>
        );
    }
}

export default App;
