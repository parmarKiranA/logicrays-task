import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardList from "./CardList";
import { TextField } from "@mui/material";
import { createStyles } from "@mui/styles";

const useStyles = createStyles((theme) => ({
  root: {
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    float: "right",
    "& .MuiOutlinedInput-root": {
      background: "#fff",
    },
  },
  input: {
    background: "#fff",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const TabLayout = (props) => {
  const { data } = props;
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [text, setText] = React.useState("");
  const iStyle = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
      {/* <TextField
        id="standard-basic"
        name="search"
        placeholder="Search"
        variant="outlined"
        size="small"
        className={iStyle.root}
        value={text}
        // inputProps={{ className: iStyle.input }}
        onChange={(e) => handleSearch(e)}
      /> */}
      <Box
        sx={{
          bgcolor: "background.paper",
          width: "100%",
          height: "680px",
          margin: 5,
          marginLeft: 0,
          overflow: "scroll",
          scrollBehavior: "smooth",
          position: "relative",
        }}
      >
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              label="Playlist"
              {...a11yProps(0)}
              sx={{ opacity: "1", background: "#fa7b77" }}
            />
            <Tab
              label="Practice Quizzes"
              {...a11yProps(1)}
              sx={{ opacity: "1", background: "#fa7b77" }}
            />
            <Tab
              label="Videos"
              {...a11yProps(2)}
              sx={{ opacity: "1", background: "#fa7b77" }}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
          // height={"900px"}
        >
          <TabPanel
            id={"tab-play"}
            value={value}
            index={0}
            dir={theme.direction}
          >
            <CardList title={"playlist"} data={data} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <CardList title={"practice"} data={data} />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <CardList title={"video"} data={data} />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </>
  );
};

export default TabLayout;
