const express = require("express");
const router = express.Router();
const db = require("../db");

// Obtener todos los productos
router.get("/", (req, res) => {
    db.query("SELECT id, title, price, description, category, image FROM productos", (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  });
  

// Agregar un nuevo producto
router.post("/", (req, res) => {
    const { title, price, description, category, image } = req.body;
    db.query(
      "INSERT INTO productos (title, price, description, category, image) VALUES (?, ?, ?, ?, ?)",
      [title, price, description, category, image],
      (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Producto agregado" });
      }
    );
  });
  

// Eliminar un producto
router.delete("/:id", (req, res) => {
    db.query("DELETE FROM productos WHERE id = ?", [req.params.id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Producto eliminado" });
    });
  });
  

module.exports = router;
