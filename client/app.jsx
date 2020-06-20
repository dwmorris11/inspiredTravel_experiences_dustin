import React from 'react';
<<<<<<< HEAD
import Experience from './experience_module.jsx';
import Toolbar from './toolbar_module.jsx';
=======
import Experience from './experience_module';
>>>>>>> 5476cd40ae6236f5079c9a9ba78371d798bf6a65
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
<<<<<<< HEAD
=======








// const experiencesSchema = new mongoose.Schema({
//   id: { type: Number, unique: true },
//   heart: Boolean,
//   image: String,
//   description: String,
//   rating: Number,
//   cost_unit: {
//     cost: Number,
//     unit: String,
//   },
//   link: String,
//   popularity: Number,
//   quickview: quickViewSchema,
// }, {
//   timestamps: true,
// });

// id: { type: Number, unique: true },
// category: String,
// overview: String,
// languages: Array,
// vouchers_allowed: Array,
// tour_time: {
//   time: Number,
//   unit: String,
// },
// instant_confirmation: Boolean,
// map_address: {
//   lat: Number,
//   lng: Number,
// },
>>>>>>> 5476cd40ae6236f5079c9a9ba78371d798bf6a65
