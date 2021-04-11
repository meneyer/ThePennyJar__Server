require('dotenv').config()
let express = require('express');
let app = express();
let sequelize=require('./db')

let user = require('./controllers/userController')
let needapenny = require('./controllers/requestController')
let profile = require('./controllers/userInfoController')
let giveapenny = require('./controllers/financialDonationController')

app.use(require('./middleware/headers'));

app.use(express.json());

app.use('/user', user)
app.use('/needapenny', needapenny)
app.use('/profile', profile)
app.use('/giveapenny', giveapenny)

sequelize.authenticate()
    .then(() => sequelize.sync())
    // .then(() => sequelize.sync({force: true}))
    .then(() =>
        app.listen(3000, () => {
        console.log(`[server]: App is listening on localhost:3000`);
        })
    )
    .catch((e) => {
        console.log("[server]: Server Crashed");
        console.log(e);
    });