import React from 'react';
import CouponCard from './CouponCard.js'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: this.props.Coupon.imgUrl,
      title: this.props.Coupon.title,
      merchant_name: this.props.Coupon.merchant,
      price: this.props.Coupon.price,
      discount_percentage: this.props.Coupon.discount,
      id: this.props.Coupon.id
    }
    this.YesButton = this.YesButton.bind(this);
    this.NoButton = this.NoButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("before setState:", this.state, "this props:", nextProps);
    this.setState({
      image_url: nextProps.Coupon.imgUrl,
      title: nextProps.Coupon.title,
      merchant_name: nextProps.Coupon.merchant,
      price: nextProps.Coupon.price,
      discount_percentage: nextProps.Coupon.discount,
      id: nextProps.Coupon.id
    })
  }

  componentDidUpdate(){
    console.log("inside app anfd updating", this.state)
  }

  getDeals() {
    axios.get('/')
    .then(function(response) {
      console.log('successful post');
    })
    .catch((err) => {
      console.error(err);
    });
  }

  YesButton() {
    axios.post('/yes', {
      id: this.state.id
    })
      .then((response) => {
        this.setState({
          coupons: response.data
        });
      })
      .catch((err) => {
        console.error(err);
      });

      this.props.Increment();
  }

  NoButton() {
    axios.post('/yes', {
      id: this.state.id
    })
      .then((response) => {
        this.setState({
          coupons: response.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
      this.props.Increment()
  }


  render() {
        console.log("APP.JS COUPONS", this.props.Coupon, "This state:",this.state)
    return (
      <div styles={{"height": "100%", "width": "100%"}}>
          <CouponCard image={this.state.image_url}
            title={this.state.title}
            merchant={this.state.merchant_name}
            price={this.state.price}
            discount={this.state.discount_percentage}
            />
        <h4></h4>
          <button type="button" className="btn btn-success btn-lg btn-block" onClick={this.YesButton}>Yes</button>
          <button type="button" className="btn btn-danger btn-lg btn-block" onClick={this.NoButton}>No</button>
      </div>
    )
  }
}

export default App;
