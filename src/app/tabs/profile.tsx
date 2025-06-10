import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Switch, ScrollView, StyleSheet } from "react-native";
import {
  PencilSimple,
  CreditCard,
  Bell,
  ShieldCheck,
  Info,
  Eye,
  SignOut,
  DotsThreeCircle,
  ChatsTeardrop,
} from "phosphor-react-native";
import ProfileOption from "../components/ProfileOption";

export default function Profile() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.headerProfile}>
        <View style={styles.headerProfileIcon}>
          <ChatsTeardrop size={30} color="#1ab65c" weight="duotone" />
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>Profile</Text>
        </View>

        <TouchableOpacity onPress={() => {}}>
          <DotsThreeCircle size={24} color="#fff" weight="bold" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <View>
          <Image source={{ uri: "https://github.com/Rodrigo322.png" }} style={styles.avatar} />
          <TouchableOpacity style={styles.editIcon}>
            <PencilSimple size={16} color="white" weight="bold" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Rodrigo Lucas</Text>
        <Text style={styles.email}>rodrigo@gmail.com</Text>
      </View>

      <ScrollView contentContainerStyle={styles.optionsContainer}>
        <ProfileOption
          icon={<PencilSimple size={20} color="#fff" />}
          label="Edit Profile"
          onPress={() => {}}
        />
        <ProfileOption
          icon={<CreditCard size={20} color="#fff" />}
          label="Payment"
          onPress={() => {}}
        />
        <ProfileOption
          icon={<Bell size={20} color="#fff" />}
          label="Notifications"
          onPress={() => {}}
        />
        <ProfileOption
          icon={<ShieldCheck size={20} color="#fff" />}
          label="Security"
          onPress={() => {}}
        />
        <ProfileOption icon={<Info size={20} color="#fff" />} label="Help" onPress={() => {}} />

        <View style={styles.optionRow}>
          <View style={styles.optionLeft}>
            <Eye size={20} color="#fff" />
            <Text style={styles.optionLabel}>Dark Theme</Text>
          </View>
          <Switch
            value={darkTheme}
            onValueChange={() => setDarkTheme(!darkTheme)}
            trackColor={{ false: "#767577", true: "#34D399" }}
            thumbColor="#fff"
          />
        </View>

        <TouchableOpacity style={styles.logoutRow} onPress={() => {}}>
          <SignOut size={20} color="red" />
          <Text style={styles.logoutLabel}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0C0C",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  headerProfile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  headerProfileIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#34D399",
    padding: 6,
    borderRadius: 12,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
  },
  email: {
    color: "#A1A1AA",
    fontSize: 14,
  },
  optionsContainer: {
    paddingBottom: 80,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#2D2D2D",
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 12,
  },
  logoutRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  logoutLabel: {
    color: "red",
    fontSize: 16,
    marginLeft: 12,
  },
});
