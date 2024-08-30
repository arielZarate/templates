import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//=====================================0
import { Provider } from "react-redux";
import store from "./Redux/store/store";

//=========================================
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App
      title={
        "Proyecto base con typescript y redux (con redux/tookit y su version vieja 😀 "
      }
    />
  </Provider>
);
