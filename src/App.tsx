import React, { useState } from "react";
import Button from "./ui/button/Button";
import Input from "./ui/input/Input";
import Test from "./ui/button/Test";

const App = () => {
  const [text, setText] = useState("");
  console.log(text);
  const [showButton, setShowButton] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowButton((prev) => !prev)} bg="yellow">
        toggler
      </Button>
      <Test key="image" />
      <Button onClick={() => console.log("qwerty")} bg="red">
        20
      </Button>
    </div>
  );
};

export default App;
