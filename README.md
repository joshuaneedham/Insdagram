# Insdagram

Insdagram is a full-stack web application built with a Ruby on Rails backend and PostgreSQL database.  The front-end uses React.js to render components and Redux for its data flow and state container.

## Posts
Users may post photographs to share with their followers on Insdagram.  Clicking on the + symbol in the navigation bar renders the `PostForm` component.  This enables users to upload a photograph from their desktop, preview that photograph, upload it, and return to their feed.

This feature is unavailable on Instagram's desktop site, so I took freedom in its design.  In doing so, I utilized CSS3's Flex Box Layout to ensure that the preview was aligned in the center of the post page.  Furthermore, since many properties of file inputs cannot be modified in the same way as most other input types with CSS, I contained the file input within a `<div>`, gave it a styled sibling element, and set the file input opacity to 0 so that the input would appear styled.

The front-end is handled via a React-Redux so that a single-page-view is maintained when the user creates a post.  Data is passed via an AJAX request.

**Posts** are stored in the database with a `user_id`, `imageFile`, `caption`, and `timestamp`.  `user_id` provided a foreign key to reference the user who made the post, since a post `belongs_to` a user.  An `imageFile` is stored in the database with four components: `image_file_name`, `image_content_type`, `image_file_size`, and `image_updated_at`.  Using *Amazon Web Services*, I store the information for a given post.  This allows the application to scale, since data for high resolution photographs are being hosted by a third party.  A `caption` is the only optional value for a post, as a user does not need to post a picture with a caption.  A post's `timestamp` is necessary for rendering the post in the feed in the correct order.

## Likes
A user may like and subsequently unlike a post.  On the front-end, data for this is passed via React-Redux to the database.  The creation of a like utilizes member routes, since the information necessary for a like (`post_id` and `user_id`) can be accessed through the **Post Controller**.

The **Like** table is join table links a user with a post.  In addition to its own ID, the table consists of `post_id`, `user_id`, and a `timestamp`.  A like `belongs_to` a post and a user, since it has foreign keys pointing to both.  There are constraints so that a user may only like a given post once.

The likes are created and rendered via a heart below each post.  A user may click once to like a post and click again to remove that like.  In addition, a user may double click an unliked post's photograph in order to like it.  This is consistent with Instagram's user interface.  Upon double clicking an unliked photo, a like i created and a white heart appears momentarily on the photo.

## Comments
Users can comment on posts.  In doing so, an AJAX request is sent to the database, and on completion, the comment is rendered on the post.

## Follows
Users can follow other users, and by doing so, the other user's posts appear in that user's feed.  This utilized member routes, since the information necessary to create a follow (`follower_id` and `followed_id`) can be accessed through the **User controller**.

## Authentication

## Search
Users can search for others with a fuzzy search. Results update on each character change and clicking on a user renders that user's show page.
