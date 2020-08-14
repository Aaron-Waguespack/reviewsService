import React, { Component } from 'react';

class AddReviewTable extends Component {
  constructor() {
    super();

    this.state = {
      size: false,
      width: false,
      comfort: false,
      quality: false,
      length: false,
      fit: false,
    };
    this.hideRows = this.hideRows.bind(this);
  }

  componentDidMount() {
    fetch('http://52.26.193.201:3000/reviews/102/meta')
      .then((res) => res.json())
      .then((data) => this.hideRows(data));
  }

  hideRows(data) {
    const dataKeys = Object.keys(data.characteristics);
    console.log(dataKeys);
    const stateKeys = Object.keys(this.state);
    console.log(stateKeys);
    for (let i = 0; i < dataKeys.length; i++) {
      if (stateKeys.includes(dataKeys[i].toLowerCase())) {
        this.setState({
          [dataKeys[i].toLowerCase()]: true,
        });
      }
    }
  }

  render() {
    const {
      size, width, comfort, quality, length, fit,
    } = this.state;
    return (
      <table className="table table-lg">
        <thead>
          <tr />
        </thead>
        <tbody>
          <tr style={size ? { display: 'block' } : { display: 'none' }}>
            <th scope="row">Size</th>
            <td>
              {/* one checkbox */}
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="SizeRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  A size too wide
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="SizeRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  1/2 a size too big
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="SizeRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Perfect
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="SizeRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  1/2 a size too small
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="SizeRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  A size too small
                </label>
              </div>
            </td>
          </tr>
          <tr style={width ? { display: 'block' } : { display: 'none' }}>
            <th scope="row">Width</th>
            <td>
              {/* one checkbox */}
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="WidthRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Too wide
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="WidthRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Slightly wide
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="WidthRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Perfect
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="WidthRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Slightly narrow
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="WidthRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Too narrow
                </label>
              </div>
            </td>
          </tr>
          <tr style={comfort ? { display: 'block' } : { display: 'none' }}>
            <th scope="row">Comfort</th>
            <td>
              {/* one checkbox */}
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="ComfortRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Perfect
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="ComfortRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Comfortable
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="ComfortRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Ok
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="ComfortRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Slightly uncomfortable
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="ComfortRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Uncomfortable
                </label>
              </div>
            </td>
          </tr>
          <tr style={quality ? { display: 'block' } : { display: 'none' }}>
            <th scope="row">Quality</th>
            <td>
              {/* one checkbox */}
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="QualityRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Perfect
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="QualityRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Pretty great
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="QualityRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  What I expected
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="QualityRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Below average
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="QualityRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Poor
                </label>
              </div>
            </td>
          </tr>
          <tr style={length ? { display: 'block' } : { display: 'none' }}>
            <th scope="row">Length</th>
            <td>
              {/* one checkbox */}
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="LengthRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Runs long
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="LengthRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Runs slightly long
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="LengthRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Perfect
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="LengthRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Runs slightly short
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="LengthRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Runs short
                </label>
              </div>
            </td>
          </tr>
          <tr style={fit ? { display: 'block' } : { display: 'none' }}>
            <th scope="row">Fit</th>
            <td>
              {/* one checkbox */}
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="FitRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Runs long
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="FitRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Runs slightly long
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="FitRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Perfect
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="FitRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Runs slightly tight
                </label>
              </div>
            </td>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="" id="materialUnchecked" name="FitRadios" />
                <label className="form-check-label" htmlFor="materialUnchecked">
                  Runs tight
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default AddReviewTable;
