import { ReactNode, useState } from "react";
import "./App.css";
import Btn from "./components/buttons/Btn";
import Button from "./components/buttons/ButtonClick";

import Children from "./components/ChildrenProps/Children";
import Card from "./components/card/Card";
import ButtonTitle from "./components/buttons/ButtonTitle";
import InfoCard from "./components/card/InfoCard";
import { data } from "./data";

const user = {
  name: "mohit",
  isAdmin: false,
};

function App() {
  type DataKey = keyof typeof data | null;
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleSelectedValue(val: DataKey) {
    setSelectedValue(val);
  }
  let text: ReactNode = "please select smthing";

  const [selectedValue, setSelectedValue] = useState<DataKey>(null);
  if (selectedValue) {
    text = (
      <InfoCard
        title={data[selectedValue].title}
        description={data[selectedValue].title}
      />
    );
  }
  return (
    <>
      {/* jsx is an expression too */}
      Conditional rendering: hello my name is {user.name}
      {/* conditional rendering */}
      {user.isAdmin ? <div>admin</div> : <div>not admin</div>}
      {/* conditonal rendering without else */}
      {user.isAdmin && <div>admin</div>}
      {/* rendering a list */}
      <Button countttt="1"></Button>
      {/* <Button ></Button> */}
      <Btn click={count} onClick={handleClick}></Btn>
      <Btn click={count} onClick={handleClick}></Btn>
      <Children>helo from the reactNode </Children>
      <Card title={"mary jane"}>
        <p>
          Maria is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Maria</a>
        </p>
      </Card>
      ============================================
      <div>
        <ButtonTitle
          handleClick={() => handleSelectedValue("component")}
          title="component"
        ></ButtonTitle>
        <ButtonTitle
          handleClick={() => handleSelectedValue("JSX")}
          title="JSX"
        ></ButtonTitle>
        <ButtonTitle
          handleClick={() => handleSelectedValue("props")}
          title="Props"
        ></ButtonTitle>
      </div>
      {text}
    </>
  );
}

export default App;
