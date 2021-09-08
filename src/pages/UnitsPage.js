import DataBlock from '../components/DataBlock';
import { paths, title } from '../config';
import { unitsSelector } from '../ducks/units';

export const UnitsPage = () => {
    return (
      <>
        <h1>{title.units.toUpperCase()}</h1>
        <DataBlock path = {paths.units} title = {title.units} selector = {unitsSelector}/>
      </>   
    ); 
};


export default UnitsPage;