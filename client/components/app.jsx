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
      quickViewVisibility: false,
    };
  }

  componentDidMount() {
    axios.get('/005') // TODO
      .then((res) => {
        this.setState({
          experiences: res.data,
        });
      })
      .catch((error) => console.log(error)); // eslint-disable-line
  }

  render() {
    const { experiences, imageBaseUrl, quickViewVisibility } = this.state;
    if (_.isEmpty(experiences)) {
      return (<div />);
    }
    return (
      <div>
        <Toolbar category={experiences[0].category} subtitle={experiences[0].subtitle} />
        <Parent experiences={experiences} imageBaseUrl={imageBaseUrl} />
        <Quickview
          experiences={experiences}
          imageBaseUrl={imageBaseUrl}
          visibility={quickViewVisibility}
        />
      </div>
    );
  }
}

export default App;
