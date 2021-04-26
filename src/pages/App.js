import '../assets/styles/App.scss';
import { Provider } from "react-redux";
import { store } from "../store/store";
import { AppRouter } from "../routes/AppRouter";

export const App = () => {
  
  return (
    <div className='container_supreme'>
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    </div>
  )
}
