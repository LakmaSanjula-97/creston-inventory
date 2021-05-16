import React from 'react';


class CurrentDateTime extends React.Component {
  state={
    curTime : new Date().toLocaleString()
  }
  render(){
    return (
      <div style={{'fontFamily':'monospace', 'fontSize':'15px', 'textAlign':'right', 'marginRight':'1cm'}}>
        <p>Date : {this.state.curTime}</p>
      </div>
    );
  }
}

export default CurrentDateTime;