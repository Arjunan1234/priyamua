import { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "react-circular-progressbar/dist/styles.css";
import useScreenMobile from "../../utils/UseScreen";

const Slider = () => {
  const duration = 5000;
  const [progress, setProgress] = useState(Array(4).fill(0));
  const [active, setActive] = useState(0);
  const splideRef = useRef();

  useEffect(() => {
    let interval;
    if (progress[active] < 100) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = [...prevProgress];
          newProgress[active] = Math.min(
            newProgress[active] + 100 / (duration / 100),
            100
          );
          return newProgress;
        });
      }, 100);
    } else {
      handleMove((active + 1) % 4);
    }
    return () => clearInterval(interval);
  }, [progress, active]);

  const handleMove = (index) => {
    setActive(index);
    setProgress((prevProgress) => {
      const newProgress = Array(4).fill(0);
      newProgress[index] = 0;
      return newProgress;
    });
    splideRef.current.splide.go(index);
  };

  const homeBannerData = [
    {
      id: 1,
      name: "Arjun",
      image: "https://source.unsplash.com/800x500/?nature",
    },
    {
      id: 2,
      name: "Rahul",
      image: "https://source.unsplash.com/800x500/?city",
    },
    {
      id: 3,
      name: "Sneha",
      image: "https://source.unsplash.com/800x500/?ocean",
    },
    {
      id: 4,
      name: "Priya",
      image: "https://source.unsplash.com/800x500/?mountain",
    },
  ];

  return (
    <section className="commonBackground bannerBgImage">
      <div className="container">
        <Splide
          ref={splideRef}
          options={{ perPage: 1, pagination: false, arrows: true }}
          hasTrack={false}
          onMove={({ index }) => handleMove(index)}
        >
          <SplideTrack>
            {homeBannerData?.map((data, idx) => (
              <SplideSlide key={idx}>
                <img
                  src={data.image}
                  alt={data.name}
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </SplideSlide>
            ))}
          </SplideTrack>

          <div
            className="progress-bar-container"
            style={{
              display: "flex",
              gap: "5px",
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
            }}
          >
            {homeBannerData.map((_, index) => (
              <div
                key={index}
                className="progress-bar"
                style={{
                  flex: 1,
                  height: "5px",
                  background: "#ddd",
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progress[index]}%`,
                    height: "100%",
                    background: "#ff5733",
                    transition: "width 0.1s linear",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </Splide>
      </div>
    </section>
  );
};

export default Slider;
