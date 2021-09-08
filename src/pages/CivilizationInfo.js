import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getNameForFetch } from '../services/helpers';
import { civilizationInfoSelector } from '../ducks/civilizations';
import { CIVILIZATION_INFO_REQUESTED } from '../ducks/civilizations';

export const CivilizationInfo = (props) => {
    
    const path = props?.match?.url;

    const dispach = useDispatch();
    const civilizationInfo = useSelector(civilizationInfoSelector);

    useEffect(() => { 
        dispach(CIVILIZATION_INFO_REQUESTED(path));
    }, []);
    
    const goBack = () => {
        const { history } = props;
        history.goBack();
      }

    const goHome = () => {
        const { history } = props;
        history.push('/');
      }

    const { name, expansion, army_type, unique_unit, unique_tech, team_bonus, civilization_bonus } = civilizationInfo;

    return (
        <div>
            <div>
                <h1>Civilization Info - {name}</h1>
                <p>Expansion: {expansion}</p>
                <p>Army type: {army_type}</p>
                <p>Team bonus: {team_bonus}</p>
                
                <ul>
                    <h2>Civilization bonus</h2>
                    
                    {
                    Boolean(civilization_bonus) && civilization_bonus.map((bonus, index) => 
                        <li key = {index}>{bonus}</li>
                    )
                    }
                </ul>

                <div>
                        {
                            Boolean(unique_unit && unique_unit.length) &&
                                <div> 
                                    <Link to = {`/unit/${getNameForFetch(unique_unit)}`}><p>Unique unit</p></Link>
                                </div>
                        }

                        {
                            Boolean(unique_tech && unique_tech.length) &&
                                <div>
                                    <Link to = {`/technology/${getNameForFetch(unique_tech)}`}><p>Unique technology</p></Link>
                                </div>
                        }
                </div>

                <div>
                    <button onClick = {goBack}>Go back</button>
                    <button onClick = {goHome}>Go home</button>
                </div> 

            </div>
        </div>
    )
  };
 

export default CivilizationInfo;
      
              
                
                
                    
            