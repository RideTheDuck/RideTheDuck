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
      title: "Ride the Duck 🦆"
    }
  }
);
export default createAppContainer(navigator);