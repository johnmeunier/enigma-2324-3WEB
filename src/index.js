import ReactDOM from "react-dom/client";
import { Router } from "./pages/Router";
import { worker } from "./mocks/browser";

import "./index.css";

worker.start();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Router);
