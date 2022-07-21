import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts";
const data = [
    { name: "Facebook", value: 20000 },
    { name: "Instagram", value: 15000 },
    { name: "Twiter", value: 10000 },
    { name: "Telegram", value: 50000 },
  ];

export default function  Graficas (){
  return (
    <div>
        <h1>Graficas</h1>
    <ResponsiveContainer width={'100%'} height={300}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#6AB26C"
            label
            style={ { fontSize: ".8rem", fontWeight: "bold" } }
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
      
  );
};

