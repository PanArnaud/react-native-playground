import { Icon, Image, Text, useTheme } from "@rneui/themed";
import React from "react";
import { View } from "react-native";

const BigNews = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <View>
      <View style={{ maxHeight: 275 }}>
        <Image
          source={{ uri: "https://images.wsj.net/im-567212" }}
          style={{ height: "100%" }}
        />
      </View>
      <View style={{ padding: theme.spacing.xl }}>
        <Text h3 style={{ fontWeight: "bold" }}>
          Bitcoin Falls Below $20,000 in Crypto Selloff
        </Text>
        <Text style={{ paddingVertical: theme.spacing.lg }}>
          The slide in value took it below a level widely monitored by crypto
          enthusiasts. Bitcoin has lost 72% from its record high in November
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: theme.spacing.md,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: theme.colors.grey3 }}>June 18</Text>
          <View style={{ flexDirection: "row" }}>
            <Icon
              style={{ paddingHorizontal: theme.spacing.lg }}
              name="headphones"
              type="feather"
            />
            <Icon
              style={{ paddingHorizontal: theme.spacing.lg }}
              name="tag"
              type="feather"
            />
            <Icon
              style={{ paddingHorizontal: theme.spacing.lg }}
              name="share"
              type="feather"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BigNews;
