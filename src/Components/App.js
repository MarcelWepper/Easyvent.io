import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './Home.css'
import {createStore} from "redux";
import {Provider} from "react-redux";

ReactGA.initialize('UA-133010328-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const initialState={
  home: "home",
  nav: "false"

};

function reducer(state = initialState, action){
  console.log(action)
  switch (action.type) {
    case "NAVCHANGE":
      return{
        home: "nothome"

      };
      case "NAVHOME":
        return{
          home: "home"

        };
        case "NAVLOCATION":
          return{
            home: "location"
          };


    default:
      return state;
  }
}

const store = createStore(reducer);

export default class App extends React.Component {
    render(){
      return(
      <Provider store={store}>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </Provider>
    );
  }
}
