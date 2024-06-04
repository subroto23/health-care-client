"use client";
import { Box, Stack } from "@mui/material";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { chartsGridClasses } from "@mui/x-charts/ChartsGrid";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import Loader from "@/components/ui/Loader";
import { useGetMetaDataQuery } from "@/redux/api/metaDataApi";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const { data, isLoading } = useGetMetaDataQuery({});
  if (isLoading) {
    return <Loader />;
  }

  const chartSetting = {
    yAxis: [{ label: "Count" }],
    height: 400,
  };

  const size = {
    width: 400,
    height: 200,
  };

  const piValues: any = data?.piChartDatas?.map(
    (el: { status: string; count: number }) => {
      return {
        value: el?.count,
        label: el?.status,
      };
    }
  );
  const transformedData: any = [
    { metric: "Total Appointment", count: data.appointmentCount },
    { metric: "Total Doctors", count: data.doctorCount },
    { metric: "Total Patient", count: data?.patientCount },
    { metric: "Payment Count", count: data?.paymentCount },
  ];
  const valueFormatter = (value: number | null) => `${value} patient`;
  return (
    <>
      <Stack>
        <Box display={"flex"} justifyContent={"center"} my={3}>
          <PieChart
            series={[
              {
                arcLabel: (item) => `${item.value} (${item.label})`,
                arcLabelMinAngle: 45,
                data: piValues,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: "white",
                fontWeight: "bold",
              },
            }}
            {...size}
          />
        </Box>
        <Box>
          <BarChart
            dataset={transformedData}
            xAxis={[{ scaleType: "band", dataKey: "metric" }]}
            series={[
              {
                dataKey: "count",
                label: "Admin",
                valueFormatter,
              },
            ]}
            grid={{ horizontal: true }}
            sx={{
              [`& .${axisClasses.left} .${axisClasses.label}`]: {
                transform: "translateX(-10px)",
              },
              [`& .${chartsGridClasses.line}`]: {
                strokeDasharray: "5 3",
                strokeWidth: 2,
              },
            }}
            {...chartSetting}
          />
        </Box>
      </Stack>
    </>
  );
};

export default AdminDashboard;
