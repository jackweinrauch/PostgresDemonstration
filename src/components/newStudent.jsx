import React, { Component } from 'react'
import axios from 'axios'
import "../styles/main.css"

export default class NewStudents extends Component{
    constructor(){
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            gender: '',
            classroom_id: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onSubmit(){
        axios.post('/students', this.state)

    }
    onChange(event){
        let e = event.target.name,
            v = event.target.value
        this.setState(_=>{
            let newState = {}
            newState[e] = v
            return newState;
        })
    }
    render(){
        const { first_name, last_name, email, gender, classroom_id } = this.state;
        return (
          <form onSubmit={this.onSubmit}>
            <input type="text" name="first_name" value={first_name} onChange={this.onChange} />
            <input type="text" name="last_name" value={last_name} onChange={this.onChange} />
            <input type="text" name="email" value={email} onChange={this.onChange} />
            <input type="text" name="gender" value={gender} onChange={this.onChange} />
            <input type="text" name="classroom_id" value={classroom_id} onChange={this.onChange} />
            <button type="submit">Submit</button>
          </form>
        );
    }


}