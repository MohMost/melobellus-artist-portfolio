import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Gallery />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
