import React, { Component } from 'react';
import AddWorkXpForm from './AddWorkXpForm';
import AddButton from './AddButton';
import DisplayEditWorkXp from './DisplayEditWorkXp';

class WorkXpList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workXpList: [],
            openAddForm: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSubmit(newXp) {
        this.setState({
            workXpList: [...this.state.workXpList, newXp],
            openAddForm: false,
        });
    }

    handleAddButton(e) {
        this.setState({
            openAddForm: true,
        });
    }
    
    handleEdit(newXp) {
        const newWorkXpList = this.state.workXpList.map(workXp => {
            if (workXp.id !== newXp.id) return workXp;
            return newXp;
        });

        this.setState({
            workXpList: newWorkXpList,
        });
    }

    handleDelete(deleteId) {
        const newWorkXpList = this.state.workXpList.filter(workXp => workXp.id !== deleteId);
        this.setState({
            workXpList: newWorkXpList,
        });
    }

    render() {
        const { workXpList, openAddForm } = this.state;

        const dispWorkXpList = workXpList.map(workXp => {
            return (<DisplayEditWorkXp
                companyName={workXp.company}
                designationName={workXp.designation}
                id={workXp.id}
                key={workXp.id}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
            />);
        });

        return (
            <div className="align-center">
                <h2>Work Experience</h2>
                { dispWorkXpList }
                {
                    openAddForm ? <AddWorkXpForm handleSubmit={this.handleSubmit} /> : <AddButton title="Add Work Experience" handleAddButton={this.handleAddButton} />
                }
            </div>
        );
    }
}

export default WorkXpList;