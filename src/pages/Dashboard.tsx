import React from 'react'
import { HOC } from '../componnets/HOC'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
// type dashprops={}
interface dashprops { }
const Dashboard: React.FC<dashprops> = () => {



  const revenueData = {
    labels: ["5k", "10k", "15k", "20k", "25k", "30k", "35k", "40k", "45k", "50k", "55k", "60k"],
    datasets: [
      {
        label: "Sales",
        data: [10, 20, 40, 15, 60, 100, 40, 50, 30, 60, 40, 20],
        backgroundColor: "rgba(255,140,100,0.5)",
        borderColor: "rgba(255,140,100,1)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Profit",
        data: [5, 70, 20, 50, 30, 40, 70, 20, 10, 50, 60, 70],
        backgroundColor: "rgba(155,100,255,0.4)",
        borderColor: "rgba(155,100,255,1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };


  const salesAnalyticsData = {
    labels: [2015, 2016, 2017, 2018, 2019],
    datasets: [
      {
        label: "Revenue",
        data: [10, 45, 70, 60, 100],
        backgroundColor: "rgba(80,160,255,0.4)",
        borderColor: "rgba(80,160,255,1)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Profit",
        data: [5, 30, 60, 50, 90],
        backgroundColor: "rgba(60,200,150,0.4)",
        borderColor: "rgba(60,200,150,1)",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className='text-4xl'>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-semibold mb-5">Dashboard</h1>


       

<div className="bg-white p-6 rounded-xl shadow mb-6">
  <h2 className="text-lg font-medium mb-3">Revenue</h2>

  <div className="h-[280px]"> 
    <Line data={revenueData} options={{ maintainAspectRatio: false }} />
  </div>
</div>

       
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

  {/* Customers Card */}
  {/* <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center">
    <h3 className="font-semibold text-xl mb-5">Customers</h3>

    <div className="flex justify-center mb-5">
      <div className="w-32 h-32 border-12 rounded-full border-blue-400 flex items-center justify-center shadow-md">
        <span className="text-2xl font-bold">34,249</span>
      </div>
    </div>

    <div className="flex flex-col gap-1 text-gray-600 text-sm">
      <span className="font-medium">New Customers</span>
      <span className="text-lg font-semibold text-gray-800">1420 Repeated</span>
    </div>
  </div> */}

    <div className="bg-white rounded-2xl shadow-sm p-6 w-full max-w-sm">
      <h2 className="text-gray-700 font-semibold mb-4 text-xl">Customers</h2>

      {/* Ring Chart */}
      <div className="flex justify-center mt-15">
        <div className="relative w-36 h-36">

          {/* Light Circle Background */}
          <div className="w-full h-full rounded-full border-10 border-blue-100"></div>

          {/* 4 Blue Dots */}
          <span className="w-3 h-3 bg-blue-500 rounded-full absolute top-0 left-1/2 -translate-x-1/2"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full absolute left-0 top-1/2 -translate-y-1/2"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full absolute right-0 top-1/2 -translate-y-1/2"></span>
        </div>
      </div>

      {/* Numbers */}
      <div className="flex justify-center gap-10 mt-4">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800">34,249</p>
          <p className="text-blue-500 text-sm flex items-center justify-center gap-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            New Customers
          </p>
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-gray-800">1420</p>
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            Repeated
          </p>
        </div>
      </div>
    </div>

  

  
<div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 
     flex flex-col items-center text-center">

  
  <h3 className="font-semibold text-xl mb-6 tracking-wide">
    Featured Product
  </h3>

 
  <div className="flex justify-between items-center w-[80%] text-3xl text-gray-500 mb-6 py-20">
    <button className="hover:text-gray-700">❮</button>
    <button className="hover:text-gray-700">❯</button>
  </div>

  
  <div className="mt-2">
    <p className="font-medium text-lg">Beats Headphone 2019</p>
    <p className="text-blue-600 font-bold text-xl mt-1">$89.00</p>
  </div>
</div>


  
  <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
  <h3 className="font-semibold text-xl mb-5">Sales Analytics</h3>

  <div className="h-[260px]">
    <Line data={salesAnalyticsData} options={{ maintainAspectRatio: false }} />
  </div>
</div>

</div>

      </div>
    </div>
  )
}

export default HOC(Dashboard)
