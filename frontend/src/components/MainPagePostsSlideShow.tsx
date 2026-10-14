import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box } from '@mui/material';
import Slider, { Settings } from 'react-slick';
import { InstagramEmbed } from 'react-social-media-embed';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define a type for articles
interface Article {
  link: string;
}

const MainPagePostsSlideShow: React.FC = () => {
  const slider1 = useRef<Slider>(null);
  const sliderBox = useRef<HTMLDivElement>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [visible, setVisible] = useState(false);

  // Autoplay is driven here instead of by react-slick, whose own autoplay starts on mount.
  // It only runs while the slider is on screen, so visitors see the newest post first.
  useEffect(() => {
    if (articles.length === 0 || !sliderBox.current) return;
    // Visible when half the slider is on screen, or it fills half the screen (embeds can be taller than the window)
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.intersectionRatio >= 0.5 || entry.intersectionRect.height >= window.innerHeight / 2);
    }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] });
    observer.observe(sliderBox.current);
    return () => observer.disconnect();
  }, [articles]);

  // The slider does not wrap, so autoplay rewinds to the newest post once the oldest is on screen
  useEffect(() => {
    if (!visible) return;
    const timer = setInterval(() => {
      const atEnd = sliderBox.current?.querySelector(`.slick-slide[data-index="${articles.length - 1}"].slick-active`);
      if (atEnd) {
        slider1.current?.slickGoTo(0);
      } else {
        slider1.current?.slickNext();
      }
    }, 7000);
    return () => clearInterval(timer);
  }, [visible, articles]);

  const numLinks = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      const systemUserToken = encodeURIComponent(process.env.REACT_APP_META_SYSTEM_USER_ACCESS_TOKEN || '');
      // Fetch all post IDs
      const iguser_id = encodeURIComponent(process.env.REACT_APP_META_IG_USER_ID || "");
      if (!iguser_id || !systemUserToken) {
        // If the Instagram user ID is not set or the system user token is not set, return an empty array
        console.error("Instagram user ID or system user token not set");
        return [];
      }

      const response = await fetch(`https://graph.facebook.com/v19.0/${iguser_id}/media?access_token=${systemUserToken}`);
      const data = await response.json();

      const postLinks = await Promise.all(data.data.slice(0, numLinks).map(async (post: { id: string }) => {
        // Fetch the permalink for each post ID
        const response = await fetch(`https://graph.facebook.com/v19.0/${encodeURIComponent(post.id)}?access_token=${systemUserToken}&fields=permalink`);
        const postData = await response.json();
        return { link: postData.permalink };
      }));

      setArticles(postLinks);
    };

    fetchPosts();
  }, []);

  const responsive = [
    { breakpoint: 2000, settings: { slidesToShow: 5, slidesToScroll: 1 } },
    { breakpoint: 1750, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    { breakpoint: 1400, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 1100, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 720, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
  ];

  const settingsMain: Settings = {
    dots: true,
    infinite: false,
    speed: 1400,
    slidesToShow: 5,
    fade: false,
    slidesToScroll: 1,
    autoplay: false,
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

      <Box ref={sliderBox} sx={{ padding: { xs: 0 } }}>
        {/* Mount the slider only once posts are loaded, otherwise it starts at the wrong slide */}
        {articles.length > 0 && (
          <Slider ref={slider1} {...settingsMain}>
            {articles.map((article, index) => (
              <Box key={index}
                sx={{
                  width: 500,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <InstagramEmbed url={article.link} width={328} captioned={false}  retryDelay={20000}/>
              </Box>
            ))}
          </Slider>
        )}
      </Box>
    </Box>
  );
}

export default MainPagePostsSlideShow;
