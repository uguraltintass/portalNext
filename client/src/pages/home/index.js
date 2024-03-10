import React, { useEffect } from "react";
import { appSettings } from "../../helpers/settings";

// HOOKS
import useVideos from "../../hooks/useVideos";

// COMPONENTS
import TrendingChannels from "./TrendingChannels";
import HeroSlider from "./HeroSlider";
import LatestChannels from "./LatestChannels";
import LatestFreeVideo from "./LatestFreeVideos";
import LatestPremiumVideos from "./LatestPremiumVideos";

// STYLES
import styles from "./styles.module.scss";

function HomePage() {
  const { allVideos } = useVideos();
  const sliderVids = allVideos?.filter((vid) => vid.isApproved)?.slice(0, 8);

  useEffect(() => {
    document.title = `${appSettings.brandName} | ${appSettings.brandDescription}`;
  }, []);

  return (
    <section>
      {/* <HeroSlider data={sliderVids} /> */}
      <div className="hero-slide py-5 overflow-hidden">
        <div className={styles.heroContainer}>
          <div className={styles.title}>Most Popular Game</div>
          <div className={styles.imgContainer} />
          <div className={styles.tag}>Level 1</div>
          <div className={styles.name}>Perpetual Runaway</div>
          <div className={`${styles.btn}`}>Play Now</div>
        </div>
      </div>
      <TrendingChannels />
      <LatestChannels />
      <LatestPremiumVideos />
      <LatestFreeVideo />
    </section>
  );
}

export default HomePage;
