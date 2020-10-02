function createTestSmoothies20() {
    return [
        {
            id: 45,
            flavor: "Chocolate",
            size: 20,
            calories: 250,
            total_fat: 5,
            saturated_fat: 0,
            trans_fat: 0,
            cholesterol: 300,
            total_carbohydrates: 37,
            dietary_fiber: 5,
            sugars: 5,
            protein: 40
        },
        {
            id: 46,
            flavor: "Vanilla",
            size: 20,
            calories: 250,
            total_fat: 5,
            saturated_fat: 0,
            trans_fat: 0,
            cholesterol: 300,
            total_carbohydrates: 37,
            dietary_fiber: 5,
            sugars: 5,
            protein: 40
        },
        {
            id: 47,
            flavor: "Banana",
            size: 20,
            calories: 250,
            total_fat: 5,
            saturated_fat: 0,
            trans_fat: 0,
            cholesterol: 300,
            total_carbohydrates: 37,
            dietary_fiber: 5,
            sugars: 5,
            protein: 40
        },
    ];
};

function createTestSmoothies32() {
    return [
        {
            id: 48,
            flavor: "Chocolate",
            size: 32,
            calories: 250,
            total_fat: 5,
            saturated_fat: 0,
            trans_fat: 0,
            cholesterol: 300,
            total_carbohydrates: 37,
            dietary_fiber: 5,
            sugars: 5,
            protein: 40
        },
        {
            id: 49,
            flavor: "Vanilla",
            size: 32,
            calories: 250,
            total_fat: 5,
            saturated_fat: 0,
            trans_fat: 0,
            cholesterol: 300,
            total_carbohydrates: 37,
            dietary_fiber: 5,
            sugars: 5,
            protein: 40
        },
        {
            id: 50,
            flavor: "Banana",
            size: 32,
            calories: 250,
            total_fat: 5,
            saturated_fat: 0,
            trans_fat: 0,
            cholesterol: 300,
            total_carbohydrates: 37,
            dietary_fiber: 5,
            sugars: 5,
            protein: 40
        },
    ];
};

function makeFixtures() {
    const testSmoothies20 = createTestSmoothies20();
    const testSmoothies32 = createTestSmoothies32();

    return { testSmoothies20, testSmoothies32 };
};

function clearTables(db) {
    return db.raw(
        `TRUNCATE smoothies20, smoothies32 RESTART IDENTITY CASCADE`
    );
};

function seedSmoothies20(db, smoothies20) {
    return db   
        .into('smoothies20')
        .insert(smoothies20)
        .then(() => {
            db.raw('SELECT setval(\'smoothies20_id_seq\', ?)', [
                smoothies20[smoothies20.length - 1].id
            ])
        });
};

function seedSmoothies32(db, smoothies32) {
    return db   
        .into('smoothies32')
        .insert(smoothies32)
        .then(() => {
            db.raw('SELECT setval(\'smoothies32_id_seq\', ?)', [
                smoothies32[smoothies32.length - 1].id
            ])
        });
};

module.exports = {
    createTestSmoothies20,
    createTestSmoothies32,
    makeFixtures,
    clearTables,
    seedSmoothies20,
    seedSmoothies32
}