import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Parent from './parent_module';
import Toolbar from './toolbar_module';
import Quickview from './quickview/quickview_module';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [],
      imageBaseUrl: 'https://images-trip.s3.us-east-2.amazonaws.com/',
      quickViewVisibility: false,
      quickViewExperience: 0,
    };
    this.quickViewClick = this.quickViewClick.bind(this);
    this.quickViewClose = this.quickViewClose.bind(this);
    this.seeMoreClick = this.seeMoreClick.bind(this);
  }

  componentDidMount() {
    const url = new URL(window.location.href);
    const id = url.pathname;

    axios.get(`${id}api/experiences`)
      .then((res) => {
        this.setState({
          experiences: res.data,
        });
      })
      .catch((error) => console.log(error)); // eslint-disable-line
  }

  quickViewClick(arrayposition) {
    const position = arrayposition;
    this.setState({
      quickViewVisibility: true,
      quickViewExperience: position,
    });
  }

  seeMoreClick() {
    const overFlowElement = document.getElementsByClassName('OverflowOuter');
    const seeMoreElement = document.getElementsByClassName('SeeMore');
    overFlowElement[0].style['max-height'] = '100%';
    overFlowElement[0].style.overflow = 'visible';
    seeMoreElement[0].style.display = 'none';
    this.setState({});
  }

  quickViewClose() {
    this.setState({
      quickViewVisibility: false,
    });
  }

  render() {
    const {
      experiences, imageBaseUrl, quickViewVisibility, quickViewExperience,
    } = this.state;
    if (_.isEmpty(experiences)) {
      return (<div />);
    }
    return (
      <div>
        <Toolbar category={experiences[0].category} subtitle={experiences[0].subtitle} />
        <Parent
          experiences={experiences}
          imageBaseUrl={imageBaseUrl}
          quickViewClick={this.quickViewClick}
          seeMoreClick={this.seeMoreClick}
        />
        {quickViewVisibility
          ? (
            <Quickview
              experience={experiences[quickViewExperience]}
              imageBaseUrl={imageBaseUrl}
              quickViewClose={this.quickViewClose}
            />
          )
          : <div />}
      </div>
    );
  }
}

export default App;
