import { Component } from 'react';
import { Footer, Header } from './components/index';
import MainPage from './pages/MainPage/MainPage';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MainPage />
        <Footer />
      </>
    );
  }
}
