import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import { useGetVerificationRequestsQuery } from "../../../apis&state/apis/shopsApiSlice";

const columns = [
  { id: "shop_name", label: "Shop Name", minWidth: 170, align: "center" },
  { id: "shop_address", label: "Area", minWidth: 100, align: "center" },
  {
    id: "shop_contact",
    label: "Contact Number",
    minWidth: 170,
    align: "center",
  },
  {
    id: "state",
    label: "State",
    minWidth: 170,
    align: "center",
  },
  {
    id: "district",
    label: "District",
    minWidth: 170,
    align: "center",
  },
];

const rows = [
  {
    id: 1,
    shopName: "City Mart",
    area: "Downtown",
    contactNumber: "123-456-7890",
    state: "California",
    district: "San Francisco",
  },
  {
    id: 2,
    shopName: "Green Grocers",
    area: "Midtown",
    contactNumber: "987-654-3210",
    state: "Texas",
    district: "Dallas",
  },
  {
    id: 3,
    shopName: "Fashion Hub",
    area: "Uptown",
    contactNumber: "456-789-1234",
    state: "Florida",
    district: "Miami",
  },
  {
    id: 4,
    shopName: "Tech World",
    area: "Tech Park",
    contactNumber: "654-321-0987",
    state: "New York",
    district: "Manhattan",
  },
  {
    id: 5,
    shopName: "The Book Nook",
    area: "Old Town",
    contactNumber: "789-123-4560",
    state: "Illinois",
    district: "Chicago",
  },
  {
    id: 6,
    shopName: "Gadget Store",
    area: "West End",
    contactNumber: "321-654-9870",
    state: "Washington",
    district: "Seattle",
  },
  {
    id: 7,
    shopName: "Home Essentials",
    area: "East Side",
    contactNumber: "123-987-6543",
    state: "Nevada",
    district: "Las Vegas",
  },
  {
    id: 8,
    shopName: "Super Sports",
    area: "North Point",
    contactNumber: "654-789-3210",
    state: "Georgia",
    district: "Atlanta",
  },
  {
    id: 9,
    shopName: "Pet Supplies",
    area: "South Square",
    contactNumber: "789-654-1230",
    state: "Ohio",
    district: "Cleveland",
  },
  {
    id: 10,
    shopName: "Fitness Zone",
    area: "Main Street",
    contactNumber: "987-123-4567",
    state: "Arizona",
    district: "Phoenix",
  },
  {
    id: 11,
    shopName: "Bakery Bliss",
    area: "Harbor Town",
    contactNumber: "234-567-8901",
    state: "Colorado",
    district: "Denver",
  },
  {
    id: 12,
    shopName: "Toy World",
    area: "City Center",
    contactNumber: "345-678-9012",
    state: "Oregon",
    district: "Portland",
  },
  {
    id: 13,
    shopName: "Garden Supplies",
    area: "Greenfield",
    contactNumber: "456-789-0123",
    state: "Tennessee",
    district: "Nashville",
  },
  {
    id: 14,
    shopName: "Music Haven",
    area: "Central Plaza",
    contactNumber: "567-890-1234",
    state: "Missouri",
    district: "Kansas City",
  },
  {
    id: 15,
    shopName: "Auto Care",
    area: "Industrial Area",
    contactNumber: "678-901-2345",
    state: "Michigan",
    district: "Detroit",
  },
];

const RequestsTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();

  const [params, setParams] = React.useState({
    pageNum: 1,
    pageSize: 10,
  });

  const {
    data: verificationRequests,
    isLoading: isVerificationRequestsLoading,
    isError: isVerificationRequestsError,
  } = useGetVerificationRequestsQuery({
    pageNum: params.pageNum,
    pageSize: params.pageSize,
  });
  console.log(verificationRequests);

  const rows = verificationRequests?.data?.list;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestedSeller = (singleRequest) => {
    console.log(singleRequest)
    navigate(`/request-seller-account/${singleRequest.shop_uid}`);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ height: "70vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    minWidth: column.minWidth,
                    fontWeight: "bold",
                    fontSize: "14px",
                    color: "#2F4362",
                    letterSpacing: "0.5px",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row?.code}
                    sx={{ cursor: "pointer" }}
                    onClick={()=>handleRequestedSeller(row)}
                  >
                    {columns.map((column) => {
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            letterSpacing: "0.8px",
                            color: "#7D8FB3",
                            fontSize: "12px",
                            lineHeight: "20px",
                            fontWeight: 500,
                          }}
                        >
                          {column.id === "shop_contact"
                            ? row[column.id].phone || "-----------"
                            : row[column.id]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default RequestsTable;
