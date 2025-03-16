import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href={"/notifications"}>Feed screen in tabs</Link>
      {/* <Text style={styles.title}>Hello</Text> */}

      {/*       <TouchableOpacity onPress={() => alert("touched")}>
        <Text>Press me</Text>
      </TouchableOpacity>

      <Pressable onPress={() => alert("you touched")}>
        <Text>Press me - pressable</Text>
      </Pressable>

      <Image
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1704546974012-78acde0d4905?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
        }}
        style={{
          width: 200,
          height: 200,
          resizeMode: "cover",
        }}
      ></Image> */}
    </View>
  );
}
