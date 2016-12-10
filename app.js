/**
 * Created by Exper1ence on 2016/12/10.
 */
const app = require('express')();

app.use(require('./router'));

app.listen(3000);