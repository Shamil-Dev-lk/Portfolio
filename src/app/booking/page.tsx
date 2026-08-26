import BookingForm from "./BookingForm";

export default function BookingPage() {
  return (
    <div className="bg-background-light py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">Start a Project</h2>
          <p className="mt-4 text-lg leading-8 text-text-secondary">
            Tell me about your project and I'll get back to you with a custom quote and timeline.
          </p>
        </div>
        
        <BookingForm />
      </div>
    </div>
  );
}
