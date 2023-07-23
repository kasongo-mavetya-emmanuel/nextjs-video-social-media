const wrapPromise = (promise: Promise<any>) => {
  let status = "pending";
  let response: any;

  let suspender = promise
    .then((result: any) => {
      status = "success";
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
