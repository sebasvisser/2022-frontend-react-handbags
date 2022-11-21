import React from 'react';
import './App.css';
import Buttons
    from "./components/Buttons";
import Products
    from "./components/Products";

// image imports, omdat react gek is

import bag1
    from "./assets/bag_1.png";
import bag2
    from "./assets/bag_2.png";
import bag3
    from "./assets/bag_3.png";
import bag4
    from "./assets/bag_4.png";
import brand
    from "./assets/brand.png";
import story
    from "./assets/our_story.png";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>

          <Buttons buttonText={"shop all bags"} />
          <Buttons buttonText={"to the collection"} />
          <Buttons buttonDisabled={true} buttonText={"pre-orders"} />

          <main>
            <Products label={"Best seller"} name={"The handy bag"} image={bag1} price={400} />
            <Products label={"Best seller"} name={"The stylish bag"} image={bag2} price={250}/>
            <Products label={"New collection"} name={"The simple bag"} image={bag3} price={300}/>
            <Products label={"New collection"} name={"The trendy bag"} image={bag4} price={150}/>

          </main>
      </>
  );
}

export default App;



