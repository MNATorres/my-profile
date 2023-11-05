import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css"
import Portfolio from "./components/Portfolio";
import DataContact from "./components/DataContact";
import Footer from "./components/Footer";
import TitleSection from "./components/TitleSection";

function App() {
  return (
    <Box w={'full'} bg={'#343541'} color={'#d9d9e3'}>
      <Navbar />
      <Hero />
      <TitleSection />
      <Portfolio />
      <TitleSection />
      <DataContact />
      <Footer />
    </Box>
  );
}

export default App;
