"use client";
import React, { useState } from "react";
import Link from "next/link";
import { UserPlus, Search, ShieldCheck, ShieldAlert, AlertTriangle } from "lucide-react";

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("ALL");

  // Sample data matching your current preview
  const members = [
    { id: "TFG-01872", name: "Ahmed Khan", phone: "+92 300 1234567", dueDate: "2026-08-15", status: "ACTIVE" },
    { id: "TFG-01944", name: "Bilal Yousafzai", phone: "+92 321 9876543", dueDate: "2026-08-10", status: "RESTRICTED" },
    { id: "TFG-01102", name: "Hamza Shinwari", phone: "+92 333 5551122", dueDate: "2026-08-20", status: "ACTIVE" },
    { id: "TFG-02011", name: "Ayesha Malik", phone: "+92 312 4447788", dueDate: "2026-08-11", status: "DUE TODAY" },
  ];

  const filteredMembers = members.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.phone.includes(searchTerm);

    if (activeTab === "ACTIVE") return matchesSearch && m.status === "ACTIVE";
    if (activeTab === "DUE TODAY") return matchesSearch && m.status === "DUE TODAY";
    if (activeTab === "RESTRICTED") return matchesSearch && m.status === "RESTRICTED";
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header & Register Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-amber-500">THE FITNESS GARAGE — MEMBERS & EXPIRIES</h1>
            <p className="text-xs text-slate-400 mt-1">Manage Memberships, Expiry Tracking & Automated Access Control</p>
          </div>

          <Link
            href="/dashboard/members/new"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-bold px-4 py-2.5 rounded-xl text-sm transition shadow-lg shadow-amber-500/10"
          >
            <UserPlus className="w-4 h-4 mr-2" /> Register New Member
          </Link>
        </div>

        {/* Search and Filters Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by Member ID, Name, or Phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm focus:border-amber-500 focus:outline-none text-slate-100"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            {["ALL", "ACTIVE", "DUE TODAY", "RESTRICTED"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === tab
                    ? "bg-amber-500 text-black"
                    : "bg-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Members Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-4 font-semibold">Member ID</th>
                  <th className="p-4 font-semibold">Full Name</th>
                  <th className="p-4 font-semibold">Phone Number</th>
                  <th className="p-4 font-semibold">Due Date</th>
                  <th className="p-4 font-semibold">Access Status</th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredMembers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-slate-500">
                      No members found matching your search.
                    </td>
                  </tr>
                ) : (
                  filteredMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-slate-800/40 transition">
                      <td className="p-4 font-mono font-medium text-amber-400">{member.id}</td>
                      <td className="p-4 font-semibold text-slate-200">{member.name}</td>
                      <td className="p-4 text-slate-400">{member.phone}</td>
                      <td className="p-4 text-slate-300">{member.dueDate}</td>
                      <td className="p-4">
                        {member.status === "ACTIVE" && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <ShieldCheck className="w-3 h-3 mr-1" /> ACTIVE
                          </span>
                        )}
                        {member.status === "RESTRICTED" && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-red-500/10 text-red-400 border border-red-500/20">
                            <ShieldAlert className="w-3 h-3 mr-1" /> RESTRICTED
                          </span>
                        )}
                        {member.status === "DUE TODAY" && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            <AlertTriangle className="w-3 h-3 mr-1" /> DUE TODAY
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium transition border border-slate-700">
                          Manage / Renew
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}