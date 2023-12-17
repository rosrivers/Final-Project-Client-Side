//taken from prev files
import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import EditCampusView from '../views/EditCampusView';
import { Redirect } from 'react-router-dom';
import { editCampusThunk, fetchCampusThunk } from '../../store/thunks';

class EditCampusContainer extends Component {
    componentDidMount() {
        this.props.fetchCampus(this.props.match.params.id);
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
        event.preventDefault();  
        let { campus } = this.props;

        campus = {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description,
            id: campus.id
        };

        await this.props.editCampus(campus);

        this.setState({
            redirect: true
        });

    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={`/campuses`} />)
        }

        return (
            <div>
                <Header />
                <EditCampusView handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}
const mapState = (state) => {
    return {
        campus: state.campus,  
    };
};
const mapDispatch = (dispatch) => {
    return {
        fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
        editCampus: (campus) => dispatch(editCampusThunk(campus))
    };
};

export default connect(mapState, mapDispatch)(EditCampusContainer) 
