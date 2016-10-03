```js
{
  currentUser: {
    id: 1,
    username: "username"
    full_name: "John Doe"
    session_token: "afbdsjfb32vsdnjs"
  },
  posts: {
    1: {
      user-id: 1,
      image_url: "http://image.com",
      caption: "cool picture",
      }
    2: {
      user-id: 1,
      image_url: "http://image.com",
      caption: "another cool picture",
      }
    }
  },
  follows: {
    1: {
      follower_id: 1,
      followed_id: 6,
    }
  }
  likes: {
    1: {
      user_id: 1,
      post_id: 6,
    }
  }
  comments: {
    1: {
      body: "100",
      user_id: 1,
      post_id: 1,
    }
  }
}
```
