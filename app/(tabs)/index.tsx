import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center "
    >
      <Text className="text-5xl text-light-200 font-bold">Here we go</Text>
      <Link href="/onboarding" >Go to Onboarding</Link>
      <Link href="/movie/avengers" >Avenegr movie</Link>
    </View>
  );
}
