"use client";

import { useState } from "react";
import { owners, OwnerProps, buildOwnerInformation } from "@/mock/owner";

export default function OwnerInformation() {
  const [selectedOwner, setSelectOwner] = useState<OwnerProps>(owners[0]);
  const ownerData = buildOwnerInformation(selectedOwner);

  return (
    <div className="my-8 pr-5">
      <section className="text-lg font-black mb-5">Owner Information</section>

      {ownerData.map((item, index) => (
        <div key={index} className="flex flex-row gap-5 mb-3">
          <svg
            className="w-6 h-6 text-blue-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d={item.icon} />
          </svg>
          <span className="font-semibold">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
