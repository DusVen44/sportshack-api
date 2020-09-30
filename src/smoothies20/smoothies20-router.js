const express = require('express');
const Smoothies20Service = require('./smoothies20-service');

const smoothies20Router = express.Router();
const serializeSmoothie = smoothie => ({
    id: smoothie.id,
    flavor: smoothie.flavor,
    size: smoothie.size,
    calories: smoothie.calories,
    total_fat: smoothie.total_fat,
    saturated_fat: smoothie.saturated_fat,
    trans_fat: smoothie.trans_fat,
    cholesterol: smoothie.cholesterol,
    total_carbohydrates: smoothie.total_carbohydrates,
    dietary_fiber: smoothie.dietary_fiber,
    sugars: smoothie.sugars,
    protein: smoothie.protein
});

smoothies20Router
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db');
        Smoothies20Service.getAllSmoothies20(knexInstance)
            .then(smoothie => {
                res.json(smoothie.map(serializeSmoothie))
            })
            .catch(next);
    });

module.exports = smoothies20Router;