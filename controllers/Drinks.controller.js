const Drinks = require("../models/Drinks.model");

module.exports.drinksController = {
  getDrinks: (req, res) => {
    Drinks.find({}, { name: 1, price: 1, id: 1 }).then((drinks) => {
      res.json(drinks);
    }).catch({ error: "Ошибка при выводе списка" });;
    
  },
  getDrinksbyId: (req, res) => {
    Drinks.findById(req.params.drinksId).then((drinks) => {
      res.json(drinks);
    }).catch({ error: "Ошибка при поиске по ID" });;
  },
  deleteDrinksbyId: (req, res) => {
    Drinks.findByIdAndDelete(req.params.drinksId).then((drinks) => {
      res.json(drinks);
    }).catch({ error: "Ошибка при удалении напитка по ID" });;
  },
  getDrinksbyStock: (req, res) => {
    Drinks.find({ inStock: true }, {}).then((a) => {
      res.json(a);
    }).catch({ error: "Ошибка при выводе напитка" });;
  },
  updateDrinksbyId: (req, res) => {
    Drinks.findByIdAndUpdate(
      req.params.drinksId,
      {
        name: req.body.name,
        price: req.body.price,
        inStock: req.body.inStock,
        caffeine: req.body.caffeine,
        volume: req.body.volume,
        description: req.body.description,
      },
      { new: true }
    ).then((drinks) => {
      res.json(drinks);
    });
  },
  addDrinks: (req, res) => {
    Drinks.create({
      name: req.body.name,
      price: req.body.price,
      inStock: req.body.inStock,
      caffeine: req.body.caffeine,
      volume: req.body.volume,
      description: req.body.description,
    })
      .then(() => {
        res.json("Напиток добавлен");
      })
      .catch({ error: "Ошибка при добавлении нового напитка" });
  },
};
