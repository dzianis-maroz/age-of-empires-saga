import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { structureInfoSelector } from '../ducks/structures';
import { STRUCTURE_INFO_REQUESTED } from '../ducks/structures';

export const StructureInfo = (props) => {
    
    const path = props?.match?.url;

    const dispach = useDispatch();
    const structureInfo = useSelector(structureInfoSelector);

    useEffect(() => { 
        dispach(STRUCTURE_INFO_REQUESTED(path));
    }, []);
    
    const goBack = () => {
        const { history } = props;
        history.goBack();
      }

    const goHome = () => {
        const { history } = props;
        history.push('/');
      }

      const { name, description, expansion, build_time, hit_points } = structureInfo;
    
      return (
          
              <div>
                  <h1>Structure Info - {name}</h1>
                  <p>{description}</p>
                  <ul>
                      <li>Expansion: {expansion}</li>
                      <li>Build time: {build_time}</li>
                      <li>Hit point: {hit_points}</li>
                  </ul>
                  <button onClick = {goBack}>Go back</button>
                  <button onClick = {goHome}>Go home</button>
              </div>
      );
  };
 

export default StructureInfo;
      
              
                
                
                    
            