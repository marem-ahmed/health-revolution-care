import { RecordItem } from "../Components/RecordItem";

export default function MedicalRecords() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-secondary">
          Medical Records
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Upload and manage your medical documents securely
        </p>
      </div>

      {/* Upload Card */}
      <div className="border-2 border-dashed rounded-xl p-6 flex items-center justify-between bg-primary-50">
        <div>
          <h3 className="font-medium text-gray-800">Upload New Record</h3>
          <p className="text-sm text-gray-500 mt-1">
            Upload your medical documents securely
          </p>
        </div>

        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
          Upload Record
        </button>
      </div>

      {/* Records */}
      <div className="space-y-4">
        <RecordItem
          title="Blood Test Results"
          category="Blood Test"
          date="01 Aug 2023"
          file="blood-test-results-872.pdf"
          image="/public/assets/record1.png"
        />

        <RecordItem
          title="X-Ray Chest"
          category="Radiology"
          date="12 Jul 2023"
          file="chest-xray-july2023.png"
          shared="Dr. Sarah Johnson"
          image="/public/assets/record2.png"
        />

        <RecordItem
          title="MRI Brain Scan"
          category="Radiology"
          date="25 May 2023"
          file="mri-brain-scan-xyz.pdf"
          shared="Dr. John Adams"
          image="/public/assets/record4.png"
        />

        <RecordItem
          title="COVID-19 Vaccine Certificate"
          category="Vaccination"
          date="05 Feb 2023"
          file="covid19-vaccine-cert.pdf"
          image="/public/assets/record5.png"
        />
      </div>

      {/* Load More */}
      <button className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90 transition">
        Load More Records
      </button>
    </div>
  );
}
