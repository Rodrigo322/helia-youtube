import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import {
  Envelope,
  Lock,
  Eye,
  EyeSlash,
  FacebookLogo,
  GoogleLogo,
  AppleLogo,
  ArrowLeft,
} from "phosphor-react-native";

export default function SignIn() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useRouter();

  const handleToHome = () => {
    navigate.push("/tabs/home");
  };
  const handleSignUp = () => {
    // Handle sign-up logic here
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft color="#fff" size={24} />
        </TouchableOpacity>

        <Text style={styles.title}>Login to your</Text>
        <Text style={[styles.title, { fontWeight: "bold" }]}>Account</Text>

        <View style={styles.inputContainer}>
          <Envelope color="#9CA3AF" size={18} style={styles.icon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Lock color="#9CA3AF" size={18} style={styles.icon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={!showPassword}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconRight}>
            {showPassword ? (
              <Eye color="#9CA3AF" size={18} />
            ) : (
              <EyeSlash color="#9CA3AF" size={18} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.rememberRow}>
          <TouchableOpacity
            onPress={() => setRememberMe(!rememberMe)}
            style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
          />
          <Text style={styles.rememberText}>Remember me</Text>
        </View>

        <TouchableOpacity onPress={handleToHome} style={styles.signInButton}>
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot the password?</Text>
        </TouchableOpacity>

        <View style={styles.dividerRow}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton}>
            <FacebookLogo size={24} color="#1877F2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <GoogleLogo size={24} color="#EA4335" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <AppleLogo size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.signUpRow}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpLink}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#111827",
  },
  container: {
    padding: 20,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  backButton: {
    marginBottom: 30,
  },
  title: {
    color: "#ffffff",
    fontSize: 32,
    lineHeight: 38,
  },
  inputContainer: {
    backgroundColor: "#1F2937",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginTop: 20,
    height: 56,
  },
  input: {
    flex: 1,
    color: "#ffffff",
    fontSize: 16,
  },
  icon: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: "#4ADE80",
    borderWidth: 2,
    borderRadius: 4,
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "#4ADE80",
  },
  rememberText: {
    color: "#D1D5DB",
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: "#4ADE80",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 12,
  },
  signInText: {
    color: "#111827",
    fontWeight: "bold",
    fontSize: 16,
  },
  forgotText: {
    color: "#4ADE80",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 24,
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#374151",
  },
  dividerText: {
    color: "#9CA3AF",
    marginHorizontal: 12,
    fontSize: 13,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 24,
  },
  socialButton: {
    backgroundColor: "#1F2937",
    padding: 14,
    borderRadius: 12,
  },
  signUpRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signUpText: {
    color: "#9CA3AF",
    fontSize: 14,
  },
  signUpLink: {
    color: "#4ADE80",
    fontSize: 14,
    fontWeight: "bold",
  },
});
