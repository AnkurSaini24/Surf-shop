const express = require('express');
const router = express.Router();

/* GET posts index /posts  */
router.get('/', function(req, res, next) {
  res.send('posts');
});

/* GET posts new  /posts/new  */
router.get('/new', function(req, res, next) {
    res.send('posts/new');
  });
  
  /* POST posts create  /posts  */
router.post('/', function(req, res, next) {
    res.send('CREATE /posts');
  });

    /* GET posts show   /posts/:id  */
router.get('/:id', function(req, res, next) {
    res.send('SHOW /posts/:id');
  });

      /* GET posts edit   /posts/:id/edit  */
router.get('/:id/edit', function(req, res, next) {
    res.send('EDIT /posts/:id/edit');
  });

 /* PUT posts update   /posts/:id  */
router.put('/:id', function(req, res, next) {
    res.send('UPDATE /posts/:id');
  });

   /* Delete  posts  destroy /posts/:id  */
router.delete('/:id', function(req, res, next) {
    res.send('DELETE /posts/:id');
  });




module.exports = router;