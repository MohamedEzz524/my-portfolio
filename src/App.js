import "./App.css";
import Home from "./Home";
import { useEffect, useState } from "react";
import Preloader from "./Preloader/Preloader";
import Themes from "./Themes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loaderTimer);
    };
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Home />
          <Themes />
        </>
      )}
    </div>
  );
}

export default App;
