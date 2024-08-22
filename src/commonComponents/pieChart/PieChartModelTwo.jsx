import {
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";
import { useState } from "react";

const data = [
  { name: "Passed", value: 600 },
  { name: "Not Available", value: 100 },
  { name: "Warning", value: 100 },
  { name: "Failed", value: 200 },
];

const COLORS = [ "#00C49F","#0088FE", "#5A4FCF", "#FF8042"];

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;

  return (
    <g>
      <text x={cx} y={cy} textAnchor="middle" fill={"#000"} fontSize={"14px"}>
        Total
      </text>
      <text
        x={cx}
        y={cy + 20}
        textAnchor="middle"
        fill={"#000"}
        fontSize={"14px"}
        fontWeight={600}
      >
        {data.reduce((a, b) => a + b.value, 0)}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const PieChartModelTwo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="40%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          // onMouseEnter={onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend layout="vertical" verticalAlign="middle" align="right" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartModelTwo;
