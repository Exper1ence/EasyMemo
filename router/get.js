/**
 * Created by Exper1ence on 2016/12/10.
 */
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('hello world');
});

module.exports = router;