import React from 'react';
import './App.css';
import Button
    from "./components/Button";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>

          <Button buttonText={"shop all bags"} />
          <Button buttonText={"to the collection"} />
          <Button buttonDisabled={true} buttonText={"pre-orders"} />

      </>
  );
}

export default App;



