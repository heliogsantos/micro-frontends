const path = require('path');
const express = require('express');

const PORT = 3000;
const distDir = path.resolve(__dirname);

const app = express();

app.use(express.static(distDir)); // Setup static folder

app.get('*', function (req, res) {
  const mainTemplateFile = path.join(distDir, 'index.html'); // Path to main app template
  res.sendFile(mainTemplateFile);
});

app.listen(PORT, () => console.log(`Server running port: ${PORT}`));
