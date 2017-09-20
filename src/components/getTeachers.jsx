import React, { Component } from 'react'
import axios from 'axios'
import "../styles/main.css"

export default class GetTeachers extends Component {
    constructor() {
        super();
        this.state = {
        teachers:[]
        }

    }
    
    componentWillMount(){
        axios.get('/teachers').then(response => {
            console.log(response);
            this.setState({
                teachers: response.data
            })
        })
    }
    

    render(){
        let teachers = this.state.teachers.map((c, index)=> {
        return(
            <div key={index}>
                       
                            <li> | ID: {c.id + " "}  
                                 | First Name: {c.first_name + " "} 
                                 | Last Name: {c.last_name + " "} 
                                 | Email: {c.email + " "} 
                                 | Gender: {c.gender + " "} 
                                 | Classroom: {c.classroom + " "} 
                                 | Degree: {c.degree + " "} 
                            </li>
                        
             </div>
        )
    })
    console.log(this.state.teachers);
return (
        <ul>{teachers}</ul>
)}}
