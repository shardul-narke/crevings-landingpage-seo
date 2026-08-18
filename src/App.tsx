import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import DeliveryPolicyPage from './DeliveryPolicyPage';
import FraudAbusePolicyPage from './FraudAbusePolicyPage';
import DeliveryTermsPage from './DeliveryTermsPage';
import AccountSuspensionPolicyPage from './AccountSuspensionPolicyPage';
import CodeOfConductPage from './CodeOfConductPage';
import DeliveryPrivacyPolicyPage from './DeliveryPrivacyPolicyPage';
import FoodTermsPage from './FoodTermsPage';
import FoodRefundPolicyPage from './FoodRefundPolicyPage';
import FoodListingGuidancePage from './FoodListingGuidancePage';
import FoodPrivacyPage from './FoodPrivacyPage';
import CustomerPrivacyPolicyPage from './CustomerPrivacyPolicyPage';
import { 
  ArrowRight, ArrowDown, CheckCircle2, Clock, TrendingDown, Settings, 
  PieChart, Megaphone, Store, CreditCard,
  X, Sparkles, Image as ImageIcon, Loader2, Download,
  BarChart3, LayoutDashboard, UtensilsCrossed, Zap, MoreHorizontal, MoreVertical, Leaf, Eye,
  Instagram, Linkedin, Coffee, Utensils, ShoppingBag, ChefHat, Truck, Cloud,
  ChevronDown, Calculator as CalcIcon, Plus, Minus, Users, MapPin,
  FileText, ShieldCheck, Landmark, IdCard, BookOpen, FileCheck, Smartphone, Menu, HelpCircle, Info, HeadphonesIcon
} from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import SEO from './SEO';

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="150 460 800 170" className={className} xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <path d="M164.6,601.8L160.3,482l16.3-15.3h21.9v0h49.3l-2.2,28l-48.2,1.2l-0.2,4.8l-2.6,74.7v0l7.7,8.3l45.4-5.3V602l-14.1,11.3h-58.5L164.6,601.8z"/>
        <path d="M294,613.3h-38.8l5-141.8l4.1-4.8h24.6h51.9l11.2,9.8l-1.9,56.2l-5.5,8l-8.2,3.2l14.1,65.3l-3,3.9h-29.7l-8.7-58.5l-16.9,6.7L294,613.3z M314.7,496.7l-24.7,0L291,528l24.4-9.1L314.7,496.7z"/>
        <path d="M366.8,613.3l-5.2-146.6h80.6l7.5,5.4l-4.3,26.2h-46.1l-1.1,31.9h35.1V561h-36.1l-0.9,25.5l53.5-11.7l-3.7,30.5l-7.8,8H366.8z"/>
        <path d="M560.3,472.6l-22.1,123.8L527,613.3h-42l-11-8.6l-20.3-131.1l0.9-6.9h34.4l1,5.9l8.8,96.7h15.5l9.8-98l1.2-4.7h34.3L560.3,472.6z"/>
        <path d="M606.6,613.3h-38.8l5.2-146.6h28.5L606.6,613.3z"/>
        <path d="M653.1,534.4l2.7,78.9h-33.4l-5.2-5.3l4.9-138l1.3-0.9l3.7-2.5h23.6l35.9,78.7l-2.6-72.1l6.3-6.6h22.4l9.5,10.1l-4.5,128.4l-2.7,2.8l-5.1,5.3h-21L653.1,534.4z"/>
        <path d="M736.9,601.8L732.6,482l16.3-15.3h21.9v0h49.3l-2.2,28l-48.2,1.2l-0.2,4.8l-2.6,74.7v0l7.7,8.3l18.4-2.2v-16h-13.4l-1.2-25.2l30-3.7l11.6,12.6V602l-14.1,11.3h-58.5L736.9,601.8z"/>
        <path d="M860.1,494.8l-0.5,10.2l60.1,46.2v50.6l-9.5,11.4h-73.4l-7.8-7.1v-26.5l5.8-4.3l56.1,4.3l-0.2-11l-61.7-50l1.9-42l10.5-9.9h76.4l1.9,32.8l-3.2,4.2L860.1,494.8z"/>
      </g>
    </svg>
  );
}

function Navbar({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-primary-600 text-white text-xs py-1.5 px-4 text-center font-medium sticky top-0 z-[60]">
        Crevings is currently under beta testing phase.
      </div>
      <nav className="bg-white border-b border-gray-200 px-4 py-4 sticky top-[30px] z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button onClick={() => setCurrentPage('food')} className="flex items-center gap-2 text-primary-600">
          <Logo className="h-6 w-auto" />
        </button>
        <div className="flex items-center gap-2 sm:gap-4 relative">
          <button className="bg-primary-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-primary-700 transition-colors text-sm">
            Download App
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center"
            >
              <MoreVertical className="w-5 h-5" />
            </button>
            
            {isMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 overflow-hidden">
                  <button 
                    onClick={() => { setCurrentPage('food'); setIsMenuOpen(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${currentPage === 'food' ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    Food Partner
                  </button>
                  <button 
                    onClick={() => { setCurrentPage('delivery'); setIsMenuOpen(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${currentPage === 'delivery' ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    Delivery Partner
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-16 bg-white text-gray-900 relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-primary-50/50 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold mb-10">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            Launching soon in Prayagraj
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-gray-900 leading-tight">
  Go live in <br/>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
    2 minutes.
  </span>
</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance mb-12 font-medium">
            Start getting orders instantly with 0% commission.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mx-auto">
            <button className="bg-primary-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-primary-700 transition-colors text-sm">
              Become a Partner
            </button>
            <button className="bg-white text-gray-900 border border-gray-200 font-semibold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors text-sm shadow-sm">
              Login
            </button>
          </div>
        </motion.div>
      </div>

      {/* Animated Movie Strip */}
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-primary-50/40 via-primary-100/40 to-primary-50/40 border-y border-primary-100 py-3 flex mt-12 backdrop-blur-sm">
        <motion.div 
          className="flex whitespace-nowrap gap-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-gray-700 font-semibold tracking-wide uppercase text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                Get 0% Commission on every order • Save up to ₹1,00,000 monthly
              </span>
              <span className="text-primary-300">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function RestaurantMetrics() {
  const metrics = [
    { label: "Restaurant Partners", value: "2" },
    { label: "Cities Live", value: "2" },
    { label: "Gross Order Value", value: "₹5,000" },
    { label: "Orders Processed", value: "15" },
  ];

  return (
    <section className="py-24 md:py-32 bg-white selection:bg-primary-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Live System Data
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter text-balance uppercase leading-none">
              Impact in<br />
              <span className="text-primary-600">Numbers.</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-500 max-w-sm text-balance font-medium leading-relaxed pb-2">
            Building a fairer food delivery ecosystem from the ground up. Every partner matters.
          </p>
        </div>

        <div className="border-t-4 border-primary-600 mt-12 flex flex-col">
          {metrics.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-16 border-b border-gray-200 hover:border-primary-600 transition-colors duration-500"
            >
              <div className="text-2xl md:text-4xl font-bold text-gray-400 group-hover:text-primary-600 transition-colors duration-500 mb-4 md:mb-0 pb-2">
                {m.label}
              </div>
              <div className="text-7xl md:text-9xl font-black text-gray-900 group-hover:text-primary-600 tracking-tighter tabular-nums leading-none transition-colors duration-500">
                {m.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Eligible() {
  const types = [
    "Cafe", "Fine Dine-in", "QSR", "Juice Shop", 
    "Sweet Shop", "Bakery", "Food Truck", "Cloud Kitchen"
  ];

  const marqueeTypes = [...types, ...types, ...types];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold mb-6">
            <Users className="w-4 h-4 text-primary-600" />
            <span>Built for everyone</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight text-balance">
            Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">eligible</span>?
          </h2>
        </div>
      </div>
      
      <div className="relative w-full flex">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {marqueeTypes.map((t, i) => (
            <div 
              key={i}
              className="flex-shrink-0 px-6 py-3 rounded-full bg-gray-50 border border-gray-200 hover:bg-gray-50 hover:border-primary-500/30 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-base font-semibold text-gray-900 tracking-tight whitespace-nowrap">{t}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function RequiredDocuments() {
  const docs = [
    { title: "GST Registration", icon: FileText, desc: "Valid GSTIN for your business entity" },
    { title: "FSSAI License", icon: ShieldCheck, desc: "Active food safety and standards certificate" },
    { title: "Bank Account", icon: Landmark, desc: "Current account details for weekly payouts" },
    { title: "PAN Card Copy", icon: IdCard, desc: "Business or individual PAN card" },
    { title: "Restaurant Menu", icon: BookOpen, desc: "Digital or clear physical copy of your menu" },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-6">
            <FileCheck className="w-4 h-4 text-primary-500" />
            <span>Get ready to onboard</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight text-balance">
            Documents you <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">need</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
            Keep these 5 documents handy to complete your registration in minutes.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-[1.5rem] p-5 md:p-6 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {docs.map((doc, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                  <doc.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-0.5 flex items-center gap-2">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');

  const plans = [
    { 
      name: "Run", 
      prices: { monthly: "1,499", quarterly: "1,349", yearly: "1,199" }, 
      desc: "Perfect for getting started",
      features: ["Up to 500 orders/mo", "Basic Analytics", "Standard Support", "Menu Management"]
    },
    { 
      name: "Control", 
      prices: { monthly: "2,299", quarterly: "2,069", yearly: "1,839" }, 
      desc: "For growing businesses", 
      popular: true,
      features: ["Up to 2000 orders/mo", "Advanced Analytics", "Priority Support", "Marketing Tools", "Custom QR Codes"]
    },
    { 
      name: "Scale", 
      prices: { monthly: "2,999", quarterly: "2,699", yearly: "2,399" }, 
      desc: "For high-volume operations",
      features: ["Unlimited orders", "Custom Integrations", "24/7 Dedicated Support", "API Access", "Multiple Locations"]
    }
  ];

  const fees = [
    { range: "₹0 - 200", fee: "₹2 + 18% GST" },
    { range: "₹201 - 400", fee: "₹4 + 18% GST" },
    { range: "₹401 - 600", fee: "₹5 + 18% GST" },
    { range: "₹601 - 1000", fee: "₹8 + 18% GST" },
    { range: "Above 1000", fee: "₹10 + 18% GST" },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold">
              <ShoppingBag className="w-4 h-4 text-primary-500" />
              <span>Simple Pricing</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
              Coming Soon
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight text-balance mb-8">
            Fair pricing for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">everyone</span>
          </h2>
          
          <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full p-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                billing === 'monthly' ? 'bg-primary-600 text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('quarterly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                billing === 'quarterly' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Quarterly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                billing === 'yearly' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Swipeable Subscription Cards */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar md:grid md:grid-cols-3 md:overflow-visible">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-center flex-1 rounded-[2.5rem] p-8 border ${plan.popular ? 'bg-primary-900/20 border-primary-500/50 relative' : 'bg-gray-50 border-gray-200'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-6">{plan.desc}</p>
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-5xl font-black text-gray-900 tracking-tighter">₹{plan.prices[billing]}</span>
                  <span className="text-gray-600 font-medium self-end mb-2">/ month</span>
                </div>
                {billing !== 'monthly' ? (
                  <div className="flex items-center gap-2 mt-2 h-6">
                    <span className="text-gray-500 line-through text-sm font-medium">₹{plan.prices.monthly}</span>
                    <span className="text-primary-600 text-xs font-bold bg-primary-50 px-2 py-0.5 rounded-md">
                      Save {billing === 'quarterly' ? '8%' : '18%'}
                    </span>
                  </div>
                ) : (
                  <div className="h-6 mt-2"></div>
                )}
              </div>
              
              <div className="flex-1 mb-8">
                <p className="text-sm font-semibold text-gray-900 mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary-600 hover:bg-primary-500 text-gray-900' : 'bg-gray-50 hover:bg-gray-100 text-gray-900'}`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Platform Fees Table */}
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-6">
              <Zap className="w-4 h-4 text-primary-500" />
              <span>Platform Fees</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight text-balance">
              Per Order <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Platform Fees</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              ONLY for online orders processed through the Crevings app
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden max-w-2xl mx-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-4 px-6 font-semibold text-gray-900">Order Value</th>
                  <th className="py-4 px-6 font-semibold text-gray-900 text-right">Platform Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {fees.map((fee, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-600 font-medium">{fee.range}</td>
                    <td className="py-4 px-6 text-gray-900 font-bold text-right">{fee.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Calculator() {
  const [orders, setOrders] = useState(1000);
  const [aov, setAov] = useState(500);

  // Calculate fees
  const totalRevenue = orders * aov;
  const traditionalFee = totalRevenue * 0.30; // 30% commission
  
  // Crevings fee calculation
  const crevingsSub = 2299; // Assume Control plan
  let perOrderFee = 0;
  if (aov <= 200) perOrderFee = 2;
  else if (aov <= 400) perOrderFee = 4;
  else if (aov <= 600) perOrderFee = 5;
  else if (aov <= 1000) perOrderFee = 8;
  else perOrderFee = 10;
  
  const crevingsTotalFee = crevingsSub + (orders * perOrderFee * 1.18); // including 18% GST on per order fee
  const savings = traditionalFee - crevingsTotalFee;

  return (
    <section id="calculator" className="py-24 bg-white relative overflow-hidden border-y border-gray-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-6">
            <CalcIcon className="w-4 h-4 text-primary-500" />
            <span>Calculate your ROI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter mb-6">
            See how much you <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">save</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Stop giving away a third of your revenue. See exactly what you could be keeping with Crevings.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Sliders */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-gray-600 font-medium uppercase tracking-wider text-xs">Monthly Orders</label>
                  <span className="text-2xl font-bold text-gray-900">{orders.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="10000" 
                  step="100"
                  value={orders}
                  onChange={(e) => setOrders(Number(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-full appearance-none cursor-pointer accent-primary-500"
                />
              </div>
              
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-gray-600 font-medium uppercase tracking-wider text-xs">Average Order Value</label>
                  <span className="text-2xl font-bold text-gray-900">₹{aov.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="3000" 
                  step="50"
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-full appearance-none cursor-pointer accent-primary-500"
                />
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col justify-center space-y-4 md:pl-8 md:border-l border-gray-200">
              <div className="flex justify-between items-center p-4 rounded-xl bg-gray-50 border border-gray-200">
                <span className="text-gray-600 font-medium text-sm">Other Platforms (30%)</span>
                <span className="text-xl font-bold text-gray-900">₹{traditionalFee.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-xl bg-primary-900/20 border border-primary-500/20">
                <span className="text-primary-400 font-medium text-sm">Crevings</span>
                <span className="text-xl font-bold text-primary-600">₹{crevingsTotalFee.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
              </div>
              <div className="pt-6 mt-2 border-t border-gray-200">
                <div className="text-xs text-gray-600 uppercase tracking-wider font-medium mb-2">Your Monthly Savings</div>
                <div className="text-4xl md:text-5xl font-black text-primary-600 tracking-[-0.04em]">
                  ₹{Math.max(0, savings).toLocaleString(undefined, {maximumFractionDigits: 0})}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    { num: "01", title: "Sign up", desc: "Create your account in seconds without any paperwork." },
    { num: "02", title: "Upload menu", desc: "Import your existing menu or build a new one easily." },
    { num: "03", title: "Go live", desc: "Turn on your digital storefront with a single click." },
    { num: "04", title: "Get orders", desc: "Start receiving and managing orders instantly." },
  ];

  return (
    <section className="py-32 bg-white text-gray-900 overflow-hidden relative border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-balance leading-none">
            Live in hours.<br/><span className="text-primary-500">Not days.</span>
          </h2>
          <p className="text-gray-600 text-xl text-balance">We've eliminated the friction so you can focus on what you do best: making great food.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-0 group"
            >
              <div className="absolute -left-4 md:-left-8 -top-16 text-[140px] font-black text-primary-500/10 leading-none select-none pointer-events-none group-hover:text-primary-500/20 transition-colors duration-500">
                {s.num}
              </div>
              <div className="relative z-10 md:pl-20 pt-8 border-t border-gray-200 group-hover:border-primary-500/50 transition-colors duration-500">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 tracking-tight">{s.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { 
      q: "How much commission does Crevings charge?", 
      a: "Crevings is designed to keep your earnings high. We charge minimal platform fees and Monthly subscription compared to traditional platforms, with full transparency and no hidden charges." 
    },
    { 
      q: "How fast can I go live on Crevings?", 
      a: "You can go live in just a few minutes. No long approval process — start accepting orders almost instantly." 
    },
    { 
      q: "Will I actually get orders?", 
      a: "Your restaurant is shown to nearby customers based on location and demand. We also provide tools like offers and visibility boosts to help you get your first orders faster." 
    },
    { 
      q: "When do I receive my payments?", 
      a: "Your earnings are tracked in real-time, and payouts are transferred directly to your registered bank account.\nWe offer flexible payout cycles so you can choose what works best for your business:\n• T+0 → Same day payout\n• T+1 → Next day payout\n• T+7 → Weekly payout" 
    },
    { 
      q: "What documents are required to start?", 
      a: "You can start with basic details. Documents like FSSAI can be added later to unlock full features and better visibility." 
    },
    { 
      q: "How does GST work on the platform?", 
      a: "GST is handled automatically based on your selected category (prepared food, MRP items, or both). You don’t need to manage complex calculations manually." 
    },
    { 
      q: "Is the app easy to use for my staff?", 
      a: "Yes. The app is designed to be simple and fast, with real-time order updates and an easy-to-use kitchen system." 
    },
    { 
      q: "What support do I get after joining?", 
      a: "You get access to support and a dedicated relationship manager to help you with setup, operations, and growth." 
    }
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4 text-primary-500" />
            <span>Got questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight text-balance">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Questions</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Crevings.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed whitespace-pre-line">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function WhoWeAre() {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-6">
            <Info className="w-4 h-4 text-primary-500" />
            <span>Who We Are</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-balance max-w-5xl mx-auto leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            Crevings is a food delivery platform built on a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">full-stack infrastructure</span> designed for modern food businesses.
          </h2>
          <p className="mt-8 text-lg font-medium md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From POS and order management to delivery and customer acquisition, Crevings helps food partners run and scale their business with complete control.
          </p>
        </div>
      </div>
    </section>
  );
}

function FounderNote() {
  return (
    <section className="py-16 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 border border-gray-200 rounded-[2rem] p-6 md:p-8 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start relative z-10">
            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400"
                alt="Amanat Prakash"
                className="w-full h-full object-cover rounded-2xl border border-gray-200"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Founder’s Note</h2>
              <div className="space-y-3 text-base text-gray-600 leading-relaxed">
                <p>
                  Running a restaurant is already hard enough. You shouldn’t have to juggle five different softwares just to manage orders, menus, payments, and customers.
                </p>
                <p>
                  We built this platform to simplify everything into one place. No switching tabs, no missed orders, no unnecessary complexity. Just a clean, reliable system that lets you focus on what actually matters — your food and your customers.
                </p>
                <p className="font-medium text-gray-900">
                  Because technology should reduce chaos, not add to it.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-200">
                <p className="font-bold text-gray-900 text-lg">Amanat Prakash</p>
                <p className="text-primary-600 font-medium text-sm">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const [activeTab, setActiveTab] = useState('operations');

  const categories = {
    operations: {
      title: "Operations & Management",
      icon: Settings,
      benefits: [
        { title: "Staff Management", desc: "Add and give access to staff to manage your outlet securely." },
        { title: "Owner Dashboard", desc: "A separate, centralized dashboard to manage multiple outlets effortlessly." },
        { title: "Inventory Management", desc: "Keep track of your stock and supplies in real-time." },
        { title: "Waiter App", desc: "Empower your staff with a dedicated app for seamless table service." },
        { title: "Crevings Store", desc: "Order kitchen items, packaging materials, and more directly from our partner store." }
      ]
    },
    ordering: {
      title: "Ordering & POS",
      icon: ShoppingBag,
      benefits: [
        { title: "Offline POS", desc: "Record and manage all your offline sales through a robust POS system." },
        { title: "QR Based Ordering", desc: "Enable offline QR-based ordering for a contactless dining experience." },
        { title: "Crevings Marketplace", desc: "Offer dine-in, takeaway, delivery, and table booking on our platform." },
        { title: "Delivery Network", desc: "Manage the delivery order process through Crevings' own delivery network." },
        { title: "Upselling Engine", desc: "Automatically suggest add-ons and combos to increase ticket size." }
      ]
    },
    customer: {
      title: "Customer Management",
      icon: Users,
      benefits: [
        { title: "Customer Database", desc: "Inbuilt database management for both offline and online customers." },
        { title: "Customer Profiling", desc: "Divide customer information into different groups for targeted engagement." },
        { title: "Customer Feedback", desc: "Collect and manage feedback from both Google and the Crevings platform." },
        { title: "Guest Profiles", desc: "Build detailed profiles of your customers' preferences and history." }
      ]
    },
    marketing: {
      title: "Marketing & Loyalty",
      icon: Megaphone,
      benefits: [
        { title: "Custom Loyalty Program", desc: "Create and manage loyalty programs tailored to your brand." },
        { title: "Email Campaigns", desc: "Reach out to your customers directly with integrated email marketing." },
        { title: "Virtual Wallet", desc: "Provide a virtual wallet for customers to manage online order money." },
        { title: "WhatsApp & SMS API", desc: "Automate marketing with built-in messaging APIs and custom branding." }
      ]
    },
    analytics: {
      title: "Analytics & Insights",
      icon: BarChart3,
      benefits: [
        { title: "Locality Insights", desc: "Understand your neighborhood demographics and ordering patterns." },
        { title: "Sales Insights", desc: "Get actionable insights into your daily, weekly, and monthly sales." },
        { title: "Detailed Analytics", desc: "Dive deep into comprehensive sales analytics to drive growth." },
        { title: "Downloadable Reports", desc: "Export multiple reports including Sales, Analytics, and Finance." }
      ]
    },
    support: {
      title: "Support & Integrations",
      icon: HeadphonesIcon,
      benefits: [
        { title: "Seamless Integrations", desc: "Connect with Zomato, Swiggy, Magicpin, KDS, and many more." },
        { title: "On-Call & Chat Support", desc: "Get immediate assistance with our dedicated on-call and on-chat support." },
        { title: "Relationship Manager", desc: "Work with a dedicated relationship manager focused on your success." }
      ]
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-6">
            <LayoutDashboard className="w-4 h-4 text-primary-500" />
            <span>End-to-End Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Everything</span> in One Place
          </h2>
        </div>
        
        <div className="relative mb-12 -mx-4 sm:mx-0">
          <div className="flex overflow-x-auto hide-scrollbar gap-4 px-4 sm:px-0 pb-4 snap-x snap-mandatory">
            {Object.entries(categories).map(([key, category]) => {
              const Icon = category.icon;
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap snap-start shrink-0 ${
                    isActive 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 border border-primary-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.title}
                </button>
              );
            })}
          </div>
          {/* Gradient masks for smooth scrolling edges on mobile */}
          <div className="absolute top-0 bottom-4 left-0 w-8 bg-gradient-to-r from-white to-transparent sm:hidden pointer-events-none"></div>
          <div className="absolute top-0 bottom-4 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:hidden pointer-events-none"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {categories[activeTab as keyof typeof categories].benefits.map((b, i) => (
              <motion.div 
                key={`${activeTab}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group p-8 rounded-[2rem] bg-gray-50 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary-600/20 border border-primary-500/20 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Footer({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-primary-600">
              <Logo className="h-12 w-auto" />
            </div>
            <div className="text-gray-600 text-sm leading-relaxed mb-6 space-y-4">
              <p className="font-semibold text-gray-900">CREVINGS MARKETPLACE PRIVATE LIMITED</p>
              <p>
                CORPORATE ADDRESS : Innov8 , Lower Ground Floor, Saket Salcon, Rasvilas, next to Select Citywalk Mall, Saket District Centre, District Centre, Sector 6, Pushp Vihar, New Delhi, Delhi 110017
              </p>
              <div className="space-y-1">
                <p>CIN : U63122DL2025PTC456623</p>
                <p>GST : 07AANCC1790R1ZV</p>
                <p>FSSAI : 13325999000746</p>
              </div>
              <div className="space-y-1 pt-2">
                <p>Contact us : <a href="mailto:help@crevings.com" className="text-primary-600 hover:text-primary-700">help@crevings.com</a></p>
                <p>For legal : <a href="mailto:legal@crevings.com" className="text-primary-600 hover:text-primary-700">legal@crevings.com</a></p>
              </div>
            </div>
            <div className="flex gap-4 mb-8">
              <a href="https://www.instagram.com/mycrevings?igsh=ODU5dm44YnE1MGRz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-primary-500 hover:bg-gray-100 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/crevings/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-primary-500 hover:bg-gray-100 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <a href="https://wa.me/918678842995" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#25D366] text-white px-4 py-2.5 rounded-xl hover:bg-[#20bd5a] transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none mb-1 text-green-100">Contact us on</div>
                  <div className="text-sm font-semibold leading-none">WhatsApp</div>
                </div>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setCurrentPage('food')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Food Partner</button></li>
              <li><button onClick={() => setCurrentPage('delivery')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Delivery Partner</button></li>
              <li><button onClick={() => setCurrentPage('cities')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Cities we are available in</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Customer Policies</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setCurrentPage('customerprivacypolicy')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-left">Consumer Privacy &amp; Data Deletion Policy</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Crevings Marketplace Pvt. Ltd. All rights reserved.
          </div>
         
        </div>
      </div>
    </footer>
  );
}

function ImageGeneratorModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState('1K');
  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError('');
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: prompt }]
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
            imageSize: size
          }
        }
      });
      
      let imgUrl = '';
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          imgUrl = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }
      if (imgUrl) {
        setResultImage(imgUrl);
      } else {
        setError('No image generated. Please try a different prompt.');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to generate image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-50 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-gray-50 border border-gray-200 rounded-3xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500/20 text-primary-600 rounded-xl flex items-center justify-center border border-primary-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">AI Marketing Studio</h3>
              <p className="text-sm text-gray-600">Generate high-quality images for your menu and ads</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 flex-1 overflow-y-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What do you want to generate?</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. A delicious gourmet burger with melted cheese and crispy fries on a wooden table, professional food photography, cinematic lighting"
                className="w-full h-32 p-4 bg-white border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none transition-all placeholder:text-gray-600"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image Quality</label>
              <div className="flex gap-3">
                {['1K', '2K', '4K'].map(s => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium border transition-all ${
                      size === s 
                        ? 'bg-primary-600/20 border-primary-500/50 text-primary-600' 
                        : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 text-red-400 text-sm rounded-xl border border-red-500/20">
                {error}
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
              className="w-full bg-primary-600 hover:bg-primary-500 disabled:bg-primary-100 disabled:text-primary-400 text-white font-medium py-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-auto"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ImageIcon className="w-5 h-5" />}
              {loading ? 'Generating...' : 'Generate Image'}
            </button>
          </div>

          <div className="w-full md:w-1/2 bg-white rounded-2xl border border-gray-200 flex items-center justify-center overflow-hidden min-h-[300px]">
            {resultImage ? (
              <div className="relative w-full h-full group">
                <img src={resultImage} alt="Generated" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a href={resultImage} download="crevings-ad.png" className="bg-black text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100">
                    <Download className="w-4 h-4" /> Download
                  </a>
                </div>
              </div>
            ) : (
              <div className="text-center p-8 text-gray-500">
                <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-sm">Your generated image will appear here</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}



function DeliverySteps() {
  const steps = [
    { num: "01", title: "Download app", desc: "Get the Crevings Partner app from the Play Store." },
    { num: "02", title: "Fill the onboarding form", desc: "Submit your basic details and required documents." },
    { num: "03", title: "Get the orders", desc: "Start receiving delivery requests and earning instantly." },
  ];

  return (
    <section className="py-32 bg-white text-gray-900 overflow-hidden relative border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-balance leading-none">
            Start delivering in hours.<br/><span className="text-primary-500">Not days.</span>
          </h2>
          <p className="text-gray-600 text-xl text-balance">We've eliminated the friction so you can focus on what you do best: delivering and earning.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-0 group"
            >
              <div className="absolute -left-4 md:-left-8 -top-16 text-[140px] font-black text-primary-500/10 leading-none select-none pointer-events-none group-hover:text-primary-500/20 transition-colors duration-500">
                {s.num}
              </div>
              <div className="relative z-10 md:pl-16 pt-8 border-t border-gray-200 group-hover:border-primary-500/50 transition-colors duration-500">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">{s.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliveryFAQ() {
  const faqs = [
    { q: "Do I need a bike to join?", a: "You can start delivery with your cycle, a bike is not mandatory. If you use a two-wheeler, you need a valid driving license and RC." },
    { q: "How much can I earn?", a: "Earnings depend on the number of deliveries you complete. Top partners earn up to ₹30,000+ per month." },
    { q: "Are there any joining fees?", a: "No, joining Crevings as a delivery partner is completely free. You only pay for the delivery bag and t-shirt." },
    { q: "What are the working hours?", a: "You have complete flexibility. You can choose to work full-time or part-time, whenever you want." }
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4 text-primary-500" />
            <span>Got questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight text-balance">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Questions</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about joining our fleet.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed whitespace-pre-line">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsumerHero() {
  const marqueeTypes = ["Save upto 50% on every order", "0% commission", "No hidden charges", "No surge charge"];
  const marquee = [...marqueeTypes, ...marqueeTypes, ...marqueeTypes, ...marqueeTypes];

  return (
    <section className="pt-32 pb-8 bg-white text-gray-900 relative overflow-hidden flex flex-col items-center border-b border-gray-100">
      <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-primary-50/50 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold mb-10">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            Your Favorite Food, Delivered Fast
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 text-gray-900 leading-[1.1]">
            Get Your Favourite Food <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">At Real prices.</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-700 font-medium mb-12">
             <div className="flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-primary-600" />
               <span>0% Commission</span>
             </div>
             <div className="hidden sm:block text-gray-300">•</div>
             <div className="flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-primary-600" />
               <span>No Hidden Charges</span>
             </div>
             <div className="hidden sm:block text-gray-300">•</div>
             <div className="flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-primary-600" />
               <span>Offline Price Match guarantee</span>
             </div>
          </div>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden bg-gradient-to-r from-primary-50/40 via-primary-100/40 to-primary-50/40 border-y border-primary-100 py-3 flex mt-8 backdrop-blur-sm">
        <motion.div 
          className="flex whitespace-nowrap gap-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
          {marquee.map((text, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-gray-700 font-semibold tracking-wide uppercase text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                {text}
              </span>
              <span className="text-primary-300">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ConsumerWhatWeOffer() {
  const [activeTab, setActiveTab] = useState('delivery');

  const categories = {
    delivery: {
      title: "Delivery",
      icon: Truck,
      benefits: [
        { title: "Fast Delivery", desc: "Get your food delivered to your doorsteps quickly and safely." },
        { title: "Live Tracking", desc: "Track your food in real-time as it makes its way to your doorstep." },
        { title: "Scheduled Ordering", desc: "Plan ahead and schedule your meals for later." }
      ]
    },
    takeaway: {
      title: "Takeaway",
      icon: ShoppingBag,
      benefits: [
        { title: "Order Ahead", desc: "Skip the line and pick up your food on your own schedule." },
        { title: "Zero Wait Time", desc: "Your food is ready when you arrive. Grab and go." },
        { title: "Save on Delivery", desc: "No delivery fees when you pick up your own order." }
      ]
    },
    dineIn: {
      title: "Dine In",
      icon: UtensilsCrossed,
      benefits: [
        { title: "Contactless Ordering", desc: "Scan the QR code and order directly from your phone." },
        { title: "Fast Checkout", desc: "Pay seamlessly from your device without waiting for the check." },
        { title: "Digital Menu", desc: "Browse high-quality images of the food before you order." }
      ]
    },
    booking: {
      title: "Table Booking",
      icon: Users,
      benefits: [
        { title: "Reserve Instantly", desc: "Book a table at your favorite restaurant with zero hassle." },
        { title: "Guaranteed Seating", desc: "Don't wait in lines. Your table is reserved and waiting for you." },
        { title: "Special Requests", desc: "Add notes for special occasions or dietary requirements." }
      ]
    },
    party: {
      title: "Party Booking",
      icon: Sparkles,
      benefits: [
        { title: "Group Events", desc: "Book an entire section or the whole restaurant for your party." },
        { title: "Custom Menu", desc: "Select and customize food requirements for your large group." },
        { title: "Dedicated Support", desc: "Get specialized support for coordinating your event." }
      ]
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-6">
            <LayoutDashboard className="w-4 h-4 text-primary-500" />
            <span>Everything you need</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight text-balance">
            All Your Cravings <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">in One App</span>
          </h2>
        </div>
        
        <div className="relative mb-12 -mx-4 sm:mx-0">
          <div className="flex overflow-x-auto hide-scrollbar gap-4 px-4 sm:px-0 pb-4 snap-x snap-mandatory justify-start sm:justify-center">
            {Object.entries(categories).map(([key, category]) => {
              const Icon = category.icon;
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap snap-start shrink-0 ${
                    isActive 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 border border-primary-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.title}
                </button>
              );
            })}
          </div>
          <div className="absolute top-0 bottom-4 left-0 w-8 bg-gradient-to-r from-white to-transparent sm:hidden pointer-events-none"></div>
          <div className="absolute top-0 bottom-4 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:hidden pointer-events-none"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {categories[activeTab as keyof typeof categories].benefits.map((b, i) => (
              <motion.div 
                key={`${activeTab}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-[2rem] p-8 hover:shadow-xl hover:shadow-primary-900/5 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-6 border border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ConsumerHowItWorks() {
  const steps = [
    { num: "01", title: "Choose a Restaurant", desc: "Explore hundreds of top local restaurants and find what you're craving." },
    { num: "02", title: "Place Your Order", desc: "Select your food, customize it, and check out instantly with 0% extra commission." },
    { num: "03", title: "Fast Delivery", desc: "Track your food in real-time as it makes its way to your doorstep." },
    { num: "04", title: "Enjoy", desc: "Enjoy your favorite food at real prices without the hefty margins." },
  ];

  return (
    <section className="py-32 bg-white text-gray-900 overflow-hidden relative border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-balance leading-none">
            Delivered in minutes.<br/><span className="text-primary-500">Not hours.</span>
          </h2>
          <p className="text-gray-600 text-xl text-balance">We've eliminated the friction so you can focus on enjoying your meal.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-0 group"
            >
              <div className="absolute -left-4 md:-left-8 -top-16 text-[140px] font-black text-primary-500/10 leading-none select-none pointer-events-none group-hover:text-primary-500/20 transition-colors duration-500">
                {step.num}
              </div>
              <div className="relative z-10 md:pl-20 pt-8 border-t border-gray-200 group-hover:border-primary-500/50 transition-colors duration-500">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 tracking-tight">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsumerFAQ() {
  const faqs = [
    { q: "Are the prices really the same as the restaurant menus?", a: "Yes! We guarantee an offline price match. You don't pay the 20-30% higher prices commonly seen on other platforms." },
    { q: "Is there any delivery or hidden charge?", a: "There are absolutely no hidden charges. You only pay for your food and a transparent delivery partner fee if applicable." },
    { q: "How can I book a table for a party?", a: "Select the 'Party Booking' option in our app, choose your restaurant, enter the number of guests and specific requirements, and you're good to go!" },
    { q: "What should I do if my order is late?", a: "You can track your order in real-time. Additionally, our 24/7 dedicated customer support is just a tap away in the app for any assistance." }
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-6 shadow-sm">
            <HelpCircle className="w-4 h-4 text-primary-500" />
            <span>Got questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight text-balance">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Questions</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about ordering on Crevings.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsumerPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <ConsumerHero />
      <ConsumerWhatWeOffer />
      <ConsumerHowItWorks />
      <ConsumerFAQ />
    </div>
  );
}

function DeliveryPartnerPage() {
  const [activeBenefitTab, setActiveBenefitTab] = useState('insurance');

  const deliveryCategories = {
    insurance: {
      title: "Insurance Cover",
      icon: ShieldCheck,
      benefits: [
        { title: "Health Insurance", desc: "₹1 Lakh worth health insurance cover for your well-being." },
        { title: "Accident Insurance", desc: "₹1 Lakh worth accident insurance cover for your safety." },
        { title: "Vehicle Insurance", desc: "₹1 Lakh worth vehicle insurance cover for your peace of mind." },
        { title: "Device Insurance", desc: "₹10,000 worth device insurance cover to protect your smartphone." }
      ]
    },
    wellness: {
      title: "Health & Wellness",
      icon: Users,
      benefits: [
        { title: "Medical Bootcamp", desc: "Free medical bootcamp for you and your family members." },
        { title: "Get Cashback on Medicines", desc: "Upload your medical bill and medicine photo to receive up to 70% cashback (max ₹150 per claim)." }
      ]
    },
    perks: {
      title: "Earnings & Perks",
      icon: Sparkles,
      benefits: [
        { title: "Flexible Payouts", desc: "Daily and weekly payout options available for your convenience." },
        { title: "Exclusive Partner Benefits", desc: "Special discounts and rewards exclusively for Crevings delivery partners." }
      ]
    },
    gear: {
      title: "Safety & Gear",
      icon: ShoppingBag,
      benefits: [
        { title: "Women's Safety Kit", desc: "Specialized safety kits and SOS features for our female delivery partners." },
        { title: "Partner Store", desc: "Order your Crevings t-shirts, jerseys, and delivery bags directly from our store." }
      ]
    }
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white text-gray-900 relative overflow-hidden flex flex-col items-center">
        <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-primary-50/50 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-10">
              <Truck className="w-3.5 h-3.5 text-primary-500" />
              Join the Crevings Fleet
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 text-gray-900 leading-tight">
              Turn Your Time <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Into Earnings.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance mb-12 font-medium">
              Start delivering with Crevings and get paid faster with flexible working hours.
            </p>

          </motion.div>
        </div>

        {/* Animated Movie Strip (Like Food Partner) */}
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-primary-50/40 via-primary-100/40 to-primary-50/40 border-y border-primary-100 py-3 flex mt-12 backdrop-blur-sm">
          <motion.div 
            className="flex whitespace-nowrap gap-8 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-gray-700 font-semibold tracking-wide uppercase text-sm flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                  Earn up to ₹30,000/month • Weekly On-time Payouts • Flexible Timings
                </span>
                <span className="text-primary-300">✦</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Documents Needed */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-6">
              <FileCheck className="w-4 h-4" />
              <span>Get ready to onboard</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Documents you <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">need</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Keep these ready for a quick and seamless onboarding process.</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-[2rem] p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Driving License", icon: IdCard, desc: "Valid two-wheeler license" },
                { title: "Aadhar Card", icon: FileText, desc: "For identity verification" },
                { title: "PAN Card", icon: CreditCard, desc: "For tax purposes" },
                { title: "Bank Details", icon: Landmark, desc: "For your weekly payouts" },
              ].map((doc, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0 border border-primary-100">
                    <doc.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{doc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Why join us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight text-balance">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">join</span> us?
            </h2>
          </div>
          
          <div className="relative mb-12 -mx-4 sm:mx-0">
            <div className="flex overflow-x-auto hide-scrollbar gap-4 px-4 sm:px-0 pb-4 snap-x snap-mandatory justify-start sm:justify-center">
              {Object.entries(deliveryCategories).map(([key, category]) => {
                const Icon = category.icon;
                const isActive = activeBenefitTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveBenefitTab(key)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap snap-start shrink-0 ${
                      isActive 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 border border-primary-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.title}
                  </button>
                );
              })}
            </div>
            {/* Gradient masks for smooth scrolling edges on mobile */}
            <div className="absolute top-0 bottom-4 left-0 w-8 bg-gradient-to-r from-white to-transparent sm:hidden pointer-events-none"></div>
            <div className="absolute top-0 bottom-4 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:hidden pointer-events-none"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {deliveryCategories[activeBenefitTab as keyof typeof deliveryCategories].benefits.map((b, i) => (
                <motion.div 
                  key={`${activeBenefitTab}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="group p-8 rounded-[2rem] bg-gray-50 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary-600/20 border border-primary-500/20 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{b.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <DeliverySteps />



      <DeliveryFAQ />
    </div>
  );
}

function SoftwarePage() {
  return (
    <div className="pt-48 pb-32 text-center min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-20 h-20 bg-primary-50 text-primary-600 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary-500/20">
          <Cloud className="w-10 h-10" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          Apps & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Software</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Powerful POS integrations, KDS systems, and API access for enterprise restaurants. Build your custom tech stack with Crevings.
        </p>
        <button className="bg-primary-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-primary-500 transition-colors">
          Explore APIs
        </button>
      </div>
    </div>
  );
}

function SignupCTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-primary-900/40 to-primary-600/10 border border-primary-500/20 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter mb-8 leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">transform</span> your restaurant?
            </h2>
            <p className="text-xl text-primary-100/80 mb-12 leading-relaxed">
              Join thousands of partners who are growing their business with 0% commission. Setup takes less than 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-primary-600 text-white font-bold py-4 px-10 rounded-full hover:bg-primary-500 transition-all text-lg">
                Become a Partner Today
              </button>
              <button className="w-full sm:w-auto bg-gray-50 text-gray-900 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all border border-gray-200 text-lg">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function AboutHero() {
  return (
    <section className="pt-32 pb-16 bg-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-50/80 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="flex gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold">
              <Users className="w-3.5 h-3.5 text-primary-500" />
              <span>Our Story</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
              Coming Soon
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 leading-[1.1] text-balance">
            Empowering restaurants to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">thrive</span> in the digital age.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-balance leading-relaxed">
            We're on a mission to bring fairness, transparency, and cutting-edge technology to the food delivery ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function AboutUsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Built by restaurant owners, for restaurant owners.
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Crevings started with a simple observation: third-party delivery platforms were taking too much from the very businesses they were supposed to help. With commissions reaching up to 30%, many restaurants were struggling to stay afloat despite high order volumes.
              </p>
              <p>
                We decided to change that. By leveraging modern technology and a fairer business model, we created a platform where restaurants keep 100% of their revenue from direct orders, paying only a small, flat platform fee.
              </p>
              <p>
                Today, we're proud to support thousands of food partners across the country, providing them with the tools they need to manage their operations, market to their customers, and grow their business sustainably.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 mt-8">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400&h=500" alt="Team working" className="rounded-2xl object-cover h-64 w-full" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=400&h=400" alt="Restaurant interior" className="rounded-2xl object-cover h-48 w-full" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=400&h=400" alt="Chef preparing food" className="rounded-2xl object-cover h-48 w-full" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=500" alt="Team collaboration" className="rounded-2xl object-cover h-64 w-full" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutMissionVision() {
  return (
    <section className="py-24 bg-white relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary-50 rounded-[2rem] p-10 md:p-12 relative overflow-hidden group border border-primary-100"
          >
            <div className="w-16 h-16 bg-white text-primary-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Leaf className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower local restaurants and delivery partners by providing a transparent, fair, and technologically advanced platform that helps them grow their businesses without predatory commissions.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-gray-50 rounded-[2rem] p-10 md:p-12 relative overflow-hidden group border border-gray-200"
          >
            <div className="w-16 h-16 bg-white text-gray-900 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To create India's most trusted and partner-friendly food delivery ecosystem, where technology serves as a bridge connecting great food with hungry customers, ensuring everyone in the chain wins.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutTimeline() {
  const events = [
    { year: "2024", title: "The Inception", desc: "Crevings was born from a simple realization: the food delivery ecosystem was broken and unfair to partners." },
    { year: "2025", title: "Building the Platform", desc: "Developed a robust, scalable architecture focusing on zero-commission direct ordering and fair delivery handling." },
    { year: "2025", title: "Initial Partner Onboarding", desc: "Welcomed our first 100 restaurant partners who shared our vision for a fairer marketplace." },
    { year: "2026", title: "Launch and Expansion", desc: "Official launch in Prayagraj, with plans to expand across Uttar Pradesh and beyond." },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Our Journey</h2>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">The milestones that shaped Crevings.</p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent before:left-5 md:before:left-1/2">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary-100 text-primary-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors duration-300 z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-current"></span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-100 transition-all duration-300">
                <div className="flex items-center justify-between space-x-2 mb-2">
                  <h3 className="font-bold text-gray-900 text-xl">{event.title}</h3>
                  <span className="font-mono text-sm text-primary-600 font-semibold bg-primary-50 px-3 py-1 rounded-full shrink-0">{event.year}</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutUsPage() {
  return (
    <div className="font-sans min-h-screen bg-white">
      <AboutHero />
      <AboutUsSection />
      <AboutMissionVision />
      <AboutTimeline />
      <FounderNote />
    </div>
  );
}

function PricingPage() {
  return (
    <div className="min-h-screen pt-16">
      <Pricing />
    </div>
  );
}

function ROICalculatorPage() {
  return (
    <div className="min-h-screen pt-16">
      <Calculator />
    </div>
  );
}

function CitiesPage() {
  const [search, setSearch] = useState("");
  
  const stateData = [
    {
      state: "Bihar",
      cities: [
        {
          name: "Motihari",
          areas: ["All areas"],
          status: "available"
        }
      ]
    },
    {
      state: "Uttar Pradesh",
      cities: [
        {
          name: "Badshahpur",
          areas: ["All areas"],
          status: "available"
        },
        {
          name: "Prayagraj",
          areas: ["Civil Lines", "Chowk", "Katra", "George Town", "Allahapur"],
          status: "coming_soon"
        }
      ]
    }
  ];

  const filteredData = stateData.map(stateObj => {
    const matchedCities = stateObj.cities.filter(city => 
      city.name.toLowerCase().includes(search.toLowerCase()) || 
      city.areas.some(area => area.toLowerCase().includes(search.toLowerCase())) ||
      stateObj.state.toLowerCase().includes(search.toLowerCase()) ||
      city.status.replace('_', ' ').toLowerCase().includes(search.toLowerCase())
    );
    return { ...stateObj, cities: matchedCities };
  }).filter(stateObj => stateObj.cities.length > 0);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 font-sans border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-8">Cities We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Available In</span></h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl text-balance">Find out where Crevings operates and explore the rapidly growing list of cities and areas we serve.</p>
        
        <div className="relative max-w-xl mb-16">
          <MapPin className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search for a city, state, or area..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-14 pr-4 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-gray-900 text-lg outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all font-medium placeholder-gray-400 shadow-sm"
          />
        </div>

        {filteredData.length > 0 ? (
          <div className="space-y-16">
            {filteredData.map((stateObj, idx) => (
              <div key={idx}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary-500" />
                  {stateObj.state}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {stateObj.cities.map((city, cIdx) => (
                    <div key={cIdx} className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg hover:border-primary-200 transition-all duration-300 relative overflow-hidden group">
                       {city.status === 'coming_soon' && (
                         <div className="absolute top-0 right-0 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-bl-xl border-b border-l border-orange-200">
                           COMING SOON
                         </div>
                       )}
                       {city.status === 'available' && (
                         <div className="absolute top-0 right-0 bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1.5 rounded-bl-xl border-b border-l border-primary-200">
                           LIVE NOW
                         </div>
                       )}
                       
                       <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 mt-2">
                         <div className={`w-2 h-2 rounded-full ${city.status === 'available' ? 'bg-primary-500 shadow-[0_0_8px_rgba(0,189,111,0.6)] animate-pulse' : 'bg-orange-400'}`}></div>
                         {city.name}
                       </h3>
                       <div className="flex flex-wrap gap-2">
                         {city.areas.map((area, aIdx) => (
                           <span key={aIdx} className={`px-3 py-1 text-sm font-medium rounded-lg border ${city.status === 'available' ? 'bg-gray-50 text-gray-600 border-gray-100' : 'bg-orange-50 text-orange-700 border-orange-100'}`}>
                             {area}
                           </span>
                         ))}
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-gray-50 rounded-3xl border border-gray-200">
             <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
             <h3 className="text-xl font-bold text-gray-900 mb-2">No locations found</h3>
             <p className="text-gray-500">We couldn't find any state, city, or area matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [hasKey, setHasKey] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPageState] = useState(() => {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('customerprivacypolicy')) {
      return 'customerprivacypolicy';
    }
    return 'food';
  });

    const [currentPage, setCurrentPageState] = useState(() => {
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
    if (path.includes('customerprivacypolicy')) return 'customerprivacypolicy';
    if (path.includes('delivery')) return 'delivery';
    if (path.includes('cities')) return 'cities';
    if (path.includes('roi-calculator')) return 'roi-calculator';
    return 'food';
  });

  const PAGE_PATHS: Record<string, string> = {
    food: '/',
    delivery: '/delivery',
    cities: '/cities',
    customerprivacypolicy: '/customerprivacypolicy',
    'roi-calculator': '/roi-calculator',
  };

  const setCurrentPage = (page: string) => {
    setCurrentPageState(page);
    const path = PAGE_PATHS[page] ?? '/';
    window.history.pushState({}, '', path);
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      if (path.includes('customerprivacypolicy')) setCurrentPageState('customerprivacypolicy');
      else if (path.includes('delivery')) setCurrentPageState('delivery');
      else if (path.includes('cities')) setCurrentPageState('cities');
      else if (path.includes('roi-calculator')) setCurrentPageState('roi-calculator');
      else setCurrentPageState('food');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio?.hasSelectedApiKey) {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      } else {
        setHasKey(true);
      }
    };
    checkKey();
  }, []);

  const consumerPages = ['cities', 'customerprivacypolicy'];
  const isBlueTheme = !consumerPages.includes(currentPage);
  const themeClass = isBlueTheme ? 'theme-blue' : 'theme-green';

  return (
    <div className={`min-h-screen bg-white font-sans text-gray-900 selection:bg-primary-100 selection:text-primary-900 ${themeClass}`}>
      <SEO page={currentPage} />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'food' && (
          <>
            <Hero />
            <RestaurantMetrics />
            <WhoWeAre />
            <Benefits />
            <RequiredDocuments />
            <Steps />
            <FAQ />
          </>
        )}
        {currentPage === 'delivery' && <DeliveryPartnerPage />}
        {currentPage === 'roi-calculator' && <ROICalculatorPage />}
        {currentPage === 'customerprivacypolicy' && <CustomerPrivacyPolicyPage />}
        {currentPage === 'cities' && <CitiesPage />}
      </main>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <AnimatePresence>
        {isModalOpen && <ImageGeneratorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
