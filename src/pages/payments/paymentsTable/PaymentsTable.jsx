import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "shopName", label: "Shop Name", minWidth: 170, align: "center" },
  { id: "area", label: "Area", minWidth: 100, align: "center" },
  {
    id: "contactNumber",
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
    id: "time",
    label: "Time",
    minWidth: 170,
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center",
  },
];

const rows = [
  {
    id: 1,
    shopName: "Super Mart",
    area: "MG Road, Delhi",
    contactNumber: "9876543210",
    state: "Delhi",
    time: "10:00 AM - 9:00 PM",
    status: "Active",
  },
  {
    id: 2,
    shopName: "Fresh Basket",
    area: "Sector 18, Noida",
    contactNumber: "8765432109",
    state: "Uttar Pradesh",
    time: "9:00 AM - 8:00 PM",
    status: "Active",
  },
  {
    id: 3,
    shopName: "Veggie Delight",
    area: "HSR Layout, Bangalore",
    contactNumber: "7654321098",
    state: "Karnataka",
    time: "8:00 AM - 8:00 PM",
    status: "Inactive",
  },
  {
    id: 4,
    shopName: "The Bookstore",
    area: "Park Street, Kolkata",
    contactNumber: "6543210987",
    state: "West Bengal",
    time: "11:00 AM - 7:00 PM",
    status: "Active",
  },
  {
    id: 5,
    shopName: "Tech World",
    area: "Banjara Hills, Hyderabad",
    contactNumber: "5432109876",
    state: "Telangana",
    time: "10:00 AM - 8:30 PM",
    status: "Active",
  },
  {
    id: 6,
    shopName: "Fashion Hub",
    area: "Church Street, Bangalore",
    contactNumber: "4321098765",
    state: "Karnataka",
    time: "11:00 AM - 9:00 PM",
    status: "Inactive",
  },
  {
    id: 7,
    shopName: "Daily Needs",
    area: "Jayanagar, Bangalore",
    contactNumber: "3210987654",
    state: "Karnataka",
    time: "9:30 AM - 8:30 PM",
    status: "Active",
  },
  {
    id: 8,
    shopName: "Food Plaza",
    area: "Salt Lake, Kolkata",
    contactNumber: "2109876543",
    state: "West Bengal",
    time: "10:00 AM - 10:00 PM",
    status: "Active",
  },
  {
    id: 9,
    shopName: "Trendy Looks",
    area: "Sector 14, Gurugram",
    contactNumber: "1098765432",
    state: "Haryana",
    time: "10:00 AM - 7:30 PM",
    status: "Inactive",
  },
  {
    id: 10,
    shopName: "Mega Store",
    area: "Anand Vihar, Delhi",
    contactNumber: "9087654321",
    state: "Delhi",
    time: "9:00 AM - 9:00 PM",
    status: "Active",
  },
  {
    id: 11,
    shopName: "Electro World",
    area: "Velachery, Chennai",
    contactNumber: "8076543210",
    state: "Tamil Nadu",
    time: "10:00 AM - 8:00 PM",
    status: "Active",
  },
  {
    id: 12,
    shopName: "Bakers' Lane",
    area: "Gachibowli, Hyderabad",
    contactNumber: "7065432109",
    state: "Telangana",
    time: "9:00 AM - 7:00 PM",
    status: "Inactive",
  },
  {
    id: 13,
    shopName: "Home Essentials",
    area: "Sector 62, Noida",
    contactNumber: "6054321098",
    state: "Uttar Pradesh",
    time: "9:00 AM - 8:30 PM",
    status: "Active",
  },
  {
    id: 14,
    shopName: "Green Grocers",
    area: "Rajouri Garden, Delhi",
    contactNumber: "5043210987",
    state: "Delhi",
    time: "8:00 AM - 9:00 PM",
    status: "Active",
  },
  {
    id: 15,
    shopName: "Sports World",
    area: "Malad West, Mumbai",
    contactNumber: "4032109876",
    state: "Maharashtra",
    time: "11:00 AM - 8:00 PM",
    status: "Inactive",
  },
];

const PaymentsTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
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
                          {value}
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default PaymentsTable;
