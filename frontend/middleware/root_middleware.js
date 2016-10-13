import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PostsMiddleware from './posts_middleware';
import UserMiddleware from './user_middleware';
import CommentsMiddleware from './comments_middleware';
import LikesMiddleware from './likes_middleware';
import FollowMiddleware from './follow_middleware';
import SearchMiddleware from './search_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  UserMiddleware,
  PostsMiddleware,
  CommentsMiddleware,
  LikesMiddleware,
  FollowMiddleware,
  SearchMiddleware
);

export default RootMiddleware;
