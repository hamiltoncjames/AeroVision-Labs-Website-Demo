'use client'

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, FileText, CheckCircle } from "lucide-react";

type PreferredContact = "phone_now" | "email" | "text";

export default function SupportHub() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
    description: "",
    preferredContact: "email" as PreferredContact,
    urgency: "medium",
  });

  const canProceed = useMemo(() => {
    switch (step) {
      case 1:
        return formData.name.trim() && formData.email.trim();
      case 2:
        return formData.issue.trim();
      case 3:
        return formData.description.trim();
      case 4:
        return true;
      default:
        return false;
    }
  }, [step, formData]);

  const handleNext = () => {
    if (canProceed && step < 4) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Demo submission
    console.log("Support request submitted:", formData);
    setStep(5);
  };

  const updateFormData = (field: keyof typeof formData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Support Hub
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get help with your AI models and drone operations. Our team is here to assist you.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center mb-8">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  stepNumber < step 
                    ? 'bg-green-600 text-white' 
                    : stepNumber === step 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-gray-700 text-gray-400'
                }`}>
                  {stepNumber < step ? <CheckCircle className="w-5 h-5" /> : stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                    stepNumber < step ? 'bg-green-600' : 'bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-8 shadow-xl">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold text-white mb-6">What's the issue?</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Issue Type</label>
                    <select
                      value={formData.issue}
                      onChange={(e) => updateFormData("issue", e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                    >
                      <option value="">Select an issue type</option>
                      <option value="model-download">Model Download Problem</option>
                      <option value="installation">Installation Issues</option>
                      <option value="performance">Performance Problems</option>
                      <option value="compatibility">Device Compatibility</option>
                      <option value="billing">Billing & Payment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold text-white mb-6">Describe the problem</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => updateFormData("description", e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors resize-none"
                      placeholder="Please provide details about your issue..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Urgency</label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => updateFormData("urgency", e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                    >
                      <option value="low">Low - General inquiry</option>
                      <option value="medium">Medium - Some impact on operations</option>
                      <option value="high">High - Critical impact on operations</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold text-white mb-6">How should we contact you?</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { value: "email", icon: Mail, label: "Email", desc: "We'll respond within 24 hours" },
                      { value: "phone_now", icon: Phone, label: "Phone Now", desc: "Immediate callback" },
                      { value: "text", icon: MessageCircle, label: "Text Message", desc: "SMS updates" }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateFormData("preferredContact", option.value)}
                        className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                          formData.preferredContact === option.value
                            ? 'border-cyan-500 bg-cyan-900/20'
                            : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                        }`}
                      >
                        <option.icon className={`w-6 h-6 mb-2 ${
                          formData.preferredContact === option.value ? 'text-cyan-400' : 'text-gray-400'
                        }`} />
                        <div className="font-medium text-white">{option.label}</div>
                        <div className="text-sm text-gray-400">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-white mb-4">Support Request Submitted!</h2>
                <p className="text-gray-400 mb-6">
                  Thank you for contacting us. We'll get back to you soon using your preferred contact method.
                </p>
                <button
                  onClick={() => {
                    setStep(1);
                    setFormData({
                      name: "",
                      email: "",
                      issue: "",
                      description: "",
                      preferredContact: "email",
                      urgency: "medium",
                    });
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg transition-all duration-300"
                >
                  Submit Another Request
                </button>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            {step < 5 && (
              <div className="flex justify-between mt-8">
                <button
                  onClick={handleBack}
                  disabled={step === 1}
                  className="px-6 py-2 border border-gray-700 bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Back
                </button>
                <button
                  onClick={step === 4 ? handleSubmit : handleNext}
                  disabled={!canProceed}
                  className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {step === 4 ? "Submit Request" : "Next"}
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-6">Quick Resources</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: FileText, title: "Documentation", desc: "Browse our comprehensive guides", url: "/docs" },
              { icon: MessageCircle, title: "Community", desc: "Connect with other users", url: "/community" },
              { icon: Phone, title: "Emergency", desc: "Critical issues - call us now", url: "/emergency" }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 shadow-xl hover:border-indigo-500/40 transition-all duration-300 cursor-pointer"
                data-url={resource.url}
              >
                <resource.icon className="w-8 h-8 text-cyan-400 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">{resource.title}</h4>
                <p className="text-gray-400">{resource.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
