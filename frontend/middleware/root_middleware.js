import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PostsMiddleware from './posts_middleware';
import UserMiddleware from './user_middleware';
import CommentsMiddleware from './comments_middleware';
import LikesMiddleware from './likes_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  UserMiddleware,
  PostsMiddleware,
  CommentsMiddleware,
  LikesMiddleware
);

export default RootMiddleware;
