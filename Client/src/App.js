import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import Container from "react-bootstrap/Container";
import Login from "./components/Login";
import Home from "./components/Home";
import MyDict from "./components/MyDict";
import TranslateViet from "./components/TranslateViet";
import TranslateNom from "./components/TranslateNom";
import TranslateCheckNom from "./components/TranslateCheckNom";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Register from "./components/Register";
import PostsAdmin from "./components/PostsAdmin";
import Footer from "./components/Footer";
import Single from "./components/single";
import UserPost from "./components/userPost/userPosts";
import AdminManage from "./components/adminManage/adminManage";
import { useContext } from "react";
import { Context } from "./context/Context";
import Posts from "./components/posts"
import AccountSettings from "./components/accountSettings";

function App() {
  const { user } = useContext(Context);
  return (
    <div className="app-container">
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translate" element={<TranslateViet />} />
          <Route path="/translate2" element={<TranslateNom />} />
          <Route path="/translate3" element={<TranslateCheckNom />} />
          <Route path="/mydict" element={<MyDict />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<TableUsers />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/postsAdmin" element={<PostsAdmin />} />
          <Route path="/userPost" element={<UserPost />} />
          <Route path="/adminManage" element={<AdminManage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/accountSettings" element={<AccountSettings />} />

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
