export default function calculate(model) {
  if (!model.glasgow) return false;
  let sum = 0;
  let points = [];
  Object.keys(model.glasgow).map(
    key => (key !== "score" ? points.push(model.glasgow[key]) : null)
  );
  points = points.filter(element => typeof element === "number");
  points.sort((a, b) => b - a);
  points = points.slice(0, 3);
  points.some(value => {
    sum += typeof value === "number" ? value : 0;
  });
  return sum;
}
