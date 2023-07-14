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
