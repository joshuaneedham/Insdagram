# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Posts

- `GET /api/posts`
  - Posts index/search
  - accepts pagination params (if I get there)
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`

### Comments

- `GET /api/comments`
- `POST /api/posts/:post_id/comments`
- `DELETE /api/posts/:post_id/comments/:id`

### Likes
- A post's likes are shown in the post show template
  -  `GET /api/likes`
  - `POST /api/posts/:post_id/likes` to add one like to a post's like tally
  - `DELETE /api/posts/:post_id/likes/:id` to remove a user's like from a post and that post's like tally

### Follows
- A user's show page provides a button to follow or unfollow a specific user
  - `POST /api/follows`
  - `DELETE /api/follows/:id`
