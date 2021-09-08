import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { technologyInfoSelector } from '../ducks/technologies';
import { TECHNOLOGY_INFO_REQUESTED } from '../ducks/technologies';

export const TechnologyInfo = (props) => {

    const path = props?.match?.url;

    const dispach = useDispatch();
    const unitInfo = useSelector(technologyInfoSelector);

    useEffect(() => { 
        dispach(TECHNOLOGY_INFO_REQUESTED(path));
    }, []);
    
    const goBack = () => {
        const { history } = props;
        history.goBack();
      }

    const goHome = () => {
        const { history } = props;
        history.push('/');
      }

      const { name, description, expansion, build_time, age  } = unitInfo;
    
      return (
        <div>
            <h1>Technology Info - {name}</h1>
            <p>{description}</p>
            <ul>
                <li>Expansion: {expansion}</li>
                <li>Build time: {build_time}</li>
                <li>Age: {age}</li>
            </ul>
            <button onClick = {goBack}>Go back</button>
            <button onClick = {goHome}>Go home</button> 
        </div>
   );
};
 

export default TechnologyInfo;
      
              
                
                
                    
            