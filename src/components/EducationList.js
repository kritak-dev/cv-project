import React, { Component } from 'react';
import AddEducationForm from './AddEducationForm';
import AddButton from './AddButton';
import DisplayEducation from './DisplayEducation';

class EducationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eduList: [],
            openAddForm: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
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

    render() {
        const { eduList, openAddForm } = this.state;

        const displayEduList = eduList.map(edu => {
            return(<DisplayEducation 
                institute={edu.institute}
                degree={edu.degree}
                id={edu.id}
                key={edu.id}
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