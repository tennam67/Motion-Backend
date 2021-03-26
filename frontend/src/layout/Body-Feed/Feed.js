import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import postsFriends from "../../store/actions/postsFriends";
import createPost from "../../store/actions/createPost";
import Navbar from "../../components/navbar/index";
import Searchbar from "../../components/searchbar/index";
import {
  Main,
  Nav,
  SearchNav,
  Grid,
  Content,
  Status,
  Post,
  SocialMedia,
  FormStyle,
  PostButton,
} from "../feedStyle";
import { getPostsApi } from "../../api/apiPosts";
import { deletePost } from "../../api/apiPosts";

const Feed = () => {
  const [newPost, setNewPost] = useState("");
  const posts = useSelector((state) => state.posts.friends);
  const user = useSelector((state) => state.userData);
  console.log(user, "user");
  console.log(posts, "posts");
  const dispatch = useDispatch();
console.log(posts)
  useEffect(async () => {
    // debugger
    const res = await getPostsApi("posts/");
    dispatch(postsFriends(res));
  }, []);

  const handleChangePost = (e) => {
    const val = e.target.value;
    setNewPost(val);
  };

  // working. We pass de id on the icon (three dots)
  const handleDelete = (id) => {
    const asyncCall = async () => {
      await deletePost(id);
    };
    asyncCall();
  };
  const handleCreatePost = (e) => {
    e.preventDefault();
    // const formData = new FormData();         what we should do to upload image
    // // formData.append('file', this.state.image);
    // formData.append('comment', this.state.comment);
    dispatch(
      createPost({
        content: newPost,
        images: [],
        shared: "",
      })
    );
  };
  return (
    <Main>
      <Nav>
        <Navbar />
      </Nav>
      <SearchNav>
        <Searchbar />
      </SearchNav>
      <Grid>
        <Content>
          <Status>
            <img src="https://unsplash.it/200/201" alt="" />
            <FormStyle onSubmit={handleCreatePost}>
              <input
                onChange={handleChangePost}
                value={newPost}
                type="text"
                placeholder={`What’s on your mind ${user.first_name}?`}
              />
              <PostButton
                onClick={handleCreatePost}
                className="far fa-paper-plane"
              ></PostButton>
            </FormStyle>
          </Status>
        </Content>
        {posts.length
          ? posts.map((post) => {
              return (
                <Content key={post.id}>
                  <Post>
                    <div className="posts-details">
                      <div className="user-detials">
                        <img
                          src="https://source.unsplash.com/random/240x240"
                          alt=""
                        />
                        <div className="userpost-time">
                          <p>
                            {post.user.first_name && post.user.last_name
                              ? `${post.user.first_name} ${post.user.last_name}`
                              : post.user.username}
                          </p>
                          <p>Just now</p>
                        </div>
                      </div>
                      <div className="more-details">
                        <i
                          onClick={() => handleDelete(post.id)}
                          className="fas fa-ellipsis-v"
                        ></i>
                      </div>
                    </div>

                    <div className="status-text">
                      <p>{post.content}</p>
                    </div>
                    <div className="pictures">
                      <div>
                        {post.images.length ? (
                          post.images.map(({ image }, index) => (
                            <img
                              className="postImage"
                              src={image}
                              key={index}
                              alt="pics"
                            />
                          ))
                        ) : (
                          <>
                            <img
                              src="https://source.unsplash.com/random/240x240"
                              alt=""
                            />
                            <img
                              src="https://source.unsplash.com/user/erondu/240x240"
                              alt=""
                            />
                          </>
                        )}
                      </div>
                    </div>
                    <SocialMedia>
                      <div className="social-media-buttons">
                        <div className="like">
                          <i className="fas fa-heart"></i>
                          <p>{post.user.amount_of_likes}Like</p>
                        </div>
                        <div className="share">
                          <i className="fas fa-share"></i>
                          <p>Share</p>
                        </div>
                      </div>
                      <p> {post.user.amount_of_likes} likes</p>
                    </SocialMedia>
                  </Post>
                </Content>
              );
            })
          : "loading"}
      </Grid>
    </Main>
  );
};
export default connect(null, { postsFriends })(Feed);
