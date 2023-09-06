import ReactDOM from "react-dom/client"; //sintaxis de las importaciones
//import QUECOSAMEQUIEROTRAER from './ruta o modulo'
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
