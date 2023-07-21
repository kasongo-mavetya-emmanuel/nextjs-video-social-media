export const getPosts = (topic: string) => {
  let query;

  if (topic) {
    query = `*[_type=='post' && topic=='${topic}']{
      _id,
      caption,
      video,
      topic,
      userId,
      postedBy->{
        _id,
        image,
        name,
        followers[]
      },
      likes[]->,
      comments[]{
        _key,
        postedBy->{
          _id,
          image,
          name,
          followers[]
        },
        comment
      },
    }`;
  } else {
    query = `*[_type=='post']{
      _id,
      caption,
      video,
      topic,
      userId,
      postedBy->{
        _id,
        image,
        name,
        followers[]
      },
      likes[]{
        _key,
        _type == 'reference' => @->,
      },
      comments[]{
        _key,
        postedBy->{
          _id,
          image,
          name,
          followers[]
        },
        comment
      },
    }`;
  }
  return query;
};
