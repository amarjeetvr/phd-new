

import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FileSearch, Settings, ShieldCheck, Truck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Requirement",
    description: "Deep dive into project needs and gathering all necessary data points.",
    icon: FileSearch,
    position: { x: 20, y: 50 },
  },
  {
    id: 2,
    title: "Execution",
    description: "Implementing the core research strategy with precision and efficiency.",
    icon: Settings,
    position: { x: 40, y: 30 },
  },
  {
    id: 3,
    title: "Quality Checks",
    description: "Rigorous verification processes to ensure accuracy and compliance.",
    icon: ShieldCheck,
    position: { x: 60, y: 60 },
  },
  {
    id: 4,
    title: "Delivery",
    description: "Final presentation and handover of the complete research outcomes.",
    icon: Truck,
    position: { x: 80, y: 40 },
  },
];

  export default function WorkflowSection() {

  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-24 bg-white overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 tracking-tight mb-4"
          >
            Our Research Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            A methodical, multi-step approach designed to deliver high-quality, actionable insights.
          </motion.p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block relative h-[500px] w-full">
          {/* SVG Path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 500"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Background dashed paths for depth */}
            <path
              d="M 0 250 Q 125 100 250 250 T 500 250 T 750 250 T 1000 250"
              stroke="#3B82F6"
              strokeWidth="1"
              strokeDasharray="6 6"
              opacity="0.1"
              fill="none"
            />
            <path
              d="M 0 260 Q 125 110 250 260 T 500 260 T 750 260 T 1000 260"
              stroke="#3B82F6"
              strokeWidth="1"
              strokeDasharray="6 6"
              opacity="0.1"
              fill="none"
            />
            
            {/* Animated main path */}
            <motion.path
              d="M 0 250 Q 125 100 250 250 T 500 250 T 750 250 T 1000 250"
              stroke="#2563EB"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              opacity="0.4"
              fill="none"
              style={{ pathLength }}
            />
          </svg>

          {/* Milestone Nodes */}
          {steps.map((step, index) => {
            const x = (index + 1) * 200;
            const y = index % 2 === 0 ? 150 : 350;
            
            return (
              <div 
                key={step.id}
                className="absolute"
                style={{ left: `${x}px`, top: `${y}px`, transform: 'translate(-50%, -50%)' }}
              >
                <div className="relative group">
                  {/* Pulse Effect */}
                  <motion.div 
                    animate={{
                      boxShadow: ["0 0 0 0px rgba(59,130,246,0.2)", "0 0 0 12px rgba(59,130,246,0)"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-4 h-4 bg-[#2563EB] rounded-full relative z-10"
                  />
                  
                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`absolute w-64 ${index % 2 === 0 ? 'bottom-12' : 'top-12'} left-1/2 -translate-x-1/2 bg-white p-6 rounded-xl border border-blue-50 shadow-sm hover:shadow-md transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <step.icon className="w-5 h-5 text-[#2563EB]" />
                      </div>
                      <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Step 0{step.id}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex flex-col gap-12 relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-100 before:bg-dashed">
           <div className="absolute left-[11px] top-0 bottom-0 w-[2px] border-l-2 border-dashed border-blue-200" />
           
           {steps.map((step, index) => (
             <motion.div
               key={step.id}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="relative"
             >
               {/* Mobile Node */}
               <div className="absolute -left-[29px] top-2 w-4 h-4 bg-[#2563EB] rounded-full z-10 shadow-[0_0_0_6px_rgba(59,130,246,0.15)]" />
               
               <div className="bg-white p-6 rounded-xl border border-blue-50 shadow-sm">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="p-2 bg-blue-50 rounded-lg">
                     <step.icon className="w-5 h-5 text-[#2563EB]" />
                   </div>
                   <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Step 0{step.id}</span>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                 <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
