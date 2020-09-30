const Smoothies32Service = {
    getAllSmoothies32(knex) {
        return knex.select('*').from('smoothies32');
    }
};

module.exports = Smoothies32Service;