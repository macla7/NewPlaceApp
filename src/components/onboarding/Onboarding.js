import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Text, Button, Card } from "react-native-paper";

function Onboarding({ navigation }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      "https://pfx-interview.s3.ap-southeast-2.amazonaws.com/living-style.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("get images");
        console.log(data);
        setImages(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const imageHeight = 400 / 3;

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, margin: 2, aspectRatio: 1 }}>
      <Card>
        <Card.Cover
          source={{ uri: item.image }}
          style={{ height: imageHeight, resizeMode: "cover" }}
        />
      </Card>
    </View>
  );

  return (
    <View>
      <View
        style={{
          paddingTop: 60,
          paddingBottom: 100,
          maxWidth: 500,
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={{
            height: 400,
          }}
        />
        <View
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text variant="headlineLarge">New Place, New Home!</Text>
          <Text variant="titleSmall">
            Are you ready to uproot and start over in a new area? Placoo will
            help you on your journey!
          </Text>
        </View>

        <Button
          style={{ marginTop: 30 }}
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Log in
        </Button>

        <Button
          style={{ marginTop: 30 }}
          mode="outlined"
          onPress={() => {
            alert("Only a login screen at this point");
          }}
        >
          Sign up
        </Button>
      </View>
    </View>
  );
}

export default Onboarding;
