import React, {Component} from 'react';
import { BasketInterface, Item, ItemQuantity } from './model';
import { BasketComponent } from './components';

const CONTAINERS = ["Papercup", "Cup", "Chalice", "Glass", "Mug", "Bottle", "Bowl", "Teapot", "Tumbler"]
const DRINKS = ["Wine", "Water", "Coffee", "Tea", "Beer", "Lemonade", "Vodka", "Rum", "Ginger Beer", "Tonic", "Gin"]


class App extends Component implements BasketInterface{

    addRandomItem():void {
        const container = CONTAINERS[Math.floor(Math.random() * CONTAINERS.length)];
        const drink = DRINKS[Math.floor(Math.random() * DRINKS.length)];
        this.addItem(new Item(`${drink}_${container}`, `${drink} ${container}`, Math.random() * 100));
    }

    removeRandomItem():void {
        const itemToRemove = this.getItems()[Math.floor(Math.random() * this.getItems().length)];
        this.removeItem(itemToRemove)
    }

    render() {
    return (
      <div className="cf center">
          <div className="fr w-100 bg-gold pa4 br4 br--bottom">
              <h1 className="f2 f1-l lh-title avenir white mt0 mb4 mb5-ns">
                  Drinking Vehicles
              </h1>
              <div
                  onClick={this.addRandomItem.bind(this)}
                  className="ba black-70 no-underline grow br2 b inline-flex items-center mr3 mb3 pv2 ph3">
                  <span className="pl1">Add a random item</span>
              </div>
              <div
                  onClick={this.removeRandomItem.bind(this)}
                  className="ba black-70 no-underline grow br2 b inline-flex items-center mr3 mb3 pv2 ph3">
                  <span className="pl1">Remove a random item</span>
              </div>
          </div>
          <div className="f6 lh-copy fl w-100 mb4">
            <BasketComponent items={this.getItems()} total={this.getTotal()}/>
          </div>
      </div>
    );
  }
}

export default App;
