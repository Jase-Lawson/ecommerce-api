const products = require('../products.json')

// const getProducts = (req, res) => {
//   // res.status(200).send(products)
//   const { id } = req.params /* destructuring */
//   const item = products.find(el => el.id === +id)
//   if (!item) return res.status(500).send('Item not in list')
//   res.status(200).send(item)
// }

const getProducts = (req, res) => {
  const { price } = req.query
  if (price) {
    const items = products.filter(el => el.price >= +price)
    return res.status(200).send(items)
  }
  res.status(200).send(products)
}

module.exports = getProducts