"use client";

import { Eye, EyeOff, CheckCircle2, Lock, Mail, User, Phone, Globe, Building } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    whatsapp: "",
    phone: "",
    company: "",
    country: ""
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (data.success) {
        window.location.href = "/dashboard";
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      
      {/* Left side - Graphic/Info */}
      <div className="hidden md:flex md:w-5/12 lg:w-1/2 bg-gray-900 relative items-center justify-center p-12 overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#3EA928 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
        
        <div className="relative z-10 max-w-lg text-white">
          <Link href="/" className="mb-12 inline-block">
            <span className="text-brand-primary font-black text-3xl leading-none mr-2">&gt;&gt;</span>
            <span className="text-white font-bold text-3xl tracking-tight">ShamilDev</span>
          </Link>

          <h2 className="text-4xl font-extrabold mb-6 leading-tight">Start Your<br/><span className="text-brand-primary">Digital Journey</span></h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Create an account to book services, track your projects, and manage your invoices seamlessly.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-primary" />
              <span className="font-medium text-gray-200">Fast & simple booking process</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-primary" />
              <span className="font-medium text-gray-200">Real-time project tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-primary" />
              <span className="font-medium text-gray-200">Secure invoicing & payments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Signup Form */}
      <div className="w-full md:w-7/12 lg:w-1/2 bg-white flex flex-col p-8 sm:p-12 lg:p-16 shadow-2xl z-10 overflow-y-auto">
        
        <div className="w-full max-w-xl mx-auto flex-1 flex flex-col justify-center">
          
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Create Account</h2>
            <p className="text-gray-500">Fill in your details to get started</p>
          </div>

          {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm font-medium border border-red-100">{error}</div>}

          <form onSubmit={handleSignup} className="space-y-5">
            
            {/* Grid for two-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-gray-400" />
                  </div>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none text-gray-900 text-sm" placeholder="John Doe" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </div>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none text-gray-900 text-sm" placeholder="you@company.com" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp Number *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-4 w-4 text-gray-400" />
                  </div>
                  <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none text-gray-900 text-sm" placeholder="+1234567890" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-4 w-4 text-gray-400" />
                  </div>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none text-gray-900 text-sm" placeholder="Optional" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className="h-4 w-4 text-gray-400" />
                  </div>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none text-gray-900 text-sm" placeholder="Optional" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Country</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Globe className="h-4 w-4 text-gray-400" />
                  </div>
                  <input type="text" name="country" value={formData.country} onChange={handleChange} className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none text-gray-900 text-sm" placeholder="e.g. United States" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Password *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none text-gray-900 text-sm" placeholder="••••••••" required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600">
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Confirm Password *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input type={showPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none text-gray-900 text-sm" placeholder="••••••••" required />
                </div>
              </div>

            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full mt-4 flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all disabled:opacity-70"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
          
          <p className="mt-8 text-center text-sm text-gray-500 font-medium">
            Already have an account? <Link href="/login" className="text-brand-primary font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </div>

    </div>
  );
}
