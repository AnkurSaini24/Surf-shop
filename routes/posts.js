const express = require('express');
const router = express.Router();
const {errorHandler} = require('../middleware');
const {getPosts,newPost,createPost,showPost} = require('../controllers/posts');
/* GET posts index /posts  */

router.get('/', errorHandler(getPosts));

/* GET posts new  /posts/new  */
router.get('/new', newPost);
  
  /* POST posts create  /posts  */
router.post('/', errorHandler(createPost));

    /* GET posts show   /posts/:id  */
router.get('/:id', errorHandler(showPost));

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