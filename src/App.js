import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import logo from './logo.svg';
import { fetchDog } from './redux/actions/actionCreators';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="" />
          <h1>Dog Api</h1> The internet's biggest collection of open source dog
          pictures.
        </header>

        <div>
          <button onClick={() => this.props.loadDogImg()}>Show Dog</button>
          {this.props.loading ? (
            <p>Loading...</p>
          ) : this.props.error ? (
            <p>Error, try again</p>
          ) : (
            <p>
              <img className="dog-img" src={this.props.url} alt="" />
            </p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    url: state.url
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadDogImg: () => {
      // dispatch({ type: TYPES.FETCHED_DOG });
      dispatch(fetchDog());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
