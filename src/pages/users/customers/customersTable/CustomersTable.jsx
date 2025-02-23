import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useGetAllUsersQuery } from "../../../../apis&state/apis/usersApiSlice";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    id: "name",
    label: "Customer Name",
    minWidth: 170,
    align: "center",
  },
  { id: "email", label: "Email ID", minWidth: 100, align: "center" },
  {
    id: "phone",
    label: "Contact Number",
    minWidth: 170,
    align: "center",
  },
  // {
  //   id: "state",
  //   label: "State",
  //   minWidth: 170,
  //   align: "center",
  // },
  // {
  //   id: "area",
  //   label: "Area",
  //   minWidth: 170,
  //   align: "center",
  // },
  // {
  //   id: "status",
  //   label: "Status",
  //   minWidth: 170,
  //   align: "center",
  // },
];

const rows = [
  {
    id: 1,
    customerName: "Raju",
    emailId: "raju@gmail.com",
    contactNumber: "8634763543",
    state: "Andhrapradesh",
    area: "Ameerpet, Hyderabad",
    status: "Active",
  },
  {
    id: 2,
    customerName: "Priya",
    emailId: "priya@yahoo.com",
    contactNumber: "9876543210",
    state: "Telangana",
    area: "Banjara Hills, Hyderabad",
    status: "Inactive",
  },
  {
    id: 3,
    customerName: "Rahul",
    emailId: "rahul@gmail.com",
    contactNumber: "8765432190",
    state: "Maharashtra",
    area: "Andheri, Mumbai",
    status: "Active",
  },
  {
    id: 4,
    customerName: "Anjali",
    emailId: "anjali@gmail.com",
    contactNumber: "7654321890",
    state: "Karnataka",
    area: "Whitefield, Bangalore",
    status: "Pending",
  },
  {
    id: 5,
    customerName: "Vikram",
    emailId: "vikram@gmail.com",
    contactNumber: "6543217890",
    state: "Tamil Nadu",
    area: "T. Nagar, Chennai",
    status: "Active",
  },
  {
    id: 6,
    customerName: "Sneha",
    emailId: "sneha@gmail.com",
    contactNumber: "5432167890",
    state: "Kerala",
    area: "Kochi, Ernakulam",
    status: "Inactive",
  },
  {
    id: 7,
    customerName: "Arjun",
    emailId: "arjun@gmail.com",
    contactNumber: "4321678901",
    state: "Punjab",
    area: "Sector 17, Chandigarh",
    status: "Active",
  },
  {
    id: 8,
    customerName: "Divya",
    emailId: "divya@gmail.com",
    contactNumber: "3216789012",
    state: "Rajasthan",
    area: "Pink City, Jaipur",
    status: "Pending",
  },
  {
    id: 9,
    customerName: "Kiran",
    emailId: "kiran@gmail.com",
    contactNumber: "2109876543",
    state: "Uttar Pradesh",
    area: "Gomti Nagar, Lucknow",
    status: "Active",
  },
  {
    id: 10,
    customerName: "Pooja",
    emailId: "pooja@gmail.com",
    contactNumber: "1098765432",
    state: "West Bengal",
    area: "Salt Lake, Kolkata",
    status: "Inactive",
  },
  {
    id: 11,
    customerName: "Rajesh",
    emailId: "rajesh@gmail.com",
    contactNumber: "9876543211",
    state: "Gujarat",
    area: "Navrangpura, Ahmedabad",
    status: "Active",
  },
  {
    id: 12,
    customerName: "Meera",
    emailId: "meera@gmail.com",
    contactNumber: "8765432112",
    state: "Haryana",
    area: "DLF, Gurgaon",
    status: "Pending",
  },
  {
    id: 13,
    customerName: "Abhishek",
    emailId: "abhishek@gmail.com",
    contactNumber: "7654321123",
    state: "Madhya Pradesh",
    area: "New Market, Bhopal",
    status: "Active",
  },
  {
    id: 14,
    customerName: "Rohit",
    emailId: "rohit@gmail.com",
    contactNumber: "6543211234",
    state: "Bihar",
    area: "Gandhi Maidan, Patna",
    status: "Inactive",
  },
  {
    id: 15,
    customerName: "Sonal",
    emailId: "sonal@gmail.com",
    contactNumber: "5432112345",
    state: "Odisha",
    area: "Saheed Nagar, Bhubaneswar",
    status: "Active",
  },
];

const CustomersTable = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const {
    data: customersList,
    isError: isCustomersListError,
    isLoading: isLoadingListError,
  } = useGetAllUsersQuery({
    userType: "USER",
    pageNum: page + 1,
    pageSize: rowsPerPage,
  });

  const rows = customersList?.data?.list;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSingleUser = (customer) => {
    navigate(`/customers/customer-profile/${customer.uid}`);
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
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    onClick={() => handleSingleUser(row)}
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
                          {column.id === "name"
                            ? row.first_name + " " + row.last_name
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

export default CustomersTable;
