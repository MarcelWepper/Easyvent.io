import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './Home.css'

ReactGA.initialize('UA-133010328-1');
ReactGA.pageview(window.location.pathname + window.location.search);


export default class App extends React.Component {
    render(){
      return(
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
    );
  }
}
