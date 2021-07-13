import React, { Component } from 'react';

class DisplayEditEducation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edu: {
                institute: '',
                degree: '',
                id: '',
            },
            idEditMode: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit(e) {
        this.setState(prevState => ({
            edu: {
                institute: this.props.instituteName,
                degree: this.props.degreeName,
                id: this.props.id,
            },
            isEditMode: true,
        }))
    }

    handleChange(e) {
        const { name, value } = e.target;

        this.setState(prevState => ({
            edu: {
                ...this.state.edu,
                [name]: value
            }
        }));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isEditMode: false,
        });
        this.props.handleEdit(this.state.edu)
    }

    handleDelete(e) {
        this.props.handleDelete(this.props.id);
    }

    render() {
        const { instituteName, degreeName, id } = this.props;
        const { institute, degree } = this.state.edu;
        const { isEditMode } = this.state;

        const displayTemplate = (
            <div>
                <p>Institute: { instituteName }</p>
                <p>Degree: { degreeName }</p>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );

        const editTemplate = (
            <form onSubmit={this.handleSubmit}>
                <label>
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
                {isEditMode ? editTemplate : displayTemplate }
            </div>
        );
    }
}

export default DisplayEditEducation;