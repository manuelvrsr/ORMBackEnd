const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: [{
      model: ProductTag
    }]
  }).then((CatData)=>{
    res.json(CatData);
  })
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findByPk(
    {
      where:{
        id: req.params.id
      },
      include:{
        model:ProductTag ,
      }

    }
  ).then((CatData)=>{
    res.json(CatData);
  })
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Category.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where:{
        tag_name: req.params.tag_name
      }
    }
  )
  .then((updateTag)=>{
    res.json(updateTag);

  })
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then((deleteTag)=>{
    res.json(deleteTag);

  })
  .catch((err) => res.json(err));
});

module.exports = router;
