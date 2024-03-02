import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// ====Styles====================================
import "./index.css";

// ====Components================================
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")).render(<App />);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
