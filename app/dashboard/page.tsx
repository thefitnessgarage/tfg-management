import { prisma } from "@/lib/prisma";
import { Users, CheckCircle, DollarSign } from "lucide-react";

export const dynamic = "force-dynamic";

async function getDashboardStats() {
  try {
    const totalMembers = await prisma.member.count();
    return {
      totalMembers,
      todayCheckIns: 0,
      barSales: 0,
    };
  } catch (error) {
    console.error("Failed to load dashboard stats:", error);
    return { totalMembers: 0, todayCheckIns: 0, barSales: 0 };
  }
}

export default async function DashboardOverview() {
  const stats = await getDashboardStats();

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
      <p className="text-gray-400 mb-8">
        Welcome back! Here is a real-time snapshot of The Fitness Garage.
      </p>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-center justify-between">
          <div>
            <h3 className="text-gray-400 text-sm font-medium">Total Members</h3>
            <p className="text-3xl font-bold mt-2 text-yellow-500">{stats.totalMembers}</p>
          </div>
          <Users className="text-yellow-500 h-10 w-10 opacity-80" />
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-center justify-between">
          <div>
            <h3 className="text-gray-400 text-sm font-medium">Today&apos;s Check-ins</h3>
            <p className="text-3xl font-bold mt-2 text-yellow-500">{stats.todayCheckIns}</p>
          </div>
          <CheckCircle className="text-yellow-500 h-10 w-10 opacity-80" />
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-center justify-between">
          <div>
            <h3 className="text-gray-400 text-sm font-medium">Bar Sales Today</h3>
            <p className="text-3xl font-bold mt-2 text-yellow-500">${stats.barSales.toFixed(2)}</p>
          </div>
          <DollarSign className="text-yellow-500 h-10 w-10 opacity-80" />
        </div>
      </div>
    </div>
  );
}