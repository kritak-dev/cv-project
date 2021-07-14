import React, { Component } from 'react';

class DisplayEditWorkXp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newXp: {
                company: '',
                designation: '',
                id: '',
            },
            isEditMode: false,
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleEdit(e) {
        this.setState({
            newXp: {
                company: this.props.companyName,
                designation: this.props.designationName,
                id: this.props.id
            },
            isEditMode: true,
        });
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
        this.setState({
            isEditMode: false,
        });
        this.props.handleEdit(this.state.newXp);
    }

    handleDelete(e) {
        const id = this.props.id;
        this.props.handleDelete(id);
    }

    render() {
        const { companyName, designationName } = this.props;
        const { company, designation } = this.state.newXp;
        const { isEditMode } = this.state;

        const displayTemplate = (
            <div>
                <p>Company: {companyName}</p>
                <p>Designation: {designationName}</p>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );

        const editTemplate = (
           <form onSubmit={this.handleSubmit}>
                <label htmlFor="company">
                    Company: <input id="company" type="text" name="company" value={company} onChange={this.handleChange} required />
                </label>
                <label htmlFor="designation">
                    Designation: <input id="designation" type="text" name="designation" value={designation} onChange={this.handleChange} required />
                </label>
                {/*<label htmlFor="startDate">
                    From: <input id="startDate" type="date" name="from" value={from} onChange={this.handleChange} required />
                </label>
                <label htmlFor="endDate">
                    To: <input id="endDate" type="date" name="to" value={to} onChange={this.handleChange} required />
                </label>*/}
                <button>Submit</button>
            </form> 
        );

        return (
            <div>
                { isEditMode ? editTemplate : displayTemplate }
            </div>
        );
    }
}

export default DisplayEditWorkXp;