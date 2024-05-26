"use client";
import DashboardLayout from "@/components/Dashboard/Dashboard";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default layout;
