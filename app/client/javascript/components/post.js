import React from 'react';

//reduxやactionsをimportしていない。→ 必要なモノは親から全てprops経由で受け取っている
export default class Post extends React.Component {

  render() {
    if(!Array.isArray(this.props.posts)){
      var j =this.props;
    }
    console.log("0000000000:" + JSON.stringify(this.props))

    return (
      <div className="main posts-index">
        <div className="container">
          {this.props.posts.map((post) =>(
              <div className="posts-index-item" key={post.id}>
                <div className="post-left">
                  <img src={"/user_images/" + post.user.image_name}/>
                </div>
                <div className="post-right">
                  <div className="post-user-name">
                    <a href="#">{post.user.name}</a>
                  </div>
                  <a href={"#"}>{post.content}</a>
                </div>
              </div>
          )
          )}
        </div>
      </div>
    )
  }
}
