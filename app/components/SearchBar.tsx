import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    marginVertical: 10,
  },
  input: {
    height: 40,
    fontSize: 16,
  },
});

export default SearchBar;