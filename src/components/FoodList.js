const FoodList = ({ item }) => {
  return (
    <table>
      <tbody>
        {item.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FoodList;
