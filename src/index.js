import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Wrapper from "./components/Wrapper";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Wrapper>
          <Provider store={store}>
          <App  date={Date.now()}/>
          </Provider>
      </Wrapper>
    </BrowserRouter>

      );


