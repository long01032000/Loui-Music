import React from "react";

const ItemMusicComponent = ({music}) => {
  return (
    <div>
      <div className="ItemMusicComponent-header">
        <h1>Related tracks</h1>
      </div>
      <div className="ItemMusicComponent-item">
        <div className="ItemMusicComponent-list-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUiBuZPQ3BjXpaQ0LnlcUkUU5d_A-5WGxZOg&usqp=CAU"
            alt=""
          />
          <div>
          <span>Call out my name</span>
          <span>MTP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemMusicComponent;
