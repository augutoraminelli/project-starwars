import React, { useEffect, useContext, useState } from 'react';
import { Table } from 'react-bootstrap';
import planetContext from '../context';

function RenderTable() {
  const { data, filter } = useContext(planetContext);
  const [filteredPlanets, setFilteredPlanets] = useState(null);
  const { name } = filter.filters.filterByName;
  const { filterByNumericValues: arrayNewFilters } = filter.filters;

  // recebe o array da API, e recebe o name do onChange na FilterInput, função atualiza o valor filteredPlanetes novo array para ser renderizado.
  useEffect(() => {
    if (data) {
      const searchName = data.filter((planet) => planet.name.includes(name));
      setFilteredPlanets(searchName);
    }
  }, [data, name]);

  // ajuda do colega Marcelo Alves para essa função que sempre que evento de novo filtro muda o estado.
  useEffect(() => {
    let newData = data;
    arrayNewFilters.forEach((e) => {
      switch (e.comparision) {
      case 'maior que':
        newData = newData.filter((planet) => (
          Number(planet[e.column]) > Number(e.value)
        ));
        break;
      case 'menor que':
        newData = newData.filter((planet) => (
          Number(planet[e.column]) < Number(e.value)
        ));
        break;
      case 'igual a':
        newData = newData.filter((planet) => (
          Number(planet[e.column]) === Number(e.value)
        ));
        break;
      default:
        break;
      }
    });
    console.log(newData);
    setFilteredPlanets(newData);
    // arrayNewFilters.map((newFilter) => console.log(newFilter));
    // data.map((planet) => console.log(planet));
  }, [arrayNewFilters, data]);

  return (
    <Table className="table-responsive">
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
    </Table>
  );
}

export default RenderTable;
