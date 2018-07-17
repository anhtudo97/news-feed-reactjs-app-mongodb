import React, { Component } from 'react';

class CommentContent extends Component {
	render() {
		const { listComment } = this.props;
		const comments = listComment.map((e, i) => {
			if (e.commnetAuthor !== '')
				return (
					<div className="comment-wrap" key={i}>
						<div className="photo">
							<div className="avatar image" />
							{/* {e.commnetAuthor} */}
						</div>
						<div className="comment-block">
							<p className="comment-text">{e.commentContent}</p>
							<div className="bottom-comment">
								<div className="comment-date">Aug 24, 2014 @ 2:35 PM</div>
								<ul className="comment-actions">
									<li className="complain">Complain</li>
									<li className="reply">Reply</li>
								</ul>
							</div>
						</div>
					</div>
				);
		});

		return <div>{comments}</div>;
	}
}

export default CommentContent;
