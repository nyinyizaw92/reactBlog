import React from 'react'
//import { timingSafeEqual } from 'crypto';



class Register extends React.Component{

  constructor(props){
    super(props);
    this.state={
     name:"",
     email:"",
     password:"",
    // isAdmin:false,
    }
  }

//   nameChange = (e)=>{
//     this.setState({
//         name :e.target.value
//     })
// }

// emailChange = (e)=>{
//   this.setState({
//       email :e.target.value
//   })
// }

inputChange=(e) =>{
  // const value = e.target.checked ===undefined?e.target.value:e.target.checked;
  // this.setState({
  //   [e.target.name] :value,
  // })
  if(e.target.name === false){
    this.setState({
      [e.target.name]:e.target.checked
    })
  }else{
    this.setState({
      [e.target.name] :e.target.value
    })
  }
}

  handleChange = (e) =>{
    //console.log(this.state);
  e.preventDefault();
    this.props.onClick(this.state);
  //}
   
   this.setState({
     name:"",
     email:"",
     password:""
   })
  
}



  render(){
    return (
      <div>
        <React.Fragment>
          <h3 style={{textAlign:'center',width:'400px'}}>Register Form</h3>
          <form style={formstyle} onSubmit={(e) => this.handleChange(e)}>
          <label>
              Name:
              <input style={inputstyle} name="name" onChange={e=>this.inputChange(e)} value={this.state.name}/>
              <br/><br/>
            </label>
            <label>
             Email: 
             <input type="email" style={inputstyle} name="email" onChange={e=>this.inputChange(e)} value={this.state.email}/> 
             <br/><br/>
            </label>
            <label>
             Password: 
             <input type="password" name="password" onChange={e=>this.inputChange(e)} style={inputstyle} /> 
            </label><br/>
            <button type="submit">Register</button>
          </form>
        </React.Fragment>
  
        
    
      </div>
  
    )
  
  };
}

const formstyle={
 width:'400px',
 height:'auto',
 textAlign:'right',
 color:'black',
 padding:'10px'
}


const inputstyle={
  padding:'8px',
  marginLeft:'45px',

}


export default Register;
