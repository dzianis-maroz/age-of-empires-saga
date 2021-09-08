import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { unitInfoSelector } from '../ducks/units';
import { UNIT_INFO_REQUESTED } from '../ducks/units';

export const UnitInfo = (props) => {

    const path = props?.match?.url;

    const dispach = useDispatch();
    const unitInfo = useSelector(unitInfoSelector);

    useEffect(() => { 
        dispach(UNIT_INFO_REQUESTED(path));
    }, []);
    
    const goBack = () => {
        const { history } = props;
        history.goBack();
      }

    const goHome = () => {
        const { history } = props;
        history.push('/');
      }

    const { name, description, expansion, build_time, range, attack, armor, attack_bonus, armor_bonus } = unitInfo;
    
    return (
        <div>
          <h1>Unit Info - {name}</h1>
          <p>{description}</p>
            <ul>
              <li>Expansion: {expansion}</li>
              <li>Build time: {build_time}</li>
              <li>Range: {range}</li>
              <li>Attack: {attack}</li>
              <li>Armor: {armor}</li>
              {Boolean(attack_bonus && attack_bonus.length) && <li>Attack bonus: {attack_bonus}</li>}
              {Boolean(armor_bonus && armor_bonus.length) && <li>Armor bonus: {armor_bonus}</li>}
            </ul>
          <button onClick = {goBack}>Go back</button>
          <button onClick = {goHome}>Go home</button>
        </div>
    )
};
 

export default UnitInfo;
      
              
                
                
                    
            