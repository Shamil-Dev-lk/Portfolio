"use client";

import { useEffect, useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNav from "@/components/admin/AdminTopNav";
import AuthGuard from "@/components/admin/AuthGuard";
import { Star, Plus, Edit2, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AdminSkillsPage() {
  const [skills, setSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Skills
  const fetchSkills = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('level', { ascending: false });
    
    if (data) setSkills(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  // Delete Skill
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this skill?")) return;
    
    const { error } = await supabase.from('skills').delete().eq('id', id);
    if (!error) {
      setSkills(skills.filter(s => s.id !== id));
    } else {
      alert("Error deleting skill");
    }
  };

  // Add dummy skill for testing (Full form can be added later)
  const handleAddDummySkill = async () => {
    const newSkill = {
      name: "New React Skill",
      category: "Frontend",
      level: 90,
      is_active: true
    };
    
    const { data, error } = await supabase.from('skills').insert([newSkill]).select();
    if (data) {
      setSkills([...skills, data[0]]);
    }
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-[#f3f4f6] flex flex-col md:flex-row font-sans">
        <AdminSidebar />
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          <AdminTopNav />
          <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-extrabold text-gray-900">Skills</h1>
                <p className="text-sm text-gray-500 mt-1">Manage technical skills shown on your homepage.</p>
              </div>
              <button 
                onClick={handleAddDummySkill}
                className="bg-brand-primary hover:bg-brand-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> Add Skill
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10 max-w-4xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50 text-gray-500 text-[11px] uppercase tracking-wider font-bold border-b border-gray-100">
                      <th className="px-6 py-4">Skill Name</th>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Proficiency</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {loading ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-gray-500">Loading skills...</td>
                      </tr>
                    ) : skills.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                          <Star className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                          <h3 className="font-bold text-gray-900 text-lg mb-1">No Skills Found</h3>
                          <p className="max-w-sm mx-auto">You haven't added any skills yet.</p>
                        </td>
                      </tr>
                    ) : (
                      skills.map((skill) => (
                        <tr key={skill.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="text-sm font-bold text-gray-900">{skill.name}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-xs text-gray-500">{skill.category}</div>
                          </td>
                          <td className="px-6 py-4">
                             <div className="flex items-center gap-3">
                               <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden max-w-[100px]">
                                 <div className="h-full bg-brand-primary" style={{ width: `${skill.level}%` }}></div>
                               </div>
                               <span className="text-xs font-bold text-gray-600">{skill.level}%</span>
                             </div>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button className="p-2 text-gray-400 hover:text-brand-primary bg-gray-50 hover:bg-brand-primary/10 rounded transition-colors">
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button onClick={() => handleDelete(skill.id)} className="p-2 text-gray-400 hover:text-red-600 bg-gray-50 hover:bg-red-50 rounded transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
