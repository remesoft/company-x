import React, { useState } from "react";

const PricingTab = () => {
  const [activeTab, setActiveTab] = useState("Basic");

  const tabs = [
    {
      name: "Basic",
      price: "$99",
      features: [
        "Modern Landing Page/Home Page (5 Sections Max)",
        "Delivery Time: 3 days",
        "Unlimited Revisions",
        "Responsive Design",
        "Source File",
      ],
    },
    {
      name: "Standard",
      price: "$199",
      features: [
        "Modern Landing Page/Home Page (10 Sections Max)",
        "Delivery Time: 5 days",
        "Unlimited Revisions",
        "Responsive Design",
        "Source File",
      ],
    },
    {
      name: "Premium",
      price: "$299",
      features: [
        "Complete Website (Unlimited Sections)",
        "Delivery Time: 7 days",
        "Unlimited Revisions",
        "Responsive Design",
        "Source File",
      ],
    },
  ];

  const currentTab = tabs.find((tab) => tab.name === activeTab);

  return (
    <div className="w-full max-w-md rounded-lg border bg-white p-6">
      {/* Tab Headers */}
      <div className="mb-6 flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex-1 py-2 text-center font-medium ${
              activeTab === tab.name
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">
          {currentTab.name} Package
        </h2>
        <p className="mb-6 text-xl font-bold text-gray-800">
          {currentTab.price}
        </p>
        <ul className="mb-6 space-y-2">
          {currentTab.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-green-500">✔</span> {feature}
            </li>
          ))}
        </ul>
        <button className="w-full rounded-lg bg-blue-500 py-2 text-lg font-medium text-white">
          Continue ({currentTab.price})
        </button>
      </div>
    </div>
  );
};

export default PricingTab;
