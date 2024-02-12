function Post(props){
    return (
        <div className="post">
            <img className="user-post-icon" src="" alt="user icon" />
            <p>Username</p>
            <h2>post Title</h2>
            <img className="post-img"  src="" alt="post img" />
            <p className="post-content">post content</p>
            <p>hash tags</p>
            <section className="postbuttons" >
                <button className="like" >like</button>
                <button className="comment" >comment</button>
                <button className="share" >share</button>
            </section>
        </div>
    );
}

export default Post;