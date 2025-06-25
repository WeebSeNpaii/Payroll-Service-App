import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import SoftwareDevelopment from "./Pages/Services/SoftwareDevelopment.jsx";
import CloudAppDevelopment from "./Pages/Services/CloudAppDevelopment.jsx";
import HireTeam from "./Pages/Services/HireTeam.jsx";
import MobileAppDevelopment from "./Pages/Services/MobileAppDevelopment.jsx";
import TestingQA from "./Pages/Services/TestingQA.jsx";
import SalesforceAppDevelopment from "./Pages/Services/SalesforceAppDevelopment.jsx";



import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/ContactUs" element={<ContactUs />} />

      <Route path="/Services/Software-Development" element={<SoftwareDevelopment />} />
      <Route path="/Services/Cloud-App-Development" element={<CloudAppDevelopment />} />
      <Route path="/Services/HireTeam" element={<HireTeam />} />
      <Route path="/Services/Mobile-App-Development" element={<MobileAppDevelopment />} />
      <Route path="/Services/Salesforce-App-Development" element={<SalesforceAppDevelopment />}/>
      <Route path="/Services/Testing-and-QA" element={<TestingQA />} />

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
