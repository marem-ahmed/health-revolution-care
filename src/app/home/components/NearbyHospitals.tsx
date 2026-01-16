import React from "react";
import { motion } from "framer-motion";
import HospitalsMap from "./HospitalMap";

const hospitals = [
  {
    name: "City Hospital",
    rating: 4.5,
    reviews: 241,
    distance: "2.5 km",
    price: "$100 / Consult",
  },
  {
    name: "Green Valley Hospital",
    rating: 4.7,
    reviews: 180,
    distance: "3.1 km",
    price: "$120 / Consult",
  },
];

// container animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

// card animation (from right to left)
const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as const;

export default function NearbyHospitals() {
  return (
    <section className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-secondary">
          Find Nearby Hospitals
        </h2>
        <button className="text-primary font-medium hover:underline">
          View all
        </button>
      </div>

      {/* Map */}
      <div className="bg-primary-50 rounded-xl h-48 overflow-hidden">
        <HospitalsMap />
      </div>

      {/* Hospital cards */}
      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {hospitals.map((hospital) => (
          <motion.div
            key={hospital.name}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow p-5 flex items-center justify-between hover:shadow-md transition"
          >
            {/* Left */}
            <div>
              <h3 className="text-lg font-semibold text-secondary">
                {hospital.name}
              </h3>
              <p className="text-sm text-accent mt-1">
                ⭐ {hospital.rating} ({hospital.reviews} reviews)
              </p>
            </div>

            {/* Right */}
            <div className="text-right">
              <p className="text-sm text-accent">{hospital.distance}</p>
              <p className="text-primary font-semibold mt-1">
                {hospital.price}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
