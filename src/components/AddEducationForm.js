import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../App.css';

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

        const { institute, degree } = this.state.edu;

        const educationForm = (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input id="institute" name="institute" type="text" value={institute} onChange={this.handleChange} placeholder="Institute" />
                    <input id="degree" name="degree" type="text" value={degree} onChange={this.handleChange} placeholder="Degree" />
                </div>
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