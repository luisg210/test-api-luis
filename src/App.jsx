import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const getMessage = async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const { message } = await res.json();

      setMessage(message);
      console.log(message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <div className="container pt-2 aling-itens-center">
      <div className="row mt-2 mb-2">
        <div className="col-12">
          <h1>Random Dogs</h1>
        </div>
      </div>

      <div className="row mt-2 mb-2">
        <div className="col-12">
          <button onClick={getMessage}>Refresh</button>
        </div>
      </div>

      <div className="row mt-2 mb-2">
        <div className="col-12">
          <img src={message} alt="random dog" className="img-responsive mt-2" />
        </div>
      </div>       

      <div className="row mt-5">
        <div className="col-12">
          <h6>By @luis__0_1 using the random dogs api</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
