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
import AdminManage from "./components/adminManage/adminManage";
import { useContext, useState, useEffect } from "react";
import { Context } from "./context/Context";
import Posts from "./components/posts";
import AccountSettings from "./components/accountSettings";
import FlashCardList from "./components/flashCard/FlashCardList";
import FlashCardNom from "./components/FlashCardNom/FlashCardList";
import Feedback from "./components/Feedback"
import TableFeedback from "./components/adminManage/TableFeedback"
import ManagePost from "./components/ManagePost"
import axios from "axios";

function App() {
  const { user } = useContext(Context);
  const [nomFlashcards, setNomFlashcards] = useState(SAMPLE_FLASHCARDS);
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  const [wordData, setWordData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/wordViets/random"
        );
        const data = response.data;
        setFlashcards(data); // Lưu trữ danh sách từ ngẫu nhiên trong biến state wordData
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/wordnoms/random"
        );
        const data = response.data;
        setNomFlashcards(data); // Lưu trữ danh sách từ ngẫu nhiên trong biến state nomFlashcards
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData1();
  }, []);

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
          <Route path="/admin-manage" element={<AdminManage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/accountSettings" element={<AccountSettings />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/tablefeedback" element={<TableFeedback />} />
          <Route path="/managepost" element={<ManagePost />} />

          <Route
            path="/flashCardList"
            element={<FlashCardList flashcards={flashcards} />}
          />
          <Route
            path="/flashCardNom"
            element={<FlashCardNom flashcards={nomFlashcards} />}
          />
        </Routes>
      </Container>
      <Routes>
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

const SAMPLE_FLASHCARDS = [];

export default App;
