"use client";

import React, { useState } from "react";
import { Users, Search, UserPlus, ShieldAlert, CheckCircle2, AlertTriangle, Phone, Calendar } from "lucide-react";

export default function MemberManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("ALL");

  const members = [
    { id: "TFG-01872", name: "Ahmed Khan", phone: "+92 300 1234567", dueDate: "2026-08-15", status: "ACTIVE", type: "GENTS" },
    { id: "TFG-01944", name: "Bilal Yousafzai", phone: "+92 321 9876543", dueDate: "2026-08-10", status: "RESTRICTED", type: "GENTS" },
    { id: "TFG-01102", name: "Hamza Shinwari", phone: "+92 333 5551122", dueDate: "2026-08-20", status: "ACTIVE", type: "GENTS" },
    { id: "TFG-02011", name: "Ayesha Malik", phone: "+92 312 4447788", dueDate: "2026-08-11", status: "DUE_TODAY", type: "LADIES" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8 text-white">
      
      {/* Header & Actions */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-wider text-amber-500">The Fitness Garage — Members & Expiries</h1>
          <p className="text-sm text-gray-400">Manage Memberships, Expiry Tracking & Automated Access Control</p>
        </div>
        <button className="flex items-center gap-2 bg-amber-500 text-black font-bold px-4 py-2.5 rounded-xl hover:bg-amber-400 transition">
          <UserPlus className="h-5 w-5" /> Register New Member
        </button>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-grow max-w-lg">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by Member ID, Name, or Phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 outline-none focus:border-amber-500"
          />
        </div>
        <div className="flex gap-2 bg-gray-800 p-1 rounded-xl border border-gray-700">
          {["ALL", "ACTIVE", "DUE_TODAY", "RESTRICTED"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition ${
                filter === f ? "bg-amber-500 text-black" : "text-gray-400 hover:text-white"
              }`}
            >
              {f.replace("_", " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Members Table */}
      <div className="rounded-xl bg-gray-800 border border-gray-700 overflow-hidden shadow">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-900 text-gray-400 uppercase text-xs tracking-wider">
              <tr>
                <th className="p-4">Member ID</th>
                <th className="p-4">Full Name</th>
                <th className="p-4">Phone Number</th>
                <th className="p-4">Due Date</th>
                <th className="p-4">Access Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {members.map((m) => (
                <tr key={m.id} className="hover:bg-gray-750 transition">
                  <td className="p-4 font-mono text-xs font-bold text-amber-400">{m.id}</td>
                  <td className="p-4 font-bold text-white">{m.name}</td>
                  <td className="p-4 text-gray-300 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" /> {m.phone}
                  </td>
                  <td className="p-4 text-gray-300">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-gray-500" /> {m.dueDate}
                    </span>
                  </td>
                  <td className="p-4">
                    {m.status === "ACTIVE" && (
                      <span className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-400 border border-emerald-800 px-3 py-1 rounded-full text-xs font-bold">
                        <CheckCircle2 className="h-3.5 w-3.5" /> ACTIVE
                      </span>
                    )}
                    {m.status === "RESTRICTED" && (
                      <span className="inline-flex items-center gap-1 bg-red-950 text-red-400 border border-red-800 px-3 py-1 rounded-full text-xs font-bold">
                        <ShieldAlert className="h-3.5 w-3.5" /> RESTRICTED
                      </span>
                    )}
                    {m.status === "DUE_TODAY" && (
                      <span className="inline-flex items-center gap-1 bg-orange-950 text-orange-400 border border-orange-800 px-3 py-1 rounded-full text-xs font-bold">
                        <AlertTriangle className="h-3.5 w-3.5" /> DUE TODAY
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <button className="bg-gray-700 hover:bg-amber-500 hover:text-black font-bold px-3 py-1.5 rounded-lg text-xs transition">
                      Manage / Renew
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}