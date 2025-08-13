export const getOutfitAdvice = (condition, temp) => {
  if (condition.includes("rain")) return "Take an umbrella";
  if (temp < 10) return "Wear a warm jacket";
  if (temp > 25) return "Sunglasses suggested";
  return "Comfortable clothing works";
};