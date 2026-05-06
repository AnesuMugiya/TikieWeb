import React from 'react';

export default function Page() {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <div className="max-w-[900px] mx-auto">
        <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#5a7a4a] rounded-lg flex items-center justify-center">
              <span className="text-white font-medium text-sm">T</span>
            </div>
            <span className="text-lg font-medium text-gray-900">tikie</span>
          </div>
          <div className="flex gap-3 items-center">
            <button className="bg-transparent text-[#5a7a4a] border border-[#5a7a4a] rounded-lg px-5 py-2 text-sm font-medium hover:bg-gray-50 transition">
              Sign in
            </button>
            <button className="bg-[#5a7a4a] text-white rounded-lg px-5 py-2 text-sm font-medium hover:bg-[#4a6a3a] transition">
              Get started
            </button>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="max-w-[900px] mx-auto px-6 py-16 flex items-center gap-12 flex-wrap">
        <div className="flex-1 min-w-[260px]">
          <span className="bg-[#e8f0e2] text-[#3d5c2e] text-xs px-3 py-1 rounded-full inline-block mb-4">
            Shop. Give. Impact.
          </span>
          <h1 className="text-4xl font-medium leading-tight text-gray-900 my-4">
            Buy local.<br />Give back.<br />
            <span className="text-[#5a7a4a]">Feel good.</span>
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed mb-7">
            Tikie connects you with local artisans and second-hand sellers. Every purchase gives you the option to donate to a cause you care about — and you can see exactly where your money goes.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button className="bg-[#5a7a4a] text-white rounded-lg px-7 py-3 text-sm font-medium hover:bg-[#4a6a3a] transition">
              Start shopping
            </button>
            <button className="bg-transparent text-[#5a7a4a] border border-[#5a7a4a] rounded-lg px-6 py-3 text-sm font-medium hover:bg-gray-50 transition">
              Sell on Tikie
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            53.8% of surveyed shoppers said they'd donate through everyday purchases if it was this easy.
          </p>
        </div>

        {/* Phone Mockup */}
        <div className="flex-shrink-0">
          <div className="bg-white border border-gray-300 rounded-3xl p-3 w-[220px] shadow-md">
            <div className="bg-[#fafaf8] rounded-xl overflow-hidden">
              <div className="p-3 pb-0 bg-white">
                <div className="flex justify-between items-center mb-2">
                  <div className="bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-500 flex-1 mr-2">
                    Search
                  </div>
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-600">
                    🔍
                  </div>
                </div>
                <div className="flex gap-1.5 mb-2">
                  <span className="bg-[#5a7a4a] text-white text-xs px-2 py-0.5 rounded-full">For You</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">New</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">Categories</span>
                </div>
              </div>
              <div className="px-1.5 bg-[#fafaf8]">
                <div className="grid grid-cols-2 gap-1.5 pb-2">
                  {[
                    { name: "White biker jacket", price: "R165" },
                    { name: "Dark grey cargo pa...", price: "R230" },
                    { name: "Air Jordan 4 Metro...", price: "R540" },
                    { name: "Satin v neck mini...", price: "R150" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="bg-gray-300 rounded-lg h-[90px] mb-1"></div>
                      <p className="text-[10px] font-medium text-gray-800">{item.name}</p>
                      <p className="text-[10px] text-[#5a7a4a]">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-around py-2 border-t border-gray-200 bg-white">
                {['🏠', '🔍', '🛒', '💬', '👤'].map((icon, i) => (
                  <span key={i} className={`text-sm ${i === 0 ? 'text-[#5a7a4a]' : 'text-gray-400'}`}>
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="bg-gray-50 py-10 px-6">
        <div className="max-w-[900px] mx-auto">
          <p className="text-center text-xs text-gray-500 mb-6">Trusted by charity partners including</p>
          <div className="flex justify-center gap-8 flex-wrap">
            {["Gift of the Givers", "SPCA South Africa", "Breadline Africa", "Ikamva Youth"].map((partner) => (
              <span key={partner} className="text-xs font-medium text-gray-500">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <p className="text-center text-xs text-[#5a7a4a] font-medium tracking-wide mb-2">
          HOW IT WORKS
        </p>
        <h2 className="text-center text-2xl font-medium text-gray-900 mb-10">
          Three people. One purchase. Real impact.
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: "🛒", title: "You shop", desc: "Browse unique handmade and second-hand products from local SA sellers and artisans." },
            { icon: "❤️", title: "You choose a cause", desc: "Pick a charity from our verified partners. A portion of your purchase goes directly to them." },
            { icon: "🌍", title: "You see the impact", desc: "Charities post real updates — photos, numbers, stories — so you know exactly what your money did." },
          ].map((item, i) => (
            <div key={i} className="text-center p-6">
              <div className="w-12 h-12 bg-[#e8f0e2] rounded-xl flex items-center justify-center mx-auto mb-4 text-xl">
                {item.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">{item.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Stores */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <p className="text-xs text-[#5a7a4a] font-medium tracking-wide mb-2">POPULAR STORES</p>
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Shop local, support causes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { initial: "W", name: "Warrier Princess", category: "Fashion — 300 items", type: "Good rep", charity: "Hunger relief", width: "72%" },
              { initial: "C", name: "Crochet Mania", category: "Handmade — 84 items", type: "Good rep", charity: "Animal welfare", width: "55%" },
              { initial: "G", name: "Graphic Tease", category: "Fashion — 210 items", type: "Good rep", charity: "Education", width: "40%" },
              { initial: "A", name: "Another Thrift Shop", category: "Second-hand — 156 items", type: "Second-hand", charity: "Conservation", width: "88%" },
            ].map((store, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 flex gap-3.5 items-start">
                <div className={`w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-base font-medium ${
                  i === 0 ? "bg-[#c8d4c0] text-[#4a6a3a]" :
                  i === 1 ? "bg-[#d4c0c8] text-[#6a3a4a]" :
                  i === 2 ? "bg-[#c0c4d4] text-[#3a4a6a]" :
                  "bg-[#d4d0c0] text-[#6a603a]"
                }`}>
                  {store.initial}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{store.name}</p>
                      <p className="text-xs text-gray-500 mb-1.5">{store.category}</p>
                    </div>
                    <span className={`text-[11px] px-2 py-0.5 rounded-md ${
                      store.type === "Second-hand" 
                        ? "bg-[#f5e8d0] text-[#8a5a20]" 
                        : "bg-[#f0f4ec] text-[#4a6a3a]"
                    }`}>
                      {store.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="flex-1 bg-[#e8f0e2] rounded h-1.5">
                      <div className="bg-[#5a7a4a] rounded h-1.5" style={{ width: store.width }}></div>
                    </div>
                    <span className="text-[11px] text-gray-500">{store.charity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* For Sellers */}
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <p className="text-xs text-[#5a7a4a] font-medium tracking-wide mb-2">FOR SELLERS</p>
        <h2 className="text-2xl font-medium text-gray-900 mb-3">Turn your talent into a business</h2>
        <p className="text-sm text-gray-600 mb-8 max-w-[540px]">
          List your products, choose a charity you believe in, and let your customers shop with purpose. No upfront costs during our launch period.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { value: "Free", label: "to list during launch" },
            { value: "5–10%", label: "commission per sale" },
            { value: "You pick", label: "which charity to support" },
          ].map((item, i) => (
            <div key={i} className="p-5 bg-gray-50 rounded-xl">
              <p className="text-2xl font-medium text-[#5a7a4a] mb-1">{item.value}</p>
              <p className="text-xs text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
        <button className="bg-[#5a7a4a] text-white rounded-lg px-7 py-3 text-sm font-medium hover:bg-[#4a6a3a] transition">
          Become a seller
        </button>
      </div>

      {/* CTA Banner */}
      <div className="bg-[#5a7a4a] py-16 px-6 text-center">
        <h2 className="text-2xl font-medium text-white mb-3">It's human. Be human.</h2>
        <p className="text-sm text-white/80 mb-7 max-w-[480px] mx-auto">
          You don't need to choose between spending money on yourself and making a difference. Tikie makes both happen at the same time.
        </p>
        <button className="bg-white text-[#5a7a4a] rounded-lg px-8 py-3 text-sm font-medium hover:bg-gray-100 transition">
          Start shopping
        </button>
      </div>

      {/* Footer */}
      <div className="max-w-[900px] mx-auto px-6 py-8 flex justify-between items-center flex-wrap gap-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#5a7a4a] rounded-md flex items-center justify-center">
            <span className="text-white font-medium text-[11px]">T</span>
          </div>
          <span className="text-xs text-gray-500">tikie — empowering ethical consumption</span>
        </div>
        <p className="text-xs text-gray-500">© 2025 Tikie Company</p>
      </div>
    </div>
  );
}