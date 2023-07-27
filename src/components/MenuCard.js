import "../css/MenuCard.css";
const MenuCard = ({ info }) => {
  const { name, description, price, imageId, isVeg, category } = info;
  return (
    <div className="menu-container">
      <div className="menu-details-container">
        <div className="menu-item-name">{name}</div>
        <div>₹{price / 100}</div>
        <div className="menu-item-description">{description}</div>
      </div>
      <div className="menu-item-img-container">
        <img
          className="menu-item-img"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            imageId
          }
        />
        <button className="add-to-cart-btn">ADD</button>
      </div>
    </div>
  );
};

export default MenuCard;
