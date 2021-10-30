import React, { useEffect, useContext, useState } from 'react';
import planetContext from '../context';

function Table() {
  const { data, getPlanets, filter } = useContext(planetContext);
  const [filteredPlanets, setFilteredPlanets] = useState(null);
  const { name } = filter.filters.filterByName;

  useEffect(() => { getPlanets(); }, []);

  // recebe o array da API, e recebe o name do onChange, função atualiza o valor filteredPlanetes novo array para ser renderizado.
  useEffect(() => {
    if (data) {
      const searchName = data.filter((planet) => planet.name.includes(name));
      setFilteredPlanets(searchName);
    }
  }, [data, name]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { filteredPlanets && filteredPlanets.map((item, index) => (
          <tr key={ index }>
            <td>{ item.name}</td>
            <td>{ item.rotation_period }</td>
            <td>{ item.orbital_period }</td>
            <td>{ item.diameter}</td>
            <td>{ item.climate}</td>
            <td>{ item.gravity}</td>
            <td>{ item.terrain}</td>
            <td>{ item.surface_water}</td>
            <td>{ item.population}</td>
            <td>{ item.films}</td>
            <td>{ item.created}</td>
            <td>{ item.edited}</td>
            <td>{ item.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;