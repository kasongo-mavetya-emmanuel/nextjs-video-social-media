export type Topic = {
  name: string;
  value: string;
};

export type WindowsStateIProp = {
  isDrawer: boolean;
  isMenu: boolean;
};

export interface Post {
  _id: string;
  caption: string;
  video: string;
  userId: string;
  postedBy: PostedBy;
  likes: Array<Like>;
  comments: Array<Comment>;
}

export interface PostedBy {
  _id;
  image: string;
  name: string;
  followers: Array;
}

export interface Comment {
  _key: string;
  postedBy: PostedBy;
  comment: string;
}

export interface Like {
  _key: string;
  name: string;
  _id: string;
  image: string;
}
