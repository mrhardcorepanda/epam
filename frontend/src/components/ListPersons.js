import axios from "axios";
import React, {Component} from "react";
import RecordsList from './RecordsList';

export default class ListPersons extends Component {
    
    constructor(props){
        super(props);
        this.state = {persons: []};
    }
    componentDidMount (){
        axios.get('/api/person/all')
            .then(response =>{
                this.setState({persons: response.data});
            })
            .catch(function (error){
                console.log(error);
            })
    }
    personsList(){
        return this.state.persons.map(function(object, i){
            return <RecordsList obj={object} key={i} />;
        });
    }
    render(){
        return (
            <div>
                <h3 align="center">Persons List</h3>
                <table className="table table-striped" style={{ marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Homeworld</th>
                            <th>Ships_ids</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.personsList()}
                    </tbody>
                </table>
            </div>
        )
    }
}