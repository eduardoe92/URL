import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from "./App";
import '@fontsource-variable/jost';

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
