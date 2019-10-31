import React from 'react'

class RemoveBuilding extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buildings: this.props.data
        };

        this.removeBuilding = this.removeBuilding.bind(this);
    }

    removeBuilding(event) {

        const {selectedBuilding, data, removeUpdate} = this.props;
        event.preventDefault();
        let newBuildingList=[];
        let buildingList = data.filter((listing) => {
            return listing.id !== selectedBuilding;
        });

        removeUpdate(buildingList);

    }

    render() {
        //You will need to save the value from the textbox and update it as it changes
        //You will need the onChange value for the input tag to capture the textbox value
        return (
            <div className="addBuildMain">
                <div className="header">
                    <form onSubmit={this.removeBuilding}>

                        <button type="submit">
                            Remove
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default RemoveBuilding;
