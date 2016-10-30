# Insdagram

Insdagram is a full-stack web application built with a Ruby on Rails backend and PostgreSQL database.  The front-end uses React.js to render components and Redux for its data flow and state container.

![Insdagram](http://www.daviddipanfilo.com/img/insdagram.png "Insdagram")

## Posts
Users may post photographs to share with their followers on Insdagram.  Clicking on the + symbol in the navigation bar renders the `PostForm` component.  This enables users to upload a photograph from their desktop, preview that photograph, upload it, and return to their feed.

This feature is unavailable on Instagram's desktop site, so I took freedom in its design.  In doing so, I utilized CSS3's Flex Box Layout to ensure that the preview was aligned in the center of the post page.  Furthermore, since many properties of file inputs cannot be modified in the same way as most other input types with CSS, I contained the file input within a `<div>`, gave it a styled sibling element, and set the file input opacity to 0 so that the input would appear styled.

The front-end is handled via a React-Redux so that a single-page-view is maintained when the user creates a post.  Data is passed via an AJAX request.

**Posts** are stored in the database with a `user_id`, `imageFile`, `caption`, and `timestamp`.  `user_id` provided a foreign key to reference the user who made the post, since a post `belongs_to` a user.  An `imageFile` is stored in the database with four components: `image_file_name`, `image_content_type`, `image_file_size`, and `image_updated_at`.  Using *Amazon Web Services*, I store the information for a given post.  This allows the application to scale, since data for high resolution photographs are being hosted by a third party.  A `caption` is the only optional value for a post, as a user does not need to post a picture with a caption.  A post's `timestamp` is necessary for rendering the post in the feed in the correct order.

## Likes
A user may like and subsequently unlike a post.  On the front-end, data for this is passed via React-Redux to the database.  The creation of a like utilizes member routes, since the information necessary for a like (`post_id` and `user_id`) can be accessed through the **Post Controller**.

The **Like** table is a join table that links a user with a post.  In addition to its own ID, the table consists of `post_id`, `user_id`, and a `timestamp`.  A like `belongs_to` a post and a user, since it has foreign keys pointing to both.  There are constraints so that a user may only like a given post once.

The likes are created and rendered via a heart below each post.  A user may click once to like a post and click again to remove that like.  In addition, a user may double click an unliked post's photograph in order to like it.  This is consistent with Instagram's user interface.  Upon double clicking an unliked photo, a like is created and a white heart appears momentarily on the photo.

## Comments
Users can comment on posts.  This also utilizes React-Redux to pass data.  In doing so, an AJAX request is sent to the database, and upon completion, the comment is rendered on the post.  Upon success, the comment is rendered on a given
**Post Index Item** without re-rendering the entire page.

The **Comment** table consists of a `body`, `user_id`, `post_id`, and `timestamps`.  A comment `belongs_to` a user and a post, since it has foreign keys pointing to both.  A post must have a body in order to be entered into the database, as constraints exist to prevent empty entries.

## Follows
Users can follow other users, and by doing so, the other user's posts appear in that user's feed.  A user can also unfollow another user.  Following utilizes member routes, since the information necessary to create a follow (`follower_id` and `followed_id`) can be accessed through the **User controller**.

If a user follows another user, when that user accesses the user show page of the account they follow, the follow button appears green and upon a click, dispatches an action to delete the follow.  If a user does not follow another user, the follow button appears transparent/blue and upon click, an action is dispatched that creates a follow.  This button does not appear for a user on that user's own show page, as a user cannot follow itself.  A user's posts are rendered on the page in conjunction with all the users that account follows, as is the case with Instagram.

The **Follow** table is a join table that connects a user with another user.  This means that through associations are necessary to connect a user with its followers and the accounts that it follows.  The table is made up of a `follower_id`, `followed_id`, and a `timestamp`.  When a follow is created, these pieces of information are added to the database by accessing the User table's ID for both the follower and followed.

## Search
Users can search for others with a fuzzy search that finds usernames that contains the type segment, using the query `User.where("lower(username) like ?", "%#{username.downcase}%")`. Results update on each character change and clicking on a user renders that user's show page.  This search was built from scratch (without search libraries).  In order to remove the search results from the page when a user is clicked, I set a timeout function for 200 milliseconds so that after a user clicks a name, the search's display disappears.  Furthermore, an `onBlur` property is set so that if a user clicks away from the search, the search no longer displays.
