import React from 'react';
import { ItemsOrder } from '../components/ItemsOrder';
import { CartOrder } from '../components/CartOrder';
import { dishs, burgers, desserts, drinks } from './Menu';
import { Footer } from './Footer';

export class OrderOnline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      letter: "",
      dishItems: dishs,
      burgerItems: burgers,
      dessertItems: desserts,
      drinkItems: drinks,
      cart: [],
      subtotal: 0
    }
    this.handleClickAddItems = this.handleClickAddItems.bind(this);
  }

  handleClickAddItems(item) {
    let count = this.state.number + 1;
    this.setState({number: count}); 

    let addLetterS = "s";
    if (this.state.letter === "" && this.state.number >= 1) {
      this.setState({letter: addLetterS})
    }

    let found = false;

    let updatedCart = this.state.cart.map((cartItem) => {
      if (cartItem.name === item.name) {
        found = true;
        cartItem.quantity++;
        return cartItem;
      } else {
        return cartItem;
      }  
    });

    if (!found) {
      updatedCart.push({id: item.id, name: item.name, price: item.price, quantity: 1})
    }
    this.setState({cart: updatedCart})
    
    let subtotalItems = this.state.subtotal;
    subtotalItems =  this.state.subtotal + item.price;
      this.setState({subtotal: subtotalItems})
  }
  
  render() {
    return (
      <div>
        <div id="content-order">
          <div>
            <div className="main-content-order">
              <div className="menu-order">
                <h2>Menu à la carte</h2>
                <p>Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset.</p>
                <div className="bar-horizontal"></div>
              </div>
              <h3>Plats</h3>
              {this.state.dishItems.map((dish) => {
                return <ItemsOrder key={dish.id} 
                                          details={dish} 
                                          handleClickAddItems={this.handleClickAddItems}
                                           />
              })}
            </div>
            <div className="main-content-order">
              <h3>Burgers</h3>
              {this.state.burgerItems.map((burger) => {
                return <ItemsOrder key={burger.id} 
                                          details={burger} 
                                          handleClickAddItems={this.handleClickAddItems}
                                           />
              })}
            </div>
            <div className="main-content-order">
            <h3>Desserts</h3>
              {this.state.dessertItems.map((dessert) => {
                return <ItemsOrder key={dessert.id} 
                                          details={dessert} 
                                          handleClickAddItems={this.handleClickAddItems}
                                           />
              })}
            </div>
            <div className="main-content-order">
            <h3>Boissons</h3>
              {this.state.drinkItems.map((drink) => {
                return <ItemsOrder key={drink.id} 
                                          details={drink} 
                                          handleClickAddItems={this.handleClickAddItems}
                                           />
              })}
            </div>
            </div>
            <div className="right-content-order">
              <CartOrder  number={this.state.number}
                                  letter={this.state.letter}
                                  cart={this.state.cart}
                                  key={dishs.id}
                                  subtotal={this.state.subtotal}
                                  />
            </div>
          </div>
            <Footer />
        </div>
    );
  }
}
