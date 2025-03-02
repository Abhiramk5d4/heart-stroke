// FIX1: To use Switch component, it should be imported
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import HeartStrokeDataSection from './components/DataEntry'
import PatientReport from './components/PatientReport'
import DoctorsList from './components/DoctorsList'
import DoctorDetailSection from './components/DoctorDetailSection'
import './App.css'

const App = () => (
  // FIX2: Routes should be wrapped with Switch component from react-router-dom
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/heart-stroke-predict/" component={HeartStrokeDataSection} />
    <Route path="/patient-report/" component={PatientReport} />
    <Route path="/doctors-list" component={DoctorsList} />
    <Route path="/doctors/:id" component={DoctorDetailSection} />
    <Route component={NotFound} />
  </Switch>
)

export default App
