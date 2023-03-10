import { Component } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainPage />
        <Footer />
      </div>
    );
  }
}
