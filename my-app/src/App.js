import { Component } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
