import "./App.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Titulos from "./componentes/Titulos";
import Body from "./componentes/Body";
import "@fontsource/poppins/700.css"; // Specify weight

function App() {
  return (
    <div className="app">
      <div className="app-background">
        <Header />
        <Titulos />

        <Body />




    

      </div>

      <Footer />




    </div>
    
  );
}

export default App;
