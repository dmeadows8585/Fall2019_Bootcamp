/*
Search.js - This is a React Component that filters the contents of the list based on the user's input in the textbox
 */

import React from 'react';

class Search extends React.Component {
    filterUpdate() {
        //Here you will need to update the value of the filter with the value from the textbox
        const val = this.myValue.value;
        this.props.filterUpdate(val);
    }

    render() {
        //save the value from the textbox and update it as it changes
        //the onChange value is needed for the input tag to capture the textbox value
        return (
            <form>
                <input
                    type="text"
                    ref={(value) => {
                        this.myValue = value
                    }}
                    placeholder="Type to Filter"
                    onChange={this.filterUpdate.bind(this)}
                />
            </form>
        );
    }
}

export default Search;
