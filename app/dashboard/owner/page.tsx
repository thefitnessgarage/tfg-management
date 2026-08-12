"use client";

import React, { useState } from "react";
import { DollarSign, TrendingUp, Users, ShieldAlert, ArrowUpRight, Calendar, Filter } from "lucide-react";

export default function OwnerAnalyticsDashboard() {
  const [timeframe, setTimeframe] = useState("TODAY");

  const metrics = {
    totalRevenue: 37300,
    membershipRevenue: 28900,
    barRevenue: 8400,
    activeMembers: 342,
    overdueMembers: 13,
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8 text-white">
      
      {/* Header & Timeframe Selector */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-wider text-amber-500">The Fitness Garage — Owner Analytics</h1>
          <p className="text-sm text-gray-400">Strict Append-Only Financial & Operations Ledger</p>
        </div>
        <div className="flex gap-2 bg-gray-800 p-1 rounded-lg">
          {["TODAY", "THIS WEEK", "THIS MONTH"].map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              className={`px-4 py-2 text-xs font-bold rounded-md transition ${
                timeframe === t ? "bg-amber-500 text-black" : "text-gray-400 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 mb-8">
        <div className="rounded-xl bg-gray-800 p-6 border border-gray-700 shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold text-gray-400">Total Revenue</span>
            <DollarSign className="h-6 w-6 text-emerald-400" />
          </div>
          <div className="text-3xl font-black text-emerald-400">
            PKR {metrics.totalRevenue.toLocaleString()}
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs text-emerald-500 font-semibold">
            <ArrowUpRight className="h-4 w-4" /> +12.4% vs previous cycle
          </div>
        </div>

        <div className="rounded-xl bg-gray-800 p-6 border border-gray-700 shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold text-gray-400">Membership Dues</span>
            <TrendingUp className="h-6 w-6 text-blue-400" />
          </div>
          <div className="text-3xl font-black text-blue-400">
            PKR {metrics.membershipRevenue.toLocaleString()}
          </div>
          <div className="mt-2 text-xs text-gray-400">77% of total intake</div>
        </div>

        <div className="rounded-xl bg-gray-800 p-6 border border-gray-700 shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold text-gray-400">Bar & Supplement Sales</span>
            <Users className="h-6 w-6 text-amber-400" />
          </div>
          <div className="text-3xl font-black text-amber-400">
            PKR {metrics.barRevenue.toLocaleString()}
          </div>
          <div className="mt-2 text-xs text-gray-400">23% of total intake</div>
        </div>

        <div className="rounded-xl bg-gray-800 p-6 border border-gray-700 shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold text-gray-400">Active / Restricted</span>
            <ShieldAlert className="h-6 w-6 text-red-400" />
          </div>
          <div className="text-3xl font-black text-white">
            {metrics.activeMembers} <span className="text-sm text-red-400 font-normal">({metrics.overdueMembers} Overdue)</span>
          </div>
          <div className="mt-2 text-xs text-red-400 font-semibold">Automatic access blocked</div>
        </div>
      </div>

      {/* Financial Ledger Table */}
      <div className="rounded-xl bg-gray-800 border border-gray-700 overflow-hidden shadow">
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-bold">Recent Verified Ledger Transactions</h2>
          <span className="text-xs bg-gray-700 px-3 py-1 rounded text-gray-300 font-mono">Immutable Log</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-900 text-gray-400 uppercase text-xs tracking-wider">
              <tr>
                <th className="p-4">Transaction ID</th>
                <th className="p-4">Type</th>
                <th className="p-4">Member / Source</th>
                <th className="p-4">Method</th>
                <th className="p-4">Manager On Duty</th>
                <th className="p-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr className="hover:bg-gray-750">
                <td className="p-4 font-mono text-xs text-gray-400">#TRX-9821</td>
                <td className="p-4"><span className="bg-blue-900 text-blue-300 px-2.5 py-1 rounded text-xs font-bold">MEMBERSHIP_FEE</span></td>
                <td className="p-4 font-bold">Ahmed Khan (TFG-01872)</td>
                <td className="p-4">CASH</td>
                <td className="p-4 text-gray-300">Umer Khan</td>
                <td className="p-4 text-right font-black text-emerald-400">+PKR 6,000</td>
              </tr>
              <tr className="hover:bg-gray-750">
                <td className="p-4 font-mono text-xs text-gray-400">#TRX-9820</td>
                <td className="p-4"><span className="bg-amber-900 text-amber-300 px-2.5 py-1 rounded text-xs font-bold">BAR_SALE</span></td>
                <td className="p-4 font-bold">Walk-in Customer (Protein Shake)</td>
                <td className="p-4">CASH</td>
                <td className="p-4 text-gray-300">Umer Khan</td>
                <td className="p-4 text-right font-black text-amber-400">+PKR 450</td>
              </tr>
              <tr className="hover:bg-gray-750">
                <td className="p-4 font-mono text-xs text-gray-400">#TRX-9819</td>
                <td className="p-4"><span className="bg-purple-900 text-purple-300 px-2.5 py-1 rounded text-xs font-bold">CREDIT_RECOVERY</span></td>
                <td className="p-4 font-bold">Bilal Yousafzai (TFG-01944)</td>
                <td className="p-4">CASH</td>
                <td className="p-4 text-gray-300">Manager On Duty</td>
                <td className="p-4 text-right font-black text-emerald-400">+PKR 2,100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}