import React from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
const Item = ({ data }) => {
  const location = useLocation()
  return (
    <div className={location.pathname.includes('list-tracked') ? 'item-component-main': 'item-component'}>
      <div className="item-component-content">
        <Link to={`/album/${data?._id}`}>
        <div className="item-image">
          <img src={data?.image} alt={data?.name} />
        </div>
        </Link>
        <div className="item-content">
          <span className="text-center">{data?.name} <BsMusicNoteBeamed /></span>
          <span style={{ display:'flex',alignItems:'center', gap: '0 5px'}}></span>
        </div>
      </div>
    </div>
  );
};

export default Item;
