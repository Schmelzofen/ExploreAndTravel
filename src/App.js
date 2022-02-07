import './App.scss'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Header from "./component/partials/Header"
import Home from "./component/pages/Home"
import Destination from "./component/pages/Destination"
import About from "./component/pages/About"
import Partner from "./component/pages/Partner"
import Footer from "./component/partials/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destination />} />
          <Route path="/about" element={<About />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
