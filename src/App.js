import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
