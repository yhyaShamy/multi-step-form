export function formatPrice(
  price: number,
  duration: "yearly" | "monthly"
): string {
  return `$${price}/${duration == "monthly" ? "mo" : "yr"}`;
}
