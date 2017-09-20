import React, { Component } from 'react'
import "../styles/main.css"
import GetStudents from './getStudents'
import GetTeachers from './getTeachers'

export default class App extends Component {
	render(){
		return (
				  <div className="page-wrap">
				  <header> 
					<h1> Hey Jeremy</h1>
					<a href="/" className="head-link"> This is how dummy data for a school class looks </a>
				  </header>       
				  <div id="hl-content" className="content">
				  <div className="listContainer">
					<GetStudents/>
   				  </div>
					 <div className="listContainer">
					<GetTeachers/>
   				  </div>

				  </div>
				  <div className="footer">
					<h4>Some Ways to find me!  </h4>
					<ul>
            		<li><a href="https://www.linkedin.com/in/jack-weinrauch-a35b79148/" target="#"> Linkedin</a></li>
            		<li><a href="https://github.com/jackweinrauch" target="#">Github</a></li>
         			 </ul>
				  </div>
				  <div className="sidebar">
					<ul>
					  <li>Home</li>
					  <li>About</li>
					  <li>Dummy</li>
					  <li>Data</li>
					  <li>is Fun</li>
					</ul>
				  </div>  
				</div>
		)
	}
}