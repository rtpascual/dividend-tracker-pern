const db = require("../db");
const Router = require("express-promise-router");

const router = new Router();

// get all stocks
router.get("/", async (req, res) => {
  try {
    const stocks = await db.query(
      `
        SELECT *
        FROM stock
    `
    );

    res.json(stocks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a stock
router.get("/:id", async (req, res) => {
  try {
    const stock = await db.query(
      `
        SELECT *
        FROM stock
        WHERE id = $1
        `,
      [req.params.id]
    );

    res.json(stock.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// create a stock
router.post("/", async (req, res) => {
  try {
    const { summary } = req.body;

    const stockExists = await db.query(
      `
        SELECT *
        FROM stock
        WHERE summary = $1
    `,
      [summary]
    );

    if (stockExists.rows.length !== 0) {
      res.status(400).json("Stock already exists", stockExists.rows[0]);
    }

    const createdStock = await db.query(
      `
      INSERT INTO stock (summary)
      VALUES ($1)
      `,
      [summary]
    );

    res.json("Stock created");
  } catch (err) {
    console.error(err.message);
  }
});

// update a stock
router.put("/:id", async (req, res) => {
  try {
    const { summary } = req.body;

    const updatedStock = await db.query(
      `
        UPDATE stock
        SET summary = $1
        WHERE id = $2
    `,
      [summary, req.params.id]
    );

    res.json("Stock updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a stock
router.delete("/:id", async (req, res) => {
  try {
    const deletedStock = await db.query(
      `
            DELETE FROM stock
            WHERE id = $1
            `,
      [req.params.id]
    );

    res.json("Stock deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
