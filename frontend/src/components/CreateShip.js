import React, { Component } from 'react';

export default class CreatePerson extends Component {
    render(){
        return(
            <div style={{marginTop: 10}}>
                <h3>Add New person</h3>
                <form>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Manufacturer: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Cargo Capacity: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Pilots ids: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Person" className="btn btn-primary"/> 
                    </div>
                </form>
            </div>
        )
    }
}