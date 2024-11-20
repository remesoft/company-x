export default function PackageTable({ data }) {
  // Extract all unique features from packages
  const uniqueFeatures = Array.from(
    new Set(data.flatMap((pkg) => pkg.features.map((feature) => feature.name))),
  );

  return (
    <div className="py-6">
      <h3 className="text-2xl font-bold">Packages</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-200 text-left">
          <thead>
            <tr>
              <th className="border border-gray-200 p-4 font-normal">
                Features
              </th>
              {data.map((pkg, index) => (
                <th
                  className="border border-gray-200 p-4 text-center"
                  key={index}
                >
                  <div className="font-semibold">{pkg.name}</div>
                  <div className="text-xl font-bold">{pkg.price}</div>
                  <button className="mt-2 w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    Select
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {uniqueFeatures.map((featureName, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}
              >
                <td className="border border-gray-200 p-4">{featureName}</td>
                {data.map((pkg, colIndex) => {
                  const feature = pkg.features.find(
                    (f) => f.name === featureName,
                  );
                  return (
                    <td
                      key={colIndex}
                      className="border border-gray-200 p-4 text-center"
                    >
                      {feature ? (
                        feature.value === "Included" ? (
                          <span className="text-green-600">✔</span>
                        ) : feature.value === "Not Included" ? (
                          "–"
                        ) : (
                          feature.value
                        )
                      ) : (
                        "N/A"
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm">
        You can add services add-ons on the next page.
      </p>
    </div>
  );
}
