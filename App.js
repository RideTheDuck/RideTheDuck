import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RenderComponents from "./components/renderComponents";
import { registerRootComponent } from "expo";

const navigator = createStackNavigator(
  {
    RenderComponents: RenderComponents
  },
  {
    initialRouteName: "RenderComponents",
    defaultNavigationOptions:
    {
      title: "Ride the Duck 🦆",
      headerTintColor: "#faab18",
        headerStyle: {
          backgroundColor: '#546747'
        },
    }
  }
);
export default createAppContainer(navigator);