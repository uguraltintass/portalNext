import React, { useEffect } from "react";
import { appSettings } from "../../helpers/settings";

// HOOKS
// import useVideos from "../../hooks/useVideos";

// COMPONENTS
// import HeroSlider from "./HeroSlider";
import TrendingChannels from "./TrendingChannels";
import MostPopularGame from "./MostPopularGame";
import LatestChannels from "./LatestChannels";
import LatestFreeVideo from "./LatestFreeVideos";
import LatestPremiumVideos from "./LatestPremiumVideos";

function HomePage() {
  /* const { allVideos } = useVideos();
  const sliderVids = allVideos?.filter((vid) => vid.isApproved)?.slice(0, 8); */

  useEffect(() => {
    document.title = `${appSettings.brandName} | ${appSettings.brandDescription}`;
  }, []);

  return (
    <section>
      {/* <HeroSlider data={sliderVids} /> */}
      <MostPopularGame />
      <TrendingChannels />
      <LatestChannels />
      <LatestPremiumVideos />
      <LatestFreeVideo />
    </section>
  );
}

export default HomePage;
