import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Parent from './parent_module.jsx';
import Toolbar from './toolbar_module.jsx';
import Quickview from './quickview/quickview_module.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [],
      imageBaseUrl: 'https://images-trip.s3.us-east-2.amazonaws.com/',
      quickViewVisibility: false
    };
  }
  componentDidMount () {
    axios.get('/005') // TODO
    .then((res) => {
      this.setState({
        experiences: res.data
      });
    })
    .catch((error) => console.log(error));
  }

  render() {
    if(_.isEmpty(this.state.experiences)) {
      return (<div></div>)
    }
   return (
     <div>
        <Toolbar category={this.state.experiences[0].category} subtitle={this.state.experiences[0].subtitle} />
        <Parent experiences={this.state.experiences} imageBaseUrl={this.state.imageBaseUrl}/>
        <Quickview
          experiences={this.state.experiences}
          imageBaseUrl={this.state.imageBaseUrl}
          visibility={this.state.quickViewVisibility} />
    </div>
   )
  }

}



export default App;
