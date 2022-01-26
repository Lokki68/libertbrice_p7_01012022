const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// const -> Routes

const userRoutes = require('./Routes/users.routes');
const postRoutes = require('./Routes/posts.routes');
const commentRoutes = require('./Routes/comment.routes');
const adminRoutes = require('./Routes/admin.routes');

const app = express();

app.use(cors());
app.use(helmet());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Header',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  );
  next();
});

app.use(express.json());

// Routes

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/post/comment', commentRoutes);
app.use('/api/user/admin', adminRoutes);

// Exports -> app
module.exports = app;
