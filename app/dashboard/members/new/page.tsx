"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewMemberPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membershipType: "Monthly",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/dashboard/members");
      } else {
        alert("Error saving member");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">Add New Member</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded-xl border border-gray-700">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Full Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500"
            placeholder="Umer Khan"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500"
            placeholder="umer@example.com"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Phone Number</label>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500"
            placeholder="+92 300 0000000"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Membership Plan</label>
          <select
            value={formData.membershipType}
            onChange={(e) => setFormData({ ...formData, membershipType: e.target.value })}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500"
          >
            <option value="Monthly">Monthly Pass</option>
            <option value="Quarterly">Quarterly Pass</option>
            <option value="Annual">Annual Pass</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-bold py-3 rounded-lg transition-colors mt-4"
        >
          {loading ? "Saving..." : "Register Member"}
        </button>
      </form>
    </div>
  );
}