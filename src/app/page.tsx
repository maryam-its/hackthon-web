import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Herosection from "./Components/Homepage";
import ShopCard from "./Components/Editpick";
import Carousel2 from "./Components/Neuraluniverse";
import NeuralProduct from "./Components/White";
import FeaturedPosts from "./Components/Featuredpost";





const App = () => {
  return (
    <div>
      <Header />
      <Herosection />
      <ShopCard />
      <Carousel2 />
      <NeuralProduct />
      <FeaturedPosts />
       
    <Footer />

      
      
      
    </div>
  );
};

export default App;

