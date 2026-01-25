import SectionContainer from "../Components/SectionContainer";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();

  return (
    <SectionContainer title="Edit Profile">
      <div className="max-w-2xl space-y-8">
        {/* ================= Personal Info ================= */}
        <div>
          <h3 className="text-lg font-semibold text-secondary dark:text-slate-100 mb-4">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-secondary dark:text-slate-200">
                Full Name
              </label>
              <input
                defaultValue="Mariam Ahmed"
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-slate-700
                  bg-white dark:bg-slate-900 px-4 py-3 text-sm
                  text-secondary dark:text-slate-100
                  focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-secondary dark:text-slate-200">
                Email
              </label>
              <input
                type="email"
                defaultValue="mariam@example.com"
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-slate-700
                  bg-white dark:bg-slate-900 px-4 py-3 text-sm
                  text-secondary dark:text-slate-100
                  focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-secondary dark:text-slate-200">
                Phone
              </label>
              <input
                defaultValue="+20 109 456 7890"
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-slate-700
                  bg-white dark:bg-slate-900 px-4 py-3 text-sm
                  text-secondary dark:text-slate-100
                  focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-secondary dark:text-slate-200">
                Address
              </label>
              <input
                defaultValue="Nasr City, Alex, Egypt"
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-slate-700
                  bg-white dark:bg-slate-900 px-4 py-3 text-sm
                  text-secondary dark:text-slate-100
                  focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>
          </div>
        </div>

        {/* ================= Medical Info ================= */}
        <div>
          <h3 className="text-lg font-semibold text-secondary dark:text-slate-100 mb-4">
            Medical Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium">Blood Type</label>
              <input
                defaultValue="O+"
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-slate-700
                  bg-white dark:bg-slate-900 px-4 py-3 text-sm
                  text-secondary dark:text-slate-100
                  focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Allergies</label>
              <input
                defaultValue="Penicillin, Dust"
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-slate-700
                  bg-white dark:bg-slate-900 px-4 py-3 text-sm
                  text-secondary dark:text-slate-100
                  focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Chronic Diseases</label>
              <input
                defaultValue="None"
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-slate-700
                  bg-white dark:bg-slate-900 px-4 py-3 text-sm
                  text-secondary dark:text-slate-100
                  focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Current Medications</label>
              <input
                defaultValue="Vitamin D supplements"
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-slate-700
                  bg-white dark:bg-slate-900 px-4 py-3 text-sm
                  text-secondary dark:text-slate-100
                  focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Height (cm)</label>
              <input
                defaultValue="175"
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-slate-700
                  bg-white dark:bg-slate-900 px-4 py-3 text-sm
                  text-secondary dark:text-slate-100
                  focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Weight (kg)</label>
              <input
                defaultValue="78"
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-slate-700
                  bg-white dark:bg-slate-900 px-4 py-3 text-sm
                  text-secondary dark:text-slate-100
                  focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>
          </div>
        </div>

        {/* ================= Actions ================= */}
        <div className="flex gap-4 pt-4">
          <button className="flex-1 bg-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
            Save Changes
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex-1 border border-slate-300 dark:border-slate-600
              text-secondary dark:text-slate-200
              py-3 rounded-lg font-medium
              hover:bg-gray-50 dark:hover:bg-slate-800 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </SectionContainer>
  );
}
