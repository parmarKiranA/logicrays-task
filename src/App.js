import "./App.css";
import React from "react";
import Header from "./components/Header";
import SelectContents from "./components/SelectContents";
import TabLayout from "./components/TabLayout";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const App = () => {
  const [data, setData] = useState();
  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1, backgroundColor: "#E6E6E6" }}>
        <Grid container xs={12}>
          <Grid item xs={12} md={5} lg={5}>
            <SelectContents data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={7} lg={7}>
            <TabLayout data={data} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
