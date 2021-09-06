const express = require('express');
const app = express();
const PORT = 3000;
// listen on PORT 3000
app.get('/', (req, res) => res.send('node on PORT 3000'));
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
