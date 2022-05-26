import "./PlantDetails.scss";

const PlantDetails = ({ selectedPlant }) => {
  return (
    <section className="plant-details">
      <h2>Plant Details</h2>
      <p>Type: {selectedPlant.type}</p>
      <p>Name: {selectedPlant.name}</p>
      <img
        src={selectedPlant.image_url}
        alt={`${selectedPlant.type} named ${selectedPlant.name}`}
        className="plant-details__image"
      />
      <p>Water frequency: {selectedPlant.water_frequency}</p>
    </section>
  );
};

export default PlantDetails;
