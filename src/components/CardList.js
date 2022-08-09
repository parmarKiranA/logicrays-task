import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import axios from "axios";
import ProgressBar from "./ProgressBar";
const baseUrl = process.env.REACT_APP_BASE_URL;

const CardList = (props) => {
  const { title, data } = props;
  const [searchdata, setSearchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${baseUrl}/${title}/?language=${data?.language ?? ""}&subject=${
          data?.subject ?? ""
        }&grade=${data?.grade ?? ""}&chapter_no=${
          data?.chapter ?? ""
        }&video_topic_no=${data?.topic ?? ""}&format=json`
      )
      .then((response) => {
        setSearchData(response.data.results);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [data]);

  return (
    <>
      {searchdata &&
        !loading &&
        searchdata.map((item) => {
          let youtubeLink =
            item?.youtube_link &&
            item?.youtube_link.replace("https://youtu.be/", "");
          return (
            <Paper
              sx={{
                // p: 2,
                margin: "auto",
                marginTop: 2,
                maxWidth: 700,
                height: "auto",
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Grid container>
                <Grid item>
                  <ButtonBase sx={{ width: 200, height: 130 }}>
                    {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeLink}`}
                      frameborder="1"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                      title="video"
                      width={"210"}
                      height={"130"}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column">
                    <Grid
                      item
                      xs
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Typography variant="body2" gutterBottom>
                        {item?.video_topic_name ?? ""}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item?.chapter_name_original ?? ""} | Class{" "}
                        {item?.grade ?? ""}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    display={"flex"}
                    alignItems={"center"}
                    backgroundColor={"#fa7b77"}
                    padding={"11px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <i className="bi bi-share-fill text-white"></i>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      color={"white"}
                    >
                      Share
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
      {loading && (
        <Grid sx={{ display: "flex", justifyContent: "center" }}>
          <ProgressBar />
        </Grid>
      )}
    </>
  );
};

export default CardList;
