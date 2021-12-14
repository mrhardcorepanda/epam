import axios from 'axios';
import{Link} from 'react-router-dom'
import React, {Component} from 'react';
import { Redirect } from 'react-router';
export default class RecordsList extends Component {
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('/api/persondel/'+this.props.obj.id)
        .catch(err => console.log(err))
    }
    render(){

        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.gender}
                </td>
                <td>
                    {this.props.obj.homeworld}
                </td>
                <td>
                    {this.props.obj.ships_id}
                </td>
                <td>
                    <Link to={"/update_person/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}