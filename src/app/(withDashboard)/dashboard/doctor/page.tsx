"use client";
import { useGetMetaDataQuery } from "@/redux/api/metaDataApi";
import { Box, Stack } from "@mui/material";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { chartsGridClasses } from "@mui/x-charts/ChartsGrid";
import { BarChart } from "@mui/x-charts/BarChart";
import Loader from "@/components/ui/Loader";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const DoctorDashboard = () => {
  const { data, isLoading } = useGetMetaDataQuery({});
  if (isLoading) {
    return <Loader />;
  }
  const chartSetting = {
    yAxis: [{ label: "Count" }],
    height: 500,
  };
  const valueFormatter = (value: number | null) => `${value} patient`;
  const transformedData = [
    { metric: "Total Revenue", count: data.totalRevenue._sum.amount as number },
    { metric: "Patients", count: data.patientCount as number },
    { metric: "Appointments", count: data.appointmentCount as number },
    { metric: "Reviews", count: data.reviewsCount as number },
  ];
  const size = {
    width: 400,
    height: 200,
  };

  const piValues = data?.appoinmentStatusDestibutaion?.map(
    (el: { status: string; count: number }) => {
      return {
        value: el?.count,
        label: el?.status,
      };
    }
  );

  return (
    <>
      <Stack>
        <Box
          display={"flex"}
          justifyContent={"center"}
          my={3}
          borderBottom={"1px dashed black"}
        >
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
                label: "Doctors all datas",
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

export default DoctorDashboard;
