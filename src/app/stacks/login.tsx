import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ArrowLeft,
  EnvelopeSimple,
  FacebookLogo,
  GoogleLogo,
  LockKey,
} from "phosphor-react-native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();

  function handleTabsHome() {
    router.navigate("/tabs/home");
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <TouchableOpacity style={styles.header}>
        <ArrowLeft size={32} color="#f4f4f4" weight="regular" />
      </TouchableOpacity>

      <Text style={styles.welcome}>Faça login na sua conta</Text>

      <View style={styles.content}>
        <View style={styles.contentInput}>
          <EnvelopeSimple size={32} color="#757575" />
          <TextInput placeholder="Seu e-mail" style={styles.input} placeholderTextColor="#757575" />
        </View>

        <View style={styles.contentInput}>
          <LockKey size={32} color="#757575" />
          <TextInput placeholder="Sua senha" style={styles.input} placeholderTextColor="#757575" />
        </View>
      </View>

      <TouchableOpacity onPress={handleTabsHome} style={styles.buttonSignIn}>
        <Text style={styles.buttonSignInText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.ContainerSeparator}>
        <View style={styles.separator} />
        <Text style={styles.ContainerSeparatorText}>ou continuar com</Text>
        <View style={styles.separator} />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <GoogleLogo color="#1ab55c" size={32} weight="fill" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <FacebookLogo color="#1ab55c" size={32} weight="fill" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Não possui conta?</Text>
        <TouchableOpacity>
          <Text style={styles.footerButtonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    alignSelf: "flex-start",
    marginTop: 50,
  },
  welcome: {
    color: "#f4f4f4",
    marginTop: 50,
    fontSize: 24,
    fontWeight: "600",
  },
  content: {
    width: "100%",
    marginTop: 50,
    alignItems: "center",
    gap: 20,
  },
  contentInput: {
    width: "100%",
    height: 56,
    backgroundColor: "#1f222a",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
  },
  input: { flex: 1, color: "#757575" },
  buttonSignIn: {
    backgroundColor: "#1ab55c",
    width: "100%",
    height: 56,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  buttonSignInText: { color: "#f4f4f4", fontSize: 16, fontWeight: "800" },
  ContainerSeparator: {
    width: "100%",
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#757575",
    flex: 1,
  },
  ContainerSeparatorText: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "400",
  },

  footer: {
    marginTop: 50,
    flexDirection: "row",
    gap: 10,
  },
  footerButton: {
    width: 100,
    height: 60,
    backgroundColor: "#1f222a",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  footerText: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "400",
  },
  footerButtonText: {
    color: "#1ab55c",
    fontSize: 16,
    fontWeight: "400",
  },
});
