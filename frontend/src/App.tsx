import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import RegisterationPage from "./pages/registeration-page";
import ProfilePage from "./pages/profile-page";
import Explore from "./pages/explore";
import LoginPage from "./pages/login-page";
import CreatePost from "./pages/create-post";
import MainPage from "./pages/main-page";
import RegisterationPage1 from "./pages/registeration-page1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/explore":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/create-post":
        title = "";
        metaDescription = "";
        break;
      case "/registration-page":
        title = "";
        metaDescription = "";
        break;
      case "/registeration-page-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/profile-page" element={<ProfilePage />} />

      <Route path="/explore" element={<Explore />} />

      <Route path="/login-page" element={<LoginPage />} />

      <Route path="/create-post" element={<CreatePost />} />

      <Route path="/registration-page" element={<RegisterationPage />} />

      <Route path="/registeration-page-1" element={<RegisterationPage1 />} />
    </Routes>
  );
}
export default App;
