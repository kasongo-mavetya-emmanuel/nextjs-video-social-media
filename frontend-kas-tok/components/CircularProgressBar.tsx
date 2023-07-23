import { Oval } from "react-loader-spinner";

export default function CircularProgressBar() {
  return (
    <Oval
      height={40}
      width={40}
      color="#444"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#444"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}
