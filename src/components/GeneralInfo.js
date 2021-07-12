import React, { Component } from 'react';
import '../styles/GeneralInfo.css';

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
                <input type="text"   name="firstName"   placeholder="First Name"   value={ firstName }   onChange={ this.handleChange } />
                <br />
                <input type="text"   name="lastName"    placeholder="Last Name"    value={ lastName }    onChange={ this.handleChange } />
                <br />
                <input type="email"  name="email"       placeholder="Email"        value={ email }       onChange={ this.handleChange } />
                <br />
                <input type="number" name="phoneNumber" placeholder="Phone Number" value={ phoneNumber } onChange={ this.handleChange } />
                <br />
                <input type="text"   name="linkedin"    placeholder="Linkedin"     value={ linkedin }    onChange={ this.handleChange } />
                <br />
                <button type="submit">Submit</button>
            </form>
        );

        const generalDetails = (
            <div className="font-cursive">
                <div className="add-flex">
                    <h2 className="pad-right-5px">{firstName}</h2>
                    <h2 className="pad-left-5px">{lastName}</h2>
                </div>
                <div class="disp-flex">
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
                { displayDiv }
            </div>
        )
    }
}

export default GeneralInfo;