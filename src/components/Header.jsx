import React from "react";
import { assets } from "../assets/assets";

function Header() {
  // ✅ Step 1: Centralized header data
  const headerData = {
    tagText: "New AI features integrated",
    title: `I'm Neoryte, and <span class="text-primary">THIS</span> is my <br /> Blog`,
    subtitle:
      "Passionate about health and wellness, delivering trusted insights and real-life stories. Each piece is crafted to inform, inspire, and empower healthier living.",
  };

  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        {/* Tag Line Box */}
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
          <p>{headerData.tagText}</p>
          <img src={assets.star_icon} alt="" className="w-2.5" />
        </div>

        {/* Title (HTML string to preserve span & br) */}
        <h1
          className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700"
          dangerouslySetInnerHTML={{ __html: headerData.title }}
        />

        {/* Subtitle */}
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
          {headerData.subtitle}
        </p>

        {/* Search Form */}
        <form className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden">
          <input
            className="w-full pl-4 outline-none"
            type="text"
            placeholder="Search for post"
          />
          <button
            className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      {/* Background Image */}
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      />
    </div>
  );
}

export default Header;
