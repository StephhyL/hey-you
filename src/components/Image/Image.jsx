import { useState, useEffect } from "react";

// styles
import "./Image.css";

const Image = ({ imageURLs, yes }) => {
  const [currentImage, setCurrentImage] = useState(
    yes ? imageURLs[0].url : imageURLs[5].url
  );

  useEffect(() => {
    if (!yes) {
      const intervalId = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * imageURLs.length);
        const photo = imageURLs[randomNumber].url;
        setCurrentImage(photo);
      }, 500);

      return () => clearInterval(intervalId);
    }
  }, [yes]);

  return (
    <div>
      <img className="image" src={currentImage} />
    </div>
  );
};

export default Image;
