import React from 'react';
import axios from 'axios'
// import DealList from './CouponListComp.js'

class SavedDealsComp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			savedDeals: []
		}
		this.getDeals = this.getDeals.bind(this);
	}

	getDeals() {
		axios.get('/saved')
		.then((response) => {
			this.setState({savedDeals: response})
		})
	}

	componentDidMount() {
		this.getDeals()
	}

	render() {
		return (
			<div>
				<h1>Saved Deals!</h1>
				<DealList deals={this.state.savedDeals}/>
			</div>
		)
	}
}

export default SavedDealsComp;
