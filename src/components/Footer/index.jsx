import React from "react";
import { BsPersonFill } from "react-icons/bs";
import AvatarFooter from "./Avatar";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation()
  const isTrueAvatar = () =>{
    if(location.pathname.includes('likedsong') || location.pathname.includes('librarysong')){
      return true
    }
    return false
  }
  const arr = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQam_asj9CCZth0DQWZORAIZpayco3eu5RNyw&usqp=CAU",
    },
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    },
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU",
    },
  ];
  return (
    <div className="footer-component">
      <div className="footer-component-avatar" >
        <BsPersonFill size={35} style={{ color: isTrueAvatar() ? '#ffffff': '#000000'}} />
      </div>
      <div className="footer-component-avatar-list">
        {arr.map((e, index) => {
          return <AvatarFooter key={index} img={e?.img} />;
        })}
      </div>
    </div>
  );
};

export default Footer;
