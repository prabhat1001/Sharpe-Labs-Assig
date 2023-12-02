import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

/**
 * The `PieChartComponent` function is a React component that renders a pie chart using the data
 * provided.
 * @returns The `PieChartComponent` is returning a JSX element that represents a pie chart.
 */
const PieChartComponent = ({ data }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={120}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip
        contentStyle={{
          backgroundColor: "#ba9ffb",
          borderRadius: "50px",
          border: "none",
          color: "white",
        }}
        cursor={false}
      />
      <Legend
        iconSize={10}
        iconType="circle"
        layout="vertical"
        align="center"
        verticalAlign="bottom"
      />
    </PieChart>
  );
};

export default PieChartComponent;
