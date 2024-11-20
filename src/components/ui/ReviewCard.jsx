import { StarIcon } from "hugeicons-react";
import React from "react";
import avatar from "../../assets/images/avatar.jpg";

export default function ReviewCard() {
  return (
    <div className="mt-6 rounded-md bg-white p-4 shadow-sm">
      <div className="flex items-center space-x-4">
        <img src={avatar} alt="User" className="h-10 w-10 rounded-full" />
        <div>
          <p className="text-sm font-semibold">Kevin Kay</p>
          <p className="text-xs text-gray-400">1 month ago</p>
        </div>
      </div>
      <p className="mt-2 text-gray-600">
        I bought it 3 times and very happy about it!
      </p>
      <div className="mt-2 flex">
        <StarIcon size={18} fill="#FFC402" color="#FFC402" />
        <StarIcon size={18} fill="#FFC402" color="#FFC402" />
        <StarIcon size={18} fill="#FFC402" color="#FFC402" />
        <StarIcon size={18} fill="#FFC402" color="#FFC402" />
        <StarIcon size={18} fill="#FFC402" color="#FFC402" />
      </div>
    </div>
  );
}
