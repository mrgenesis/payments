
const app = require('./src/app')
  , port = process.env.PORT || 3000;

app.listen(port, console.log('Server running on the port', port));