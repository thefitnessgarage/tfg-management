"use client";

import React, { useState } from "react";
import { Coffee, ShoppingCart, Plus, CheckCircle, Package, UserCheck, CreditCard, Banknote } from "lucide-react";

export default function BarPOSPage() {
  const [cart, setCart] = useState<{ name: string; price: number; qty: number }[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<"CASH" | "MEMBER_CREDIT">("CASH");
  const [selectedMember, setSelectedMember] = useState("TFG-01872 - Ahmed Khan");

  const inventory = [
    { id: "1", name: "Whey Protein Shake", price: 450, stockQty: 24 },
    { id: "2", name: "Mineral Water (500ml)", price: 100, stockQty: 85 },
    { id: "3", name: "Energy Drink", price: 350, stockQty: 19 },
    { id: "4", name: "Pre-Workout Shot", price: 300, stockQty: 12 },
    { id: "5", name: "BCAA Refresher", price: 400, stockQty: 15 },
  ];

  const membersList = [
    "TFG-01872 - Ahmed Khan",
    "TFG-01944 - Bilal Yousafzai",
    "TFG-01102 - Hamza Shinwari",
    "TFG-02011 - Ayesha Malik",
  ];

  const addToCart = (item: { name: string; price: number }) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) => (i.name === item.name ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { name: item.name, price: item.price, qty: 1 }];
    });
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    if (paymentMethod === "MEMBER_CREDIT") {
      alert(`Order of PKR ${totalPrice} successfully billed to tab for ${selectedMember}!`);
    } else {
      alert(`Cash sale of PKR ${totalPrice} logged successfully to drawer!`);
    }
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8 text-white">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-wider text-amber-500">The Fitness Garage — Bar & Supplement POS</h1>
          <p className="text-sm text-gray-400">Quick Checkout, Cash Drawer & Member Credit Tabs</p>
        </div>
        <div className="flex items-center gap-2 bg-gray-800 px-4 py-2.5 rounded-xl border border-gray-700">
          <Package className="h-5 w-5 text-amber-400" />
          <span className="text-sm font-bold">Shift Bar Drawer: PKR 6,300</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        
        {/* Left 2 Columns: Product Grid */}
        <div className="col-span-1 lg:col-span-2">
          <h2 className="mb-4 text-lg font-bold">Bar Menu & Stock</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inventory.map((item) => (
              <div 
                key={item.id}
                onClick={() => addToCart(item)}
                className="rounded-xl bg-gray-800 border border-gray-700 p-5 hover:border-amber-500 cursor-pointer transition shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-lg text-white">{item.name}</span>
                    <Coffee className="h-5 w-5 text-amber-400" />
                  </div>
                  <p className="text-xs text-gray-400">Stock Available: <span className="text-white font-bold">{item.stockQty} units</span></p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-amber-400 font-black text-lg">PKR {item.price}</span>
                  <button className="bg-gray-700 hover:bg-amber-500 hover:text-black p-2 rounded-lg transition">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Active Order / Cart & Payment Selection */}
        <div className="col-span-1">
          <div className="rounded-xl bg-gray-800 border border-gray-700 p-6 shadow sticky top-6">
            <h2 className="mb-4 text-lg font-bold flex items-center gap-2">
              <ShoppingCart className="text-amber-500" /> Current Checkout
            </h2>

            {cart.length === 0 ? (
              <div className="text-center py-12 text-gray-500 text-sm border border-dashed border-gray-700 rounded-xl">
                No items added yet.<br />Click an item on the left to start an order.
              </div>
            ) : (
              <div className="space-y-4">
                <div className="divide-y divide-gray-700 max-h-48 overflow-y-auto">
                  {cart.map((item, idx) => (
                    <div key={idx} className="py-3 flex justify-between items-center text-sm">
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-xs text-gray-400">PKR {item.price} × {item.qty}</p>
                      </div>
                      <p className="font-black text-amber-400">PKR {item.price * item.qty}</p>
                    </div>
                  ))}
                </div>

                {/* Payment Method Selector */}
                <div className="pt-2 border-t border-gray-700">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Payment Method</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setPaymentMethod("CASH")}
                      className={`flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-xs transition border ${
                        paymentMethod === "CASH" 
                          ? "bg-emerald-600 text-white border-emerald-500" 
                          : "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600"
                      }`}
                    >
                      <Banknote className="h-4 w-4" /> CASH SALE
                    </button>
                    <button
                      onClick={() => setPaymentMethod("MEMBER_CREDIT")}
                      className={`flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-xs transition border ${
                        paymentMethod === "MEMBER_CREDIT" 
                          ? "bg-amber-500 text-black border-amber-400" 
                          : "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600"
                      }`}
                    >
                      <CreditCard className="h-4 w-4" /> MEMBER TAB
                    </button>
                  </div>
                </div>

                {/* Member Selector if Credit Selected */}
                {paymentMethod === "MEMBER_CREDIT" && (
                  <div>
                    <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">Select Member Account</label>
                    <select
                      value={selectedMember}
                      onChange={(e) => setSelectedMember(e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2.5 text-sm text-white outline-none focus:border-amber-500"
                    >
                      {membersList.map((m, idx) => (
                        <option key={idx} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="border-t border-gray-700 pt-3 space-y-2">
                  <div className="flex justify-between text-lg font-black">
                    <span>Total Amount:</span>
                    <span className="text-emerald-400">PKR {totalPrice}</span>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  className={`w-full font-bold py-3.5 rounded-xl transition shadow flex items-center justify-center gap-2 mt-2 ${
                    paymentMethod === "CASH" 
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white" 
                      : "bg-amber-500 hover:bg-amber-400 text-black"
                  }`}
                >
                  <CheckCircle className="h-5 w-5" /> 
                  {paymentMethod === "CASH" ? "COMPLETE CASH SALE" : "CHARGE TO MEMBER TAB"}
                </button>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}