import React from "react";
import { Avatar, ListItem } from "@rneui/themed";

const NewItem = ({ newItem }: { newItem: any }): JSX.Element => {
  return (
    <ListItem topDivider>
      <Avatar
        size={"xlarge"}
        source={{
          uri: newItem.imageUrl,
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "bold" }}>
          {newItem.title}
        </ListItem.Title>
        <ListItem.Subtitle>{newItem.summary}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default NewItem;
