/*
Add a building to the listings
 */

import React from 'react'

class AddBuilding extends React.Component {

    constructor(props) {
        super(props);
        //this.state = {value: ''};

        this.state = {
            buildings: this.props.data
        };

        //this.handleChange = this.handleChange.bind(this);
        this.addBuilding = this.addBuilding.bind(this);
    }

    listingUpdate(newBuilding) {
       // const val = this.myValue.value;
        this.props.listingUpdate(newBuilding);
    }

    addBuilding(event) {
        event.preventDefault();
        //alert('A building was submitted: ' + this.code.value);

        if (this.name.value !== "") {
            var newId = this.props.data.length + 1; //get the id of the last element and increment it.
            console.log('new id: ', newId);
            var newBuilding = {
                id: newId,
                code: this.code.value,
                name: this.name.value,
               // address: this.address.value
            };
        }

        // this.setState((prevState) => {
        //     return {
        //         buildings: prevState.buildings.concat(JSON.stringify(newBuilding))
        //     };
        //
        // });
        console.log('hello: ' + JSON.stringify(newBuilding));
       this.listingUpdate(newBuilding);


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
                        {/*<label>*/}
                            {/*address:*/}
                            {/*<input*/}
                                {/*type="text"*/}
                                {/*ref={(value) => {*/}
                                    {/*this.address = value*/}
                                {/*}}*/}
                                {/*// onChange={this.handleChange}*/}
                            {/*/>*/}
                        {/*</label>*/}
                        {/*<input type="submit" value="add"/>*/}
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddBuilding;
