
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Categories from "../components/categories";
import FoodItems from "../components/recipes";

//Moved all hardcoded data to it's own file
import { AllCategoryData, AllFoodData } from "../data/HomeScreenData";
import Recipe from "../components/recipes";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Chicken");

  // Hardcoded foods
  const { allFood, setAllFood } = AllFoodData();

  // Hardcoded categories for news
  const { categories, setCategories } = AllCategoryData();

  const handleChangeCategory = (category) => {
    setActiveCategory(category);
  };

  // Filter foods by active category during rendering
  const filteredfoods = allFood.filter(
    (food) => food.category === activeCategory
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        testID="scrollContainer"
      >
        <View style={styles.headerContainer} testID="headerContainer">
        <Image
            source={{uri:'https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png'}}
            style={styles.avatar}
          />
          <Text style={styles.greetingText}>Hello, User!</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Make your own food,</Text>
          <Text style={styles.subtitle}>
            stay at <Text style={styles.highlight}>home</Text>
          </Text>
        </View>

        <View testID="categoryList">
          {/* Rendered categories */}
          <Categories activeCategory={activeCategory} categories={categories} handleChangeCategory={handleChangeCategory}></Categories>
        </View>

        <View testID="foodList">
          {/* Rendered recipes with filteredFoods */}
          <Recipe categories={categories} foods={filteredfoods}></Recipe>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // white
  },
  scrollContainer: {
    paddingBottom: 50,
    paddingTop: hp(14), // pt-14 equivalent
  },
  headerContainer: {
    marginHorizontal: wp(4), // mx-4 equivalent
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2),
    marginTop: hp(-8.5),
  },
  avatar: {
    height: hp(5),
    width: hp(5.5),
  },
  greetingText: {
    fontSize: hp(1.7),
    color: "#52525B", // neutral-600
    fontWeight: "600", // font-semibold
    backgroundColor: "#F3F4F6", // gray-100
    paddingHorizontal: wp(2), // px-2
    paddingVertical: hp(0.5), // py-1
    borderRadius: 9999, // full rounded
    textAlign: "center",
  },
  titleContainer: {
    marginHorizontal: wp(4), // mx-4
    marginBottom: hp(2), // mb-2
  },
  title: {
    fontSize: hp(3.8),
    fontWeight: "600", // font-semibold
    color: "#52525B", // neutral-600
  },
  subtitle: {
    fontSize: hp(3.8),
    fontWeight: "600", // font-semibold
    color: "#52525B", // neutral-600
  },
  highlight: {
    color: "#F59E0B", // amber-400
  },
});
