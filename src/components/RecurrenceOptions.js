import { useDatePickerStore } from "@/store/useDatePickerStore";
import React from "react";

export default function RecurrenceOptions() {
  const { recurrencePattern, setRecurrencePattern } = useDatePickerStore();

  const patterns = ["daily", "weekly", "monthly", "yearly"];

  return (
    <div className="mt-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">
        Recurrence Pattern
      </h3>
      <div className="flex gap-3 flex-wrap">
        {patterns.map((pattern) => (
          <button
            key={pattern}
            onClick={() => setRecurrencePattern(pattern)}
            className={`px-4 py-2 rounded-full border font-medium transition-colors duration-300 ${
              recurrencePattern === pattern
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-400 hover:bg-blue-100"
            }`}
          >
            {pattern.charAt(0).toUpperCase() + pattern.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
