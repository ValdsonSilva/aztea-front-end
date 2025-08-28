"use client";

import React from "react";

const MenuCard: React.FC = () => {
  const items = [
    { path: "Home page", route: "/feed" },
    { path: "Magazine", route: "#" },
    { path: "Lifestyle", route: "#" },
    { path: "Latest news", route: "#" },
    { path: "Global hits", route: "#" },
    { path: "Caribbean news", route: "#" },
  ];

  return (
    <div className="w-44 rounded-2xl bg-gray-300/90 p-3 shadow-xl ring-4">
      <ul className="space-y-2 text-center text-gray-800">

        {/* Itens do menu */}
        {items.map((item, idx) => (
          <li
            key={idx}
            className="py-1 hover:opacity-80 cursor-pointer transition"
          >
            <a href={`${item.route}`} className="block text-sm">{item.path}</a>
            {idx !== items.length - 1 && (
              <span className="mx-auto mt-1 block h-px w-14 bg-gray-700/60"></span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuCard;
