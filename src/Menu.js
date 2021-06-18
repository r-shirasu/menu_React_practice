import { useState } from "react";
import "./Menu.scss";
import { menudata } from "./Menudata";

export const Menu = () => {
  const [menuItems, setMenuItems] = useState(menudata);

  const breakfastMenus = () => {
    const breakfast = menudata.filter(
      (menuArray) => menuArray.category === "breakfast"
    );
    setMenuItems(breakfast);
  };

  const lunchMenus = () => {
    const lunch = menudata.filter(
      (menuArray) => menuArray.category === "lunch"
    );
    setMenuItems(lunch);
  };

  const shakesMenus = () => {
    const shakes = menudata.filter(
      (menuArray) => menuArray.category === "shakes"
    );
    setMenuItems(shakes);
  };

  const dinnerMenus = () => {
    console.log("ディナー");
  };

  return (
    <>
      <div className="btn-container">
        <button type="button" className="filter-btn">
          all
        </button>
        <button type="button" className="filter-btn" onClick={breakfastMenus}>
          breakfast
        </button>
        <button type="button" className="filter-btn" onClick={lunchMenus}>
          lunch
        </button>
        <button type="button" className="filter-btn" onClick={shakesMenus}>
          shakes
        </button>
        <button type="button" className="filter-btn" onClick={dinnerMenus}>
          dinner
        </button>
      </div>
      <div className="section">
        {menuItems.map((menuArray, menuIndex) => {
          return (
            <article className="menu-item" key={`${menuArray}${menuIndex}`}>
              <img
                src={menuArray.img}
                className="photo"
                alt={menuArray.alt}
              ></img>
              <div className="item-info">
                <header>
                  <h4 className="title">{menuArray.title}</h4>
                  <h4 className="price">{menuArray.price}</h4>
                </header>
                <p className="item-text">{menuArray.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};
