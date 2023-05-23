const { db, Person, Place, Thing, Souvenir } = require("./db");

const syncAndSeed = async () => {
    try {
        await db.sync({ force: true });
        
        const [moe, larry, lucy, ethyl] = await Promise.all([
            Person.create({
              name: "moe",
            }),
            Person.create({
              name: "larry",
            }),
            Person.create({
              name: "lucy",
            }),
            Person.create({
                name: "ethyl",
            }),
        ]);

        const [paris, nyc, chicago, london] = await Promise.all([
            Place.create({
              name: "paris",
            }),
            Place.create({
              name: "nyc",
            }),
            Place.create({
              name: "chicago",
            }),
            Place.create({
                name: "london",
            }),
        ]);

        const [hat, bag, shirt, cup] = await Promise.all([
            Thing.create({
              name: "hat",
            }),
            Thing.create({
              name: "bag",
            }),
            Thing.create({
              name: "shirt",
            }),
            Thing.create({
                name: "cup",
            }),
        ]);

        const createSouvenir = await Promise.all([
            Souvenir.create(),
            Souvenir.create(),
            Souvenir.create(),
            Souvenir.create(),
        ]);

        db.close();
    } catch (error) {
        console.log(error);
        db.close();
    }
}

syncAndSeed();