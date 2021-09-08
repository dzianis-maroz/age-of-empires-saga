import { Switch, Route } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { CivilizationsPage } from './pages/CivilizationsPage';
import { HomePage } from './pages/HomePage';
import { CivilizationInfo } from './pages/CivilizationInfo';
import { UnitsPage } from './pages/UnitsPage';
import { UnitInfo } from './pages/UnitInfo';
import { TechnologiesPage } from './pages/TechnologiesPage';
import { TechnologyInfo } from './pages/TechnologyInfo';
import { StructuresPage } from './pages/StructuresPage';
import { StructureInfo } from './pages/StructureInfo';

function App() {
  return (
    <>
        <Navigation />
        <Switch>
            <Route path = '/' exact component = {HomePage}/>
            <Route path = '/civilizations' exact component = {CivilizationsPage}/>
            <Route path = '/civilization/:id' component = {CivilizationInfo}/>
            <Route path = '/units' exact component = {UnitsPage}/>
            <Route path = '/unit/:id' exact component = {UnitInfo}/>
            <Route path = '/technologies' exact component = {TechnologiesPage}/>
            <Route path = '/technology/:id' exact component = {TechnologyInfo}/>
            <Route path = '/structures' exact component = {StructuresPage}/>
            <Route path = '/structure/:id' exact component = {StructureInfo}/>
        </Switch>
    </>
  );
}

export default App;
