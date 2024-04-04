import React from "react";
import { useState } from "react";
import { ScrollView, Text, View, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SearchBar } from "react-native-elements";



export default function SearchScreen() {
  const [search, setSearch] = React.useState("");
  const navigation = useNavigation();



  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
    });
  }, [navigation]);

  const updateSearch = (search) => {
    setSearch(search);
  }




  return (
    <SafeAreaView>
      <SearchBar
        platform="ios"
        placeholder="Search"
        onChangeText={updateSearch}
        value={search}
      />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  text: {
      fontSize: 32,
      fontWeight: 'bold',
  }
});


