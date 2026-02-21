import { useState } from "react";
import { Text, Button, ScrollView, Modal, Alert, Pressable, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import SearchBar from "./components/SearchBar";

const Index = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handleCloseModal = () => {
    setModalVisible(false);
    Alert.alert("Modal has been closed.");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.gradientBg}>
        <View style={styles.card}>
          <Image
            source={require("../assets/images/Akihiro.jpg")}
            style={styles.logo}
          />
          <Text style={styles.title}>Welcome to Aki's Website</Text>
          <SearchBar />
          <View style={styles.buttonContainer}>
            <Button
              title="Orders"
              color="#ff9800"
              onPress={() => router.push("./orders")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Show Modal"
              color="#2196f3"
              onPress={() => setModalVisible(true)}
            />
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <Pressable style={styles.modalOverlay} onPress={handleCloseModal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>This is a Modal!</Text>
            <Text style={styles.modalText}>Click anywhere to close.</Text>
          </View>
        </Pressable>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    padding: 24,
  },
  gradientBg: {
    width: "100%",
    maxWidth: 420,
    borderRadius: 20,
    padding: 4,
    backgroundColor: "linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)",
    borderWidth: 3,
    borderColor: "#fcb69f",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 32,
    alignItems: "center",
    shadowColor: "#ff9800",
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 8,
    width: "100%",
    maxWidth: 400,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#2196f3",
    backgroundColor: "#e3f2fd",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#ff9800",
    textAlign: "center",
    textShadowColor: "#fff3e0",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonContainer: {
    width: "100%",
    marginVertical: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(33,150,243,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fffde7",
    padding: 28,
    borderRadius: 18,
    alignItems: "center",
    minWidth: 250,
    borderWidth: 2,
    borderColor: "#ff9800",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#2196f3",
  },
  modalText: {
    fontSize: 16,
    color: "#ff9800",
  },
});

export default Index;

