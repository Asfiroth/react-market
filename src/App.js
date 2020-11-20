import logo from './logo.svg';
import React, {Component} from "react";

import './App.css';
import ProductListItem from "./components/ProductListItem";
import ProductDetail from "./components/ProductDetail";
import data from "./data/productList.json";

import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {currentItem: {}};
    this.selectItem = this.openItemDetail.bind(this);
  }

  openItemDetail(item){
    this.setState({currentItem: item});
  }

  render(){
    let {currentItem} = this.state;
    return (
      <div className="wrapper">
        <div className="list">
          {data.map(i => (<ProductListItem Item={i} key={i.ProductID} Action={this.selectItem} />))}
        </div>
        <div className="detail">
          <ProductDetail Item={currentItem} />
        </div>
      </div>
    );
  }
}

export default App;
