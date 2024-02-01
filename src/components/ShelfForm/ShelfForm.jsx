import { Button, Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import React, { useState } from "react";

const ShelfForm = () => {
  const [descInput, setDescInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const dispatch = useDispatch();
  // handleAdd() runs when addItem is clicked -
  // handleAdd() will send the value of TextField(s) to database BY:
  // we are calling "ADD_TO_SHELF" to dispatch values
  const handleAdd = () => {
    console.log("Ry-Guy was here.");
    dispatch({
      type: "ADD_TO_SHELF",
      payload: {
        description: descInput,
        image_url: urlInput,
      },
    });
    setDescInput("");
    setUrlInput("");
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        label="description"
        value={descInput}
        onChange={(event) => setDescInput(event.target.value)}
      />
      <TextField
        fullWidth
        label="image-url"
        value={urlInput}
        onChange={(event) => setUrlInput(event.target.value)}
      />
      <Button variant="contained" onClick={handleAdd}>
        ADD ITEM
      </Button>
    </Box>
  );
};

export default ShelfForm;
