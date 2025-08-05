const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
const body_parser = require("body-parser");
const fs = require("fs");
const { insertTables } = require("./database/function");

const envPath = path.resolve(__dirname, ".env");
const envExists = fs.existsSync(envPath);

app.set("view engine", "ejs");
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

async function startRoutes() {
  require("dotenv").config();
  const user_api = require("./routes/user");
  const post_api = require("./routes/post");
  const index_api = require("./routes/index");
  const contact_api = require("./routes/contact");


  app.use("/css", express.static(path.join(__dirname, "public/css")));
  app.use("/js", express.static(path.join(__dirname, "public/js")));

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
      },
    })
  );

  app.use("/", index_api);
  app.use("/user", user_api);
  app.use("/post", post_api);
  app.use("/contactus", contact_api);

  app.use((req, res) => {
    res.send("404");
  });
}

if (!envExists) {
  app.get("/", (req, res) => {
    res.render("setup");
  });
  app.post("/setup", async (req, res) => {
    
    const { db_host, db_user, db_pass, db_name, session_key, email, password } = req.body;
    const envdata = `
    SESSION_SECRET=${session_key}
    DB_HOST=${db_host}
    DB_USER=${db_user}
    DB_PASS=${db_pass}
    DB_NAME=${db_name}
    `;

    fs.writeFileSync(envPath, envdata)
    res.send('meow')
    setTimeout(process.exit(0) , 5)
  });
} else {
  startRoutes();
}

app.listen(3000, () => {
  console.log("app start http://localhost:3000/");
});
