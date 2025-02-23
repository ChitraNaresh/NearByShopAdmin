import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ProfilePic from "../../../../components/global/profilePic/ProfilePic";
import { useNavigate } from "react-router-dom";
import { useGetAllUsersQuery } from "../../../../apis&state/apis/usersApiSlice";
import { useGetAllShopsQuery } from "../../../../apis&state/apis/shopsApiSlice";

const columns = [
  { id: "profile", label: "Profile", minWidth: 50, align: "center" },
  { id: "shop_name", label: "Shop Name", minWidth: 150, align: "center" },
  {
    id: "shop_address",
    label: "Area",
    minWidth: 170,
    align: "center",
  },
  {
    id: "phone",
    label: "Contact Number",
    minWidth: 100,
    align: "center",
  },
  {
    id: "state",
    label: "State",
    minWidth: 170,
    align: "center",
  },
  {
    id: "is_verified",
    label: "Status",
    minWidth: 60,
    align: "center",
  },
];

const rows = [
  {
    id: 1,
    profile: "profile",
    shopName: "Kalamandir Sarees",
    area: "Ameerpet, Hyderabad, Ameerpet, Hyderabad,Ameerpet, Hyderabad",
    contactNumber: "8639215761",
    state: "Telangana",
    status: "Active",
  },
  {
    id: 2,
    profile: "profile",
    shopName: "Pothys Silks",
    area: "Begumpet, Hyderabad",
    contactNumber: "9543215789",
    state: "Telangana",
    status: "Active",
  },
  {
    id: 3,
    profile: "profile",
    shopName: "Nalli Silks",
    area: "Somajiguda, Hyderabad",
    contactNumber: "9956723456",
    state: "Telangana",
    status: "Inactive",
  },
  {
    id: 4,
    profile: "profile",
    shopName: "RS Brothers",
    area: "Kukatpally, Hyderabad",
    contactNumber: "9123456721",
    state: "Telangana",
    status: "Active",
  },
  {
    id: 5,
    profile: "profile",
    shopName: "Chennai Silks",
    area: "Jubilee Hills, Hyderabad",
    contactNumber: "7890561234",
    state: "Telangana",
    status: "Active",
  },
  {
    id: 6,
    profile: "profile",
    shopName: "Mysore Silk Udyog",
    area: "Banjara Hills, Hyderabad",
    contactNumber: "8765123459",
    state: "Telangana",
    status: "Inactive",
  },
  {
    id: 7,
    profile: "profile",
    shopName: "Sakshi Sarees",
    area: "Mehdipatnam, Hyderabad",
    contactNumber: "7984536712",
    state: "Telangana",
    status: "Active",
  },
  {
    id: 8,
    profile: "profile",
    shopName: "RMKV Silks",
    area: "Gachibowli, Hyderabad",
    contactNumber: "9125678345",
    state: "Telangana",
    status: "Inactive",
  },
  {
    id: 9,
    profile: "profile",
    shopName: "Bharat Silks",
    area: "Secunderabad, Hyderabad",
    contactNumber: "9823456712",
    state: "Telangana",
    status: "Active",
  },
  {
    id: 10,
    profile: "profile",
    shopName: "Kanchi Silks",
    area: "Dilsukhnagar, Hyderabad",
    contactNumber: "8769123456",
    state: "Telangana",
    status: "Active",
  },
  {
    id: 11,
    profile: "profile",
    shopName: "Patanjali Store",
    area: "Madhapur, Hyderabad",
    contactNumber: "7890561123",
    state: "Telangana",
    status: "Inactive",
  },
  {
    id: 12,
    profile: "profile",
    shopName: "Shree Sarees",
    area: "Ameerpet, Hyderabad",
    contactNumber: "9543768215",
    state: "Telangana",
    status: "Active",
  },
  {
    id: 13,
    profile: "profile",
    shopName: "Fabindia",
    area: "Begumpet, Hyderabad",
    contactNumber: "9123657842",
    state: "Telangana",
    status: "Active",
  },
  {
    id: 14,
    profile: "profile",
    shopName: "Kala Niketan",
    area: "Somajiguda, Hyderabad",
    contactNumber: "9958123465",
    state: "Telangana",
    status: "Inactive",
  },
  {
    id: 15,
    profile: "profile",
    shopName: "Raymond Shop",
    area: "Kukatpally, Hyderabad",
    contactNumber: "9876512345",
    state: "Telangana",
    status: "Active",
  },
  {
    id: 16,
    profile: "profile",
    shopName: "Levi's Store",
    area: "Jubilee Hills, Hyderabad",
    contactNumber: "8769432185",
    state: "Telangana",
    status: "Active",
  },
  {
    id: 17,
    profile: "profile",
    shopName: "Manyavar",
    area: "Banjara Hills, Hyderabad",
    contactNumber: "7982345678",
    state: "Telangana",
    status: "Inactive",
  },
  {
    id: 18,
    profile: "profile",
    shopName: "Soch",
    area: "Mehdipatnam, Hyderabad",
    contactNumber: "9125678234",
    state: "Telangana",
    status: "Active",
  },
  {
    id: 19,
    profile: "profile",
    shopName: "Vastra Boutique",
    area: "Gachibowli, Hyderabad",
    contactNumber: "9823654321",
    state: "Telangana",
    status: "Active",
  },
  {
    id: 20,
    profile: "profile",
    shopName: "Biba",
    area: "Secunderabad, Hyderabad",
    contactNumber: "8763456712",
    state: "Telangana",
    status: "Inactive",
  },
  {
    id: 21,
    profile: "profile",
    shopName: "Zara",
    area: "Dilsukhnagar, Hyderabad",
    contactNumber: "7890345216",
    state: "Telangana",
    status: "Active",
  },
  {
    id: 22,
    profile: "profile",
    shopName: "Pantaloons",
    area: "Madhapur, Hyderabad",
    contactNumber: "9875612345",
    state: "Telangana",
    status: "Active",
  },
  {
    id: 23,
    profile: "profile",
    shopName: "Max Fashion",
    area: "Ameerpet, Hyderabad",
    contactNumber: "9123456781",
    state: "Telangana",
    status: "Inactive",
  },
  {
    id: 24,
    profile: "profile",
    shopName: "Lifestyle",
    area: "Begumpet, Hyderabad",
    contactNumber: "9958723645",
    state: "Telangana",
    status: "Active",
  },
  {
    id: 25,
    profile: "profile",
    shopName: "Trends",
    area: "Somajiguda, Hyderabad",
    contactNumber: "7890564312",
    state: "Telangana",
    status: "Active",
  },
];

const SellersTable = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const {
    data: shopsList,
    isError: isShopsListError,
    isLoading: isShopsListLoading,
  } = useGetAllShopsQuery({
    pageNum: page + 1,
    pageSize: rowsPerPage,
  });

  console.log(shopsList);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSingleSeller = (singleSellerData) => {
    navigate(`/single-seller/${singleSellerData?.shop_uid}`);
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
            {shopsList?.data?.list
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                console.log(row);
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    sx={{ cursor: "pointer" }}
                    onClick={()=>handleSingleSeller(row)}
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
                          {column.id === "profile" ? (
                            <ProfilePic />
                          ) : column.id === "is_verified" ? (
                            value === true ? (
                              "Active"
                            ) : (
                              "InActive"
                            )
                          ) : column.id === "phone" ? (
                            row.shop_contact?.phone
                          ) : (
                            value
                          )}
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

export default SellersTable;
