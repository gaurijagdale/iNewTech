import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Trash, FileDown } from "lucide-react";
import * as XLSX from "xlsx";

export function DynamicTable({ columns, data, onDelete }) {
  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data); // Convert data to worksheet
    const workbook = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Suppliers"); // Append sheet
    XLSX.writeFile(workbook, "suppliers.xlsx"); // Download as Excel file
  };

  return (
    <div className="w-full flex flex-col ">

      <button
        onClick={handleDownloadExcel}
        className="flex items-center self-end bg-blue-700 text-white py-2 px-4 mb-4"
      >
        <FileDown className="w-5 h-5 mr-2" /> Download Excel
      </button>

      <Table>
        <TableCaption>A list of suppliers and their information.</TableCaption>
        <TableHeader>
          <TableRow>
            {/* Render dynamic table headers */}
            {columns.map((column) => (
              <TableHead key={column}>{column}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Render dynamic table rows */}
          {data.map((item, index) => (
            <TableRow key={index} className="  odd:bg-blue-50 even:bg-white">
              {columns.map((column) => (
                <TableCell key={column}>
                  {/* Wrap only specific column with Link */}
                  {column === "name" ? (
                    <Link
                      to={`/suppliers/${item.id}`}
                      className="cursor-pointer hover:underline"
                    >
                      {item[column]}
                    </Link>
                  ) : (
                    item[column]
                  )}
                </TableCell>
              ))}
              <TableCell>
                <button
                  onClick={() => onDelete(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
