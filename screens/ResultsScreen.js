import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const ResultsScreen = () => {
  const route = useRoute();
  //   console.log(route.params);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ margin: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Your Results</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 15,
          }}
        >
          <Text>Share</Text>
          <AntDesign
            style={{ marginLeft: 4 }}
            name="sharealt"
            size={18}
            color="black"
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text>Questions Answerd</Text>
        <Text>(5/5)</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 5,
        }}
      >
        <Text>Total Points Aqquired</Text>
              <Text>{ route.params.points}</Text>
      </View>

      <Pressable
        style={{
          backgroundColor: "white",
          height: 250,
          borderRadius: 7,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "magenta",
            fontWeight: "500",
            fontSize: 15,
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Score Card
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={route.params.answers}
          renderItem={({ item, i }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 20,
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text>{item.question}</Text>
              {item.answer === true ? (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="checkcircle"
                  size={20}
                  color="green"
                />
              ) : (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="closecircle"
                  size={20}
                  color="red"
                />
              )}
            </View>
          )}
        />

        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            backgroundColor: "green",
            padding: 8,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 15,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Continue</Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({});
