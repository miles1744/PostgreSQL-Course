const db = require("../db/queries.js")


exports.usersListGet = async (req, res) => {
    const { search } = req.query;
    const usernames = await db.getAllUsernames(search);
    res.render("index", { usernames });
}

exports.usersNewGet = async (req, res) => {
    res.render("new")
}

exports.usersNewPost = async (req, res) => {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}