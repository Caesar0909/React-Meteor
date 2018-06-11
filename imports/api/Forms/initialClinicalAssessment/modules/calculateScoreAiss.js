export default function calculate(model) {
  if (!model.aiss) return false;
  let sum = 0;
  let points = [];
  Object.keys(model.aiss).map(
    key => (key !== "score" ? points.push(model.aiss[key]) : null)
  );
  points = points.filter(element => typeof element === "number");
  points.sort((a, b) => b - a);
  points = points.slice(0, 3);
  points.some(value => {
    if (value === 6) {
      sum = 75;
      return true;
    }
    sum += typeof value === "number" ? value * value : 0;
  });
  return sum;
}
