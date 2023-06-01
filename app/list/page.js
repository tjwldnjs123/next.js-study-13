export default () => {
  const foods = [
    { name: "Tomatoes", price: 40 },
    { name: "Pasta", price: 50 },
    { name: "Coconut", price: 30 },
  ];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {foods.map((food) => {
        return (
          <div className="food">
            <h4>
              {food.name} ${food.price}
            </h4>
          </div>
        );
      })}
    </div>
  );
};
