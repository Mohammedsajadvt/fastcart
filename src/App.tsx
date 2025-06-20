import { BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import AppRoutes from './routes'
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ToastProvider } from './components/ToastProvider';


function App() {

  return (
    <Provider store={store}>
      <ToastProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      </ToastProvider>
    </Provider>
  )
}

export default App
