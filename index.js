global.__base = __dirname + '/'
//require( __base + 'config/schedules')

const app = require('./app'),
	  port = process.env.PORT || 3003,
	  server = app.listen( port, () => console.log(`API server started on ${port}`) )
