import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./authContext/AuthContext";
// import { MovieContextProvider } from "./context/movieContext/MovieContext";
// import { ListContextProvider } from "./context/listContext/ListContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      {/* <MovieContextProvider>
        <ListContextProvider> */}
          <App />
        {/* </ListContextProvider>
      </MovieContextProvider> */}
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

