import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Products from 'components/Products';
import ProductItem from 'components/Product-item';
import Cart from 'components/Cart';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    console.log("apps props: ", this.props);
    axios.get('http://localhost:3001/get-items')
    .then(response => {
      this.setState({
        products: response.data
      }, () => console.log(this.state.products))
    });
  }
  render() {
    const {
      products,
    } = this.state;
    const selectedProduct = (id) => {
      products.filter(el => {
        return el.id === id;
      });
    }
    return(
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Products products={products} />} />
          <Route path="/cart" component={Cart} />
          <Route path="/:id" exact render={() => <ProductItem product={selectedProduct} />} />
        </Switch>
      </BrowserRouter>
        
      </div>
    )
  }
}
    
export default App;
