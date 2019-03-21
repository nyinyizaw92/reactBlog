import React from 'react'

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state={
     name:"",
      password:"",
   
    }
  }


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
    this.props.loginClick(this.state);
  //}
   
   this.setState({
     name:"",
     password:""
   })
  
}

  render(){
    return (
      <div>
         <React.Fragment>
            <h3 style={{textAlign:'center',width:'400px'}}>Login Form</h3>
            <form style={formstyle} onSubmit={(e) => this.handleChange(e)}>
            <label>
                Name:
                <input style={inputstyle} name="name" onChange={e=>this.inputChange(e)} value={this.state.name}/>
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
  }
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
 
export default Login; 
