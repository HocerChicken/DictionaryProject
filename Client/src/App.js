import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import Container from "react-bootstrap/Container";
import Login from "./components/Login";
import Home from "./components/Home";
import MyDict from "./components/MyDict";
import Translate from "./components/Translate";
import Translate2 from "./components/Translate2";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Register from "./components/Register";
import PostsAdmin from "./components/PostsAdmin";
import Footer from "./components/Footer";
import Single from "./components/single";
import UserPost from "./components/userPost/userPosts"
import UserCreatePost from "./components/userCreatePost/userCreatePost"
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <div className="app-container">
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/translate2" element={<Translate2 />} />
          <Route path="/mydict" element={<MyDict />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<TableUsers />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/postsAdmin" element={<PostsAdmin />} />
          <Route path="/userPost" element={<UserPost />} />
          <Route path="/userCreatePost" element={<UserCreatePost />} />
        </Routes>
      </Container>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/login"
          element={
            user ? (
              <Container>
                <Home />
              </Container>
            ) : (
              <Login />
            )
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
