"use client";
import { SelectIcon } from "@/utils/icons";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import TableContent from "./TableContent";
import ReactPaginate from "react-paginate";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ContentPage = ({ contentData = [] }: any) => {
  const [search, setSearch] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const searchParams = useSearchParams();
  const itemsPerPage = 10;
  useEffect(() => {
    setData(contentData);

    const searchParam = searchParams.get("search");
    const pageParam = searchParams.get("page");

    if (searchParam) setSearch(searchParam);
    if (pageParam) setCurrentPage(parseInt(pageParam) - 1);
  }, [contentData, searchParams]);

  const handleDelete = (index: number) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const handlePageClick = (selectedItem: { selected: number }) => {
    const page = selectedItem.selected;
    setCurrentPage(page);

    const params = new URLSearchParams(window.location.search);
    params.set("page", (page + 1).toString());
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const filteredData = data.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (obj: any) =>
      obj.name?.toLowerCase().includes(search.toLowerCase()) ||
      obj.country?.toLowerCase().includes(search.toLowerCase())
  );

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="flex flex-col w-full">
      <div className="border border-[#F1F1F1] bg-white shadow-[0px_16px_53.7px_0px_#4F02FE14] rounded-md pb-6 pt-2.5 w-full max-w-[969px] max-xl:mx-auto">
        {/* Controls */}
        <div className="flex justify-between items-center w-full px-[15px] pb-4 max-md:flex-col-reverse max-md:gap-5">
          <div className="flex items-center gap-2.5">
            <p className="text-sm font-medium text-primary-black">Show</p>
            <div className="flex items-center bg-[#A40A86] min-w-[59px] justify-center gap-1 rounded-md">
              <select className="bg-[#A40A86] py-1 px-2 text-white rounded-sm cursor-pointer appearance-none outline-none">
                <option value="10">10</option>
                <option value="5">5</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
              </select>
              <div className="-ml-2">
                <SelectIcon />
              </div>
            </div>
            <p className="text-sm font-medium text-primary-black">
              Enter per page
            </p>
          </div>
          <input
            onChange={handleSearchChange}
            value={search}
            type="text"
            placeholder="Find"
            className="w-full max-w-[320px] outline-none py-3 px-4 placeholder:text-primary-black placeholder:text-sm text-sm font-medium border-[0.8px] border-[#00000033] rounded-full"
          />
        </div>

        {/* Table */}
        <TableContent tableMap={paginatedData} onDelete={handleDelete} />
      </div>
      {/* Pagination */}
      <div className="pt-8 flex justify-end">
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          forcePage={currentPage}
          containerClassName="flex items-center justify-center gap-2"
          pageClassName="bg-white text-black border border-[#e5e7eb] rounded-xl px-4 py-2 text-sm font-medium hover:bg-gray-100 transition cursor-pointer"
          activeClassName="!bg-[#4F02FE] text-white cursor-pointer"
          previousLabel={
            <span className="text-gray-400 font-medium px-4 py-2">Prev</span>
          }
          nextLabel={
            <span className="text-black font-medium px-4 py-2 cursor-pointer">
              Next
            </span>
          }
          previousClassName="bg-white border border-[#e5e7eb] rounded-xl px-4 py-2 text-sm font-medium cursor-pointer"
          nextClassName="bg-white border border-[#e5e7eb] rounded-xl px-4 py-2 text-sm font-medium cursor-pointer"
          breakLabel={<span className="px-4 py-2">...</span>}
          breakClassName="text-black"
        />
      </div>
    </div>
  );
};

export default ContentPage;
