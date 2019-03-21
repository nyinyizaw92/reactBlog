import React from 'react';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import List from './Components/List/List';
import NewItem from './Components/NewItem/NewItem';


class Blog extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLogin:false,
    inputdata:[],
    logindata:[],
    finaldata:[],
    list:[]
        }
  }

 

  newList = (value) =>{
    const newItemList = this.state.list;
    newItemList.push(value);
   
    this.setState({
      list:newItemList,
    })
  }

  addName = (value) =>{
      const currentList = this.state.inputdata;
       currentList.push(value);
          
          this.setState({
            inputdata: currentList
          
          })
      }
    
  login = (value) =>{
    
    const currentLogin = this.state.logindata;
       currentLogin.push(value);
          this.setState({
            logindata:currentLogin
          })

          const equals = this.state.inputdata.every((e, i) => e.name === 
          this.state.logindata[i].name && e.password === this.state.logindata[i].password);

          //console.log(equals);

          if(equals){
            console.log(1);
            this.setState({
              finaldata:currentLogin,
              isLogin:true
           })
          }else{
            alert('login falied')
            this.setState({
             finaldata:currentLogin,
             isLogin:false
           })
         }
  }

  
   render() {

    const finaldata = this.state.finaldata.map((item, key) =>
    <li key={item.id}>{item.name}</li>
    );
    const regItems = this.state.inputdata.map((item, key) =>
        <li key={item.id}>{item.name}</li>
    );
   


      return (
        <Router>
          <ul>
             <li> <Link to='/'>Login</Link></li>
             <li> <Link to='/register'>Register</Link></li>
             <li> <Link to='/list'>List</Link></li>
             <li> <Link to='/newitem'>NewItem</Link></li>
          </ul>
          <hr/>
      
          <Route exact path="/" 
              render={(props) => 
                this.state.isLogin ?
                <Redirect to="/list" /> :
                <Login {...props} 
                loginClick={this.login}/>}>
          </Route>


          <Route path="/register" 
            render={(props) => <Register {...props} 
            onClick={this.addName}/>}  />
         
          {/* <Route  path="/register" 
              component={Register} 
            onClick={this.addRegVal}></Route> */}
          
          <Route  path="/list" 
          render={props => <List {...props} 
          itemlists =  { this.state.list.map((item,index) =>{
           return item
           
         })
     }  />}></Route>
           

          <Route  path="/newitem" 
          render={(props) =>
            !this.state.isLogin ?
            <Redirect to="/" /> :
           
            <NewItem {...props}
          addList={this.newList}/>}></Route>


            
         {/* <ul>
           {regItems}
         </ul>
         <ul>
           {finaldata}
         </ul> */}
        
        </Router>
       
      );
      
    }
  }

  export default Blog;