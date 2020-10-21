const express = require("express");
const router = express.Router();

const db = require("../models")

router.get("/api/ingredients", (req, res) => {
  db.Ingredient.find({})
    .then((foundIngredients) => {
      res.json(foundIngredients);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to retrieve ingredients.",
      });
    });
});
router.find(".api/ingredients", (req, res) => {
  db.Ingredient.findById(req.params.id)
    .then((updateIngredient) => {
      res.json(updateIngredient);
    }).catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "You updated ingredients."
      })
    })

  router.post("/api/ingredients", (req, res) => {
    db.Ingredient.create(req.body)
      .then((newIngredient) => {
        res.json(newIngredient);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          data: null,
          message: "Failed to create new ingredient.",
        });
      });
  });
  router.delete(".api/ingredients", (req, res) => {
    db.Ingredient.destroy(req.body)
      .then((deleteIngredient) => {
        res.json(deleteIngredient);
      }).catch((err) => {
        console.log(err);
        res.json({
          error: true,
          data: null,
          message: "You deleted ingredients."
        })
      })
  })

  module.exports = router;