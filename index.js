const express = require('express');
const app = express();
const authRoutes = require('./authRoutes'); // Import your user registration routes

app.use(express.json());
app.use('/auth', authRoutes); // Use authentication routes under `/auth`


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
