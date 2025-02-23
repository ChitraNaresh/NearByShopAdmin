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

const columns = [
  { id: "reportedId", label: "Reported Id", minWidth: 170, align: "center" },
  { id: "name", label: "Name", minWidth: 100, align: "center" },
  {
    id: "area",
    label: "Area",
    minWidth: 170,
    align: "center",
  },
  {
    id: "contactNumber",
    label: "Contact Number",
    minWidth: 170,
    align: "center",
  },
  {
    id: "state",
    label: "Status",
    minWidth: 170,
    align: "center",
  },
  {
    id: "issueType",
    label: "Issue Type",
    minWidth: 170,
    align: "center",
  },
  {
    id: "reportStatus",
    label: "Report Status",
    minWidth: 170,
    align: "center",
  },
];

const rows = [
  {
    reportedId: 1,
    name: "Raju",
    area: "Ameerpet, Hyderabad",
    contactNumber: "8634763543",
    state: "Telangana",
    issueType: "Maintenance",
    reportStatus: "Pending",
  },
  {
    reportedId: 2,
    name: "Priya",
    area: "Indiranagar, Bangalore",
    contactNumber: "9876543210",
    state: "Karnataka",
    issueType: "Service",
    reportStatus: "Resolved",
  },
  {
    reportedId: 3,
    name: "Ajay",
    area: "Salt Lake, Kolkata",
    contactNumber: "9123456789",
    state: "West Bengal",
    issueType: "Complaint",
    reportStatus: "In Progress",
  },
  {
    reportedId: 4,
    name: "Sunita",
    area: "Viman Nagar, Pune",
    contactNumber: "9871234567",
    state: "Maharashtra",
    issueType: "Maintenance",
    reportStatus: "Pending",
  },
  {
    reportedId: 5,
    name: "Rahul",
    area: "Sector 18, Noida",
    contactNumber: "8123456789",
    state: "Uttar Pradesh",
    issueType: "Service",
    reportStatus: "Resolved",
  },
  {
    reportedId: 6,
    name: "Anjali",
    area: "Banjara Hills, Hyderabad",
    contactNumber: "7894561230",
    state: "Telangana",
    issueType: "Complaint",
    reportStatus: "In Progress",
  },
  {
    reportedId: 7,
    name: "Vikram",
    area: "MG Road, Delhi",
    contactNumber: "9988776655",
    state: "Delhi",
    issueType: "Maintenance",
    reportStatus: "Pending",
  },
  {
    reportedId: 8,
    name: "Meera",
    area: "Velachery, Chennai",
    contactNumber: "9876098765",
    state: "Tamil Nadu",
    issueType: "Complaint",
    reportStatus: "Resolved",
  },
  {
    reportedId: 9,
    name: "Aman",
    area: "Jayanagar, Bangalore",
    contactNumber: "9632587410",
    state: "Karnataka",
    issueType: "Service",
    reportStatus: "In Progress",
  },
  {
    reportedId: 10,
    name: "Kiran",
    area: "Rajouri Garden, Delhi",
    contactNumber: "8527419630",
    state: "Delhi",
    issueType: "Maintenance",
    reportStatus: "Resolved",
  },
  {
    reportedId: 11,
    name: "Rohit",
    area: "Gachibowli, Hyderabad",
    contactNumber: "7418529630",
    state: "Telangana",
    issueType: "Service",
    reportStatus: "Pending",
  },
  {
    reportedId: 12,
    name: "Sita",
    area: "Sector 62, Noida",
    contactNumber: "7025163498",
    state: "Uttar Pradesh",
    issueType: "Complaint",
    reportStatus: "Resolved",
  },
  {
    reportedId: 13,
    name: "Alok",
    area: "Park Street, Kolkata",
    contactNumber: "6123459870",
    state: "West Bengal",
    issueType: "Service",
    reportStatus: "In Progress",
  },
  {
    reportedId: 14,
    name: "Reena",
    area: "Andheri West, Mumbai",
    contactNumber: "5987621340",
    state: "Maharashtra",
    issueType: "Maintenance",
    reportStatus: "Pending",
  },
  {
    reportedId: 15,
    name: "Dev",
    area: "Anna Nagar, Chennai",
    contactNumber: "5678901234",
    state: "Tamil Nadu",
    issueType: "Complaint",
    reportStatus: "Resolved",
  },
];

const ReportsTable = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleReport = () => {
    navigate("/reported-user");
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
                  style={{ minWidth: column.minWidth }}
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
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    sx={{ cursor: "pointer" }}
                    onClick={handleReport}
                  >
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

export default ReportsTable;
