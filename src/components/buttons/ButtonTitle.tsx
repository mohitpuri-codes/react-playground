import React from "react";

interface Props {
  title: string;
  handleClick: () => void;
}

function ButtonTitle({ title, handleClick }: Props) {
  return <button onClick={handleClick}>{title}</button>;
}

export default ButtonTitle;
