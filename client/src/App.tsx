import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/footer";
import NavBar from "./components/layout/nav";
import HomePage from "./pages/home/page";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
