"use client";

import { FormEvent, useMemo, useState } from "react";
import { getTotalEligibleAmount } from "@/lib/eligibility";

export function EligibilityCalculator() {
  const [basicSalary, setBasicSalary] = useState("");
  const [yearsWorked, setYearsWorked] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const isSubmitDisabled = useMemo(() => {
    return basicSalary.trim() === "" || yearsWorked.trim() === "";
  }, [basicSalary, yearsWorked]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const salary = Number(basicSalary);
    const years = Number(yearsWorked);
    const totalEligibleAmount = getTotalEligibleAmount(years, salary);
    setResult(totalEligibleAmount);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
      aria-label="Eligibility calculator form"
    >
      <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
        Basic Salary
        <p className="text-xxl italic text-gray-400">
          (Salary: The last drawn basic wage plus the cost of living allowance
          or any other similar allowance)
        </p>
        <input
          name="basicSalary"
          type="number"
          min="0"
          step="1000"
          value={basicSalary}
          onChange={(event) => setBasicSalary(event.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-600"
          placeholder="Enter basic salary"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
        Total Number of years worked
        <p className="text-xxl italic text-gray-400">
          (Completed Year: A 12-month period, but for the first year, 180 days
          of service is sufficient)
        </p>
        <input
          name="yearsWorked"
          type="number"
          min="0"
          step="1"
          value={yearsWorked}
          onChange={(event) => setYearsWorked(event.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-600"
          placeholder="Enter total number of years worked"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitDisabled}
        className="mt-1 w-fit rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        Calculate
      </button>

      <p className="pt-1 italic text-gray-400">
        Note : calculation logic is implemented based on following document
      </p>

      {result !== null && (
        <p
          className="pt-1 text-base font-semibold text-emerald-700"
          data-testid="result-line"
        >
          Total eligible amount: {result.toFixed(2)}
        </p>
      )}
    </form>
  );
}
