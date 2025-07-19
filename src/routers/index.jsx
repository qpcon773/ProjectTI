import App from "@/App.jsx";
import Index from "@/views/Index.jsx";
import Page from "@/views/Page.jsx";
import Map_MRT from "@/views/Map_MRT.jsx";
import YouBike_Info from "@/views/YouBike_Info.jsx";

export const routers = {
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
    {
      path: "/Map_MRT",
      element: <Map_MRT />,
    },
    {
      path: "/YouBike_Info",
      element: <YouBike_Info />,
    },
  ],
};
