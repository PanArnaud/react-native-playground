import { useTheme } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import BigNews from "../components/BigNews";
import NewItem from "../components/NewItem";
import axios from "axios";

const LatestNews = (): JSX.Element => {
  const [feed, setFeed] = useState<Array<any>>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.spaceflightnewsapi.net/v3/articles?_sort=publishedAt%3Adesc"
      )
      .then((results: any) => {
        setFeed(() => [...results.data]);
      })
      .catch(
        (e) => console.log(e.message)
        // TODO: manage errors
      );
  });

  return (
    <ScrollView>
      <BigNews />
      {feed.map((item) => (
        <NewItem key={item.id} newItem={item} />
      ))}
    </ScrollView>
  );
};

export default LatestNews;
