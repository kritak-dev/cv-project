import React, { Component } from 'react';

class DisplayEducation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { institute, degree, id } = this.props;

        const displayTemplate = (
            <div>
                <p>Institute: { institute }</p>
                <p>Degree: { degree }</p>
            </div>
        );

        return (
            <div>
                {displayTemplate}
            </div>
        );
    }
}

export default DisplayEducation;