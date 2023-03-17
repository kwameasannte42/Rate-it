import React from "react";
import styles from "./SearchBar.module.css";

function Searchbar() {
  return (
    <div>
      <div className="field has-addons">
        <p className="control">
          <button className="button is-static is-medium">Search</button>
        </p>
        <p className="control">
          <input
            className={`input is-medium ${styles["input-control"]}`}
            type="text"
            placeholder="Restaurant, hotel"
          />
        </p>
        <p className="control">
          <button className="button is-static is-medium">Near</button>
        </p>
        <p className="control">
          <input
            className={`input is-medium ${styles["input-control"]}`}
            type="text"
            placeholder="where"
          />
        </p>
        <button className="button is-medium">
          <span className="icon">
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
