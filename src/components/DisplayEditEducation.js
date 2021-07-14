import React, { Component } from 'react';
import '../App.css';
import '../styles/Education.css';

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
        const { instituteName, degreeName } = this.props;
        const { institute, degree } = this.state.edu;
        const { isEditMode } = this.state;

        const displayTemplate = (
            <div>
                <div>
                    <p>Institute: { instituteName }</p>
                    <p>Degree: { degreeName }</p>
                </div>
                <button className="mr-5" onClick={this.handleEdit}>Edit</button>
                <button className="ml-5" onClick={this.handleDelete}>Delete</button>
            </div>
        );

        const editTemplate = (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input id="institute" type="text" name="institute" value={institute} onChange={this.handleChange} />
                    <input id="degree" type="text" name="degree" value={degree} onChange={this.handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        );

        return (
            <div className="m-10">
                {isEditMode ? editTemplate : displayTemplate }
            </div>
        );
    }
}

export default DisplayEditEducation;