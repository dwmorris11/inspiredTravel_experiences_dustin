import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Parent from './parent_module.jsx';
import Toolbar from './toolbar_module.jsx';
import '../public/dist/css/font.css';
import '../public/dist/css/general.css';
import '../public/dist/css/toolbar.css';
import '../public/dist/css/parent.css';
import '../public/dist/css/experience.css';
import '../public/dist/css/description.css';
import '../public/dist/css/review.css';
import '../public/dist/css/style.css';
import '../public/dist/css/quickview.css';

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

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
