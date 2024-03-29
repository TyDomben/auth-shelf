const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const { rejectUnauthenticated } = require("../modules/authentication-middleware");

/**
 * Get all of the items on the shelf
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "item";`;
  console.log(req.user);

  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error in GET: ", error);
      res.sendStatus(500);
    });
});

/**
 * Add an item for the logged in user to the shelf
 * post info - ensuring you are logged in -  - rerender to see results
 *
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  // initialize query text - sql query
  const queryText = `
  INSERT INTO
    "item" ("description", "image_url", "user_id")
    VALUES ($1, $2, $3);
  `;
  const queryParams = [req.body.description, req.body.image_url, req.user.id];
  console.log("POST SHELF");

  pool
    .query(queryText, queryParams)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error in POST: ", error);
      res.sendStatus(500);
    });
  // initialize query paramaters that equals request body x2 and req.user -id that we verify with login
  // sql
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete("/:id", rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  console.log(req.user.id);
  pool.query(`SELECT "user_id" FROM item WHERE id=${req.params.id};`).then((result) => {
    console.log(result.rows[0].user_id);

    if (result.rows[0].user_id === req.user.id) {
      const queryText = `DELETE FROM "item" WHERE id=$1;`;

      pool
        .query(queryText, [req.params.id])
        .then((result) => {
          res.sendStatus(200);
        })
        .catch((error) => {
          console.log("Error in DELETE: ", error);
          res.sendStatus(500);
        });
    } else {
      console.log("No bueno");
      res.sendStatus(403);
    }
  });
});

/**
 * Update an item if it's something the logged in user added
 */
router.put("/:id", (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get("/count", (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get("/:id", (req, res) => {
  // endpoint functionality
});

module.exports = router;
