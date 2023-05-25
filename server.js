const express = require("express");
const { db, Person, Place, Thing, Souvenir } = require("./db");
const override = require("method-override");
const server = express();

server.get("/", async (req, res) => {
    try {
        const allSouvenirs = await Souvenir.findAll({
            include: [Person, Place, Thing]
        });
        // const souvenirsData = allSouvenirs.map((souvenir) => {
        //     const personName = souvenir.Person.name;
        //     const placeName = souvenir.Place.name;
        //     const thingName = souvenir.Thing.name;
        //     return `${personName} purchased a ${thingName} in ${placeName}`;
        //   });
      
        //   res.send(souvenirsData);

        // const [customers, products, orders] = await Promise.all([
        //     Customer.findAll(),
        //     Product.findAll(),
        //     Order.findAll({
        //       include: [Customer, Product],
        //     }),
        //   ]);

        // display the data from your Souvenir model, which belongs to a Person, a Place, and a Thing


//         const html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>acme People Places Things</title>
// </head>
// <body>
//     <h1>Acme People, Places and Things</h1>
//     <h2>People</h2>
//     <ul>
//         ${allSouvenirs.map((souvenir) => `<li>${souvenir.Person.name}</li>`).join("")}
//     </ul>
//     <h2>Places</h2>
//     <ul>
//         ${allSouvenirs.map((souvenir) => `<li>${souvenir.Place.name}</li>`).join("")}
//     </ul>
//     <h2>Things</h2>
//     <ul>
//         ${allSouvenirs.map((souvenir) => `<li>${souvenir.Thing.name}</li>`).join("")}
//     </ul>
//     <h2>Souvenir Purchases</h2>
//     <ul>
//         ${allSouvenirs.map((souvenir) => `<li>${souvenir.Person.name} purchased a ${souvenir.Thing.name} in ${souvenir.Place.name}</li>`).join("")}
//     </ul>
// </body>
// </html>`;


        res.json({ allSouvenirs });
        // res.send(html);
    } catch (error) {
        console.log(error);
    }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;