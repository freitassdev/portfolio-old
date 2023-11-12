import React, { useState, useEffect } from "react";
import { Preload } from "@react-three/drei";

const Loader = ({ setIsLoaded }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsLoaded(!loading);
  }, [loading, setIsLoaded]);

  const handleLoaded = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <div className="loader">
          <p>Carregando...</p>
        </div>
      )}
      <Preload all onComplete={handleLoaded} />
    </>
  );
};

export default Loader;