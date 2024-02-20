import { LinkedInEmbed, InstagramEmbed } from 'react-social-media-embed';
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import articlesData from '../resources/articles.json';

interface Article {
  title: string;
  type: string;
  category: string;
  link: string;
  postUrl: string;
}

const MainPageBlog = () => {
  const articles: Article[] = articlesData.articles;

  return (
    <Box sx={{ bgcolor: "background.default", p: 4 }}>
      <Typography variant="h1" sx={{ color: "orange", pb: { xs: 2, md: 4 } }}>
        Nyheter
      </Typography>
        <Typography variant="h2" gutterBottom color={"text.secondary"}>
          Hold deg oppdatert på InFi
        </Typography>
      <Box sx={{ overflowX: 'auto' }}>
        <Grid container spacing={2}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card elevation={8} >
                <CardActionArea href={article.postUrl} sx={{ height: "auto" }}>
                  <Box sx={{ position: 'relative' }}>
              {
                article.type === 'linkedin' ? 
                  <LinkedInEmbed url={article.link} postUrl={article.postUrl} /> 
                : 
                  article.type === 'instagram' ? 
                    <InstagramEmbed url={article.link} captioned={true} /> 
                  : 
                    null
              }
                    {/* <CardMedia
                      component="img"
                      image={require(`../resources/images/articles/${article.image}`)}
                      alt={`Blog Post ${index + 1}`}
                      sx={{ height: 'auto' }}
                    /> */}
                    {/* <Typography variant="overline" display="block" gutterBottom
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        borderRadius: '16px',
                        px: 2,
                        py: 0.5,
                      }}
                    >
                      {article.category}
                    </Typography> */}
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      SE HELE INNLEGGET
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MainPageBlog;
