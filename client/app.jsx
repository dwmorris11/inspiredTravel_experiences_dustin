import React from 'react';
import Experience from './experience_module.jsx';
import Toolbar from './toolbar_module.jsx';
import axios from 'axios';

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
      <div className="Parent_Container">
        {this.state.experiences.map( (exp) => (<Experience
          cost={exp.cost}
          id={exp.id}
          image={this.state.imageBaseUrl + exp.image}
          description={exp.description}
          cost_unit={exp.cost_unit}
        />))}
      </div>
    </div>
   )
  }

}

export default App;
