import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 // ✅ Corrected import
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { Toaster } from 'sonner'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(store)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <App />
        <Toaster />
      
      </PersistGate>
    </Provider>
  </StrictMode>
)



// import React from 'react'
// import ReactDOM from 'react-dom/client'
// //import App from './App.jsx'
// import './index.css'
// //import { Toaster } from './components/ui/sonner.jsx'
// //import { Provider } from 'react-redux'
// //import store from './redux/store.js'




// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <Provider store={store}>
  
//         <App />
//         <Toaster />
  
//     </Provider> */}
//     <div>hello world</div>
//   </React.StrictMode>,
// )




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <div>Hello World</div>
//   </React.StrictMode>
// );
