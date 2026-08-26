"use client";

import { Eye, EyeOff, CheckCircle2, Lock, Mail } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (authError) {
        setError(authError.message);
        return;
      }
      
      if (data.session) {
        // Check role to redirect
        const { data: user } = await supabase
          .from('users')
          .select('role')
          .eq('id', data.session.user.id)
          .single();
          
        if (user && user.role === "ADMIN") {
          window.location.href = "/admin/dashboard";
        } else {
          window.location.href = "/dashboard";
        }
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      
      {/* Left side - Login Form */}
      <div className="w-full md:w-1/2 lg:w-5/12 bg-white flex flex-col p-8 sm:p-12 lg:p-16 xl:p-24 shadow-2xl z-10">
        
        <div className="w-full max-w-md mx-auto flex-1 flex flex-col justify-center">
          
          <Link href="/" className="mb-12 inline-block">
            <span className="text-brand-primary font-black text-3xl leading-none mr-2">&gt;&gt;</span>
            <span className="text-gray-900 font-bold text-3xl tracking-tight">ShamilDev</span>
          </Link>

          <div className="mt-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-500 mb-8">Sign in to your client portal</p>

            {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm font-medium border border-red-100">{error}</div>}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors outline-none text-gray-900 font-medium text-sm" 
                    placeholder="you@company.com" 
                    required 
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="block text-sm font-bold text-gray-700">Password</label>
                  <a href="#" className="text-xs font-bold text-brand-primary hover:text-brand-dark transition-colors mt-1">Forgot password?</a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors outline-none text-gray-900 font-medium text-sm" 
                    placeholder="••••••••" 
                    required 
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 pb-4">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    className="w-4 h-4 rounded text-brand-primary focus:ring-brand-primary border-gray-300"
                  />
                  <label htmlFor="remember" className="ml-2 text-xs font-bold text-gray-700">Remember Me</label>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all disabled:opacity-70"
              >
                {isLoading ? "Signing in..." : "Login"}
              </button>
            </form>
            
            <p className="mt-8 text-center text-sm text-gray-500 font-medium">
              Don&#39;t have an account? <Link href="/signup" className="text-brand-primary font-bold hover:underline">Create an account</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Graphic/Info */}
      <div className="hidden md:flex md:w-1/2 lg:w-7/12 bg-gray-900 relative items-center justify-center p-12 overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#3EA928 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
        
        <div className="relative z-10 max-w-lg text-white">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">Welcome to the<br/><span className="text-brand-primary">Client Portal</span></h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Log in to manage your active projects, review pending bookings, download invoices, and communicate directly with the team.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-primary" />
              <span className="font-medium text-gray-200">Track project progress in real-time</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-primary" />
              <span className="font-medium text-gray-200">Manage all your invoices seamlessly</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-primary" />
              <span className="font-medium text-gray-200">Direct WhatsApp integration support</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
