import React, { Component } from 'react';
import axios from 'axios';

class FormPostComment extends Component {
	onHandleSubmit = ev => {
		ev.preventDefault();
		const { addComment, statusAuthor } = this.props;

		// get data from input form
		const commnetAuthor = this.refs.commentAuthor.value;
		const commentContent = this.refs.commentContent.value;

		const comment = {
			commnetAuthor: commnetAuthor,
			commentContent: commentContent,
		};

		console.log('formpost');
		addComment(statusAuthor, comment);

		// call api to save to database
		// fetch("/status", {
		// 	method: "POST",
		// 	body: JSON.stringify(comment)
		// })
		// 	.then((res) => {
		// 		if (res.ok) {
		// 			return res.json();
		// 		} else {
		// 			throw new Error('Something went wrong with your fetch');
		// 		}
		// 	}).then((json) => {
		// 		console.log(json);
		// 	})

		// set default is empty for input form
		this.refs.commentAuthor.value = '';
		this.refs.commentContent.value = '';

	};

	render() {
		return (
			<div className="comments">
				{/* Your comment */}
				<div className="comment-wrap">
					<div className="photo">
						<div className="avatar image" />
					</div>
					<div className="comment-block">
						<form action="" onSubmit={this.onHandleSubmit}>
							<div className="col-10 col-persist padding-top-5 -margin">
								<input name="name" type="text" placeholder="Name" id="name" ref="commentAuthor" />
							</div>
							<div className="col-2 col-persist pt--size">
								<button type="submit" className="btn ml--15">
									POST
								</button>
							</div>
							<p className="formComment--name">
								<textarea cols="30" rows="3" placeholder="Add comment..." ref="commentContent" />
							</p>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default FormPostComment;
