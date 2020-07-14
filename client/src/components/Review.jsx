import React from 'react';

import moment from 'moment';
import ImageModal from './ImageModal';

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      starPercentageRounded: 100,
      helpfulness: this.props.helpfulness,
    };
    this.getRatings = this.getRatings.bind(this);
    this.onClick = this.onClick.bind(this);
    this.addHepful = this.addHelpful.bind(this);
  }

  componentDidMount() {
    this.getRatings();
  }

  onClick() {
    // const { helpfulState } = this.state;
    // const { helpfulness } = this.props;
    if (this.state.helpfulness === this.props.helpfulness) {
      this.addHelpful();
    }
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      this.getRatings();
    }
  }

  getRatings() {
    const starsTotal = 5;
    const { rating } = this.props;
    const starPercentage = (rating / starsTotal) * 100;
    // const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    const starPercentageRounded = `${(starPercentage / 10) * 10}%`;
    this.setState({
      starPercentageRounded,
    });
  }

  addHelpful() {
    const helpfulPlusOne = this.state.helpfulness += 1;
    this.setState({
      helpfulness: helpfulPlusOne,
    });
  }

  render() {
    const { starPercentageRounded } = this.state;
    const { name, summary, helpfulness } = this.props;
    // const { summary } = this.props;
    // const { helpfulness } = this.props;
    const widthStyle = {
      width: starPercentageRounded,
    };
    const date = this.props.date.substring(0, 10);
    const { recommend } = this.props;
    const { body } = this.props;
    return (
      <div className="ratingBody">
        <div className="starsParent">
          <div className="stars-outer">
            <div className="stars-inner" style={widthStyle} />
          </div>
          <span className="number-rating" />
        </div>
        <div className="checkMark-userName-date-stars">
          <div className="checkMark">
            <img className="checkmark" alt="checkmark" src="https://bit.ly/2Ygb3dD" style={recommend ? { float: 'right' } : { display: 'none' }} />
          </div>
          <div className="userName-Date">
            <span>{`${name}, `}</span>
            &nbsp;
            {moment(date).format('MMMM Do YYYY')}
            &nbsp;
          </div>
        </div>
        <div className="summary">
          {summary}
        </div>
        <p className="reviewBody">{body}</p>
        <p className="helpfulness">
          Helpful?
          &nbsp;
          <a
            href="#"
            onClick={this.onClick}
          >
            Yes
          </a>
          (
          {this.props.helpfulness}
          )
          |
          &nbsp;
          Report
        </p>
        &nbsp;
        <div>
          {this.props.photos.length > 0 ? <ImageModal photo={this.props.photos[0].url} id={this.props.photos[0].id} /> : null}
        </div>
        <hr />
      </div>
    );
  }
}

export default Review;
