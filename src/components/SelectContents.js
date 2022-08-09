import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import SelectInput from "./SelectInput";
import axios from "axios";
import CardList from "./CardList";
const baseUrl = process.env.REACT_APP_BASE_URL;

const SelectContents = (props) => {
  const { data, setData } = props;
  const Languages = ["Select Language", "Hindi", "English", "Marathi"];
  const [language, setLanguage] = useState("");
  const Boards = ["Select Boards", "GSEB", "CBSE"];
  const [board, setBoard] = useState("");
  const Subjects = ["Select Subject", "Maths", "English", "Science"];
  const [subject, setSubject] = useState("");
  const Classes = ["Select Class", "1", "2", "3", "4", "5"];
  const [classe, setClasse] = useState("");
  const Chapters = ["Select Chapter", "1", "2", "3", "4", "5"];
  const [chapter, setChapter] = useState("");
  const Topics = [
    "Select Topic",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];
  const [topic, setTopic] = useState("");

  const handleReset = () => {
    setChapter("");
    setClasse("");
    setSubject("");
    setLanguage("");
    setTopic("");
  };
  const handleSearch = () => {
    setData({
      language,
      subject,
      classe,
      chapter,
      topic,
    });
  };

  return (
    <>
      <Card sx={{ maxWidth: "100%", margin: 5, borderRadius: 4 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100"
            width="50"
            sx={{ objectFit: "contain", marginTop: "15px" }}
            image={require("../assets/Images/zeel-logo.png")}
            alt="Zeel school"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Zeal English School
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card
        sx={{
          maxWidth: "100%",
          margin: 5,
          borderRadius: 4,
          padding: 2,
        }}
      >
        <Typography gutterBottom variant="h5" component="div" fontWeight={700}>
          Select Contents
        </Typography>
        <div className="d-flex align-items-center border border-grey justify-content-between p-1 mb-2">
          <SelectInput
            options={Languages}
            title={"Language"}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>
        <div className="d-flex align-items-center border border-grey justify-content-between p-2 mb-2">
          <SelectInput
            options={Boards}
            title={"Boards"}
            onChange={(e) => setBoard(e.target.value)}
          />
        </div>
        <div className="d-flex align-items-center border border-grey justify-content-between p-2 mb-2">
          <SelectInput
            options={Subjects}
            title={"Subject"}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="d-flex align-items-center border border-grey justify-content-between p-2 mb-2">
          <SelectInput
            options={Classes}
            title={"Class"}
            onChange={(e) => setClasse(e.target.value)}
          />
        </div>
        <div className="d-flex align-items-center border border-grey justify-content-between p-2 mb-2">
          <SelectInput
            options={Chapters}
            title={"Chapter"}
            onChange={(e) => setChapter(e.target.value)}
          />
        </div>
        <div className="d-flex align-items-center border border-grey justify-content-between p-2 mb-2">
          <SelectInput
            options={Topics}
            title={"Topic"}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <CardActions>
          <Button
            variant="contained"
            size="medium"
            fullWidth
            sx={{ background: "#fa7b77" }}
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            size="medium"
            // color="secondary"
            sx={{ background: "#fa7b77" }}
            fullWidth
            onClick={handleSearch}
          >
            Search
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default SelectContents;
