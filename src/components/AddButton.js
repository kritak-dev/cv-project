import React, { Component } from 'react';

class AddButton extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.handleAddButton(e);
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.props.title}</button>
        );
    }
}

export default AddButton;