import React, { Component } from 'react'
import "../styles/main.css"
import GetStudents from './getStudents'
import GetTeachers from './getTeachers'
import NewStudent from './newStudent'
import GetClassroom from './getClassroom'


export default class App extends Component {
	render(){
		return (
				  <div className="page-wrap">
				  <header> 
					<h1> Hey Brack!</h1>
					<a href="/" className="head-link"> All of this Dummy Data came from my db! </a>
				  </header>       
				  <div className="content">
					<h4>Student Data</h4>
				  <div className="listContainer">
					<GetStudents/>
   				  </div>
						 <h4>Teacher Data</h4>
					 <div className="listContainer">
					<GetTeachers/>
   				  </div>
					<div className="listContainer">
						<h4>Put in a new student</h4>
					<NewStudent/>
					</div>
					<div>
						<GetClassroom/>
					</div>

				  </div>
				  <div className="footer">
					<h5>Is this what you meant by front to end?  </h5>
					<ul>
            		<li><a href="https://www.linkedin.com/in/jack-weinrauch-a35b79148/" target="#"> Linkedin</a></li>
            		<li><a href="https://github.com/jackweinrauch" target="#">Github</a></li>
         			 </ul>
				  </div>
				  <div className="sidebar">
					<ul>
					  <li>About</li>
					  <li>Home</li>
					  <li>Dummy</li>
					  <li>Data</li>
					  <li>Fun</li>
					</ul>
				  </div>  
				</div>
		)
	}
}