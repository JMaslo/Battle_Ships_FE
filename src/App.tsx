import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Players from "./components/players/Players";
import Fields from "./components/fields/Fields";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">      
      <Header />
      <div className="h-3 border-b-2 border-gray-300 mr-96 ml-96"></div>   
      <Players /> 
      <Fields />
      <Fields />    
      <Footer />      
    </div>
  );
}