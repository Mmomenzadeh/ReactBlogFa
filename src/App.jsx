import "./assets/styles/App.css"
import Nav from "./components/Navbar/Nav";
import Header from "./components/Header/Header"
import { LineH } from "./components/separatorLine/Line";

const App = () => {
  return (
    <div className="container">
      <Nav/>
      <Header/>
      <LineH/>
    </div>
  );
};

export default App;
