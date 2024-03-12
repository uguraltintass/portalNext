import React from "react";

import styles from "./styles.module.scss";
import Star from "./Star";

const Description = ({ name, info, ...props }) => {
  return (
    <div className={styles.description} {...props}>
      <div className={styles.descriptionName}>{name}</div>
      <div className={styles.descriptionInfo}>{info}</div>
    </div>
  );
};

const GameDetailsPage = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.imgContainer} />
          <div className={styles.tag}>On PortalNext</div>
          <div className={styles.name}>Perpetual Runaway</div>
          <div className={styles.ratingContainer}>
            <div className={styles.starsContainer}>
              <span className={styles.rating}>5.0</span>
              {Array.from({ length: 5 }, (_) => (
                <Star />
              ))}
            </div>
          </div>
          <div className={styles.shortSummary}>
            Perpetual Runaway invites you to embark on an endless journey of
            adrenaline-fueled racing excitement!
          </div>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div
          className={styles.aboutContainer}
          style={{ alignItems: "flex-start" }}
        >
          <div className={styles.leftContainer}>
            <div className={styles.title}>About the game</div>
            <div className={styles.detailedSummary}>
              Experience perpetual motion in the heart-pounding world of
              Perpetual Runaway, where the thrill of endless running knows no
              bounds. Race against time and obstacles as you immerse yourself in
              the non-stop action of this exhilarating game. Get ready to chase
              the ultimate adrenaline rush in Perpetual Runaway!
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.descriptionsContainer}>
              <Description name="Theme" info="Infinite Run" />
              <Description name="Genre" info="Runaway" />
              <Description name="Developer" info="PortalNext" />
              <Description name="Available for" info="All Platforms" />
              <Description name="Blockchain" info="Next" />
              <Description name="Tokens" info="Portal Token" />
              <Description name="Co-op" info="No" style={{ marginBottom: 0 }} />
            </div>
          </div>
        </div>
        <div className={styles.aboutContainer} style={{ marginTop: "4rem" }}>
          <div className={styles.leftContainer}>
            <div className={styles.title}>Game overview</div>
            <div className={styles.detailedSummary}>
              In Perpetual Runaway, players dive into the thrill of endless
              running, testing their reflexes to overcome obstacles at every
              level. Collect power-ups during fast-paced runs to gain an edge
              and compete to climb the leaderboard. With vibrant graphics and
              addictive gameplay, Perpetual Runaway delivers an immersive
              experience that keeps players hooked to the screen.
            </div>
          </div>
          <div className={styles.rightContainer}>Video should be here</div>
        </div>
      </div>
    </>
  );
};

export default GameDetailsPage;
