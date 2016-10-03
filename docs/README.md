# Insdagram

[Heroku link][heroku] **Note:** Will be added at later date

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Insdagram is a clone of Instagram's website, which allows users to post pictures and view the posts of followed users in their feed.  Features of Insdagram include:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Images
- [ ] Likes
- [ ] Commenting on images
- [ ] Following & Photo Feed
- [ ] Bonus: Hashtags
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Posts Model, API, and components (2 days)

**Objective:** Posts can be created, read, edited and destroyed through
the API.

- [ ] `Posts` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for posts (`PostController`)
- [ ] JBuilder views for posts
- [ ] Test API in the console
- Post components and respective Redux loops
  - [ ] `PostsIndex`
  - [ ] `PostIndexItem`
  - [ ] `PostForm` to create posts
- [ ] Save posts to the database
- [ ] Style posts
- [ ] Seed posts

### Phase 3: Posts User Page (1 day)

**Objective:** Posts appear on a user's profile and belong to the user who posted a given post.

- [ ] Build API, React loop, and components for:
  - [ ] User-profile/posts CRUD
  - [ ] Adding posts requires user and user-id
  - [ ] A user's posts can be viewed on that user's feed
- [ ] Use CSS Styling on profiles

### Phase 4: Followers (2 days)

**Objective:** Users follow others to see their posts

- [ ] Create Followers model
- [ ] Build API, Redux loop, and components for following a user through search bar or a suggested followers popup
- [ ] Style elements
- [ ] Seed followers

### Phase 5: Comments (2 days)

**Objective:** Users can comment on one another's posts

- [ ] Create Comments model
- [ ] Build API, Redux loop, and components for commenting on a post
- [ ] Style new elements
- [ ] Seed comments

### Phase 6: Likes (1 days)

**Objective:** Users can like posts and the tally is displayed

- [ ] Create Likes model
- [ ] Build API, Redux loop, and components for liking post
- [ ] Style new elements
- [ ] Seed likes

### Phase 7: Infinite scroll for Posts Index

**objective:** Add infinite scroll to Posts Index

- [ ] Paginate Posts Index API to provide 10 posts at a time
- [ ] Append next 10 results when user scrolls to the bottom of the page
- [ ] Seed over 30 posts for accounts Demo user is following.

### Bonus Features (TBD)
