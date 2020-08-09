const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: [ 'dkfjeuq021nod39r' ]
	})
);

app.use(authRouter);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
