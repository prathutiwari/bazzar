import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StoreLocator from "./components/StoreLocator";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/store-locator" element={<StoreLocator />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;