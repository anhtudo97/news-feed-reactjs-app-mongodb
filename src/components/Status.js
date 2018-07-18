import React, { Component } from 'react';
import CommentContent from './CommentContent';
import FormPostComment from './FormPostComment';
import _ from 'lodash';

class Status extends Component {

	render() {
		const { listStatus, isNews, listComments, addComment } = this.props;
		const statusAuthor = listStatus[listStatus.length - 1].author;
		console.log(statusAuthor)

		// const listStatusComment = listComments[index].listComment;
		// console.log(listStatusComment)

		const status = listStatus.map((e, i) => {

			if (e.author !== '') {
				let index = _.findIndex(listComments, (elm) => {
					return elm.statusAuthor == e.author;
				})
				console.log(index);
				const listStatusComment = [...listComments[index]['listComment' + index]];
				console.log(listStatusComment)
				return (
					<div className="item white shadow cf" key={i}>
						<div className="row padding margin-left">
							<div className="col-1 col-persist -margin">
								<img
									className="pull-left width-100 round"
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245018/profile/profile-80.jpg"
								/>
							</div>

							<div className="col-11 col-persist gutter-h-10 padding-top-15">
								<h5 className="text-15 text700 pull-left">{e.title}</h5>
								<a href="#" className="label red pull-left margin-left hover-tooltip">
									<span className="tooltip top text-capitalize">Shared Publicly</span>
									public
								</a>
								<a href="#" className="pull-right label fill-white text-gray">
									12h ago
								</a>
							</div>
							<div className="row ml--reveser__10">
								<p className="padding -padding-top">{e.content}</p>
								<img className="pull-left width-100" src="https://decorator.io/media/1.jpg" />
							</div>
						</div>

						{/* Tabs bar status */}
						<div className="row padding margin-left">
							<div className="pull-left">
								<a className="btn icon round text-red fill-silver">
									<i className="fa fa-thumbs-up" />
								</a>
								<a className="btn white hover-disable text-red text600">125</a>
							</div>
							<div className="pull-right">
								<a className="btn icon round text-gray hover-text-red">
									<i className="fa fa-comment" />
								</a>
								<a className="btn white hover-disable text-red text600">30</a>
							</div>
						</div>
						<div className="row padding ml--size">
							<FormPostComment addComment={addComment} statusAuthor={e.author} />
							<CommentContent
								listComment={listStatusComment}
							/>
						</div>
					</div>
				);
			}

		});
		return <div>{status}</div>;
	}
}

export default Status;
