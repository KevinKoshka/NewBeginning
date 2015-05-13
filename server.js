/* 
	Este archivo usa el middleware connect para que actúe como servidor web
para servir archivos en /app.
	Se mapea el path /js/lib/ a node_modules/requirejs/ . Más tarde en los
build scripts se copia node_modules/requirejs/require.js a build/js/lib
para que el index.html no tenga que cambiar
*/
var connect = require('connect')  
		, http = require('http')
		, app
	;

	app = connect()  
		.use(connect.static('app'))
		.use('/js/lib/', connect.static('node_modules/requirejs/'))
		.use('/node_modules', connect.static('node_modules'))
	;

	http.createServer(app).listen(8080, function() {  
		console.log('Running on http://localhost:8080');
});