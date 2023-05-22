import { Box } from "@mui/material";
import React from "react";
import BreakdownChart from "scenes/components/BreakdownChart";
import Header from "scenes/components/Header";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="30px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
