import React, { Component } from 'react';

class WorkExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            company: '',
            designation: '',
            from: '',
            to: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e);
    }

    render() {

        const { company, designation, from, to } = this.state;

        const workExperienceForm = (
            <form>
                <label htmlFor="company">
                    Company: <input id="company" type="text" name="company" value={company} onChange={this.handleChange} required />
                </label>
                <label htmlFor="designation">
                    Designation: <input id="designation" type="text" name="designation" value={designation} onChange={this.handleChange} required />
                </label>
                <label htmlFor="startDate">
                    From: <input id="startDate" type="date" name="from" value={from} onChange={this.handleChange} required />
                </label>
                <label htmlFor="endDate">
                    To: <input id="endDate" type="date" name="to" value={to} onChange={this.handleChange} required />
                </label>
            </form>
        );

        return (
            <div>
                <h2>Work Experience</h2>
                {workExperienceForm}
            </div>
        )
    }
}

export default WorkExperience;