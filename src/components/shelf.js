import React, { Component } from 'react';

export default class Shelf extends Component {

    constructor(props) {
        super(props);
          this.onClickAdd = this.onClickAdd.bind(this);
          this.state= {
              shelfItems: [
                  'shampoo',
                  'chocolate',
                  'yogurt'
              ]
          }
    }

    onClickAdd(item) {
        this.props.addItem(item);
    }

    render() {
        const shelfItems = this.state.shelfItems.map((item, i) => {
            return <li key={i}><button onClick={() => this.onClickAdd(item)}> + </button>{item}</li>
        });
        return (
            <div>
                <h2>Shelf</h2>
                <ul>
                    {shelfItems}
                </ul>
            </div>
        );
    }
}
