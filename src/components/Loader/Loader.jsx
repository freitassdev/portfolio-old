import { useState, useEffect } from "react";
import './Loader.css';
const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
      console.log(loading);
    }, 3000);
  }, []);

  return (
    <>
      <div className="loader">
        {/* <div className="loader-content">
          <h1>&lt;/M&gt;</h1>
        </div>
        <div className="loader-background">
          <div>
          </div>
        </div> */}
        <div className="open-container">
          <div className="open-one">
          </div>
          <div className="open-two">
          </div>
        </div>

      </div>
    </>
  );
};

export default Loader;