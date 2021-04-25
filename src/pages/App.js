import { HomeFrutas } from "../components/HomeFrutas";
import '../assets/styles/App.scss';
import { Provider } from "react-redux";
import { store } from "../store/store";

export const App = () => {
  
  return (
    <Provider store={ store }>
      <HomeFrutas />
    </Provider>
  )
}
