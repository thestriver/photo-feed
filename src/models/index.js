// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ContentType = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO"
};

const { TimeLineFeed, Content, User, Comment } = initSchema(schema);

export {
  TimeLineFeed,
  Content,
  User,
  Comment,
  ContentType
};