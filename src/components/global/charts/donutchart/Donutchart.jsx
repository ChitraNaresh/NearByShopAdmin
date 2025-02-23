import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { styled } from "@mui/material/styles";

const data = [
  { value: 5, label: "A" },
  { value: 10, label: "B" },
  { value: 15, label: "C" },
  { value: 20, label: "D" },
];

const size = {
  width: 350,
  height: 270,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

const Donutchart = () => {
  return <PieChart series={[{ data, innerRadius: 70 }]} {...size}></PieChart>;
};

export default Donutchart;
