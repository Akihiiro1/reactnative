import { useState } from "react";
import { Text, Button, ScrollView, Modal, Alert, Pressable, View, StyleSheet, TextInput } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import SearchBar from "./components/SearchBar";

const Index = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<"order" | "simple" | null>(null);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleCloseModal = () => {
    setModalVisible(false);
    setModalType(null);
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
              onPress={() => {
                setModalType("order");
                setModalVisible(true);
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Show Modal"
              color="#2196f3"
              onPress={() => {
                setModalType("simple");
                setModalVisible(true);
              }}
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
          {modalType === "order" ? (
            <View style={styles.orderModalContent}>
              <Text style={styles.orderModalTitle}>Welcome to Orders Screen</Text>
              <Text style={styles.orderModalSubtitle}>The choice is yours.</Text>
              <View style={styles.orderList}>
                <Pressable style={styles.orderItem}>
                  <Text style={styles.orderItemText}>Black Pepper Burger</Text>
                </Pressable>
                <Pressable style={styles.orderItem}>
                  <Text style={styles.orderItemText}>ChimiChuri Burger</Text>
                </Pressable>
                <Pressable style={styles.orderItem}>
                  <Text style={styles.orderItemText}>BaconCheese Burger</Text>
                </Pressable>
              </View>
              <Pressable style={styles.placeOrderButton}>
                <Text style={styles.placeOrderButtonText}>Place Order</Text>
              </Pressable>
            </View>
          ) : (
            <View style={styles.simpleModalContent}>
              <Image
                source={require("../assets/images/Akihiro.jpg")} // Make sure this file exists!
                style={styles.modalImage}
              />
              <Text style={styles.simpleModalTitle}>This is a Modal!</Text>
              <Text style={styles.simpleModalSubtitle}>Click anywhere to close.</Text>
              <TextInput
                style={styles.simpleModalInput}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Type here..."
              />
            </View>
          )}
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
    backgroundColor: "#fff",
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
  simpleModalContent: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 12,
    alignItems: "center",
    minWidth: 280,
    maxWidth: 350,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  orderModalContent: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 12,
    alignItems: "center",
    minWidth: 280,
    maxWidth: 350,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  modalImage: {
    width: 70,
    height: 70,
    marginBottom: 8,
  },
  simpleModalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#222",
    textAlign: "center",
  },
  simpleModalSubtitle: {
    fontSize: 14,
    color: "#444",
    marginBottom: 8,
    textAlign: "center",
  },
  simpleModalInput: {
    width: "100%",
    height: 40,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    marginBottom: 8,
    backgroundColor: "#fafafa",
  },
  orderModalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
    textAlign: "center",
  },
  orderModalSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
    textAlign: "center",
  },
  orderList: {
    width: "100%",
    marginBottom: 16,
  },
  orderItem: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderItemText: {
    fontSize: 16,
    color: "#333",
  },
  placeOrderButton: {
    backgroundColor: "#ff9800",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  placeOrderButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Index;