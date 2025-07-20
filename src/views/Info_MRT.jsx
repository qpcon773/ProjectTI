import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMRT_data } from "@/features/MRT_apiSlice";

import ContentBox from "@/layouts/ContentBox.jsx";

import { createUseStyles } from "react-jss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const stylesConfig = createUseStyles({
  card: {
    "& .MuiPaper-root": {
      height: "100%",
      background: "#F8F9FA",

      "& .MuiTypography-body2": {
        "&.BL": {
          color: "#0070bd",
        },
        "&.BR": {
          color: "#c48c31",
        },
        "&.O": {
          color: "#f8b61c",
        },
        "&.G": {
          color: "#008659",
        },
        "&.R": {
          color: "#e3002c",
        },
      },

      "& .info": {
        padding: [2, 16, 2],
        fontSize: "0.875rem",

        "&:first-of-type": {
          paddingTop: 8,
        },

        "&:last-of-type": {
          paddingBottom: 8,
        },
      },
    },
  },
  pagination: {
    margin: [20, 0, 20],
    "& .MuiPagination-ul": {
      justifyContent: "center",
    },
  },
});

function createInfo_MRT() {
  const useStyles = stylesConfig();
  const dispatch = useDispatch();
  const infos = useSelector((state) => state.MRT_apiData.infos);
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState({ totalPage: 0, pageNow: 1 });
  const prePage = 10;

  useEffect(() => {
    dispatch(getMRT_data());
  }, []);

  useEffect(() => {
    setCards(() => {
      return infos.map((item) => {
        return {
          stationID: item.StationID,
          stationName: item.StationName.Zh_tw,
          transferDescription: item.TransferDescription,
          transfers: item.Transfers[0],
        };
      });
    });

    // 現在用假資料 需要手動分頁
    const calculate = infos.length / prePage;
    setPage((prev) => ({
      ...prev,
      totalPage: Number.isInteger(calculate)
        ? calculate
        : Math.floor(calculate) + 1,
    }));
  }, [infos]);

  const handleChange = (event, value) => {
    setPage((prev) => ({
      ...prev,
      pageNow: value,
    }));
  };

  const pageFormat = (arr) => {
    // 用slice來把資料分頁
    const scrollBox = document.querySelector(".scrollBox");
    if (scrollBox) {
      scrollBox.scrollTo({ top: 0 });
    }
    let res = [];
    const start = (page.pageNow - 1) * prePage;
    const end = start + prePage;
    res = arr.slice(start, end);
    return res;
  };

  const judgeDataType = {
    BikeTransfers: (item) => item.OperatorName.Zh_tw,
    ParkingTransfers: (item) => item.CarParkName.Zh_tw,
    RailTransfers: (item) => item.OperatorName.Zh_tw,
  };

  return (
    <ContentBox>
      <h2>車站轉運資訊</h2>
      <>
        <Grid container spacing={4}>
          {pageFormat(cards).map((item) => (
            <Grid size={6} key={item.stationID} className={useStyles.card}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.transferDescription}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={item.stationID.split(/[0-9]/)[0]}
                  >
                    {item.stationID}
                  </Typography>
                </CardContent>
                {Object.keys(item.transfers).map((lv2_Item) =>
                  item.transfers[lv2_Item].map((lv3_Item) => (
                    <p className="info"> {judgeDataType[lv2_Item](lv3_Item)}</p>
                  ))
                )}
              </Card>
            </Grid>
          ))}
        </Grid>

        <Stack spacing={2} className={useStyles.pagination}>
          <Pagination
            count={page.totalPage}
            size="large"
            onChange={handleChange}
          />
        </Stack>

        <p className="hintText">
          資料來源：
          <a
            href="https://tdx.transportdata.tw/"
            target="_blank"
            className="link"
          >
            TDX 運輸資料流通服務
          </a>
          <br />
          *本資料並非即時訊息
        </p>
      </>
    </ContentBox>
  );
}

export default createInfo_MRT;
