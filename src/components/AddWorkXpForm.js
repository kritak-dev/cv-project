import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../App.css'

class AddWorkXpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newXp : {
                company: '',
                designation: '',
                id: uniqid(),
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState(prevState => ({
            newXp: {
                ...prevState.newXp,
                [name]: value,
            },
        }));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state.newXp);
    }

    render() {

        const { company, designation } = this.state.newXp;

        const workExperienceForm = (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input id="company" type="text" name="company" value={company} onChange={this.handleChange} />
                    <input id="designation" type="text" name="designation" value={designation} onChange={this.handleChange} />
                {/*<label htmlFor="startDate">
                    From: <input id="startDate" type="date" name="from" value={from} onChange={this.handleChange} required />
                </label>
                <label htmlFor="endDate">
                    To: <input id="endDate" type="date" name="to" value={to} onChange={this.handleChange} required />
                </label>*/}
                </div>
                <button>Submit</button>
            </form>
        );

        return (
            <div className="align-center">
                {workExperienceForm}
            </div>
        )
    }
}

export default AddWorkXpForm;