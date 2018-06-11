const icaRoutes = model => {
  let parts = ["StartICA", "AISS", "Mechanism", "Treatment", "Summary"];
  if (model.CA3 === "No" && model.PP1 === "5") {
    parts = ["StartICA", "AISS", "Mechanism", "Treatment", "Summary"];
  } else if (
    model.CA3 === "Yes" &&
    model.initialCA4B === "No" &&
    model.PP1 == "5"
  ) {
    parts = [
      "StartICA",
      "Charleston",
      "AISS",
      "Mechanism",
      "Treatment",
      "Summary"
    ];
  } else if (
    model.CA3 === "Yes" &&
    model.initialCA4B === "Yes" &&
    model.PP1 === "5"
  ) {
    parts = [
      "StartICA",
      "Charleston",
      "Glasgow",
      "AISS",
      "Mechanism",
      "Treatment",
      "Summary"
    ];
  } else if (
    model.CA3 === "Yes" &&
    model.initialCA4B === "No" &&
    model.PP1 !== "5"
  ) {
    parts = ["StartICA", "Charleston", "Treatment", "Summary"];
  } else if (
    model.CA3 === "Yes" &&
    model.initialCA4B === "Yes" &&
    model.PP1 !== "5"
  ) {
    parts = ["StartICA", "Charleston", "Glasgow", "Treatment", "Summary"];
  } else {
    parts = ["StartICA", "Treatment", "Summary"];
  }
  return parts;
};

export default icaRoutes;
