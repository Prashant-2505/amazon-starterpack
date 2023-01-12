
import "./App.css";
import Header from './components/header/Header'
import Hero from "./components/hero/Hero";
import Products from "./components/Products/Products";
import Slider from "./components/slider/Slider";
import Virtual from "./components/virtual/Virtual";

function App() {
  return (
  <div className="App">
    <Header/>
    <Hero/>
    <Slider/>
    <Virtual/>
    <Products/>

  </div>
  );
}

export default App;
