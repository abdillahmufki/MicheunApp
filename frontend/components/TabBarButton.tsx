import { Button } from "react-native";

export default function TabBarButton() {
  return (
    <Button
      title="Learn More"
      onPress={() => {
        alert("Learn More");
      }}
    />
  );
}
