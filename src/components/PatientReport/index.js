import {Link} from 'react-router-dom'

import './index.css'

const PatientReport = () => {
  console.log('S')
  return (
    <div className="main-data-container">
      <div className="container-report">
        <h2>Heart Stroke Detection</h2>
        <div className="form-container-report">
          <p className="report-ready-element">Your report is ready.</p>
          <h1 className="doctor-report-heading">
            You have _______ risk of heart stroke.
          </h1>

          <Link to="/" className="link-element report-buttons1">
            Back to Home Page
          </Link>
          <Link to="doctors-list" className="link-element report-buttons">
            Consult With Doctor
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PatientReport
