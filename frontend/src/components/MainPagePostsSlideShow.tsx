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
  const [articles, setArticles] = useState<Article[]>([]);

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

      const postLinks = await Promise.all(data.data.map(async (post: { id: string }) => {
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
