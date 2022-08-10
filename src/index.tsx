import ReactDOM from 'react-dom/client';
import Routers from './routers';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle, theme } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import {store} from "./store"
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Toaster/>
        <Routers />
      </Provider>
    </ThemeProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
