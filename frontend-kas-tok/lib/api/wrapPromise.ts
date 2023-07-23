const wrapPromise = (promise: Promise<any>) => {
  let status = "pending";
  let response: any;
  console.log("bbbbbbbbbbbbb");

  let suspender = promise
    .then((result: any) => {
      status = "success";
      console.log("fffffcvvvvvv");
      console.log(result);
      response = result;
    })
    .catch((err: any) => {
      status = "error";
      response = err;
    });

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "success":
        throw response;
      case "error":
        throw response;
      default:
        throw response;
    }
  };
  return { read };
};

export default wrapPromise;
