import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "@/stores/store";
import { Provider } from "react-redux";
import { routers } from "@/routers/index.jsx";

// 把路由拉到外部檔案寫
const router = createBrowserRouter([routers]);

// 最外層要套用store才會生效
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
