# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Post Cycles

### Post API Request Actions

* `fetchAllPosts`
  0. invoked from `PostsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/posts` is called.
  0. `receiveAllPosts` is set as the success callback.

* `createPost`
  0. invoked from new note button `onClick`
  0. `POST /api/posts` is called.
  0. `receiveSinglePost` is set as the success callback.

* `fetchSinglePost`
  0. invoked from `PostDetail` `didMount`/`willReceiveProps`
  0. `GET /api/posts/:id` is called.
  0. `receiveSinglePost` is set as the success callback.

* `destroyPost`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/posts/:id` is called.
  0. `removePost` is set as the success callback.

### Posts API Response Actions

  * `receiveAllPosts`
    0. invoked from an API callback.
    0. The `Post` reducer updates `posts` in the application's state.

  * `receiveSinglePost`
    0. invoked from an API callback.
    0. The `Post` reducer updates `posts[id]` in the application's state.

  * `removePost`
    0. invoked from an API callback.
    0. The `Post` reducer removes `posts[id]` from the application's state.

## Comment Cycles

### Comment API Request Actions

* `fetchAllComments`
  0. invoked from `CommentsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/comments` is called.
  0. `receiveAllComments` is set as the success callback.

* `createComment`
  0. invoked from form to create new comment when post button onClick.
  0. `POST /api/comments` is called.
  0. `receiveSingleComment` is set as the success callback.

* `createComment`
  0. invoked from form to create new comment when post button onClick
  0. `POST /api/comments` is called.
  0. `receiveSingleComment` is set as the success callback.

### Comment API Response Actions

  * `receiveAllComments`
    0. invoked from API callback.
    0. The Comment reducer updates comments in the application's state.

  * `receiveSingleComment`
    0. invoked from an API callback.
    0. The Comment reducer updates comments[id] in the application's state.

  * `removeComment`
    0. invoked from an API callback.
    0. The comment reducer removes comments[id] from the application's state.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `UserSearchBar` `onChange` when there is text
  0. `GET /api/users` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

* `removeSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when empty
  0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.
