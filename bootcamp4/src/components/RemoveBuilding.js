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
        let newBuildingList = [];
        let buildingList = data.filter((listing) => {
            return listing.id !== selectedBuilding;
        });

        removeUpdate(buildingList);

        alert("Building has been removed!");

    }

    render() {
        return (
            <div className="RemoveBuildMain">
                <b>Remove Selected Building</b>
                <form onSubmit={this.removeBuilding}>
                    <button type="submit">
                        Remove
                    </button>
                </form>
            </div>
        );
    }
}

export default RemoveBuilding;
