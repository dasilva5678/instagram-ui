import { FlatList, StyleSheet, View, Image, Text } from "react-native";

import Logo from "../../assets/logo.svg";
import Stroke from "../../assets/stroke.svg";
import Message from "../../assets/message.svg";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";
import Points from "../../assets/points.svg";

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: foto2,
  },

  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: foto3,
  },

  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: foto2,
  },

  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: foto3,
  },

  {
    id: Math.random().toString(36).substring(2, 27),
    photoUrl: foto4,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <View>
          <Stroke />
        </View>
        <Message />
      </View>
      <View style={styles.stories}>
        <FlatList
          horizontal={true}
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <View style={styles.storiesCard} key={item.item.id}>
              <Image
                source={item.item.photoUrl}
                style={styles.storiesCardImage}
              />
            </View>
          )}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <View style={styles.contentHeaderleft}>
            <Image style={styles.contentHeaderImage} source={foto} />
            <Text style={styles.contentHeaderText}>Jessica Costa</Text>
          </View>
          <Points />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  header: {
    paddingHorizontal: 10,
    marginTop: 40,
    height: 56,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerOptions: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  stories: {
    height: 114,
    width: "100%",
    paddingLeft: 10,
    alignItems: "flex-end",
  },
  storiesCard: {
    borderWidth: 2,
    borderColor: "#F7955A",
    borderRadius: 50,
    marginRight: 10,
    width: 64,
    height: 64,
  },
  storiesCardImage: {
    width: 64,
    height: 64,
  },
  content: {
    width: "100%",
    marginBottom: 10,
  },
  contentHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 52,
  },
  contentHeaderImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  contentHeaderText: {
    color: "#fff",
    fontSize: 16,
  },
  contentHeaderleft: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});
