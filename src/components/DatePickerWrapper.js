import React from "react";
import DatePickerComponent from "./DatePickerComponent";
import DateRangePicker from "./DateRangePicker";
import RecurrenceCustomization from "./RecurrenceCustomization";
import RecurrenceOptions from "./RecurrenceOptions";
import SummaryTable from "./SummaryTable";

export default function DatePickerWrapper() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* App Heading */}
      <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 p-6 rounded-xl shadow-md text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-700 flex items-center justify-center gap-2">
          📆 Recurring Date Picker
        </h1>
        <p className="mt-2 text-sm text-blue-600">
          Select a date range and set your recurrence pattern easily
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="p-4 bg-white rounded shadow-md w-full lg:max-w-md">
          <DateRangePicker />
          <RecurrenceOptions />
          <RecurrenceCustomization />
          <SummaryTable />
        </div>

        <DatePickerComponent />
      </div>
    </div>
  );
}
