const commentRouter = require('express').Router();
const childProcess = require('child_process');
const path = require('path');


commentRouter.get('/post', (req, res) => {
    const commentText = req.body.data.commentText;

    const pyProcess = childProcess.spawn('python3', [path.join(__dirname + '/../../scripts/main.py'), commentText]);
    pyProcess.stdout.on('data', (data) => {
        data = data.toString();
        
        if (data == "ok") {
            console.log("ok");
            res.status(200).send("comment is good to add.");
        }
        else {
            console.log("not ok");
            res.status(200).send("Not good.");
        }
    });
});

commentRouter.get('*', (req, res) => {
    res.redirect('/error404');
});

module.exports = commentRouter