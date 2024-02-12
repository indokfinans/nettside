import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  ButtonGroup,
  Button,
} from "@mui/material";

const MainPageBlog = () => {
  return (
    <Box sx={{ bgcolor: "background.default", p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Hold deg oppdatert
      </Typography>
      <Grid container spacing={2}>
        {/* Blog Cards */}
        {[...Array(4)].map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardActionArea>
                {/* <CardMedia
                  component="img"
                  height="140"
                  image={require(`../resources/blog/images/blogg_bilde_${
                    index + 1
                  }.png`)}
                  alt={`Blog Post ${index + 1}`}
                /> */}
                <CardContent>
                  <Typography variant="h5">Overskrift / Tittel</Typography>
                  <Typography variant="body2">Kategori</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Kategorier:
        </Typography>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>Nyheter</Button>
          <Button>Publikasjoner</Button>
          <Button>Eventer</Button>
          <Button>Annet</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default MainPageBlog;
