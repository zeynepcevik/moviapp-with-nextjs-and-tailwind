"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Tabs = () => {
  const router = useRouter();
  const { genre } = router.query || { genre: null }; 

  console.log(genre, "genre");
  const tabs = [
    {
      name: "En Yüksek Oy Alanlar",
      url: "top_rated",
    },
    {
      name: "Son Eklenenler",
      url: "latest",
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming",
    },
  ];

  return (
    <div className="p-5 m-5 bg-gray-200 dark:bg-gray-800 flex items-center justify-center gap-7">
      {tabs.map((tab, i) => (
        <Link
          className={`cursor-pointer hover:opacity-90 transition-opacity ${genre === tab.url
              ? "underline underline-offset-8 text-amber-600"
              : ""
          }`}
          href={`/genre/${tab.url}`}
          key={i}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;