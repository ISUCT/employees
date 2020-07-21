import { postRequest } from '../services/service';

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/similarity', async function(req, res, next) {
    if (!req.body) {
        res.send([]);
    }
    const users = await postRequest('http://127.0.0.1:5000/', req.body);
    res.send(users);
});

module.exports = router;
