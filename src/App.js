import "./App.scss";
import { Menu } from "./Menu";

export const App = () => {
  return (
    <div className="menu">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Menu />
    </div>
  );
};
