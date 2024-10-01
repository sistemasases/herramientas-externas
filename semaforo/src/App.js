import "./App.css";
import Header from "./componentes/Header";
import Titulos from "./componentes/Titulos";
import Body from "./componentes/Body";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/400.css";
import BackgroundBox from "./componentes/Background";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div className="app">
      <BackgroundBox />
      <Header />
      <Titulos />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
