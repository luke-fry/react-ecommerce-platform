import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shoppage/shoppage.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop/" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
