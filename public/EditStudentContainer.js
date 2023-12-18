import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import EditStudentView from '../views/EditStudentView';
import { Redirect } from 'react-router-dom';
import { editStudentThunk, fetchStudentThunk } from '../../store/thunks';

class EditStudentContainer extends Component {
    componentDidMount() {
        this.props.fetchStudent(this.props.match.params.id);
    }
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = async event => {
        event.preventDefault();  // Prevent browser reload/refresh after submit.
        let { student } = this.props;
        student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            campusId: this.state.campusId,
            id: student.id
        };

        await this.props.editStudent(student);
        this.setState({
            redirect: true
        });
    }

    render() {
        const { student } = this.props;

        if (this.state.redirect) {
            return (<Redirect to={`/students`} />)
        }

        return (
            <div>
                <Header />
                <EditStudentView student={student} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        student: state.student, 
    };
};

const mapDispatch = (dispatch) => {
    return {
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
        editStudent: (student) => dispatch(editStudentThunk(student))
    };
};

export default connect(mapState, mapDispatch)(EditStudentContainer) 
