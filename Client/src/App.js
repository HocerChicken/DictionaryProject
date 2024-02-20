import "./App.scss";
// import reportWebVitals from './reportWebVitals';
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import Container from "react-bootstrap/Container";
import Login from "./components/Login";
import Home from "./components/Home";
import MyDict from "./components/MyDict";
import Translate from "./components/Translate";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/mydict" element={<MyDict />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<TableUsers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
      {/* <Footer /> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
