import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { InitRedux } from 'src/Constants/index';
import './App.css';
import Home from './Pages/Screen/Home';
function App() {
  const x =InitRedux.arr;
  const [queryClient] = React.useState( () => new QueryClient() );

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">

        </header>
        <Home />
      </div>
      {/* <Provider store={store} >
        <div className="App">
          <header className="App-header">

          </header>
          <Home />
        </div>
      </Provider> */}
    </QueryClientProvider>

  );
}

export default App;
