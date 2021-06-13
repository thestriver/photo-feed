import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ContentType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO"
}



export declare class TimeLineFeed {
  readonly id: string;
  readonly description?: string;
  readonly postedAt?: string;
  readonly content?: Content;
  readonly user?: User;
  readonly comment?: (Comment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TimeLineFeed>);
  static copyOf(source: TimeLineFeed, mutator: (draft: MutableModel<TimeLineFeed>) => MutableModel<TimeLineFeed> | void): TimeLineFeed;
}

export declare class Content {
  readonly id: string;
  readonly source?: string;
  readonly type?: ContentType | keyof typeof ContentType;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Content>);
  static copyOf(source: Content, mutator: (draft: MutableModel<Content>) => MutableModel<Content> | void): Content;
}

export declare class User {
  readonly id: string;
  readonly username?: string;
  readonly profilePic?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Comment {
  readonly id: string;
  readonly body?: string;
  readonly timelinefeedID?: string;
  readonly user?: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}