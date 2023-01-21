import "./assets/styles/App.css"
import Nav from "./components/Navbar/Nav";
import Header from "./components/Header/Header"
import { LineH } from "./components/separatorLine/Line";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className="container">
      <Nav/>
      <Header/>
      <LineH/>
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
