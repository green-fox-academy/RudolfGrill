'use strict';

const routesModule = require('./routes');
const port = 3000;

routesModule.app.listen(port, () => {
  console.log('Server running on port %d', port);
});