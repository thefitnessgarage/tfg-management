import Link from "next/link";
import { Home, Users, Coffee, ShieldCheck, UserCog } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-950 text-white">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-gray-800 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-wider text-yellow-500 mb-8">
            THE FITNESS GARAGE
          </h1>
          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
            >
              <Home size={20} />
              <span>Overview</span>
            </Link>
            <Link
              href="/dashboard/members"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
            >
              <Users size={20} />
              <span>Members</span>
            </Link>
            <Link
              href="/dashboard/bar"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
            >
              <Coffee size={20} />
              <span>Bar POS</span>
            </Link>
            <Link
              href="/dashboard/manager"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
            >
              <UserCog size={20} />
              <span>Manager</span>
            </Link>
            <Link
              href="/dashboard/owner"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
            >
              <ShieldCheck size={20} />
              <span>Owner Panel</span>
            </Link>
          </nav>
        </div>
        <div className="text-xs text-gray-500">
          TFG Management v1.0
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8 bg-gray-900">
        {children}
      </main>
    </div>
  );
}