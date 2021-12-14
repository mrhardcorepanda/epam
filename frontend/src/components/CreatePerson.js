import React, { Component } from 'react';
import axios from 'axios';
export default class CreatePerson extends Component {

    constructor(props){

        super(props);
        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeHomeworld = this.onChangeHomeworld.bind(this);
        this.onChangeShips_ids = this.onChangeShips_ids.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            id: '',
            name: '',
            gender: '',
            homeworld: '',
            ships_id: ''
        }

    }
    onChangeID(e) {
        this.setState({
            id: e.target.value
        })
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        })
    }
    onChangeHomeworld(e) {
        this.setState({
            homeworld: e.target.value
        })
    }
    onChangeShips_ids(e) {
        this.setState({
            ships_id: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        console.log("test")
        const obj = {
            id: this.state.id,
            name: this.state.name,
            gender: this.state.gender,
            homeworld: this.state.homeworld,
            ships_id: this.state.ships_id
        };
        axios.post('/api/create_person', obj)
        .then(res => console.log(res.data));
        console.log(obj)
    }
     
    render(){
        return(
            <div style={{marginTop: 10}}>
                <h3>Add New person</h3>
                <form>
                    <div className="form-group">
                        <label>ID: </label>
                        <input type="text" className="form-control"
                        value={this.state.id}
                        onChange={this.onChangeID}/>
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}/>
                    </div>
                    <div className="form-group">
                        <label>Gender: </label>
                        <input type="text" className="form-control"
                            value={this.state.gender}
                            onChange={this.onChangeGender}/>
                    </div>
                    <div className="form-group">
                        <label>Homeworld: </label>
                        <input type="text" className="form-control"
                            value={this.state.homeworld}
                            onChange={this.onChangeHomeworld}/>
                    </div>
                    <div className="form-group">
                        <label>Ships_ids: </label>
                        <input type="text" className="form-control"
                            value={this.state.ships_id}
                            onChange={this.onChangeShips_ids}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Person" className="btn btn-primary"/> 
                    </div>
                </form>
            </div>
        )
    }
}