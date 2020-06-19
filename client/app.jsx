import React from 'react';
import Experience from './experience_module';
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
    axios.get('/5')
    .then((data) => {
      this.setState({
        experiences: data.data
      });
      console.log(this.state.experiences);
    })
    .catch((error) => console.log(error));
  }

  render() {
   return (
     <div>
      {this.state.experiences.map( (exp) => (<Experience
        cost={exp.cost}
        id={exp.id}
        image={this.state.imageBaseUrl + exp.image}
        description={exp.description}
        cost_unit={exp.cost_unit}
      />))}
    </div>
   )
  }

}

export default App;








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