import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Icon } from "@rneui/themed";
import LatestNews from "../screens/LatestNews";

const Stack = createNativeStackNavigator();

const NewsNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="latest-news"
        component={LatestNews}
        options={{
          headerLeft: () => <Button type="clear">Sections</Button>,
          headerRight: ({ tintColor }) => (
            <Button type="clear">
              <Icon name="search" color={tintColor} type="feather" />
            </Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default NewsNavigator;
