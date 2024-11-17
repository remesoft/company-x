import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ServiceCard from "./ui/ServiceCard";
import services from "../data/services";

export default function ServiceManager() {
  const gigs = services.flatMap((category) => category.gig);
  const itemsPerPage = 6; // Number of items per page
  const totalPages = Math.ceil(gigs.length / itemsPerPage);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get the current page from the URL, default to 1 if not present or invalid
  const currentPage = parseInt(searchParams.get("page")) || 1;

  // Ensure the current page is within valid range
  const validPage = Math.max(1, Math.min(currentPage, totalPages));

  // Get the items for the current page
  const currentItems = gigs.slice(
    (validPage - 1) * itemsPerPage,
    validPage * itemsPerPage,
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setSearchParams({ page: page.toString() });
    }
  };

  return (
    <section className="mx-auto max-w-[1250px] px-4 py-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((data, index) => (
          <ServiceCard key={index} data={data} more={true} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-8 flex justify-center space-x-2">
        <button
          className={`rounded-md px-4 py-2 ${
            validPage === 1
              ? "cursor-not-allowed bg-gray-300"
              : "bg-blue-500 text-white"
          }`}
          onClick={() => handlePageChange(validPage - 1)}
          disabled={validPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`rounded-md px-4 py-2 ${
              validPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className={`rounded-md px-4 py-2 ${
            validPage === totalPages
              ? "cursor-not-allowed bg-gray-300"
              : "bg-blue-500 text-white"
          }`}
          onClick={() => handlePageChange(validPage + 1)}
          disabled={validPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}
