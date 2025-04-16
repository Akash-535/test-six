"use client";
import { TABLE_HEAD_LIST } from "@/utils/helper";
import { DeleteIcon, DownArrowIcon, TopArrowIcon } from "@/utils/icons";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TableContent = ({ tableMap, onDelete }: any) => {
  return (
    <div className="overflow-auto w-full">
      <table className="w-full">
        <thead>
          <tr className="bg-[#3F02CB] flex">
            {TABLE_HEAD_LIST.map((obj, i) => (
              <th
                key={i}
                className={`px-[15px] flex items-center justify-between border-r border-[#FFFFFF33] py-2.5 ${
                  i === 0
                    ? "min-w-[90px]"
                    : i === 1
                    ? "min-w-[235px]"
                    : i === 2
                    ? "min-w-[200px]"
                    : i === 3
                    ? "min-w-[175px]"
                    : "min-w-[260px] border-r-0"
                }`}
              >
                <p className="text-sm font-medium text-white leading-[100%]">
                  {obj}
                </p>
                <div className="flex flex-col items-center gap-[3px]">
                  <TopArrowIcon />
                  <DownArrowIcon />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    tableMap.map((obj: any, i: number) => (
                      <tr
                        key={i}
                        className="hover:bg-[#FBECF8] duration-300 ease-linear"
                      >
                        <td className="pl-[15px] py-[11.5px] min-w-[90px]">
                          <p className="text-xs text-primary-black font-medium leading-[100%]">
                            {obj.alpha_two_code}
                          </p>
                        </td>
                        <td className="pl-[15px] py-[11.5px] min-w-[235px]">
                          <Link
                            href={obj.web_pages}
                            className="text-xs text-primary-black font-medium leading-[100%]"
                          >
                            {obj.web_pages}
                          </Link>
                        </td>
                        <td className="pl-[15px] py-[11.5px] min-w-[200px]">
                          <Link
                            href={obj.domains}
                            className="text-xs text-primary-black font-medium leading-[100%]"
                          >
                            {obj.domains}
                          </Link>
                        </td>
                        <td className="pl-[15px] py-[11.5px] min-w-[175px]">
                          <p className="text-xs text-primary-black font-medium leading-[100%]">
                            {obj.country}
                          </p>
                        </td>
                        <td className="px-[15px] py-[11.5px] min-w-[267px] flex items-center justify-between">
                          <p className="text-xs text-primary-black font-medium leading-[100%]">
                            {obj.name}
                          </p>
                          <button
                            onClick={() => onDelete(i)}
                            className="cursor-pointer"
                          >
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
