import axios from 'axios';
import React, {Component} from 'react';
import { useLocation } from 'react-router-dom';

const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }
export default class UpdatePerson extends Component {

    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeHomeworld = this.onChangeHomeworld.bind(this);
        this.onChangeShips_id = this.onChangeShips_id.bind(this);

        this.state = {
            name: '',
            gender: '',
            homeworld: '',
            ships_id: ''
        }
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }
    onChangeHomeworld(e) {
        this.setState({
            homeworld: e.target.value
        });
    }
    onChangeShips_id(e) {
        this.setState({
            ships_id: e.target.value
        });
    }
    onSubmit(e){
        e.oreventDefault();
        const obj = {
            name: this.state.name,
            gender: this.state.gender,
            homeworld: this.state.homeworld,
            ships_id: this.state.ships_id
        }
        console.log(usePathname);
    axios.post('/api/update_person' +
    obj.id, obj)
       .then(res => console.log(res.data));
        console.log(obj)
    }
    render(){
        return (
            <div style={{marginTop: 10}}>
                <h3>Update Person</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" className="form-control"
                          value={this.state.name}
                          onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Gender: </label>
                        <input type="text" className="form-control"
                          value={this.state.gender}
                          onChange={this.onChangeGender} />
                    </div>
                    <div className="form-group">
                        <label>Homeworld: </label>
                        <input type="text" className="form-control"
                          value={this.state.homeworld}
                          onChange={this.onChangeHomeworld} />
                    </div>
                    <div className="form-group">
                        <label>ships_id: </label>
                        <input type="text" className="form-control"
                          vvalue={this.state.ships_id}
                          onChange={this.onChangeShips_id} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Person"
                        className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}