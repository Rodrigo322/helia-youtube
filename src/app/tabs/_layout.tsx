import { Tabs } from "expo-router";
import { House, MagnifyingGlass, Notebook, UserSquare } from "phosphor-react-native";
import { Text, View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#181a20",
          height: 80,
          paddingTop: 20,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#1ab65c",
        tabBarInactiveTintColor: "#757575",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <House size={32} color={color} weight="fill" />
              <Text style={{ color: color, fontSize: 10 }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <MagnifyingGlass size={32} color={color} weight="fill" />
              <Text style={{ color: color, fontSize: 10 }}>Buscar</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Notebook size={32} color={color} weight="fill" />
              <Text style={{ color: color, fontSize: 10 }}>Reservas</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <UserSquare size={32} color={color} weight="fill" />
              <Text style={{ color: color, fontSize: 10 }}>Perfil</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
