import "./Menu.scss";
import { menudata } from "./Menudata";

export const Menu = () => {
  return (
    <>
      <div className="btn-container">
        <button type="button" className="filter-btn" data-id="all">
          all
        </button>
        <button type="button" className="filter-btn" data-id="breakfast">
          breakfast
        </button>
        <button type="button" className="filter-btn" data-id="lunch">
          lunch
        </button>
        <button type="button" className="filter-btn" data-id="shakes">
          shakes
        </button>
        <button type="button" className="filter-btn" data-id="Dinner">
          dinner
        </button>
      </div>
      <div className="section">
        {menudata.map((menuArray, menuIndex) => {
          return (
            <article className="menu-item">
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
