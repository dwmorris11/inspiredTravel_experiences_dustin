import React from 'react';
import axios from 'axios';
import Parent from './parent_module.jsx';
import Toolbar from './toolbar_module.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [],
      imageBaseUrl: 'https://images-trip.s3.us-east-2.amazonaws.com/'
    };
  }
  componentDidMount () {
    axios.get('/005')
    .then((res) => {
      this.setState({
        experiences: res.data
      });
    })
    .catch((error) => console.log(error));
  }

  render() {
   return (
     <div>
        <Toolbar category="Recommended" subtitle="Our most popular tours and activities" />
        <Parent experiences={this.state.experiences} imageBaseUrl={this.state.imageBaseUrl}/>
    </div>
   )
  }

}



export default App;
