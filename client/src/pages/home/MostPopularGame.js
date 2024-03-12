import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const MostPopularGame = () => {
  return (
    <div className="hero-slide py-5 overflow-hidden">
      <div className={styles.heroContainer}>
        <div className={styles.title}>Most Popular Game</div>
        <div className={styles.imgContainer} />
        <div className={styles.tag}>Level 1</div>
        <div className={styles.name}>Perpetual Runaway</div>
        <Link to="/perpetual-runaway/details">
          <div className={`${styles.btn}`}>View Game</div>
        </Link>
      </div>
    </div>
  );
};

export default MostPopularGame;
