import React, { Component } from 'react';
import uniqid from 'uniqid';

class AddEducationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edu: {
                institute: '',
                degree: '',
                id: uniqid(),
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {value, name} = e.target;
        this.setState(prevState => ({
            edu: {
                ...prevState.edu,
                [name]: value,
            },
        }));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state.edu);
    }

    render() {

        const { institute, degree } = this.state;

        const educationForm = (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="institute">
                    Institute:
                    <input id="institute" name="institute" value={institute} onChange={this.handleChange} />
                </label>
                <label htmlFor="degree">
                    Degree:
                    <input id="degree" name="degree" value={degree} onChange={this.handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        );

        return (
            <div>
            { educationForm }
            </div>
        );
    }
}

export default AddEducationForm;