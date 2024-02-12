import React from "react";
import ReactDOMClient from "react-dom/client";
import { MacbookPro } from "./screens/MacbookPro";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<MacbookPro />);
