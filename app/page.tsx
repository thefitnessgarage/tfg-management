import Link from "next/link";
import { Dumbbell, ShieldCheck, Users, BarChart3, Coffee, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 flex flex-col justify-between selection:bg-amber-500 selection:text-black">
      {/* Header / Navbar */}
      <header className="border-b border-slate-800 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-3">
          <div className="bg-amber-500 p-2 rounded-lg text-black font-extrabold flex items-center justify-center">
            <Dumbbell className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-black tracking-wider uppercase text-amber-500">The Fitness Garage</span>
            <span className="block text-xs text-slate-400 tracking-widest uppercase">Management Suite</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard/owner"
            className="text-sm font-medium text-slate-300 hover:text-amber-400 transition"
          >
            Owner Portal
          </Link>
          <Link
            href="/dashboard/manager"
            className="bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg font-bold text-sm transition shadow-lg shadow-amber-500/10 flex items-center space-x-2"
          >
            <span>Launch POS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center my-auto">
        <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full text-xs font-semibold text-amber-400 mb-6 tracking-wide uppercase">
          <ShieldCheck className="w-4 h-4" />
          <span>Secure Operations & Financial Ledger</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight max-w-4xl mb-6 leading-tight">
          Elite Facility Control for <span className="text-amber-500">The Fitness Garage</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10">
          Seamlessly manage member access control, real-time POS checkouts, supplement bar revenue, and strict append-only financial tracking in one unified hub.
        </p>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
          <Link
            href="/dashboard/owner"
            className="group bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 p-6 rounded-2xl text-left transition flex flex-col justify-between"
          >
            <div>
              <div className="bg-amber-500/10 text-amber-400 p-3 rounded-xl w-fit mb-4 group-hover:bg-amber-500 group-hover:text-black transition">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-1">Owner Analytics</h3>
              <p className="text-xs text-slate-400">Track total revenue, membership dues, and real-time ledger verification.</p>
            </div>
            <div className="mt-6 flex items-center text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition">
              <span>Open Owner Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

          <Link
            href="/dashboard/manager"
            className="group bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 p-6 rounded-2xl text-left transition flex flex-col justify-between"
          >
            <div>
              <div className="bg-amber-500/10 text-amber-400 p-3 rounded-xl w-fit mb-4 group-hover:bg-amber-500 group-hover:text-black transition">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-1">Manager POS & Bar</h3>
              <p className="text-xs text-slate-400">Handle walk-in customer bar sales, protein shakes, and shift operations.</p>
            </div>
            <div className="mt-6 flex items-center text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition">
              <span>Open Manager Station</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

          <Link
            href="/dashboard/members"
            className="group bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 p-6 rounded-2xl text-left transition flex flex-col justify-between"
          >
            <div>
              <div className="bg-amber-500/10 text-amber-400 p-3 rounded-xl w-fit mb-4 group-hover:bg-amber-500 group-hover:text-black transition">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-1">Member Directory</h3>
              <p className="text-xs text-slate-400">Manage member profiles, active statuses, and access credentials.</p>
            </div>
            <div className="mt-6 flex items-center text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition">
              <span>Open Members Hub</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-6 px-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} The Fitness Garage. All rights reserved. Built with Next.js & Vercel.</p>
      </footer>
    </div>
  );
}