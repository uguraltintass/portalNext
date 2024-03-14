import React, { useEffect, useState } from "react";

import useVideos from "../../hooks/useVideos";
import Star from "./Star";

import styles from "./styles.module.scss";
import MovieBox from "../../components/general/MovieBox";
import ReactPlayer from "react-player";

const Description = ({ name, info, ...props }) => {
  return (
    <div className={styles.description} {...props}>
      <div className={styles.descriptionName}>{name}</div>
      <div className={styles.descriptionInfo}>{info}</div>
    </div>
  );
};

const GameDetailsPage = () => {
  const [channelData, setChannelData] = useState([]);
  const { contract, channels, loadSingleVideo, videoSingleData } = useVideos();
  const slug = "card4";

  console.log("channels =>", channels);

  useEffect(() => {
    if (channels?.length > 0) {
      setChannelData(channels?.filter((channel) => channel?.slug === slug));
    }
  }, [channels, slug]);

  useEffect(() => {
    if (contract && channels.length > 0) {
      loadSingleVideo(contract, Number(3));
    }
  }, [contract, channels]);

  console.log("channel data =>", channelData);
  const src = videoSingleData?.src;

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
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} />
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
          <div className={styles.leftContainer} data-aos="fade-up">
            <div className={styles.title}>About the game</div>
            <div className={styles.detailedSummary}>
              Experience perpetual motion in the heart-pounding world of
              Perpetual Runaway, where the thrill of endless running knows no
              bounds. Race against time and obstacles as you immerse yourself in
              the non-stop action of this exhilarating game. Get ready to chase
              the ultimate adrenaline rush in Perpetual Runaway!
            </div>
          </div>
          <div className={styles.rightContainer} data-aos="fade-up">
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
          <div className={styles.leftContainer} data-aos="fade-up">
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
          <div className={styles.rightContainer}>
            <div className="px-5 mt-5" data-aos="fade-up">
              <div className="video-mockup">
                <ReactPlayer
                  url={src}
                  controls={true}
                  width="100%"
                  height="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetailsPage;
