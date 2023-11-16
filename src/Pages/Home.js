import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Provider } from "react-redux";
import store from "../store/store";

const Home = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider>
    </div>
  );
};

export default Home;
