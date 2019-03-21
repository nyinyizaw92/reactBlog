import React from 'react'
import PropTypes from 'prop-types';


class List extends React.Component {
  render(){
    return (
      <div>
       <React.Fragment>
        <ul style={{listStyle:'none'}}>
          <li>{this.props.itemlistsmap}<br/></li>
        </ul>
       </React.Fragment>
      </div>
    )
  }
}

export default List;