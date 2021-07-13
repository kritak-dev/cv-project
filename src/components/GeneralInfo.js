import React, { Component } from 'react';
//import '../styles/GeneralInfo.css';

class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: 'FirstName',
            lastName: 'LastName',
            email: 'user@gmail.com',
            phoneNumber: 9454327643,
            linkedin: 'linkedin',
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
                <label htmlFor="fname">
                    <input id="fname" type="text"   name="firstName"   value={ firstName }   onChange={ this.handleChange } required />
                </label>
                <label htmlFor="lname">
                    <input id="lname" type="text"   name="lastName"    value={ lastName }    onChange={ this.handleChange } required />
                </label>
                <label htmlFor="email">
                    <input id="email" type="email"  name="email"       value={ email }       onChange={ this.handleChange } required />
                </label>
                <label htmlFor="mobile">
                    <input id="mobile" type="tel"    name="phoneNumber" value={ phoneNumber } onChange={ this.handleChange } required />
                </label>
                <label htmlFor="linkedin">
                    <input id="linkedin" type="text"   name="linkedin"    value={ linkedin }    onChange={ this.handleChange } />
                </label>
                <button type="submit">Submit</button>
            </form>
        );

        const generalDetails = (
            <div className="font-cursive">
                <div className="add-flex">
                    <h2 className="pad-right-5px">{firstName}</h2>
                    <h2 className="pad-left-5px">{lastName}</h2>
                </div>
                <div className="disp-flex">
                    <p>{email}</p>
                    <p>{phoneNumber}</p>
                    <p>{linkedin}</p>
                </div>
                <button onClick={ this.handleEditButton }>Edit</button>
            </div>
        );

        const displayDiv = isEditing ? generalInfoForm : generalDetails;

        return (
            <div className="general-box">
                <h2>General Information</h2>
                { displayDiv }
            </div>
        )
    }
}

export default GeneralInfo;