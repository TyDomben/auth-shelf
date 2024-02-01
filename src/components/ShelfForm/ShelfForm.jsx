import * as React from "react";
import { Button, Box, TextField } from "@mui/material";

const ShelfForm = () => {
  const handleAdd = () => {
    console.log("Ry-Guy was here.");
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField fullWidth label="description" id="fullWidth" />
      <TextField fullWidth label="image-url" id="fullWidth" />
      <Button variant="contained" onClick={handleAdd}>
        ADD ITEM
      </Button>
    </Box>
  );
};

export default ShelfForm;
