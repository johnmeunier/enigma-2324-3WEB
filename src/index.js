import ReactDOM from "react-dom/client";
import { worker } from "./mocks/browser";
import App from "./App";

import "./index.css";

// worker.start();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
