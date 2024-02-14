import { useState } from "react";

// other components
import Image from "./components/Image/Image";
import Button from "./components/Button/Button";

// data
import { imageURLs, yesImageSrc } from "./imageData/imageData";

// styles
import "./App.css";

const App = () => {
  const [yes, setYes] = useState(false);

  return (
    <>
      {!yes && (
        <div className="App">
          <h1 className="shade">HEY YOU!</h1>
          <Image imageURLs={imageURLs} />
          <h2 className="shade">WILL YOU BE MY VALENTINE?!</h2>
          <div>
            <Button text="YES" setYes={setYes} onClick={() => setYes(true)} />
            <Button text="no" />
          </div>
        </div>
      )}
      {yes && (
        <div className="App-back">
          <h1 className="shade-back">YAY</h1>
          <Image imageURLs={yesImageSrc} yes={yes} />
          <h2 className="shade-back">HAPPY FIRST VALENTINE'S DAY!</h2>
          <h3 className="shade-back-two">Here's to many more!</h3>
        </div>
      )}
    </>
  );
};

export default App;
