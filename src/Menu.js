import "./Menu.scss";

export const Menu = () => {
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
