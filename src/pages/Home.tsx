import EcommerceMetrics from "../components/Metrics";
import MonthlySalesChart from "../components/MonthlySalesChart";
import MonthlyTarget from "../components/YearlyTarget";
import RecentOrders from "../components/RecentOrders";
import { useEffect, useRef, useState } from "react";
import apiRequest from "../services/apiServices";

interface Charts {
  id: Number;
  Customers: Number;
  Orders: Number;
  MothlySales: Number[];
  YearlySalesGraph: Number;
}

export default function Home() {
  const [charts, setCharts] = useState<Charts[]>([]);
  const isData = useRef(false);

  const fetchCharts = async () => {
    try {
      const data = await apiRequest({
        method: "GET",
        url: "https://api.mockapi.com/api/v1/charts-details",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "0293e62917a2463b8ced6012414293a6",
        },
      });
      setCharts(data);
    } catch (error) {
      console.error("Error fetching users");
    }
  };

  useEffect(() => {
    if (!isData.current) {
      isData.current = true;
      fetchCharts();
    }
  }, []);
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-5">
          <EcommerceMetrics data={charts} />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <MonthlyTarget data={charts} />
        </div>

        <div className="col-span-12 xl:col-span-12">
          <MonthlySalesChart data={charts} />
        </div>
        <div className="col-span-12 xl:col-span-12">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
