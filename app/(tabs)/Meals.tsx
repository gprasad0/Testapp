import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const mealsData = [
  { id: 1, name: "Breakfast: Oatmeal with Fruits", calories: 250 },
  { id: 2, name: "Lunch: Grilled Chicken Salad", calories: 400 },
  { id: 3, name: "Snack: Greek Yogurt with Honey", calories: 150 },
  { id: 4, name: "Dinner: Quinoa and Veggie Stir Fry", calories: 350 },
  { id: 5, name: "Dessert: Dark Chocolate", calories: 100 },
  { id: 6, name: "Breakfast: Oatmeal with Fruits", calories: 250 },
  { id: 7, name: "Lunch: Grilled Chicken Salad", calories: 400 },
  { id: 8, name: "Snack: Greek Yogurt with Honey", calories: 150 },
  { id: 9, name: "Dinner: Quinoa and Veggie Stir Fry", calories: 350 },
  { id: 10, name: "Dessert: Dark Chocolate", calories: 100 },
];

export default function Meals() {
  return (
    <ScrollView style={styles.container}>
      {mealsData.map((meal) => (
        <View key={meal.id} style={styles.mealItem}>
          <Text style={styles.mealName}>{meal.name}</Text>
          <Text style={styles.mealCalories}>{meal.calories} calories</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  mealItem: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },
  mealName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  mealCalories: {
    fontSize: 14,
    color: "#666",
  },
});
