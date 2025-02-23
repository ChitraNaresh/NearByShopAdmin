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
import { useGetAllUsersQuery } from "../../../../apis&state/apis/usersApiSlice";

const columns = [
  {
    id: "subAdminName",
    label: "Sub Admin Name",
    minWidth: 170,
    align: "center",
  },
  { id: "emailId", label: "Email ID", minWidth: 100, align: "center" },
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
    id: "area",
    label: "Area",
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
    subAdminName: "Raju",
    emailId: "raju@gmail.com",
    contactNumber: "8634763543",
    state: "Andhrapradesh",
    area: "Ameerpet, Hyderabad",
    status: "Active",
  },
  {
    id: 2,
    subAdminName: "Priya",
    emailId: "priya@yahoo.com",
    contactNumber: "9876543210",
    state: "Telangana",
    area: "Banjara Hills, Hyderabad",
    status: "Inactive",
  },
  {
    id: 3,
    subAdminName: "Rahul",
    emailId: "rahul@gmail.com",
    contactNumber: "8765432190",
    state: "Maharashtra",
    area: "Andheri, Mumbai",
    status: "Active",
  },
  {
    id: 4,
    subAdminName: "Anjali",
    emailId: "anjali@gmail.com",
    contactNumber: "7654321890",
    state: "Karnataka",
    area: "Whitefield, Bangalore",
    status: "Pending",
  },
  {
    id: 5,
    subAdminName: "Vikram",
    emailId: "vikram@gmail.com",
    contactNumber: "6543217890",
    state: "Tamil Nadu",
    area: "T. Nagar, Chennai",
    status: "Active",
  },
  {
    id: 6,
    subAdminName: "Sneha",
    emailId: "sneha@gmail.com",
    contactNumber: "5432167890",
    state: "Kerala",
    area: "Kochi, Ernakulam",
    status: "Inactive",
  },
  {
    id: 7,
    subAdminName: "Arjun",
    emailId: "arjun@gmail.com",
    contactNumber: "4321678901",
    state: "Punjab",
    area: "Sector 17, Chandigarh",
    status: "Active",
  },
  {
    id: 8,
    subAdminName: "Divya",
    emailId: "divya@gmail.com",
    contactNumber: "3216789012",
    state: "Rajasthan",
    area: "Pink City, Jaipur",
    status: "Pending",
  },
  {
    id: 9,
    subAdminName: "Kiran",
    emailId: "kiran@gmail.com",
    contactNumber: "2109876543",
    state: "Uttar Pradesh",
    area: "Gomti Nagar, Lucknow",
    status: "Active",
  },
  {
    id: 10,
    subAdminName: "Pooja",
    emailId: "pooja@gmail.com",
    contactNumber: "1098765432",
    state: "West Bengal",
    area: "Salt Lake, Kolkata",
    status: "Inactive",
  },
  {
    id: 11,
    subAdminName: "Rajesh",
    emailId: "rajesh@gmail.com",
    contactNumber: "9876543211",
    state: "Gujarat",
    area: "Navrangpura, Ahmedabad",
    status: "Active",
  },
  {
    id: 12,
    subAdminName: "Meera",
    emailId: "meera@gmail.com",
    contactNumber: "8765432112",
    state: "Haryana",
    area: "DLF, Gurgaon",
    status: "Pending",
  },
  {
    id: 13,
    subAdminName: "Abhishek",
    emailId: "abhishek@gmail.com",
    contactNumber: "7654321123",
    state: "Madhya Pradesh",
    area: "New Market, Bhopal",
    status: "Active",
  },
  {
    id: 14,
    subAdminName: "Rohit",
    emailId: "rohit@gmail.com",
    contactNumber: "6543211234",
    state: "Bihar",
    area: "Gandhi Maidan, Patna",
    status: "Inactive",
  },
  {
    id: 15,
    subAdminName: "Sonal",
    emailId: "sonal@gmail.com",
    contactNumber: "5432112345",
    state: "Odisha",
    area: "Saheed Nagar, Bhubaneswar",
    status: "Active",
  },
];

const SubAdminTable = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  //   const {
  //   data: customersList,
  //   isError: isCustomersListError,
  //   isLoading: isLoadingListError,
  // } = useGetAllUsersQuery({
  //   userType: "SUB_ADMIN",
  //   pageNum: page + 1,
  //   pageSize: rowsPerPage,
  // });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSubAdminClick = () => {
    navigate("/sub-admin-profile");
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
                  style={{
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
                    onClick={handleSubAdminClick}
                    sx={{ cursor: "pointer" }}
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

export default SubAdminTable;
