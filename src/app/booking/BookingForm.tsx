"use client";

import { useState } from "react";
import { Check, ChevronRight, ChevronLeft, Upload, File } from "lucide-react";
import Link from "next/link";

const steps = [
  { id: 1, name: "Service" },
  { id: 2, name: "Details" },
  { id: 3, name: "Budget" },
  { id: 4, name: "Timeline" },
  { id: 5, name: "Contact" },
  { id: 6, name: "Review" },
];

const services = [
  "Web Development",
  "UI/UX Design",
  "E-commerce",
  "WordPress",
  "Maintenance",
  "Custom Project",
];

const budgets = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000+",
];

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    projectTitle: "",
    projectType: "",
    businessName: "",
    websiteUrl: "",
    description: "",
    goals: "",
    targetAudience: "",
    budget: "",
    startDate: "",
    completionDate: "",
    urgency: "Normal",
    name: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert(data.error || "Failed to submit booking");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="h-8 w-8 text-brand-primary" />
        </div>
        <h2 className="text-3xl font-bold text-brand-dark mb-4">Project Request Submitted Successfully!</h2>
        <p className="text-text-secondary mb-8">
          Thank you for reaching out. I'll review your project details and get back to you within 24-48 hours.
        </p>
        <Link 
          href="/dashboard"
          className="inline-block bg-brand-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
        >
          Go to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto">
      {/* Progress */}
      <div className="bg-gray-50 border-b border-gray-100 px-8 py-6">
        <nav aria-label="Progress">
          <ol role="list" className="flex items-center justify-between w-full">
            {steps.map((step, stepIdx) => (
              <li key={step.name} className={`relative flex items-center ${stepIdx !== steps.length - 1 ? 'w-full pr-8 sm:pr-20' : ''}`}>
                {step.id < currentStep ? (
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="h-0.5 w-full bg-brand-primary" />
                  </div>
                ) : step.id === currentStep ? (
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="h-0.5 w-full bg-gray-200" />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="h-0.5 w-full bg-gray-200" />
                  </div>
                )}
                
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-gray-300">
                  {step.id < currentStep ? (
                     <div className="h-full w-full rounded-full bg-brand-primary flex items-center justify-center">
                       <Check className="h-5 w-5 text-white" />
                     </div>
                  ) : step.id === currentStep ? (
                    <div className="h-full w-full rounded-full border-2 border-brand-primary bg-white flex items-center justify-center">
                      <span className="text-brand-primary font-semibold text-xs">{step.id}</span>
                    </div>
                  ) : (
                    <span className="text-gray-400 font-medium text-xs">{step.id}</span>
                  )}
                </div>
                
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 whitespace-nowrap">
                  {step.name}
                </span>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="p-8 md:p-12">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Service */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">What service do you need?</h3>
                <p className="text-text-secondary mb-8">Select the primary service you are interested in.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, service });
                        setTimeout(handleNext, 300);
                      }}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${
                        formData.service === service 
                          ? 'border-brand-primary bg-brand-primary/5' 
                          : 'border-gray-200 hover:border-brand-primary/50'
                      }`}
                    >
                      <span className={`block font-semibold ${formData.service === service ? 'text-brand-primary' : 'text-text-primary'}`}>
                        {service}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Details */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Tell me about your project</h3>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="projectTitle" className="block text-sm font-medium text-text-primary">Project Title</label>
                  <input type="text" id="projectTitle" name="projectTitle" value={formData.projectTitle} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-text-primary ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-brand-primary sm:text-sm sm:leading-6" required />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-text-primary">Project Type</label>
                  <input type="text" id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-text-primary ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-brand-primary sm:text-sm sm:leading-6" required />
                </div>
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-text-primary">Business Name</label>
                  <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-text-primary ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-brand-primary sm:text-sm sm:leading-6" />
                </div>
                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-medium text-text-primary">Website URL (if available)</label>
                  <input type="url" id="websiteUrl" name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-text-primary ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-brand-primary sm:text-sm sm:leading-6" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-text-primary">Project Description</label>
                  <textarea id="description" name="description" rows={4} value={formData.description} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-text-primary ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-brand-primary sm:text-sm sm:leading-6" required />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Budget */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-2xl font-bold text-brand-dark mb-2">What is your budget?</h3>
              <p className="text-text-secondary mb-8">This helps me propose solutions within your range.</p>
              
              <div className="space-y-3">
                {budgets.map((budget) => (
                  <label key={budget} className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${formData.budget === budget ? 'border-brand-primary bg-brand-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name="budget" value={budget} checked={formData.budget === budget} onChange={handleChange} className="h-4 w-4 text-brand-primary border-gray-300 focus:ring-brand-primary" />
                    <span className="ml-3 font-medium text-text-primary">{budget}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Timeline */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Timeline Expectations</h3>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-text-primary">Preferred Start Date</label>
                  <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-text-primary ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-brand-primary sm:text-sm sm:leading-6" />
                </div>
                <div>
                  <label htmlFor="completionDate" className="block text-sm font-medium text-text-primary">Desired Completion Date</label>
                  <input type="date" id="completionDate" name="completionDate" value={formData.completionDate} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-text-primary ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-brand-primary sm:text-sm sm:leading-6" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="urgency" className="block text-sm font-medium text-text-primary">Project Urgency</label>
                  <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-text-primary ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-brand-primary sm:text-sm sm:leading-6">
                    <option>Low - No strict deadline</option>
                    <option>Normal - Standard timeline</option>
                    <option>High - Urgent project (ASAP)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Contact */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Contact Information</h3>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-text-primary ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-brand-primary sm:text-sm sm:leading-6" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-text-primary ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-brand-primary sm:text-sm sm:leading-6" required />
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Review */}
          {currentStep === 6 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Review & Submit</h3>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-4">
                <div className="grid grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                  <div className="text-sm font-medium text-text-secondary">Service</div>
                  <div className="col-span-2 font-semibold text-brand-dark">{formData.service}</div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                  <div className="text-sm font-medium text-text-secondary">Project Title</div>
                  <div className="col-span-2 font-medium text-text-primary">{formData.projectTitle}</div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                  <div className="text-sm font-medium text-text-secondary">Budget</div>
                  <div className="col-span-2 font-medium text-text-primary">{formData.budget}</div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                  <div className="text-sm font-medium text-text-secondary">Timeline</div>
                  <div className="col-span-2 font-medium text-text-primary">Start: {formData.startDate || 'N/A'} | End: {formData.completionDate || 'N/A'}</div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-sm font-medium text-text-secondary">Contact</div>
                  <div className="col-span-2 font-medium text-text-primary">{formData.name} ({formData.email})</div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${currentStep === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-text-primary hover:bg-gray-100'}`}
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
            
            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={currentStep === 1 && !formData.service}
                className={`flex items-center gap-2 px-6 py-2.5 bg-brand-primary text-white text-sm font-semibold rounded-lg transition-colors ${currentStep === 1 && !formData.service ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-dark'}`}
              >
                Next Step <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3 bg-brand-primary text-white text-sm font-bold rounded-lg hover:bg-brand-dark transition-all shadow-md shadow-brand-primary/20"
              >
                Submit Project Request <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
