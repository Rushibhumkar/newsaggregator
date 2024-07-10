import express from "express";
const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    { name: "rushi", age: 23, id: 1 },
    { name: "pavan", age: 22, id: 2 },
    { name: "manan", age: 23, id: 3 },
    { name: "aanan", age: 24, id: 4 },
  ];
  console.log({ req });
  console.log({ res });
  console.log("reqURL", req.url, req.method, req.statusCode);
  if (req.query.search) {
    const filteredProducts = products.filter((item) =>
      item.name.includes(req.query.search)
    );
    res.send(filteredProducts);
    return;
  }
  //   setTimeout(() => {
  //     res.send(products);
  //   }, 3000);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
