import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Div from "./Div";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Div
        styleX={{
          height: "200px",
          border: "5px solid white",
        }}
      >
        hello
      </Div>
      <Div
        styleX={{
          height: "500px",
          backgroundColor: "yellow",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quia quae
        quod pariatur temporibus doloribus amet, id perferendis ducimus
        consequuntur fugit earum quaerat consequatur deserunt illo ex corporis
        quidem eveniet! Doloremque, velit eius! Neque adipisci, nulla similique
        officia, beatae rerum, error assumenda illo omnis quibusdam libero sint
        ad. Non, saepe nemo. Quas, blanditiis architecto! Quaerat odio molestiae
        maxime sit itaque.
      </Div>
    </>
  );
}

export default App;
