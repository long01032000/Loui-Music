import React from "react";
import TalkRoom from "../TalkRoom";
import "./index.css";
import PlayListMember from "./playListMember";
const TalkMember = () => {
  const arr = [
    {
      id: 1,
      img: "https://i.pinimg.com/564x/d1/d4/63/d1d46381d3c104837c94190352b4186b.jpg",
    },
    {
      id: 1,
      img: "https://i.pinimg.com/564x/d1/d4/63/d1d46381d3c104837c94190352b4186b.jpg",
    },
    {
      id: 1,
      img: "https://i.pinimg.com/564x/d1/d4/63/d1d46381d3c104837c94190352b4186b.jpg",
    },
    {
      id: 1,
      img: "https://i.pinimg.com/564x/d1/d4/63/d1d46381d3c104837c94190352b4186b.jpg",
    },
  ];
  return (
    <div>
      <TalkRoom />
      <div className="talkmember-component">
        {arr.map((e, index) => {
          return <PlayListMember data={e} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TalkMember;
