import { EligibilityCalculator } from "@/components/EligibilityCalculator";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:px-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="font-bold text-slate-900 text-xl sm:text-2xl">
          Total Eligible Compensation on Service Termination
        </h1>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          Enter Basic Salary and Total Number of years worked to calculate the
          total eligible amount.
        </p>
        <div className="mt-6">
          <EligibilityCalculator />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">Reference PDF</h2>
        <p className="mt-2 text-sm text-slate-600">
          An act to make special provisions in respect of the termination of the
          services of workmen in certain employments by their employers
        </p>
        <div className="mt-4 h-[420px] overflow-auto rounded-xl border border-slate-300">
          <iframe
            src="/term-emp-act.pdf"
            title="Termination of Employment of Workmen PDF"
            className="h-full w-full"
          />
        </div>
      </section>
    </main>
  );
}
