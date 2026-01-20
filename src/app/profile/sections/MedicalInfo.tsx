import { MedicalItem } from "../Components/MedicalItem";
import SectionContainer from "../Components/SectionContainer";

export default function MedicalInfo() {
  return (
    <SectionContainer title="Medical Information">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MedicalItem label="Blood Type" value="O+" />
        <MedicalItem label="Allergies" value="Penicillin, Dust" />
        <MedicalItem label="Chronic Diseases" value="None" />
        <MedicalItem label="Current Medications" value="Vitamin D supplements" />
        <MedicalItem label="Height" value="175 cm" />
        <MedicalItem label="Weight" value="78 kg" />
      </div>

      <button
        className="
          mt-6
          w-full
          bg-primary
          text-white
          py-3
          rounded-lg
          font-medium
          hover:opacity-90
          active:scale-[0.98]
          transition
        "
      >
        Edit Medical Info
      </button>
    </SectionContainer>
  );
}
