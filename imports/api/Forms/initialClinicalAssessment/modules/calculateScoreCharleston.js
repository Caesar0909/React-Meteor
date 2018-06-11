const birthDateToAge = birthDay => {
  const today = new Date();
  const DOB = new Date(birthDay);
  let age = today.getFullYear() - DOB.getFullYear();
  const month = today.getMonth() - DOB.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < DOB.getDate())) {
    age -= 1;
  }
  return age;
};

const calcAgeFactor = DOB => {
  const patientAge = birthDateToAge(DOB);
  let adjustmentScore = 0;
  if (patientAge < 50) {
    return adjustmentScore;
  } else if (patientAge > 48 && patientAge < 60) {
    adjustmentScore = 1;
  } else if (patientAge > 59 && patientAge < 70) {
    adjustmentScore = 2;
  } else if (patientAge > 69 && patientAge < 80) {
    adjustmentScore = 3;
  } else if (patientAge > 79 && patientAge < 90) {
    adjustmentScore = 4;
  } else if (patientAge > 89 && patientAge < 100) {
    adjustmentScore = 5;
  } else if (patientAge > 99 && patientAge < 110) {
    adjustmentScore = 6;
  } else {
    adjustmentScore = 7;
  }
  return adjustmentScore;
};

export function calculateCharlestonScore({ model, patient }) {
  if (!model.charleston) return false;
  const sumOnePoint = [
    "myocardialInfarction",
    "congestiveHeartFailure",
    "peripheralDisease",
    "cvaWithMild",
    "dementia",
    "chronicPulmonary",
    "connectiveRissue",
    "pepticUlcer",
    "mildLiver",
    "diabetesWithoutEnd"
  ];
  const sumTwoPoints = [
    "hemiplegia",
    "moderateOrSevereRenal",
    "DiabetesWithEndOrganDamage",
    "tumorWithoutMetastasis",
    "leukemia",
    "lymphoma"
  ];
  const sumThreePoints = ["moderateSevereLiver"];
  const sumSixPoints = ["metastaticSolidTumor", "AIDS"];
  let charlestonScore = 0;

  Object.keys(model.charleston).map(key => {
    const value = model.charleston[key];
    if (value === true) {
      if (sumOnePoint.indexOf(key) > -1) {
        charlestonScore += 1;
      } else if (sumTwoPoints.indexOf(key) > -1) {
        charlestonScore += 2;
      } else if (sumThreePoints.indexOf(key) > -1) {
        charlestonScore += 3;
      } else if (sumSixPoints.indexOf(key) > -1) {
        charlestonScore += 6;
      }
    }
    return value;
  });
  const ageFactor = calcAgeFactor(patient.DOB);
  return charlestonScore + ageFactor;
}

export function calculateCharlestonProbability({ model }) {
  const probabilityScore =
    0.983 ** (Math.E ** model.charleston.score * 0.9) * 100;
  return probabilityScore.toFixed(1);
}
