import React, { Component } from 'react';
import axios from 'axios';

class FormPostStatus extends Component {

    onHandleSubmit = (ev) => {
        ev.preventDefault();
        const { addStatus, newStatus, updateListComment } = this.props;

        const author = this.refs.author.value;
        const title = this.refs.title.value;
        const content = this.refs.commnentContent.value;

        const status = {
            author: author,
            title: title,
            content: content,
        }
        addStatus(status);
        newStatus();
        updateListComment(this.refs.author.value);

        // call api to save to database
        // fetch("/status", {
        //     method: "POST",
        //     body: JSON.stringify(status)
        // })
        //     .then((res) => {
        //         if (res.ok) {
        //             return res.json();
        //         } else {
        //             throw new Error('Something went wrong with your fetch');
        //         }
        //     }).then((json) => {
        //         console.log(json);
        //     })

        // Set default is empty for form
        this.refs.author.value = '';
        this.refs.title.value = '';
        this.refs.commnentContent.value = ''


    }

    render() {
        return (
            <div className="white shadow padding-10 margin-bottom">
                <form className="form xl relative" onSubmit={this.onHandleSubmit}>
                    <div className="col-1 col-persist -margin ava">
                        <img className="pull-left width-100 round" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245018/profile/profile-80.jpg" alt="" />
                    </div>
                    <div className="col-11 col-persist gutter-h-10 padding-top-5 -margin">
                        <input type="text" placeholder="Name" ref="author" />
                    </div>
                    <p className="formStatus--name" id="name" >
                        <input type="text" placeholder="Title" ref="title" />
                    </p>

                    <div className="col-10 col-persist padding-top-5 -margin">
                        <textarea placeholder="What's new?" ref="commnentContent"></textarea>
                    </div>
                    <div className="col-2 col-persist">
                        <button type="submit" className="btn ml--15">POST</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormPostStatus;
