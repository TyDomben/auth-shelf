// Display all Items
// The Shelf page (ShelfPage.jsat /shelf) should show all of the items stored in the database in a list or table.
// This list should only be viewable to logged in (authenticated) users.

// The Shelf page (`ShelfPage.js` at `/shelf`) should allow a user to add a new item to the database (which should immediately appear in the list).
// **This view should only be viewable to logged in (authenticated) users.**
// > NOTE: Image url should be a full path to an existing image on the web. You should not attempt to implement image upload for this.

// app.use('/api/shelf', shelfRouter);

import React from "react";
import { useSelector } from "react-redux";

function ShelfPage() {
  const shelf = useSelector((store) => store.shelf);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <div>
        {shelf.map((item) => (
          <div key={item.id}>
            <h3>{item.description}</h3>
            <img src={item.image_url} />
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShelfPage;
