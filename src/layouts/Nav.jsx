import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import React from "react";

import { createUseStyles } from "react-jss";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ListItemIcon from "@mui/material/ListItemIcon";
// 展開收合
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// 首頁
import HomeIcon from "@mui/icons-material/Home";
// 捷運
import DirectionsRailwayIcon from "@mui/icons-material/DirectionsRailway";
// 地圖
import MapIcon from "@mui/icons-material/Map";
// 資訊
import InfoIcon from "@mui/icons-material/Info";
// YouBike
import TagFacesIcon from "@mui/icons-material/TagFaces";
// 剩餘車位
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
const stylesConfig = createUseStyles({
  navBox: {
    height: "100vh",
    flexShrink: 0,
    padding: [40, 20, 16],
    background: "#fff",
    alignItems: "center",

    "@media (max-width: 1024px)": {
      padding: [40, 16, 16],
    },

    "& .imgBox": {
      padding: [0, 16],

      "@media (max-width: 1024px)": {
        padding: 0,
      },

      "& .imgBox": {
        width: "100%",
      },
    },

    "& .MuiList-root": {
      padding: 0,
      width: "100%",

      "& .MuiListItemText-primary": {
        fontSize: "1.25rem",

        "@media (max-width: 1024px)": {
          fontSize: "1rem",
        },
      },

      "& .MuiCollapse-root": {
        paddingLeft: 24,
      },
    },
  },
});

const navData = [
  {
    name: "首頁",
    id: 0,
    path: "/",
    children: [],
    icon: <HomeIcon />,
  },
  {
    name: "台北捷運",
    id: 1,
    path: "",
    children: [
      {
        name: "捷運路線圖",
        id: 2,
        path: "/Map_MRT",
        children: [],
        icon: <MapIcon />,
        parentId: 1,
      },
      {
        name: "車站資訊",
        id: 3,
        path: "/page",
        children: [],
        icon: <InfoIcon />,
        parentId: 1,
      },
    ],
    icon: <DirectionsRailwayIcon />,
  },
  {
    name: "YouBike",
    id: 4,
    path: "",
    children: [
      {
        name: "租借站位查詢",
        id: 5,
        path: "/YouBike_Info",
        children: [],
        icon: <DirectionsBikeIcon />,
        parentId: 4,
      },
    ],
    icon: <TagFacesIcon />,
  },
];

const Nav = () => {
  const useStyles = stylesConfig();

  const [open, setOpen] = useState({
    1: false,
    4: false,
  });

  const handleClick = (name) => {
    setOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      <Grid
        container
        direction="column"
        spacing={4}
        className={useStyles.navBox}
      >
        <div className="imgBox">
          <img src="images/logo.svg" alt="logo" />
        </div>

        <List>
          {navData.map((item) => {
            if (item.children.length) {
              return (
                <React.Fragment key={item.id}>
                  <ListItemButton onClick={() => handleClick(item.id)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                    {open[item.id] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open[item.id]} timeout="auto">
                    {item.children.map((lv2_Item) => {
                      return (
                        <Link to={lv2_Item.path} key={lv2_Item.id}>
                          <List component="div" disablePadding>
                            <ListItemButton>
                              <ListItemIcon>{lv2_Item.icon}</ListItemIcon>
                              <ListItemText primary={lv2_Item.name} />
                            </ListItemButton>
                          </List>
                        </Link>
                      );
                    })}
                  </Collapse>
                </React.Fragment>
              );
            } else {
              return (
                <Link to={item.path} key={item.id}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </Link>
              );
            }
          })}
        </List>
      </Grid>
    </>
  );
};

function createNav() {
  return <Nav></Nav>;
}

export default createNav;
