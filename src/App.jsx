import "./assets/styles/App.css"
import Nav from "./components/Navbar/Nav";
import Header from "./components/Header/Header"
const App = () => {
  return (
    <div className="container">
      <Nav/>
      <Header/>
    </div>
  );
};

export default App;
