import React, { Component } from 'react';
import axios from 'axios';

import FormPostStatus from './components/FormPostStatus';
import Status from './components/Status';
import _ from 'lodash';

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

			listComments: [
				{
					statusAuthor: '',
					listComment: [
						{
							commnetAuthor: '',
							commentContent: '',
						},
					],
				}
			],
			numberList: 0
		};
	}

	updateListComment = (statusAuthor) => {
		const { listStatus, listComments } = this.state;
		let { numberList } = this.state
		numberList++;
		let item = {
			statusAuthor: statusAuthor,
		}
		item['listComment' + numberList] = [];
		listComments.push(item)
		this.setState({
			listComments: listComments,
			numberList: numberList
		})

		var stringifyObj = JSON.stringify(listComments);
		var obj = JSON.parse(stringifyObj);

		// call api to save to database
		// fetch('/status', {
		// 	method: 'POST',
		// 	body: JSON.stringify(obj),
		// 	headers: { "Content-Type": "application/json" }
		// })
		// 	.then(function (response) {
		// 		console.log(response)
		// 		return response.json()
		// 	}).then(function (body) {
		// 		console.log(body);
		// 	});
		console.log(obj)
		axios.post(`/status`, obj)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
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

	addComment = (statusAuthor, comment) => {
		const { listComments } = this.state;
		let index = _.findIndex(listComments, (e) => {
			return e.statusAuthor === statusAuthor;
		})
		console.log(index);
		if (index !== -1) {
			console.log(listComments[index])
			listComments[index]['listComment' + index] = [...listComments[index]['listComment' + index],
				comment];
			this.setState({
				listComments: listComments
			})
			console.log(listComments)
		}
	};

	render() {
		const { listStatus, isNews, listComments } = this.state;
		return (
			<div className="wrapper center padding-40">
				<FormPostStatus
					addStatus={this.addStatus}
					newStatus={this.newStatus}
					updateListComment={this.updateListComment}
				/>
				<Status
					listStatus={listStatus}
					listComments={listComments}
					isNews={isNews}
					addComment={this.addComment}
				/>
			</div>
		);
	}
}

export default App;
