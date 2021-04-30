const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [{
      model: Product
    }]
  }).then((CatData)=>{
    res.json(CatData);
  })
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk(
    {
      where:{
        id: req.params.id
      },
      include:[{
        model:Product
      }]

    }
  ).then((CatData)=>{
    res.json(CatData);
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  }).then((createCat)=>{
    res.json(createCat);
  })
  
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where:{
        id: req.params.id
      }
    }
  ).then((updateCat)=>{
    res.json(updateCat);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then((deleteCat)=>{
    res.json(deleteCat);

  })
  .catch((err) => res.json(err));

});

module.exports = router;
