import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Header />
      <div className="main">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
