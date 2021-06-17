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
        <article className="menu-item">
          <img
            src={menudata[0].img}
            className="photo"
            alt={menudata[0].alt}
          ></img>
          <div className="item-info">
            <header>
              <h4 className="title">{menudata[0].title}</h4>
              <h4 className="price">{menudata[0].price}</h4>
            </header>
            <p className="item-text">{menudata[0].desc}</p>
          </div>
        </article>
      </div>
    </>
  );
};
