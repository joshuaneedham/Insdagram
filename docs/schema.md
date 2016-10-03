# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
full_name       | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
timestamps      |           |

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
image-url   | string    | not null
caption     | text      |
user-id     | text      | not null
timestamps  |           |

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
post_id     | integer   | not null, foreign key (references posts), indexed
timestamps  |           |

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
post_id     | integer   | not null, foreign key (references posts), indexed
timestamps  |           |


## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
followed_id | integer   | not null, foreign key (references users), indexed
follower_id | integer   | not null, foreign key (references users), indexed
timestamps  |           |
