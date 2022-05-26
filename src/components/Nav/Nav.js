const Nav = ({ plants, handlePlantChange }) => {
  return (
    <ul>
      {plants.map((plant) => {
        return (
          <li
            onClick={() => {
              handlePlantChange(plant.id);
            }}
            key={plant.id}
          >
            {plant.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
