import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import {
  MapPin,
  Star,
  SwimmingPool,
  Barbell,
  Car,
  BellRinging,
  Bed,
  Bathtub,
  Ruler,
  WifiHigh,
  Unite,
} from "phosphor-react-native";

export default function Details() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerImageContainer}>
          <Image source={require("../../assets/hotel.png")} style={styles.headerImage} />
        </View>

        <View style={styles.sectionPadding}>
          <Text style={styles.hotelName}>Royale President Hotel</Text>
          <View style={styles.locationContainer}>
            <MapPin size={16} color="#A0A0A0" weight="fill" />
            <Text style={styles.hotelAddress}>79 Rue de la Madeleine, Paris, 75008</Text>
          </View>
        </View>

        {/* Gallery Photos */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Gallery Photos</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.galleryScrollView}
          >
            <Image source={require("../../assets/hotel.png")} style={styles.galleryImage} />
            <Image source={require("../../assets/hotel.png")} style={styles.galleryImage} />
            <Image source={require("../../assets/hotel.png")} style={styles.galleryImage} />
            {/* Add more gallery images */}
          </ScrollView>
        </View>

        {/* Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Details</Text>
          <View style={styles.detailsGrid}>
            <View style={styles.detailItem}>
              <Bed size={24} color="#50F077" />
              <Text style={styles.detailText}>4 Bedrooms</Text>
            </View>
            <View style={styles.detailItem}>
              <Bathtub size={24} color="#50F077" />
              <Text style={styles.detailText}>2 Bathrooms</Text>
            </View>
            <View style={styles.detailItem}>
              <Ruler size={24} color="#50F077" />
              <Text style={styles.detailText}>1000 sqft</Text>
            </View>
            {/* Add more detail items as per the image (e.g., 'Hotel' icon) */}
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
            <Text style={styles.readMore}>Read More</Text>
          </Text>
        </View>

        {/* Facilities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Facilities</Text>
          <View style={styles.facilitiesGrid}>
            <View style={styles.facilityItem}>
              <SwimmingPool size={32} color="#50F077" />
              <Text style={styles.facilityText}>Swimming Pool</Text>
            </View>
            <View style={styles.facilityItem}>
              <WifiHigh size={32} color="#50F077" />
              <Text style={styles.facilityText}>Free Wifi</Text>
            </View>
            <View style={styles.facilityItem}>
              <Car size={32} color="#50F077" />
              <Text style={styles.facilityText}>Parking Area</Text>
            </View>
            <View style={styles.facilityItem}>
              <Unite size={32} color="#50F077" />
              <Text style={styles.facilityText}>Restaurant</Text>
            </View>
            <View style={styles.facilityItem}>
              <Barbell size={32} color="#50F077" />
              <Text style={styles.facilityText}>Fitness Center</Text>
            </View>
            <View style={styles.facilityItem}>
              <BellRinging size={32} color="#50F077" />
              <Text style={styles.facilityText}>24/7 Open</Text>
            </View>
          </View>
        </View>

        {/* Reviews Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Review</Text>
            <View style={styles.starsContainer}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} color="#FFD700" weight="fill" />
              ))}
              <Text style={styles.reviewCount}>(4.0 out of 5)</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          {/* Individual Reviews */}
          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Image source={require("../../assets/hotel.png")} style={styles.reviewerAvatar} />
              <View>
                <Text style={styles.reviewerName}>Jenny Wilson</Text>
                <Text style={styles.reviewDate}>Sept 12, 2024</Text>
              </View>
              <TouchableOpacity style={styles.optionsButton}>
                <Text style={styles.optionsDot}>...</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.reviewText}>
              Very nice and comfortable hotel. thank you for accommodating us.
            </Text>
          </View>

          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Image source={require("../../assets/hotel.png")} style={styles.reviewerAvatar} />
              <View>
                <Text style={styles.reviewerName}>Guy Hawkins</Text>
                <Text style={styles.reviewDate}>Sept 10, 2024</Text>
              </View>
              <TouchableOpacity style={styles.optionsButton}>
                <Text style={styles.optionsDot}>...</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.reviewText}>
              Very beautiful hotel and family and i am very satisfied with the service.
            </Text>
          </View>

          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Image source={require("../../assets/hotel.png")} style={styles.reviewerAvatar} />
              <View>
                <Text style={styles.reviewerName}>Kristin Watson</Text>
                <Text style={styles.reviewDate}>Sept 08, 2024</Text>
              </View>
              <TouchableOpacity style={styles.optionsButton}>
                <Text style={styles.optionsDot}>...</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.reviewText}>
              The rooms are very comfortable and my natural views are amazing. can't wait to come
              back again
            </Text>
          </View>

          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreButtonText}>More</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* Fixed Bottom Bar */}
      <View style={styles.bottomBar}>
        <Text style={styles.priceText}>
          $29<Text style={styles.pricePerNight}> / night</Text>
        </Text>
        <TouchableOpacity style={styles.bookNowButton}>
          <Text style={styles.bookNowButtonText}>Book now!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0C0C", // Dark background color
  },
  scrollViewContent: {
    paddingBottom: 100, // To make space for the fixed bottom bar
  },
  sectionPadding: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10, // Spacing between sections
  },
  headerImageContainer: {
    width: "100%",
    height: 250, // Adjust height as needed
    backgroundColor: "#333", // Placeholder background
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  hotelName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E0E0E0",
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  hotelAddress: {
    fontSize: 14,
    color: "#A0A0A0",
    marginLeft: 5,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E0E0E0",
  },
  seeAllText: {
    color: "#50F077",
    fontSize: 14,
  },
  galleryScrollView: {
    flexDirection: "row",
  },
  galleryImage: {
    width: 120, // Adjust size as needed
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: "#444", // Placeholder
  },
  detailsGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: 10,
  },
  detailItem: {
    alignItems: "center",
    width: "30%", // Adjust for desired spacing
    marginVertical: 10,
  },
  detailText: {
    color: "#A0A0A0",
    fontSize: 12,
    marginTop: 5,
  },
  descriptionText: {
    color: "#A0A0A0",
    fontSize: 14,
    lineHeight: 20,
  },
  readMore: {
    color: "#50F077",
    fontWeight: "bold",
  },
  facilitiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  facilityItem: {
    width: "30%", // Adjust to fit 3 items per row
    alignItems: "center",
    marginVertical: 10,
  },
  facilityText: {
    color: "#A0A0A0",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  mapPlaceholder: {
    width: "100%",
    height: 200,
    backgroundColor: "#333", // Placeholder for map
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Ensure map image respects border radius
    position: "relative",
  },
  mapImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Or 'contain' depending on your map image
  },
  mapPinOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -16, // Half of icon size to center
    marginTop: -16, // Half of icon size to center
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewCount: {
    color: "#A0A0A0",
    fontSize: 12,
    marginLeft: 5,
  },
  reviewCard: {
    backgroundColor: "#282828",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  reviewerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#555", // Placeholder
  },
  reviewerName: {
    color: "#E0E0E0",
    fontWeight: "bold",
    fontSize: 16,
  },
  reviewDate: {
    color: "#A0A0A0",
    fontSize: 12,
  },
  optionsButton: {
    marginLeft: "auto", // Pushes to the right
    padding: 5,
  },
  optionsDot: {
    color: "#A0A0A0",
    fontSize: 18,
    fontWeight: "bold",
  },
  reviewText: {
    color: "#A0A0A0",
    fontSize: 14,
    lineHeight: 20,
  },
  moreButton: {
    backgroundColor: "#282828",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
  },
  moreButtonText: {
    color: "#50F077",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#282828", // Darker background for the bottom bar
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  priceText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#E0E0E0",
  },
  pricePerNight: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#A0A0A0",
  },
  bookNowButton: {
    backgroundColor: "#50F077", // Green button
    borderRadius: 25, // Pill shape
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  bookNowButtonText: {
    color: "#1C1C1C", // Dark text on green button
    fontWeight: "bold",
    fontSize: 16,
  },
});
