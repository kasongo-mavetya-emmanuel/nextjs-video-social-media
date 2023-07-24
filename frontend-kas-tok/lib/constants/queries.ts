export const fetchUser = (id: string) => {
  const query = `*[_type=="user" && _id=="${id}"][0]{
    _id,
    name,
    image,
    followers[]
  }`;
  return query;
};

export const getUsers = () => {
  const query = `*[_type=="user"] | order(_id) [0...10]{
    _id,
    name, 
    image, 
    followers[]{
      _key,
      _type == 'reference' => @->,
    }
  }`;
  return query;
};

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
        followers[]{
          _key,
          _type == 'reference' => @->,
        },
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
        followers[]{
          _key,
          _type == 'reference' => @->,
        },
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

export const searchPosts = (search: string) => {
  const query = `*[_type=='post' && topic match '${search}*' || caption match '${search}*']{
      _id,
      caption,
      video,
      topic,
      userId,
      postedBy->{
        _id,
        image,
        name,
        followers[]{
          _key,
          _type == 'reference' => @->,
        },
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
  return query;
};
