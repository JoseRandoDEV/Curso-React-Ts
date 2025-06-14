import { BrowserRouter } from 'react-router-dom';
import { NotificationProvider } from './context/notification.context';
import { AppRouter } from './Router';
import { Suspense } from 'react';

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Suspense fallback={"Cargando...."} />
        <AppRouter />
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
