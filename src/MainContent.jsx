import "./MainContent.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import BookDetail from "./pages/BookDetail";
import SubpageLayout from "./pages/SubpageLayout";

export default function MainContent({ currentItem }) {
  return (
    <main className="main">
      <h1 className="app__headline">Flourish and Blotts</h1>

      {currentItem === "" && <p>Welcome!</p>}

      {currentItem === "about" && <p>About us: ...</p>}

      {currentItem === "contact" && <p>Please contact us</p>}

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/" element={<SubpageLayout />}>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Route>
      </Routes>
    </main>
  );
}
