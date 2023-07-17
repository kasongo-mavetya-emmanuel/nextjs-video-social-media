export const getUserByEmail = (email: string) => {
  const query = `*[_type=='user' && email=='${email}']{
        _id,
        email,
        image,
        name,
        followers
    }`;

  return query;
};

export const getPosts = (topic: string) => {
  let query;
  if (topic) {
    query = `*[_type=='post' && topic=='${topic}']{
      caption,
      video,
      topic,
      userId,
      postedBy->{
        image,
        name,
        followers[]
      },
      likes[],
      comments[],
    }`;
  } else {
    query = `*[_type=='post']{
      caption,
      video,
      topic,
      userId,
      postedBy->{
        image,
        name,
        followers[]
      },
      likes[],
      comments[],
    }`;
  }
  return query;
};
