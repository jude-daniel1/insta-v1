import React from "react";

export default function Suggestion({ img, jobTitle, username }) {
  return (
    <div className="flex items-center justify-between mt-3">
      <img
        src={img}
        className="rounded-full h-10 border p-[2px]"
        alt={username}
      />
      <div className="flex-1 ml-4">
        <h2 className="font-semibold text-sm truncate">{username}</h2>
        <h3 className="text-gray-400 text-sm w-[230px]">{jobTitle}</h3>
      </div>

      <button className="font-semibold text-blue-400 text-sm">Follow</button>
    </div>
  );
}
