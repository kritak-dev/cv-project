import React, { Component } from 'react';
import AddEducationForm from './AddEducationForm';
import AddButton from './AddButton';
import DisplayEditEducation from './DisplayEditEducation';

class EducationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eduList: [],
            openAddForm: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSubmit(edu) {
        this.setState({
            eduList: [...this.state.eduList, edu],
            openAddForm: false,
        });
    }

    handleAddButton(e) {
        this.setState({
            openAddForm: true,
        });
    }

    handleEdit(editedEdu) {
        const newEduList = this.state.eduList.map(edu => {
            if (edu.id !== editedEdu) return edu;
            return editedEdu;
        });

        this.setState({
            eduList: newEduList,
        });
    }

    handleDelete(removeId) {
        const newEduList = this.state.eduList.filter(edu => edu.id !== removeId)
        this.setState({
            eduList: newEduList,
        });
    }

    render() {
        const { eduList, openAddForm } = this.state;

        const displayEduList = eduList.map(edu => {
            return(<DisplayEditEducation 
                instituteName={edu.institute}
                degreeName={edu.degree}
                id={edu.id}
                key={edu.id}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
            />);
        });

        return(
            <div>
                {displayEduList}
                { !openAddForm ? 
                    <AddButton handleAddButton={this.handleAddButton} /> : <AddEducationForm handleSubmit={this.handleSubmit}/>
                }
            </div>
        );
    }
}

export default EducationList;