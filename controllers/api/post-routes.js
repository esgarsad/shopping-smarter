const router = require('express').Router();
const multer = require('multer');
const sequelize = require('../../config/connection');
const { Post, User, Comment, Category } = require('../../models');
const withAuth = require('../../utils/auth');
const { Op } = require("sequelize");

const upload = multer( {
limits: {
  fileSize: 1000000,
},
fileFilter(req, file, cb) 
{
  if (!file.originalname.match(/\.(png|jpg|jpeg)$/))
  {
    cb(new Error('Please upload an image.'))
  }
  cb(undefined, true)
}})


// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'short_desc',
      'title',
      'extend_desc',
      'created_at',
      'city'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/search/:keyword', (req, res) => {
    const {keyword} = req.params;
   Post.findAll({
    where: {
       title: { [Op.like]: `%${keyword}%` } 
    },
    attributes: [
      'id',
      'short_desc',
      'title',
      'extend_desc',
      'created_at',
      'city'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Category,
        attributes: ['category_name']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No items found with this description' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'short_desc',
      'title',
      'extend_desc',
      'created_at',
      'city'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No items found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id/image', async (req, res) => {
  try{
    const incident = await Incident.findById(req.params.id)
    if (!incident || !incident.image)
     {
       throw new Error()
      }
      //response header, use set
      res.set('Content-Type', 'image/png')
      res.send(incident.image)
    }
     catch(e) {res.status(404).send()}
    })

router.post('/', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!',short_desc: 'Whirlpool washer barely used', price: 225.0, extend_desc: "Selling it because I'm noving, good washer!", user_id: 1}
  Post.create({
    title: req.body.title,
    short_desc: req.body.short_desc,
    price: req.body.price,
    extend_desc: req.body.extend_desc,
    user_id: req.session.user_id,
    city: req.body.city
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.post('/upload', upload.single('upload'), async (req, res) => {
  try 
  {const incident = await Incident.findById(req.body.id)
  incident.image = req.file.buffer
  incident.save()
  res.send()
}
 catch (e){
   res.status(400).send(e)
  }}, 
  (error, req, res, next) => {
    res.status(400).send({error: error.message})})



router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No items found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No items found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/upload', async (req, res) => {
  try {
    const incident = await Incident.findById(req.body.id)
    incident.image = undefinedincident.save()
    res.send()
  } 
  catch (e) {res.status(400).send(e)}
})

module.exports = router;
