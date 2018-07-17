import React, { Component } from 'react';

import FormPostStatus from './components/FormPostStatus';
import Status from './components/Status';
import './index.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listStatus: [
				{
					author: '',
					title: '',
					content: '',
				},
			],
			isNews: false,
		};
	}

	newStatus = () => {
		this.setState({
			isNews: true,
		});
	};

	addStatus = status => {
		this.setState({
			listStatus: [...this.state.listStatus, status],
		});
	};

	render() {
		const { listStatus, isNews } = this.state;
		return (
			<div className="wrapper center padding-40">
				<FormPostStatus addStatus={this.addStatus} newStatus={this.newStatus} />
				<Status listStatus={listStatus} isNews={isNews} />
			</div>
		);
	}
}

export default App;
