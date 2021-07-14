import React, { Component } from 'react';
import '../App.css';

class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            linkedin: '',
            isEditing: true,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEditButton = this.handleEditButton.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value,
        })
    }

    handleSubmit(e) {
        this.setState({
            isEditing: false,
        })
    }

    handleEditButton(e) {
        this.setState({
            isEditing: true,
        })
    }

    render() {

        const { firstName, lastName, email, phoneNumber, linkedin, isEditing } = this.state;

        const generalInfoForm = (
            <form onSubmit={ this.handleSubmit }>
                <div>
                    <input id="fname" type="text"   name="firstName"   value={ firstName }   onChange={ this.handleChange } placeholder="firstname" />
                    <input id="lname" type="text"   name="lastName"    value={ lastName }    onChange={ this.handleChange } placeholder="lastname" />
                    <input id="email" type="email"  name="email"       value={ email }       onChange={ this.handleChange } placeholder="email" />
                    <input id="mobile" type="tel"    name="phoneNumber" value={ phoneNumber } onChange={ this.handleChange } placeholder="mobile" />
                    <input id="linkedin" type="text"   name="linkedin"    value={ linkedin }    onChange={ this.handleChange } placeholder="linkedin" />
                </div>
                <button type="submit" className="button-style">Submit</button>
            </form>
        );

        const generalDetails = (
            <div>
                <h2>{firstName} {lastName}</h2>
                <div>
                    <p>{email}</p>
                    <p>{phoneNumber}</p>
                    <p>{linkedin}</p>
                </div>
                <button onClick={ this.handleEditButton }>Edit</button>
            </div>
        );

        const displayDiv = isEditing ? generalInfoForm : generalDetails;

        return (
            <div className="align-center">
                <h2>General Information</h2>
                { displayDiv }
            </div>
        )
    }
}

export default GeneralInfo;