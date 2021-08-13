//Install express server
import express, { static } from 'express';
import { join } from 'path';

const app = express();

// Serve only the static files form the dist directory
app.use(static(__dirname + '/dist/bookitnow'));

app.get('/*', function(req,res) {
    
res.sendFile(join(__dirname+'/dist/bookitnow/index.html'));
});

// Start the app 
app.listen(process.env.PORT || 8080);
// server.js
import { create, router as _router, defaults } from 'json-server';
const server = create()
const router = _router('db.json')
const middlewares = defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})