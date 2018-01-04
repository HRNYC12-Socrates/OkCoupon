import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import NavBar from './NavBar.js'
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coupons: [{
        image_url: "https://api.sqoot.com/v2/deals/5394809/image?api_key=kzjh2j",
        title: "10% off at Stewart Hotel",
        merchant_name: "Posh Bagel",
        price: 177.39,
        discount_percentage: 0.1,
        id: 1
      }],
      index: 0
    }
    this.incrementIndex = this.incrementIndex.bind(this);
    this.foo = this.foo.bind(this);
  }

  foo(arg) {
    this.setState({
      coupons: arg
    })
  }

  componentDidMount() {
    axios.get('/helper')
    .then(() => {
      axios.get('/arrayCoupons').then((response) => {
        console.log("before setting state again", this.state.coupons)
        this.foo(response.data);
        console.log("Coupons:",this.state.coupons);
      })
    })
  }

  componentDidUpdate() {
    console.log('componenet is updating', this.state.coupons)
  }

  incrementIndex() {
    this.state.index++;
  }



  render() {
    console.log('how many times?', this.state.coupons)
    return (
      <div>
        <NavBar />
        <div className="container">
          <App Coupon={this.state.coupons[this.state.index]} Increment={this.incrementIndex} />
        </div>
      </div>
    )
  }
}
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Main),
    document.getElementById('mount')
  );
});;
