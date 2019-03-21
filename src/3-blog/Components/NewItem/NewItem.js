import React from 'react'

class NewItem extends React.Component{
 constructor(props)
  {
    super(props);
    this.state={
      list:''
    }
  }

  change = (e) =>{
    this.setState({
      list:e.target.value
    })
  }

  handle = (e) => {
    e.preventDefault();
    this.props.addList(this.state.list);
    this.setState({
      list:''
    })
  }
  render(){
    return (
      <div>
        <React.Fragment>
          <form onSubmit={this.handle}>
            <input onChange={this.change} value={this.state.list}/>
  
            <button type="submit">Add List</button>
          </form>
        </React.Fragment>
      </div>
    )
  }
}


export default NewItem;