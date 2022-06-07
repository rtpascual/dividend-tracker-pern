const db = require("../db");
const Router = require("express-promise-router");

const router = new Router();

// get dividend
router.get("/:id", async (req, res) => {
  try {
    const dividend = await db.query(
      `
        SELECT *
        FROM dividend
        WHERE id = $1
        `,
      [req, params.id]
    );

    res.json(dividend.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get all dividends
router.get("/", async (req, res) => {
  try {
    const dividends = await db.query(`
      SELECT *
      FROM dividend
      `);

    res.json(dividends.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// create dividend
router.post("/", async (req, res) => {
  try {
    const { stock_id, amount, date } = req.body;
    const dividend = await db.query(
      `
        INSERT INTO dividend (stock_id, amount, date)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
      [stock_id, amount, date]
    );

    res.json("Dividend created");
  } catch (err) {
    console.error(err.message);
  }
});

// update dividend
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { stock_id, amount, date } = req.body;
    const dividend = await db.query(
      `
    UPDATE dividend
    SET stock_id = $1,
        amount = $2,
        date = $3
    WHERE id = $4
    RETURNING *
    `,
      [stock_id, amount, date, id]
    );

    res.json("Dividend updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete dividend
router.delete("/:id", async (req, res) => {
  try {
    const dividend = await db.query(
      `
        DELETE FROM dividend
        WHERE id = $1
        `,
      [req.params.id]
    );

    res.json("Dividend deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
