import DataBlock from '../components/DataBlock';
import { paths, title } from '../config';
import { structuresSelector } from '../ducks/structures';

export const StructuresPage = () => {
    return (
      <>
        <h1>{title.structures.toUpperCase()}</h1>
        <DataBlock path = {paths.structures} title = {title.structures} selector = {structuresSelector}/>
      </>   
    ); 
};


export default StructuresPage;