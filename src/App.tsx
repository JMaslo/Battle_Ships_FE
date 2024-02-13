import { StompSessionProvider } from "react-stomp-hooks";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContainer from "./components/MainContainer";

export default function App() {
  return (
    <StompSessionProvider url={"http://localhost:8080/ws"} debug={STOMP => console.log({STOMP})}>
    <div className="w-full min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">      
      <Header />
      <div className="h-3 border-b-2 border-gray-300 mr-96 ml-96"></div>
      <MainContainer />
      <Footer />
    </div>
    </StompSessionProvider>
  );
}
