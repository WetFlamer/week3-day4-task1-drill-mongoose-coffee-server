const { Router } = require("express");
const { drinksController } = require("../controllers/Drinks.controller");

const router = Router();

router.get("/drinks", drinksController.getDrinks);
router.get("/:drinksId", drinksController.getDrinksbyId)
router.get("/drinks/in-stock", drinksController.getDrinksbyStock)
router.post("/admin/add/drinks", drinksController.addDrinks);
router.patch("/admin/edit/:drinksId", drinksController.updateDrinksbyId);
router.delete('/admin/drinks/:drinksId', drinksController.deleteDrinksbyId)
module.exports = router;
