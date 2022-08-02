import React from "react";
import { Link } from "react-router-dom";
import CustomeItem from "./customeItem";
import './index.css'
const Custome = ({data,chooseMusic,isLikeMusic}) => {
  const selectMusic = (e) =>{
    chooseMusic(e)
  }
  const setLikeMusic = (e) =>{
    isLikeMusic(e)
  }
  const sliceData = ()  =>{
    if(data.length >= 4){
      const newData = data.slice(0,4)
      return newData
    }
    return data
  }
  return (
    <div className="custome-container">
      <div className="custome-container-main">
        <div className="custome-container-header">
          <h1>Trending</h1>
          <Link to='list-trending'><span>See more</span></Link>
          
        </div>
        <div className="custome-container-content">
          {
            sliceData().map((e,index) =>{
              return (
                <div>
                  <CustomeItem data={e} key={index} id={index} isLikeMusic={setLikeMusic} getMusic={selectMusic} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Custome;
