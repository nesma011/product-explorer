


export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export async function getProductById(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}
