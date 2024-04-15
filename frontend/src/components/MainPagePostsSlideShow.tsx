import React from 'react';
import { Typography, Box } from '@mui/material';
import Slider, { Settings, CustomArrowProps } from 'react-slick';
import { InstagramEmbed } from 'react-social-media-embed';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define a type for articles
interface Article {
  link: string;
}
const MainPagePostsSlideShow: React.FC = () => {

  const slider1 = React.useRef<Slider>(null);

  const articles: Article[] = [
    {
      link: "https://www.instagram.com/p/C4D52eftpCD/?utm_source=ig_embed&amp;utm_campaign=loading",
    },
    {
      link: "https://www.instagram.com/p/C2riAvNtihN/?utm_source=ig_embed&amp;utm_campaign=loading",
    },
    {
      link: "https://www.instagram.com/p/CyOSky6NecZ/?utm_source=ig_embed&amp;utm_campaign=loading",
    },
    {
      link: "https://www.instagram.com/p/CtbuO99ttm-/?utm_source=ig_embed&amp;utm_campaign=loading",
    },
    {
      link: "https://www.instagram.com/p/CxNSffANR4E/?utm_source=ig_embed&amp;utm_campaign=loading",
    },
    {
      link: "https://www.instagram.com/p/Criu2JsNn9F/?utm_source=ig_embed&amp;utm_campaign=loading",
    },
  ];

  const responsive = [
    {
      breakpoint: 2000,
      settings: { slidesToShow: 5, slidesToScroll: 1 },
    },
    {
      breakpoint: 1750,
      settings: { slidesToShow: 4, slidesToScroll: 1 },
    },
    {
      breakpoint: 1400,
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 1100,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 720,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    }
  ]
  const settingsMain: Settings = {
    dots: true,
    infinite: true,
    speed: 1400,
    slidesToShow: 5,
    fade: false,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    autoplaySpeed: 3000,
    arrows: true,
    swipeToSlide: false,
    swipe: false,
    responsive: responsive,
  };




  return (
    <Box sx={{ bgcolor: "background.default", p: 4 }}>
      <Typography variant="h1" sx={{ color: "error.main", pb: { xs: 2, sm: 4 } }}>
        Nyheter
      </Typography>
      <Typography variant="h2" gutterBottom color={"text.secondary"}>
        Hold deg oppdatert på InFi
      </Typography>

      <Box sx={{ padding: { xs: 0 } }}>
        <Slider ref={slider1} {...settingsMain}>
          {articles.map((article, index) => (
            <Box key={index}
              sx={{
                width: 500,
                // height: 700,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <InstagramEmbed url={article.link} width={328} captioned={false} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default MainPagePostsSlideShow;
