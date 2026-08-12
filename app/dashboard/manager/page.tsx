"use client";

import React, { useState } from "react";
import { Users, CreditCard, Coffee, ShieldAlert, LogOut, Search, UserCheck, Receipt, X } from "lucide-react";

export default function ManagerDashboard() {
  const [shiftState] = useState({
    manager: "Manager On Duty",
    shiftType: "GENTS EVENING",
    startTime: "6:00 PM",
    membersInside: 47,
    dueToday: 9,
    overdue: 13,
    cashCollected: 31000,
  });

  const [showPOS, setShowPOS] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 text-gray-900">
      
      {/* Top Status Bar */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between rounded-lg bg-gray-900 p-4 text-white shadow">
        <div>
          <h1 className="text-xl font-bold uppercase tracking-wider">{shiftState.shiftType} SHIFT</h1>
          <p className="text-sm text-gray-400">Manager: {shiftState.manager} | Started: {shiftState.startTime}</p>
        </div>
        <div className="mt-4 flex gap-4 md:mt-0">
          <div className="flex items-center gap-2 rounded bg-gray-800 px-4 py-2">
            <Users className="h-5 w-5 text-blue-400" />
            <span className="font-bold">{shiftState.membersInside} Inside</span>
          </div>
          <button className="flex items-center gap-2 rounded bg-red-600 px-4 py-2 font-bold hover:bg-red-700 transition">
            <LogOut className="h-4 w-4" />
            CLOSE SHIFT
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        
        {/* Left Column: Quick Actions & Live Feed */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
          
          {/* Member Search */}
          <div className="flex items-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <Search className="mr-3 h-6 w-6 text-gray-400" />
            <input 
              type="text" 
              placeholder="Scan Barcode or Search Member by Name / ID..." 
              className="w-full text-lg outline-none bg-transparent"
            />
            <button className="ml-4 rounded bg-black px-6 py-2 text-white font-bold hover:bg-gray-800">
              SEARCH
            </button>
          </div>

          {/* Action Grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <button className="flex flex-col items-center justify-center gap-2 rounded-xl bg-emerald-100 p-4 text-emerald-800 font-bold transition hover:scale-105">
              <CreditCard className="h-6 w-6" /> Collect Fee
            </button>
            <button 
              onClick={() => setShowPOS(true)}
              className="flex flex-col items-center justify-center gap-2 rounded-xl bg-amber-100 p-4 text-amber-800 font-bold transition hover:scale-105"
            >
              <Coffee className="h-6 w-6" /> Bar POS
            </button>
            <button className="flex flex-col items-center justify-center gap-2 rounded-xl bg-blue-100 p-4 text-blue-800 font-bold transition hover:scale-105">
              <UserCheck className="h-6 w-6" /> Manual Entry
            </button>
            <button className="flex flex-col items-center justify-center gap-2 rounded-xl bg-purple-100 p-4 text-purple-800 font-bold transition hover:scale-105">
              <Receipt className="h-6 w-6" /> Add Expense
            </button>
          </div>

          {/* Live Access Feed */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm flex-grow">
            <h2 className="mb-4 text-lg font-bold">Live Access Feed</h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between rounded p-3 border-l-4 border-emerald-500 bg-emerald-50 text-emerald-900">
                <div>
                  <div className="font-bold">Ahmed Khan <span className="text-xs font-normal opacity-70">(TFG-01872)</span></div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-80">ENTRY GRANTED</div>
                </div>
                <div className="text-xs font-medium opacity-60">Just now</div>
              </div>

              <div className="flex items-center justify-between rounded p-3 border-l-4 border-red-500 bg-red-50 text-red-900">
                <div>
                  <div className="font-bold">Bilal Y. <span className="text-xs font-normal opacity-70">(TFG-01944)</span></div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-80">ENTRY DENIED (OVERDUE)</div>
                </div>
                <div className="text-xs font-medium opacity-60">2 mins ago</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Financial Summary */}
        <div className="col-span-1 flex flex-col gap-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold">Shift Collections</h2>
            <div className="mb-4 text-3xl font-black text-emerald-600">
              PKR {shiftState.cashCollected.toLocaleString()}
            </div>
            <div className="space-y-3 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Membership Dues</span>
                <span className="font-bold">PKR 22,600</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Bar Sales</span>
                <span className="font-bold">PKR 6,300</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-orange-800">
              <ShieldAlert className="h-5 w-5" />
              <h2 className="text-lg font-bold">Action Required</h2>
            </div>
            <ul className="space-y-3 text-sm font-medium text-orange-900">
              <li className="flex justify-between border-b border-orange-100 pb-2">
                <span>Due Today</span>
                <span className="rounded bg-orange-200 px-2">{shiftState.dueToday}</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* POS Modal Component */}
      {showPOS && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 z-50">
          <div className="flex w-full max-w-2xl flex-col rounded-xl bg-white p-6 shadow-xl relative">
            <button 
              onClick={() => setShowPOS(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="mb-4 text-xl font-bold flex items-center gap-2">
              <Coffee className="text-amber-600" /> Bar POS Quick Entry
            </h2>
            <div className="grid grid-cols-2 gap-4 my-4">
              <div className="p-4 border rounded-lg text-center hover:border-amber-500 cursor-pointer">
                <p className="font-bold">Protein Shake</p>
                <p className="text-sm text-gray-500">PKR 450</p>
              </div>
              <div className="p-4 border rounded-lg text-center hover:border-amber-500 cursor-pointer">
                <p className="font-bold">Mineral Water</p>
                <p className="text-sm text-gray-500">PKR 100</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}