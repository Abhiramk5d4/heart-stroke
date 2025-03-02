import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class HeartStrokeDataSection extends Component {
  state = {
    username: '',
  }

  render() {
    return (
      <div className="main-data-container">
        <div className="container">
          <h2>Heart Stroke Detection</h2>
          <div className="form-container">
            <p>Enter patient Details</p>
            <div className="foo">
              <div className="label-container">
                <label>Gender:</label>
                <input className="input-element" type="text" />
              </div>

              <div className="label-container">
                <label>Age:</label>
                <input className="input-element" type="number" />
              </div>

              <div className="label-container">
                <label>Hypertension (yes=1, No=0):</label>
                <input className="input-element" type="number" />
              </div>
              <div className="label-container">
                <label>Ever Married:</label>
                <input className="input-element" type="text" />
              </div>

              <div className="label-container">
                <label>Work Type:</label>
                <input className="input-element" type="text" />
              </div>

              <div className="label-container">
                <label>Residence Type:</label>
                <input className="input-element" type="text" />
              </div>

              <div className="label-container">
                <label>Avg Glucose Level:</label>
                <input className="input-element" type="number" step="0.01" />
              </div>

              <div className="label-container">
                <label>BMI:</label>
                <input className="input-element" type="number" step="0.1" />
              </div>

              <div className="label-container">
                <label>Smoking Status:</label>
                <input className="input-element" type="text" />
              </div>

              <div className="label-container">
                <label>Stroke (yes=1, No=0):</label>
                <input className="input-element" type="number" />
              </div>

              <Link className="link-element" to="patient-report">
                <button type="submit" className="btn">
                  Predict
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeartStrokeDataSection
