import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Reservation from "./components/Reservation";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
              </>
            }
          />
          <Route path="/about" element={<>about</>} />
          <Route path="/menu" element={<>Menu</>} />
          <Route
            path="/reservations"
            element={
              <>
                <Reservation />
              </>
            }
          />
          <Route path="/order" element={<>Order Online</>} />
          <Route path="/login" element={<>Login</>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
