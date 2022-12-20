import { fracture } from "./Fracture";
import { osteoporosis } from "./Osteoporosis";
import { acuteKidneyInjury } from "./Acute Kidney Injury";
import * as quizzes from "./";
import { chronicKidneyDisease } from "./Chronic Kidney Disease";
import { deepVeinThrombosis_pulmonaryEmbolism } from "./Deep Vein Thrombosis _ Pulmonary Embolism";
import { ataxia_movementDisorder_tremor } from "./Ataxia _ Movement Disorder _ Tremor";

export const week_mappings = {
  "Intro to Pharmacodynamics": quizzes.pharmacodynamics,
  "Intro to Pharmacokinetics": quizzes.pharmacokinetics,
  "Fetal Development": quizzes.fetalDevelopment,
  "Breast Mass": quizzes.breastMass,
  "Immunology & Allergy": quizzes.immunologyAndAllergy,
  "Pneumonia and Cough": quizzes.pneumoniaAndCough,
  "Chronic Obstructive Pulmonary Disease (COPD)": quizzes.COPD,
  "Electrolyte Disturbance": quizzes.electrolyteDisturbance,
  Hypertension: quizzes.hypertension,
  "Heart Murmurs": quizzes.heartMurmur,
  "Upper Gastrointestinal Tract": quizzes.upperGI,
  "Nutrient Malabsorption": quizzes.nutrientMalabsorption,
  "Diabetes Mellitus": quizzes.diabetesMellitus,
  "Lower Gastrointestinal Tract": quizzes.lowerGI,
  Infertility: quizzes.infertility,
  Pregnancy: quizzes.pregnancy,

  "Adrenal Dysfunction": quizzes.adrenalDysfunction,
  Anemia: quizzes.anemia,
  Asthma: quizzes.asthma,
  "Bleeding disorders and Hematologic Malignancy":
    quizzes.hematologicMalignancy,
  "Brain Injury": quizzes.tbi,
  "Brain Stem": quizzes.brainStem,
  "Central Nervous System Infections": quizzes.cnsInfections,
  Depression: quizzes.depression,
  "Headache and Pain": quizzes.headache,
  "Hypothalamic, Pituitary, and End Organ Axis": quizzes.hpeo,
  "Peripheral Neuropathy": quizzes.peripheralNeuropathy,
  "Pharmacology Basics": quizzes.pharmacologyBasics,
  "Spinal Cord Injury": quizzes.sci,
  Stroke: quizzes.stroke,
  "Thyroid and Parathyroid": quizzes.thyroidParathyroid,

  Fracture: fracture,
  Osteoporosis: osteoporosis,
  "Deep Vein Thrombosis : Pulmonary Embolism":
    deepVeinThrombosis_pulmonaryEmbolism,
  "Acute Kidney Injury": acuteKidneyInjury,
  "Chronic Kidney Disease": chronicKidneyDisease,
  "Ataxia : Movement Disorder : Tremor": ataxia_movementDisorder_tremor,
};
