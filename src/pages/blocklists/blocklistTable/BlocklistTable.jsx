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
    label: "State",
    minWidth: 170,
    align: "center",
  },
  {
    id: "issueType",
    label: "Issue Type",
    minWidth: 170,
    align: "center",
  },
];

const rows = [
  {
    id: 1,
    reportedId: "R001",
    name: "John Doe",
    area: "Central Park",
    contactNumber: "1234567890",
    state: "New York",
    issueType: "Network Issue",
  },
  {
    id: 2,
    reportedId: "R002",
    name: "Jane Smith",
    area: "Downtown",
    contactNumber: "9876543210",
    state: "California",
    issueType: "Billing Issue",
  },
  {
    id: 3,
    reportedId: "R003",
    name: "Michael Brown",
    area: "Sunset Boulevard",
    contactNumber: "4561237890",
    state: "Texas",
    issueType: "Connection Error",
  },
  {
    id: 4,
    reportedId: "R004",
    name: "Emily Davis",
    area: "Hollywood",
    contactNumber: "3216549870",
    state: "Florida",
    issueType: "Technical Support",
  },
  {
    id: 5,
    reportedId: "R005",
    name: "Christopher Wilson",
    area: "Uptown",
    contactNumber: "1472583690",
    state: "Illinois",
    issueType: "Service Delay",
  },
  {
    id: 6,
    reportedId: "R006",
    name: "Sophia Johnson",
    area: "Broadway",
    contactNumber: "9638527410",
    state: "Georgia",
    issueType: "Payment Error",
  },
  {
    id: 7,
    reportedId: "R007",
    name: "Oliver Martinez",
    area: "Elm Street",
    contactNumber: "8527419630",
    state: "Arizona",
    issueType: "Network Issue",
  },
  {
    id: 8,
    reportedId: "R008",
    name: "Isabella Moore",
    area: "Main Street",
    contactNumber: "7418529630",
    state: "Nevada",
    issueType: "Connection Error",
  },
  {
    id: 9,
    reportedId: "R009",
    name: "Mason Lee",
    area: "Springfield",
    contactNumber: "1593572846",
    state: "Michigan",
    issueType: "Billing Issue",
  },
  {
    id: 10,
    reportedId: "R010",
    name: "Mia Thompson",
    area: "Oak Avenue",
    contactNumber: "7539514862",
    state: "Oregon",
    issueType: "Technical Support",
  },
  {
    id: 11,
    reportedId: "R011",
    name: "Ethan Garcia",
    area: "River Road",
    contactNumber: "8529637410",
    state: "Utah",
    issueType: "Service Delay",
  },
  {
    id: 12,
    reportedId: "R012",
    name: "Ava Hernandez",
    area: "Mountain View",
    contactNumber: "9517534862",
    state: "Colorado",
    issueType: "Payment Error",
  },
  {
    id: 13,
    reportedId: "R013",
    name: "Logan White",
    area: "Lakeview",
    contactNumber: "7418529630",
    state: "Washington",
    issueType: "Network Issue",
  },
  {
    id: 14,
    reportedId: "R014",
    name: "Liam Walker",
    area: "Seaside",
    contactNumber: "6547893210",
    state: "Hawaii",
    issueType: "Technical Support",
  },
  {
    id: 15,
    reportedId: "R015",
    name: "Charlotte King",
    area: "Hilltop",
    contactNumber: "9631472580",
    state: "Alaska",
    issueType: "Billing Issue",
  },
];

const BlocklistTable = () => {
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

  const handleBlockedUser = () => {
    navigate("/blocked-user");
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
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    sx={{ cursor: "pointer" }}
                    onClick={handleBlockedUser}
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

export default BlocklistTable;
