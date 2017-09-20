import React, { Component } from 'react'
import axios from 'axios'
import "../styles/main.css"


export default class GetStudents extends Component {
    constructor() {
        super();
        this.state = {
        students:[]
        }

    }
    
    componentWillMount(){
        axios.get('/students').then(response => {
            console.log(response);
            this.setState({
                students: response.data
            })
        })
    }
    

    render(){
        let students = this.state.students.map((c, index)=> {
        return(
            <div key={index}  className="content">
                        <div className="listContainer">
                            <li> | ID: {c.id + " "}  
                                 | First Name: {c.first_name + " "} 
                                 | Last Name: {c.last_name + " "} 
                                 | Email: {c.email + " "} 
                                 | Gender: {c.gender + " "} 
                                 | Classroom: {c.classroom_id + " "} 
                            </li>
                        </div>
             </div>
        )
    })
    console.log(this.state.students);
return (
        <ul>{students}</ul>
)}}


