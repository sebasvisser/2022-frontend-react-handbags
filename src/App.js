import React from 'react';
import './App.css';
import Buttons
    from "./components/Buttons";
import Products
    from "./components/Products";
import Tiles from "./components/Tiles";

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

          <footer>
              <Tiles title={"The Brand"}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores enim error esse incidunt maxime obcaecati quod quos repellendus rerum voluptatum.</p>
                  <p>Adipisci animi dolorem, doloribus eius est fugit impedit in incidunt inventore ipsam iste iure laborum libero minus nihil nobis non nostrum officia omnis porro quod ratione reiciendis, rem reprehenderit sequi veritatis vero.</p>
              </Tiles>
              <Tiles image={brand} title={"The Brand"} />
              <Tiles image={story} title={"Our Story"} />
              <Tiles><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto atque blanditiis corporis cupiditate deserunt dolor dolore eius, error esse, id illo praesentium rem sequi tempore veniam vero voluptate voluptatibus.</p></Tiles>
          </footer>
      </>
  );
}

export default App;



