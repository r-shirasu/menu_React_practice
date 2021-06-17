import "./Menu.scss";
import { menudata } from "./Menudata";

export const Menu = () => {
  console.log(menudata);

  return (
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
  );
};
