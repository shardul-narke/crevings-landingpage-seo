import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, Key, Eye, Share2, Lock, 
  Clock, User, FileText, Info, Phone, 
  Database, Mail, CheckCircle2, AlertTriangle, Trash2
} from 'lucide-react';

export default function CustomerPrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-24 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Header Banner */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-[#00bd6f] text-xs font-bold uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              <span>Official Privacy & Data Protection Policy</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Crevings Consumer Privacy &amp; Account Deletion Policy
              </h1>
              <p className="text-sm text-slate-500 mt-1 font-medium">
                Crevings Marketplace Private Limited &bull; Effective Date: July 16, 2026
              </p>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              This Privacy &amp; Data Deletion Policy explains how Crevings Marketplace Private Limited (&quot;Crevings&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, stores, processes, shares, protects, and deletes personal information of users (&quot;Users&quot;, &quot;Customers&quot;, &quot;you&quot;) who access or use the Crevings platform, including our mobile applications, websites, APIs, communication channels, and related consumer services.
            </p>
            
            <div className="bg-emerald-50/70 rounded-2xl p-4 border border-emerald-100/60">
              <p className="text-slate-800 text-xs sm:text-sm font-semibold leading-relaxed">
                By accessing or using the Crevings platform, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
              </p>
            </div>
          </div>

          {/* Quick Navigation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="#privacy-policy" 
              className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:border-[#00bd6f] transition-all group flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-[#00bd6f] shrink-0 group-hover:bg-[#00bd6f] group-hover:text-white transition-colors">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Consumer Privacy Policy</h3>
                <p className="text-xs text-slate-500 mt-0.5">Read details on data collection, permissions, security, and usage.</p>
              </div>
            </a>

            <a 
              href="#account-deletion" 
              className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:border-red-500 transition-all group flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Account &amp; Data Deletion Policy</h3>
                <p className="text-xs text-slate-500 mt-0.5">Learn how to request deletion of your account and personal data.</p>
              </div>
            </a>
          </div>

          {/* PRIVACY POLICY SECTIONS */}
          <div id="privacy-policy" className="space-y-6 pt-2">
            
            {/* Section 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="font-bold text-slate-900 flex items-center gap-3 text-lg pb-4 border-b border-slate-100">
                <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center text-[#00bd6f]">
                  <Database className="w-5 h-5" />
                </div>
                1. Information We Collect
              </h2>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>Crevings may collect the following categories of personal and usage-related information:</p>
                
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-800 text-sm">1.1 Personal Information</h3>
                  <p>During account registration, ordering, or use of our services, we may collect:</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    <li>Full Name</li>
                    <li>Mobile Number</li>
                    <li>Email Address</li>
                    <li>Date of Birth</li>
                    <li>Gender</li>
                    <li>Delivery Address</li>
                    <li>Saved Locations</li>
                    <li>Profile Picture (if uploaded)</li>
                  </ul>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="font-bold text-slate-800 text-sm">1.2 Verification &amp; Communication Information</h3>
                  <p>Your mobile number and communication details may be used for OTP verification, login authentication, delivery coordination, order status updates, refund and payment communication, and customer support.</p>
                  <p>Crevings may communicate with users through:</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['SMS', 'WhatsApp', 'RCS Messaging', 'Push Notifications', 'Phone Calls', 'Email'].map((channel) => (
                      <span key={channel} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg border border-slate-200 text-xs font-semibold">{channel}</span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="font-bold text-slate-800 text-sm">1.3 Payment &amp; Transaction Information</h3>
                  <p>We may collect and process order history, payment transaction details, refund records, invoice/receipt info, and payment method metadata.</p>
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3 items-start">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <span className="font-bold text-amber-900 block mb-0.5">Important Security Notice</span>
                      <p className="text-amber-800 leading-relaxed">
                        Crevings does not directly store complete debit card numbers, credit card numbers, CVV information, or UPI PINs on its own servers. Payment processing is handled by secure PCI-DSS compliant third-party payment service providers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="font-bold text-slate-800 text-sm">1.4 Preference &amp; Behavioral Data</h3>
                  <p>To improve platform performance and personalize user experience, Crevings may analyze:</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    <li>Preferred cuisines &amp; favorite restaurants</li>
                    <li>Order frequency &amp; ordering behavior (daily, weekly, monthly, yearly)</li>
                    <li>Average order value &amp; food preferences</li>
                    <li>Search activity &amp; customer interaction patterns</li>
                    <li>Wishlist, saved items, ratings, and reviews</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="font-bold text-slate-900 flex items-center gap-3 text-lg pb-4 border-b border-slate-100">
                <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center text-[#00bd6f]">
                  <Key className="w-5 h-5" />
                </div>
                2. Device Permissions We Request
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>To provide our services effectively, Crevings may request certain device permissions:</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl space-y-1.5 border border-slate-200/60">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#00bd6f]" />
                      2.1 Location Access
                    </h3>
                    <p className="text-xs text-slate-500">Used for delivery address detection, nearby restaurants, real-time tracking, and distance calculations. Collected while using the app.</p>
                  </div>
                  
                  <div className="p-4 bg-slate-50 rounded-2xl space-y-1.5 border border-slate-200/60">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#00bd6f]" />
                      2.2 Microphone Access
                    </h3>
                    <p className="text-xs text-slate-500">Used for voice search and in-app support communication features. Activated only when initiated by the user.</p>
                  </div>
                  
                  <div className="p-4 bg-slate-50 rounded-2xl space-y-1.5 border border-slate-200/60">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#00bd6f]" />
                      2.3 Gallery / Storage Access
                    </h3>
                    <p className="text-xs text-slate-500">Used for uploading profile photos, review media, and support attachments. Unrelated personal files are never accessed.</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl space-y-1.5 border border-slate-200/60">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#00bd6f]" />
                      2.4 Push Notifications
                    </h3>
                    <p className="text-xs text-slate-500">Used for order updates, tracking, promotions, and account alerts. Users can disable these in device settings.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="font-bold text-slate-900 flex items-center gap-3 text-lg pb-4 border-b border-slate-100">
                <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center text-[#00bd6f]">
                  <Eye className="w-5 h-5" />
                </div>
                3. How We Use Your Information
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>Crevings uses collected information for purposes including:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  {[
                    'Account creation and authentication',
                    'Order processing and fulfillment',
                    'Delivery coordination',
                    'Customer support & issue resolution',
                    'Refund and payment processing',
                    'Fraud prevention and platform security',
                    'Personalized recommendations & discovery',
                    'Marketing and promotional communications',
                    'Analytics and service improvement',
                    'Platform optimization & monitoring',
                    'Compliance with legal obligations'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 px-3 py-2 bg-emerald-50/50 text-slate-800 rounded-xl border border-emerald-100/40">
                      <CheckCircle2 className="w-4 h-4 text-[#00bd6f] shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="font-bold text-slate-900 flex items-center gap-3 text-lg pb-4 border-b border-slate-100">
                <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center text-[#00bd6f]">
                  <Share2 className="w-5 h-5" />
                </div>
                4. Data Sharing &amp; Third Parties
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p className="font-bold text-slate-900">Crevings does not sell personal information to third parties.</p>
                <p>We do not share personal information with external advertisers or unrelated third parties for commercial resale purposes. However, limited information may be shared where operationally necessary with:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Delivery partners for order fulfillment</li>
                  <li>Payment gateways for transaction processing</li>
                  <li>Government agencies, regulators, or law enforcement authorities where legally required</li>
                </ul>
              </div>
            </div>

            {/* Section 5 & 6 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="font-bold text-slate-900 flex items-center gap-3 text-lg pb-4 border-b border-slate-100">
                <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center text-[#00bd6f]">
                  <Lock className="w-5 h-5" />
                </div>
                5. Data Security &amp; Retention
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>Crevings implements technical, administrative, and organizational safeguards to protect personal information including encrypted data transmission, secure firewalls, access controls, and backup recovery systems.</p>

                <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold">
                        <th className="p-3">Data Category</th>
                        <th className="p-3">Retention Period</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr>
                        <td className="p-3 font-semibold text-slate-800">Account Information</td>
                        <td className="p-3">Until account deletion or closure</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-800">Order History</td>
                        <td className="p-3">Up to 8 years (taxation &amp; legal obligation)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-800">Payment &amp; Invoice Records</td>
                        <td className="p-3">As required under taxation laws</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-800">Customer Support Records</td>
                        <td className="p-3">Up to 3 years</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-800">Analytics &amp; Usage Data</td>
                        <td className="p-3">Up to 24 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>

          {/* ACCOUNT & DATA DELETION POLICY SECTION */}
          <div id="account-deletion" className="bg-white p-6 sm:p-8 rounded-3xl border border-red-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 shrink-0">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Account &amp; Personal Data Deletion Policy</h2>
                <p className="text-xs text-slate-500">Your rights regarding permanent account deletion and data removal</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                Crevings respects your right to data privacy and control. You have the right to request permanent deletion of your Crevings user account and associated personal data at any time.
              </p>

              {/* In-App Deletion Instructions */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Method 1: Direct In-App Deletion Request</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  You can request permanent account deletion directly within the Crevings Consumer App by navigating to:
                </p>
                
                <div className="bg-white px-4 py-3 rounded-xl border border-slate-300 font-mono text-xs text-slate-800 font-bold inline-block shadow-xs">
                  Profile &rarr; Account &amp; Details &rarr; Request Account Deletion
                </div>
                
                <p className="text-xs text-slate-600 pt-1">When requesting account deletion in the app, you will be prompted to confirm:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                  <div className="p-3 bg-white border border-slate-200 rounded-xl">
                    <span className="font-bold text-slate-900 block mb-1">Option A: Cancel</span>
                    <span className="text-slate-500">Retains your account and cancels the deletion request.</span>
                  </div>
                  <div className="p-3 bg-white border border-red-200 rounded-xl">
                    <span className="font-bold text-red-600 block mb-1">Option B: Delete Account</span>
                    <span className="text-slate-500">Schedules your account for permanent deletion within 48 hours.</span>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-900 font-medium">
                  <strong>Grace Period:</strong> Logging back into your account within the <strong>48-hour period</strong> will automatically cancel the deletion request and keep your account active.
                </div>
              </div>

              {/* Web / Email Request Instructions */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Method 2: Email / Web Data Deletion Request</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  If you cannot access your app or wish to request data deletion manually, send an email from your registered email address to:
                </p>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#00bd6f]" />
                  <a href="mailto:support@crevings.com" className="font-bold text-[#00bd6f] underline text-sm">support@crevings.com</a>
                </div>
                <p className="text-xs text-slate-500">
                  Include your <strong>Registered Phone Number</strong> and <strong>Account Name</strong> with the subject line <em>&quot;Account &amp; Data Deletion Request&quot;</em>. Our privacy team will process and complete your request within 7 business days.
                </p>
              </div>

              {/* Data Removed vs Retained */}
              <div className="space-y-3 pt-2">
                <h3 className="font-bold text-slate-900 text-sm">What happens upon deletion?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-2xl space-y-2">
                    <span className="font-bold text-emerald-900 text-sm block flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00bd6f]" />
                      Data Permanently Erased
                    </span>
                    <ul className="list-disc pl-4 space-y-1 text-emerald-800">
                      <li>Name, email, mobile number &amp; profile info</li>
                      <li>Saved addresses &amp; location preferences</li>
                      <li>Saved payment methods &amp; preferences</li>
                      <li>Cart items &amp; wishlist data</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-100 border border-slate-200 rounded-2xl space-y-2">
                    <span className="font-bold text-slate-900 text-sm block flex items-center gap-1.5">
                      <Info className="w-4 h-4 text-slate-600" />
                      Data Retained as Required by Law
                    </span>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      <li>Completed order financial invoices (for tax &amp; audit compliance)</li>
                      <li>Historical payment transaction logs required by RBI/taxation regulations</li>
                      <li>Security logs for ongoing fraud prevention</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="font-bold text-slate-900 flex items-center gap-3 text-lg pb-4 border-b border-slate-100">
              <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center text-[#00bd6f]">
                <Phone className="w-5 h-5" />
              </div>
              Contact Privacy &amp; Support Team
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>For privacy concerns, data inquiries, or account deletion support, contact us:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <a 
                  href="mailto:support@crevings.com"
                  className="flex items-center gap-3 p-4 bg-slate-50 hover:bg-slate-100 transition-colors rounded-2xl border border-slate-200/80 text-slate-800"
                >
                  <Mail className="w-5 h-5 text-[#00bd6f] shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-bold">Email</span>
                    <span className="text-xs font-bold truncate block">support@crevings.com</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/918678842995" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-slate-50 hover:bg-slate-100 transition-colors rounded-2xl border border-slate-200/80 text-slate-800"
                >
                  <Phone className="w-5 h-5 text-[#00bd6f] shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-bold">WhatsApp</span>
                    <span className="text-xs font-bold truncate block">+91-8678842995</span>
                  </div>
                </a>

                <a 
                  href="https://www.crevings.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-slate-50 hover:bg-slate-100 transition-colors rounded-2xl border border-slate-200/80 text-slate-800"
                >
                  <Info className="w-5 h-5 text-[#00bd6f] shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-bold">Website</span>
                    <span className="text-xs font-bold truncate block">www.crevings.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
