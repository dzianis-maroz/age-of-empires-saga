import { Link } from 'react-router-dom';

export const Navigation = () => {

    return (
            <nav className = 'navigation'>
                <ul>
                    <li><Link to = '/'>Home</Link></li>
                    <li><Link to = '/civilizations'>Civilizations</Link></li>
                    <li><Link to = '/units'>Units</Link></li>
                    <li><Link to = '/technologies'>Technologies</Link></li>
                    <li><Link to = '/structures'>Structures</Link></li>  
                </ul>
            </nav>
    );
;} 

export default Navigation;
