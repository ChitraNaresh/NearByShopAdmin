import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const Linechart = () => {
  return (
    <div>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12] }]}
        series={[
        //   {
        //     name: "Line 1",
        //     data: [0, 5, 6, 8.5, 9, 15],
        //     color: "blue", // optional, for specific line colors
        //   },
          {
            name: "Line 2",
            data: [0, 5.5, 6, 8.5, 9, 13],
            color: "green", // optional
          },
          // {
          //   name: "Line 3",
          //   data: [1, 4, 5, 7, 10, 13], // example third line
          //   color: "red", // optional
          // },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
};

export default Linechart;
