import App from "@/App.jsx";
import Index from "@/views/Index.jsx";
import Map_MRT from "@/views/Map_MRT.jsx";
import Info_MRT from "@/views/Info_MRT.jsx";
import Info_YouBike from "@/views/Info_YouBike.jsx";

export const routers = {
  path: "/",
  element: <App />,
  children: [
    {
      index: true,
      element: <Index />,
    },
    {
      path: "/Map_MRT",
      element: <Map_MRT />,
    },
    {
      path: "/Info_MRT",
      element: <Info_MRT />,
    },
    {
      path: "/Info_YouBike",
      element: <Info_YouBike />,
    },
  ],
};
