const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser'); 

const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(bodyParser.json()); 

server.post('/items', (req, res) => {
  try {
    const newItem = req.body; 
    newItem.id = router.db.__wrapped__.items.length; 
    router.db.__wrapped__.items.push(newItem);
    res.status(201).json(newItem); 
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(500).json({ error: 'Failed to add item.' });
  }
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
