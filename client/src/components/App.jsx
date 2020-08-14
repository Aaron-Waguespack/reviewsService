import React, { Component } from 'react';
import ReviewList from './ReviewList';
import Sidebar from './Sidebar';

class App extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      filterReviews: [],
      filterCounter: 0,
      hide5Stars: false,
      hide4Stars: false,
      hide3Stars: false,
      hide2Stars: false,
      hide1Stars: false,
      style: 'none',
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterReviewList = this.filterReviewList.bind(this);
    this.toggleSelected = this.toggleSelected.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.sortByNew = this.sortByNew.bind(this);
    this.sortByHelpful = this.sortByHelpful.bind(this);
    this.sortByRelevant = this.sortByRelevant.bind(this);
  }

  componentDidMount() {
    fetch(' http://52.26.193.201:3000/reviews/102/list')
      .then((res) => res.json())
      .then((data) => this.setState({
        reviews: data.results,
        filterReviews: data.results,
      }));
  }

  filterReviewList(e) {
    // toggle
    this.setState({
      style: 'block',
    });
    this.toggleSelected(e);
  }

  componentDidUpdate(previousProps, previousState) {
    const { filterReviews, reviews } = this.state;
    const newArr = [];
    const stateEntries = Object.entries(this.state);
    for (let j = 0; j < stateEntries.length; j++) {
      if (!stateEntries[j][1] && !Array.isArray(stateEntries[j][1])) {
        const num = Number(stateEntries[j][0].substring(4, 5));
        for (let k = 0; k < reviews.length; k++) {
          if (reviews[k].rating === num) {
            newArr.push(reviews[k]);
          }
        }
      }
    }
    const previousStateStrung = JSON.stringify(previousState);
    if (previousStateStrung !== JSON.stringify(this.state)) {
      this.setState({
        filterReviews: newArr,
      });
    }
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => ({
      value,
    }));
  }

  toggleSelected(e) {
    const stateEntries = Object.entries(this.state);
    const { filterCounter } = this.state;
    const {
      hide5Stars, hide4Stars, hide3Stars, hide2Stars, hide1Stars,
    } = this.state;
    for (let i = 0; i < stateEntries.length; i++) {
      if (filterCounter === 0 && stateEntries[i][0].includes(Number(e.target.innerText[0]))) {
        this.setState({
          hide5Stars: true,
          hide4Stars: true,
          hide3Stars: true,
          hide2Stars: true,
          hide1Stars: true,
          filterCounter: 1,
        });
        this.setState((prevState) => ({
          [stateEntries[i][0]]: !prevState[stateEntries[i][0]],
        }));
      } else if (!Array.isArray(stateEntries[i][1]) && stateEntries[i][0].includes(Number(e.target.innerText[0]))) {
        this.setState((prevState) => ({
          [stateEntries[i][0]]: !prevState[stateEntries[i][0]],
        }));
      }
    }
  }

  removeFilter() {
    this.setState({
      hide5Stars: false,
      hide4Stars: false,
      hide3Stars: false,
      hide2Stars: false,
      hide1Stars: false,
      style: 'none',
      filterCounter: 0,
    });
  }

  sortByNew() {
    const state = this.state.filterReviews;
    function customSort(a, b) {
      if (a.date > b.date) {
        return -1;
      } if (a.date < b.date) {
        return 1;
      }
      return 0;
    }
    this.setState({
      filterReviews: state.sort(customSort),
    });
  }

  sortByHelpful() {
    const state = this.state.filterReviews;
    function customSort(a, b) {
      if (a.helpfulness > b.helpfulness) {
        return -1;
      } if (a.helpfulness < b.helpfulness) {
        return 1;
      }
      return 0;
    }
    this.setState({
      filterReviews: state.sort(customSort),
    });
  }

  sortByRelevant() {
    const state = this.state.filterReviews;
    function customSort(a, b) {
      const aggregate = 0;
      const dateScoreA = (new Date(a.date).getTime() / 1000.0) / 10000000;
      const scoreA = dateScoreA + ((a.helpfulness / 10) * (a.helpfulness / 2));
      const dateScoreB = (new Date(b.date).getTime() / 1000.0) / 10000000;
      const scoreB = dateScoreB + ((b.helpfulness / 10) * (a.helpfulness / 2));
      if (scoreA > scoreB) {
        return -1;
      } if (scoreA < scoreB) {
        return 1;
      }
      return 0;
    }
    this.setState({
      filterReviews: state.sort(customSort),
    });
  }

  render() {
    const {
      reviews, filterReviews, hide5Stars, hide4Stars, hide3Stars, hide2Stars, hide1Stars, style,
    } = this.state;
    return (
      <div className="row container">
        <div className="d-none d-sm-block col-xl" />
        {/* <div className="sidebarAndRatings"> */}
        <div className="col">
          <Sidebar
            reviewData={filterReviews}
            filter={this.filterReviewList}
            removeFilter={this.removeFilter}
            hide5Stars={hide5Stars}
            hide4Stars={hide4Stars}
            hide3Stars={hide3Stars}
            hide2Stars={hide2Stars}
            hide1Stars={hide1Stars}
            style={style}
          />
        </div>
        <div className="col-7">
          <ReviewList
            reviewData={filterReviews}
            sortByNew={this.sortByNew}
            sortByHelpful={this.sortByHelpful}
            sortByRelevant={this.sortByRelevant}
          />
        </div>
        {/* </div> */}
        {/* <div className="d-none d-sm-block col-lg-2"></div> */}
        {/* </div> */}
        {/* <div className="d-sm-block col"></div> */}
      </div>
    );
  }
}

export default App;
