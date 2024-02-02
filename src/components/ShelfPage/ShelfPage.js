// Display all Items
// The Shelf page (ShelfPage.jsat /shelf) should show all of the items stored in the database in a list or table.
// This list should only be viewable to logged in (authenticated) users.

// The Shelf page (`ShelfPage.js` at `/shelf`) should allow a user to add a new item to the database (which should immediately appear in the list).
// **This view should only be viewable to logged in (authenticated) users.**
// > NOTE: Image url should be a full path to an existing image on the web. You should not attempt to implement image upload for this.

// app.use('/api/shelf', shelfRouter);

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShelfForm from "../ShelfForm/ShelfForm";
import { Button } from "@mui/material";

function ShelfPage() {
  const shelf = useSelector((store) => store.shelf);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log("delete the thing!", event.target.id);
    dispatch({
      type: "DELETE_ITEM",
      payload: event.target.id,
    });
  };

  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfForm />
      <div>
        {shelf.map((item) => (
          <div key={item.id}>
            <h3>{item.description}</h3>
            <img src={item.image_url} />
            {/* 
the delete button should only render when they created the image
- terniary operator for isAuthorized */}
            {item.user_id === user.id && (
              <Button
                id={item.id}
                variant="contained"
                color="error"
                onClick={handleDelete}
              >
                Delete
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShelfPage;
