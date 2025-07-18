import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from '@/stores/store'
import { Provider } from 'react-redux'

import App from '@/App.jsx'
import Index from '@/views/index.jsx'
import Page from '@/views/page.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/page",
        element: <Page />,
      },
    ],
  },
]);

// 最外層要套用store才會生效
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)