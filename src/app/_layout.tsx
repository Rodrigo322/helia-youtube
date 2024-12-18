import { Tabs } from "expo-router";
import {
  BookBookmark,
  House,
  MagnifyingGlass,
  UserSquare,
} from "phosphor-react-native";
import { Text, View } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1f222a",
          borderTopColor: "#181a20",
          height: 90,
          paddingTop: 20,
          alignContent: "center",
          justifyContent: "space-around",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#1ab65c",
        tabBarInactiveTintColor: "#757575",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                width: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <House size={32} color={color} weight="thin" />
              <Text style={{ color: color, fontSize: 10 }}>Home</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                width: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MagnifyingGlass size={32} color={color} weight="thin" />
              <Text style={{ color: color, fontSize: 10 }}>Buscar</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="booking"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                width: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BookBookmark size={32} color={color} weight="thin" />
              <Text style={{ color: color, fontSize: 10 }}>Reservas</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                width: 50,
                // alignItems: "center",
                justifyContent: "center",
              }}
            >
              <UserSquare size={32} color={color} weight="thin" />
              <Text style={{ color: color, fontSize: 10, marginLeft: 5 }}>
                Perfil
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
