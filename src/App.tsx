import Features from "./Componentes/Features";
import NavBar from "./Componentes/Nav";
import Home from "./Componentes/Home";
import Plan from "./Componentes/Plan";
import Mapa from "./Componentes/Mapa";
import Footer from "./Componentes/Footer";
import TarjetaSlider from "./Componentes/TarjetaCarrousel";
import DarkMode from "./Componentes/NightMode";

export const BDD_URL = "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";

function App() {

  
  return (

    <div className="dark:bg-slate-900 dark:text-slate-200">
      <NavBar></NavBar>
      <Home></Home>
      <Features></Features>
      <Plan></Plan>
      <Mapa></Mapa>
      <DarkMode></DarkMode>
      <TarjetaSlider></TarjetaSlider>
      <Footer ></Footer>
    </div>

  );
}

export default App;
