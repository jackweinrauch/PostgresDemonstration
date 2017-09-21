import React, { Component } from 'react'
import axios from 'axios'
import "../styles/main.css"



export default class GetClassroom extends Component {
    constructor() {
        super();
        this.state = {
        classroom:[],
        listNames: [],
        id: []
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount(){
        axios.get('/classid').then(response =>{
            console.log(response);
            this.setState({
                id: response.data
            })
        })
    }
    

    onSubmit(id){
        axios.get('/classroom/' + id).then(response => {
            console.log(response);
            this.setState({
                classroom: response.data
            })
        })
    }
    onChange(event){
           let v = event.target.value
        this.setState({id: [v]})
    }

    render(){
        const ListNames = _=>(
            
            <select onChange={this.onChange}>
                 {this.state.id.map((c, i)=>{
                     return(
                      <option key={i} value={c.classroom_id}>{c.classroom_id}</option>
                   )  })}
            </select>

            
        )
        const Classroom = _=>(
        <div>
            {this.state.classroom.map((c, index)=> {
                return(    
            <div key={index}>        
                <li>
                |First Name:{c.first_name+" "}
                |Last Name:{c.last_name+" "}
                |Gender:{c.gender+" "}
                </li>
            </div>    
             ) })}
         </div>
        )


return (

    <div className="classroom">

             <ListNames />

        <button onClick={_ => this.onSubmit(this.state.id)}>Filter by Classroom Number</button>
       <Classroom/>
    </div>
)}}

