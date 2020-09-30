const Smoothies20Service = {
    getAllSmoothies20(knex) {
        return knex.select('*').from('smoothies20');
    }
};

module.exports = Smoothies20Service;