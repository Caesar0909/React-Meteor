const pathwaySurgery = {
  default: "Surgery_waitisted",
  surgeryDate: "Surgery_planned", // when the surgery date is set
  PhysicianSurgical: "Recovery/ICU", // when the phsysician surgery form is submitted
  PhysicianDischarge: "Post-Recovery-3M", // when the discharge form is submitted
  Physician3MonthFollowUp: "3-12 Month FollowUp", // when the 3 month form is submitted
  Physician12MonthFollowup: "12-24 Month FollowUp", // when the 12 month form is submitted
  Physician24MonthFollowup: "Completed Treatment", // when the 24 month form is submitted
  archives: "Withdrew", // When an admin manually archives a careplan, and provides a reason ==='withdrew'
  archivesDifferentWithdrew: "Cancelled" // when an admin manually archives a careplan and the reason !=withdrew
};

const pathwayFollowup = {
  default: "Post-Initial Visit- 3MonthFP",
  Physician3MonthFollowUp: "3-12 Month FollowUp", // when the 3 month form is submitted
  Physician12MonthFollowup: "12-24 Month FollowUp", // when the 12 month form is submitted
  Physician24MonthFollowup: "Completed Treatment", // when the 24 month form is submitted
  archives: "Withdrew", // When an admin manually archives a careplan, and provides a reason ==='withdrew'
  archivesDifferentWithdrew: "Cancelled" // when an admin manually archives a careplan and the reason !=withdrew
};

export { pathwaySurgery, pathwayFollowup };

// Undiagosed

// If TreatmentType === FollowUp [
// Post-Initial Visit- 3MonthFP
// 3-12MonthFollowUp				// when the 3 month form is submitted
// 12-24MonthFollowUp				// when the 12 month form is submitted
// Completed 						// when the 24 month form is submitted
// Withdrew 						// when an admin archives the careplan, reason===withdrew
// Cancelled 						// when an admin archives the careplan, reason!=withdrew
// ]

// If Cannot Assess/More information needed === [
// // ...list here
// ]

// If Refer to another vendor = [

// ]
