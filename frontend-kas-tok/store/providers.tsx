import store from ".";
import { Provider } from "react-redux";

export default function Providers({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
