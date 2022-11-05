import React from "react";
import { PieChart } from "react-minimal-pie-chart";

function Statistics() {
  return (
    <div className=" p-2 flex justify-center items-center">
      <PieChart
        animation
        animationDuration={500}
        animationEasing="ease-out"
        center={[50, 50]}
        totalValue={100}
        style={{ width: "200px", height: "200px" }}
        label={({ dataEntry }) => dataEntry.title}
        labelStyle={(index) => ({
          fill: "white",
          fontSize: "14px",
          fontFamily: "sans-serif",
        })}
        data={[
          { title: "One", value: 50, color: "#E38627" },
          { title: "Two", value: 20, color: "#C13C37" },
          { title: "Three", value: 30, color: "#6A2135" },
        ]}
      />
    </div>
  );
}

export default Statistics;
