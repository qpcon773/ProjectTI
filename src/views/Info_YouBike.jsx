import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBikeData } from "@/features/youBike_apiSlice";

import ContentBox from "@/layouts/ContentBox.jsx";

import { createUseStyles } from "react-jss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const stylesConfig = createUseStyles({
  pagination: {
    margin: [20, 0, 20],
    "& .MuiPagination-ul": {
      justifyContent: "center",
    },
  },
});

function createInfo_YouBike() {
  const useStyles = stylesConfig();
  const dispatch = useDispatch();
  const infos = useSelector((state) => state.youBike_apiData.infos);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState({ totalPage: 0, pageNow: 1 });
  const prePage = 20;

  useEffect(() => {
    dispatch(getBikeData());
  }, []);

  useEffect(() => {
    if (infos.length) {
      setRows(() => {
        return infos.map((item) => {
          return {
            stationName: item.StationName.Zh_tw,
            bikesCapacity: item.BikesCapacity,
            stationAddress: item.StationAddress.Zh_tw,
            stationUID: item.StationUID,
            stationPosition: item.StationPosition,
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
    }
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

  return (
    <ContentBox>
      <h2>租借站位查詢</h2>

      <>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>站點名稱</TableCell>
                <TableCell>站點位置</TableCell>
                <TableCell align="right">提供車柱數量</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pageFormat(rows).map((row) => (
                <TableRow key={row.stationUID}>
                  <TableCell>{row.stationName}</TableCell>
                  <TableCell>
                    <a
                      href={`https://www.google.com/maps?q=${row.stationPosition.PositionLat},${row.stationPosition.PositionLon}`}
                      target="_blank"
                      className="link"
                    >
                      {row.stationAddress}
                    </a>
                  </TableCell>
                  <TableCell align="right">{row.bikesCapacity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

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

export default createInfo_YouBike;
