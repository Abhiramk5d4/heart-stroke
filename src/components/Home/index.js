import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class Home extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="nav-bar-container">
          <img
            src="https://s3-alpha-sig.figma.com/img/2cac/0279/3519b1d4da00933dfa11e09cb299a543?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pfTTU8A~SrR1FzMT~mH-WEUPTL65pYIsyNKG5lBZhHCPe5Tue5kWrEIz7ckrtTOCah-RVPgrr7pJOcImWthIqEWSwhB-csy9m-Yxf5KTSZ-1cZa4KfZIHydDS05Cp52D9Zkyup9gtpQJVosCKv-r1NjuRDJy11sdrPYq~SI3exDrcs6ZJBpo1IFRpLxI6m5NlIuaUTWjS-f0P22VZqubFOzfNZpgjU9tQEU5lnccYmyAspSe4cMYgWiZ4GCo2gk8HIVWEnBEOJQy7mYdfoKSD-uqG62C~yHep222v-KJ93-DeUCQXUf6hNXJVFX8bmOPGXfndOLVGBMx7zk~Q1vhOQ__"
            className="image-logo"
            alt="website logo"
          />
          <div className="name-login-container">
            <h1 className="dual-stroke-heading">Dual Stroke Prediction</h1>
            <div className="login-sign-container">
              <button type="button" className="login">
                Login
              </button>
              <button type="button" className="sign-in">
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="form-home-container">
          <Link className="brain-detect-section" to="heart-stroke-predict">
            <h1 className="text-click">Heart Stroke Detection</h1>
            <div className="image-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/8b05/1a5f/8e0814eb23ff2363cd28de70e7c9ee32?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kViyXvJ62qKXjSR03p9Q9FnjeKHTNAuPaIMFl5pOs6ulgKTdBEG0tbXw0Aaz2ECjQNJProO~1E-Yta3KKb6GzHjDeLxhN5ZTgSuxtit6I5DCU9u3CFcg2cUeFjYI1nV9hr1Pk90PG3~7AnKMq4S04CwBE9sM2LpDDDnyUsY5e3n-CesfjV6F0yUxjGmuPhZEA2dk-2Q~lso2-wiPm0m8NIO2MuKFV0qoC4k4PaNDZ-5C4FF2AvmzF3O~5Zu-liB3ukIba39xGnd5TgmnZBfVYK-m0LZAhTRiLrBSR0~KkUr9CaiT42ymJurMPZ2UJLKeuApQrPSQBE~prJQAFipNbA__"
                alt="Heart "
                className="image-heart-brain"
              />
            </div>
            <button type="button" className="predict-btn">
              Predict
            </button>
          </Link>
          <Link className="brain-detect-section" to="brain-stroke-predict">
            <h1 className="text-click">Brain Stroke Detection</h1>
            <div className="image-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/2e8e/9af5/f6d8fafb1d0de14ff0e78b20924dcf4b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ib4iKU9YMsoTdfSyWMG1RViy-SaFn5qYMt0NsTSgIwLQDqOe9rfJ2ZaN4NzCK-0Zf0MvsEmEyRkQbU-4ozmL39bCP1EwzDnEnwmuw1-6v9jAdX~FXWqwLoByptdGJ16lbHWr4FxIfaS3~nwFelILqpLei0s7dvqFlXl-pgxKYvVLZUqqnl-m6mwfVz5T4177~~OHTZfl2epqCH8JAvdzC12IPbRh03qvQSKKrKJcJQ529CDikaXwRfe6AlOMNYio9oIy7WU5fLPHv9IXoNLeWpoa-2sRB76dlOXD2YcrP~S9wJ8mQOxeLhogQxPKXU0krb7MyDjeDtn4PqgBBgpTnA__"
                alt="Brain "
                className="image-brain"
              />
            </div>
            <button type="button" className="predict-btn">
              Predict
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
