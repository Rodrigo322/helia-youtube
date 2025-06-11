import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import {
  Bell,
  BookmarkSimple,
  SlidersHorizontal,
  MagnifyingGlass,
  ChatsTeardrop,
} from "phosphor-react-native";
import { useRouter } from "expo-router";

const filters = ["Recommended", "Popular", "Trending"];

const recommendedHotels = [
  {
    id: "1",
    name: "Emeralda De Hotel",
    city: "Paris, France",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Laluna Resort",
    city: "Istanbul, Turkey",
    price: "$32",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
  },
];

const recentHotels = [
  {
    id: "1",
    name: "President Hotel",
    city: "Paris, France",
    price: "$35",
    rating: 4.8,
    reviews: 4378,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    name: "Palms Casino",
    city: "Amsterdam, Netherlands",
    price: "$29",
    rating: 4.9,
    reviews: 5283,
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    name: "Palazzo Versace",
    city: "Rome, Italia",
    price: "$36",
    rating: 4.7,
    reviews: 3277,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    name: "Bulgari Resort",
    city: "Istanbul, Turkiye",
    price: "$27",
    rating: 4.8,
    reviews: 4981,
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    name: "Martinez Cannes",
    city: "London, United Kingdom",
    price: "$32",
    rating: 4.6,
    reviews: 3672,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  const navigate = useRouter();

  const handleHotelPress = () => {
    navigate.push("/stacks/details");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>
            <ChatsTeardrop size={30} color="#1ab65c" weight="duotone" /> Helia
          </Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconWrapper}>
              <Bell size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.greeting}>Olá, Rodrigo Lucas 👋</Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <MagnifyingGlass size={20} color="#A1A1AA" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#A1A1AA"
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <SlidersHorizontal size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          {filters.map((filter, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.filterTag, filter === "Recommended" && styles.activeFilter]}
            >
              <Text
                style={[styles.filterText, filter === "Recommended" && styles.activeFilterText]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Recommended Hotels */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.recommendScroll}
        >
          {recommendedHotels.map((hotel) => (
            <View key={hotel.id} style={styles.recommendCard}>
              <Image source={{ uri: hotel.image }} style={styles.recommendImage} />
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>★ {hotel.rating}</Text>
              </View>
              <Text style={styles.recommendName}>{hotel.name}</Text>
              <Text style={styles.recommendCity}>{hotel.city}</Text>
              <Text style={styles.recommendPrice}>
                {hotel.price} <Text style={styles.perNight}>/ per night</Text>
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Recently Booked */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recently Booked</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {recentHotels.map((hotel) => (
          <Pressable onPress={handleHotelPress} key={hotel.id} style={styles.recentCard}>
            <Image source={{ uri: hotel.image }} style={styles.recentImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.recentName}>{hotel.name}</Text>
              <Text style={styles.recentCity}>{hotel.city}</Text>
              <Text style={styles.ratingLine}>
                ★ {hotel.rating} <Text style={styles.reviewText}>({hotel.reviews} reviews)</Text>
              </Text>
            </View>
            <View style={styles.priceAndSave}>
              <Text style={styles.recentPrice}>{hotel.price}</Text>
              <Text style={styles.perNight}>/ night</Text>
              <BookmarkSimple size={20} color="#fff" style={{ marginTop: 8 }} />
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 12,
  },
  iconWrapper: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: "#1F1F1F",
  },
  greeting: {
    fontSize: 22,
    color: "#fff",
    marginTop: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  searchBar: {
    flex: 1,
    backgroundColor: "#1F2937",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    height: 48,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    color: "#fff",
  },
  filterButton: {
    marginLeft: 12,
    backgroundColor: "#34D399",
    padding: 12,
    borderRadius: 12,
  },
  filterScroll: {
    marginTop: 20,
    flexGrow: 0,
  },
  filterTag: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderColor: "#34D399",
    borderWidth: 1,
    marginRight: 12,
  },
  filterText: {
    color: "#34D399",
  },
  activeFilter: {
    backgroundColor: "#34D399",
  },
  activeFilterText: {
    color: "#0C0C0C",
    fontWeight: "bold",
  },
  recommendScroll: {
    marginTop: 24,
    flexGrow: 0,
  },
  recommendCard: {
    width: 220,
    marginRight: 16,
  },
  recommendImage: {
    width: "100%",
    height: 140,
    borderRadius: 16,
  },
  ratingBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#22C55E",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    color: "#fff",
    fontWeight: "bold",
  },
  recommendName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  recommendCity: {
    color: "#A1A1AA",
    fontSize: 14,
    marginVertical: 2,
  },
  recommendPrice: {
    color: "#fff",
    fontWeight: "bold",
  },
  perNight: {
    color: "#A1A1AA",
    fontSize: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 12,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#34D399",
  },
  recentCard: {
    flexDirection: "row",
    backgroundColor: "#1F2937",
    padding: 12,
    borderRadius: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  recentImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginRight: 12,
  },
  recentName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  recentCity: {
    color: "#A1A1AA",
    fontSize: 14,
  },
  ratingLine: {
    color: "#22C55E",
    fontSize: 13,
    marginTop: 2,
  },
  reviewText: {
    color: "#A1A1AA",
  },
  recentPrice: {
    color: "#22C55E",
    fontWeight: "bold",
    fontSize: 16,
  },
  priceAndSave: {
    alignItems: "flex-end",
  },
});
