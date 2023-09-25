export default function List() {
  let products = ["딸기", "블루베리", "샤인머스캣", "블랙사파이어"];

  return (
    <div>
      <h3>Product list</h3>
      <div>
        {products.map((product, idx) => (
          <div key={idx} className="product-card">
            <p>{product} $40</p>
          </div>
        ))}
      </div>
    </div>
  );
}
