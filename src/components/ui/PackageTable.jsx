import React from "react";

export default function PackageTable({ data }) {
  console.log(data);
  return (
    <div className="py-6">
      <h3 className="text-2xl font-bold">Packages</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-200 text-left">
          <thead>
            <tr>
              <th className="border border-gray-200 p-4 font-normal">
                Packages
              </th>
              
              <th className="border border-gray-200 p-4 text-center">
                <div className="font-semibold">Basic</div>
                <div className="text-xl font-bold">$99</div>
                <button className="mt-2 w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Select
                </button>
              </th>
              <th className="border border-gray-200 p-4 text-center">
                <div className="font-semibold">Standard</div>
                <div className="text-xl font-bold">$249</div>
                <button className="mt-2 w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Select
                </button>
              </th>
              <th className="border border-gray-200 p-4 text-center">
                <div className="font-semibold">Premium</div>
                <div className="text-xl font-bold">$559</div>
                <button className="mt-2 w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Select
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-200 p-4">Delivery Time</td>
              <td className="border border-gray-200 p-4 text-center">3 day</td>
              <td className="border border-gray-200 p-4 text-center">6 day</td>
              <td className="border border-gray-200 p-4 text-center">10 day</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-4">
                Number of Revisions
              </td>
              <td className="border border-gray-200 p-4 text-center">
                unlimited
              </td>
              <td className="border border-gray-200 p-4 text-center">
                unlimited
              </td>
              <td className="border border-gray-200 p-4 text-center">
                unlimited
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-200 p-4">Responsive Design</td>
              <td className="border border-gray-200 p-4 text-center">
                <span className="text-green-600">✔</span>
              </td>
              <td className="border border-gray-200 p-4 text-center">
                <span className="text-green-600">✔</span>
              </td>
              <td className="border border-gray-200 p-4 text-center">
                <span className="text-green-600">✔</span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-4">Source File</td>
              <td className="border border-gray-200 p-4 text-center">
                <span className="text-green-600">✔</span>
              </td>
              <td className="border border-gray-200 p-4 text-center">
                <span className="text-green-600">✔</span>
              </td>
              <td className="border border-gray-200 p-4 text-center">
                <span className="text-green-600">✔</span>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-200 p-4">Prototype</td>
              <td className="border border-gray-200 p-4 text-center">–</td>
              <td className="border border-gray-200 p-4 text-center">
                <span className="text-green-600">✔</span>
              </td>
              <td className="border border-gray-200 p-4 text-center">
                <span className="text-green-600">✔</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm">
        You can add services add-ons on the next page.
      </p>
    </div>
  );
}
