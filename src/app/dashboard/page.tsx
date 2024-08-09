"use client";
import { getCookie } from "cookies-next";
const Dashboard = () => {
  console.log(getCookie("accessToken"),"Token");
  return <div>Dashboard</div>;
};

export default Dashboard;
