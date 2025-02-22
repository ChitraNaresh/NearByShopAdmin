import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationSquare = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
};

export default PaginationSquare;
