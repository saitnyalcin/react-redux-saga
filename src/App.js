import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import loadingDog from "./images/loading-dog.gif";
import logo from "./logo.svg";
import { fetchDog } from "./redux/actions/actionCreators";

export function App(_props) {
  const newURL = useSelector((state) => state.url);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const status = useSelector((state) => state.status);

  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="" />
          <h1>Dog Api</h1> The internet's biggest collection of open source dog
          pictures.
        </header>

        <div>
          <button onClick={() => dispatch(fetchDog())}>Show Dog</button>
          <div>
            Result status: {status ? "Success!" : "Please click button above"}
          </div>
          {loading ? (
            <div>
              <img
                src={loadingDog}
                alt="loadingDog"
                height="100px"
                weight="150px"
              />
            </div>
          ) : error ? (
            <p>Error, try again</p>
          ) : (
            <p>
              <img className="dog-img" src={newURL} alt="" />
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
