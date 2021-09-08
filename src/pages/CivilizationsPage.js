import DataBlock from '../components/DataBlock';
import { paths, title } from '../config';
import { civilizationsSelector } from '../ducks/civilizations';


export const CivilizationsPage = () => {
    return (
      <>
        <h1>{title.civilizations.toUpperCase()}</h1>
        <DataBlock path = {paths.civilizations} title = {title.civilizations} selector = {civilizationsSelector}/>
      </>   
    ); 
};


export default CivilizationsPage;