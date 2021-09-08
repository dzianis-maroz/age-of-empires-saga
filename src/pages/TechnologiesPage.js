import DataBlock from '../components/DataBlock';
import { paths, title } from '../config';
import { technologiesSelector } from '../ducks/technologies';


export const TechnologiesPage = () => {
    return (
      <>
        <h1>{title.technologies.toUpperCase()}</h1>
        <DataBlock path = {paths.technologies} title = {title.technologies} selector = {technologiesSelector}/>
      </>   
    ); 
};


export default TechnologiesPage;