import { useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Icon } from "@rneui/themed";
import LatestNews from "../screens/LatestNews";

const Stack = createNativeStackNavigator();

const NewsNavigator = (): JSX.Element => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="latest-news"
        component={LatestNews}
        options={{
          headerLeft: () => (
            <Button
              type="clear"
              titleStyle={{ color: colors.primary }}
              title="Sections"
            />
          ),
          headerRight: () => (
            <Button
              type="clear"
              icon={
                <Icon name="search" type="feather" color={colors.primary} />
              }
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default NewsNavigator;
