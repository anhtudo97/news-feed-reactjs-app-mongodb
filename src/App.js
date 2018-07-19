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
				},
			],
			numberList: 0,
		};
	}

	updateListComment = statusAuthor => {
		const { listComments } = this.state;
		let { numberList } = this.state;
		numberList++;
		let item = {
			statusAuthor: statusAuthor,
		};
		item['listComment' + numberList] = [];
		listComments.push(item);
		this.setState({
			listComments: listComments,
			numberList: numberList,
		});
	};

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
		let index = _.findIndex(listComments, e => {
			return e.statusAuthor === statusAuthor;
		});

		if (index !== -1) {
			console.log(listComments[index]);
			listComments[index]['listComment' + index] = [...listComments[index]['listComment' + index], comment];
			this.setState({
				listComments: listComments,
			});
			console.log(listComments);
		}
	};

	render() {
		const { listStatus, isNews, listComments } = this.state;
		return (
			<div className="wrapper center padding-40">
				<FormPostStatus
					addStatus={this.addStatus}
					newStatus={this.newStatus}
					listComments={listComments}
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
