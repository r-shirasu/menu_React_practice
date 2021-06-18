import { useState } from "react";
import "./Menu.scss";
import { menudata } from "./Menudata";

export const Menu = () => {
  const [menuItems, setMenuItems] = useState(menudata);

  const updateMenus = (category) => {
    const update = menudata.filter(
      (menuArray) => menuArray.category === category
    );
    setMenuItems(update);
  };

  const allMenus = () => {
    const all = menudata.map((menuArray) => {
      return menuArray;
    });
    setMenuItems(all);
  };

  return (
    <>
      <div className="btn-container">
        <button type="button" className="filter-btn" onClick={allMenus}>
          all
        </button>
        <button
          type="button"
          className="filter-btn"
          onClick={() => updateMenus("breakfast")}
        >
          breakfast
        </button>
        <button
          type="button"
          className="filter-btn"
          onClick={() => updateMenus("lunch")}
        >
          lunch
        </button>
        <button
          type="button"
          className="filter-btn"
          onClick={() => updateMenus("shakes")}
        >
          shakes
        </button>
        <button
          type="button"
          className="filter-btn"
          onClick={() => updateMenus("dinner")}
        >
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
