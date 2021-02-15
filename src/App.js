import logo from './logo.svg';
import './App.css';
import ListHotelComponent from './components/ListHotelComponent';
import HeaderComponent from './components/HeaderComponent';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PriceComponent from './components/PriceComponent';
import CsvComponent from './components/CsvComponent';
import CsvStatusComponent from './components/CsvStatusComponent';
function App() { 
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path = "/"  exact component = {HomePage}></Route>
              <Route path = "/all-hotels" component = {ListHotelComponent}></Route>
              <Route path = "/get-price" component = {PriceComponent}></Route> 
              <Route path = "/get-csv" component = {CsvComponent}></Route>
              <Route path = "/get-update" component = {CsvStatusComponent}></Route>
            </Switch>
          </div>
      </Router>
    </div>
    
  );
}

export default App;
