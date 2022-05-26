import React from 'react';
import './app.scss';
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import PlantDetails from './components/PlantDetails/PlantDetails';
import plants from "./data/plants.json";

class App extends React.Component {
  state = {
    selectedPlant: plants[1]
  }
  
  handlePlantChange = (plantId) => {
    const newSelectedPlant = plants.find((plant) => plantId === plant.id);
    
    this.setState({
      selectedPlant: newSelectedPlant
    });
  }

  render() {
    const nonSelectedPlants = plants.filter((plant) => {
      return plant.id !== this.state.selectedPlant.id;
    });

    return (
      <>
        <Header />
        <Nav 
          plants={nonSelectedPlants} 
          handlePlantChange={this.handlePlantChange} 
        />
        <PlantDetails selectedPlant={this.state.selectedPlant} />
        <button onClick={() => { this.handlePlantChange(2)} }>Spiky Button!</button>
      </>
    );
  }
}

export default App;
