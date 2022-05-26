# React Application Gameplan

- start the project

- Components
   -> Props
   -> State


# List of components

- App 
    - (stateful -> Nav and PlantDescription rely on the state)
    - (state: plants, selectedPlant)
    - (event handler: handlePlantChange)
        - find a way to not show the clicked plant in the nav
        - update the selectedPlant state
    
    - Header
    - Nav
        - (props: plantNames -> array)
        - (event handler: click on item)
    - PlantDetails
        - pass state.selectedPlant as prop!
        - (props: name, type, frequency, image)