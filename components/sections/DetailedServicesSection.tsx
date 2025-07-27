"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Code,
  Smartphone,
  Cloud,
  TrendingUp,
  Database,
  Shield,
  Zap,
  Bot,
  Workflow,
  Cpu,
} from "lucide-react";

export function DetailedServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      subtitle: "Crafting Digital Experiences",
      description:
        "We create intuitive, visually stunning interfaces that convert visitors into customers. Our design philosophy centers on user-centric experiences that blend aesthetics with functionality.",
      services: [
        "User Experience (UX) Research & Strategy",
        "User Interface (UI) Design & Prototyping",
        "Wireframing & Information Architecture",
        "Design Systems & Style Guides",
        "Usability Testing & Optimization",
        "Mobile-First Responsive Design",
      ],
      techStack: [
        "Figma",
        "Adobe Creative Suite",
        "Sketch",
        "InVision",
        "Miro",
        "Principle",
      ],
      clients: [
        {
          name: "TechFlow Solutions",
          project: "Complete redesign of SaaS dashboard",
          result: "42% increase in user engagement",
        },
        {
          name: "GreenLeaf Organics",
          project: "E-commerce platform design",
          result: "65% boost in conversion rates",
        },
        {
          name: "FinanceFirst Bank",
          project: "Mobile banking app redesign",
          result: "30% reduction in support tickets",
        },
        {
          name: "EduPro Learning",
          project: "Online learning platform UX",
          result: "50% increase in course completion",
        },
      ],
      gradient: "from-pink-500 to-purple-600",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: Code,
      title: "Web Development",
      subtitle: "Building Digital Foundations",
      description:
        "From concept to deployment, we build scalable, performant web applications using cutting-edge technologies. Our development approach ensures your website not only looks great but performs exceptionally.",
      services: [
        "Custom Web Application Development",
        "E-commerce Platform Development",
        "Content Management Systems (CMS)",
        "Progressive Web Apps (PWA)",
        "API Development & Integration",
        "Website Maintenance & Support",
      ],
      techStack: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Python",
        "MongoDB",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Vercel",
      ],
      clients: [
        {
          name: "RetailMax Corporation",
          project: "Full-stack e-commerce platform",
          result: "300% increase in online sales",
        },
        {
          name: "HealthCare Connect",
          project: "Patient management system",
          result: "Streamlined operations for 50+ clinics",
        },
        {
          name: "EventMaster Pro",
          project: "Event booking platform",
          result: "Processed $2M+ in bookings",
        },
        {
          name: "LogiTrack Systems",
          project: "Supply chain management app",
          result: "40% improvement in logistics efficiency",
        },
      ],
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      subtitle: "Mobile-First Solutions",
      description:
        "Native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices. We focus on performance, security, and user engagement.",
      services: [
        "Native iOS & Android Development",
        "Cross-Platform App Development",
        "Mobile App UI/UX Design",
        "App Store Optimization (ASO)",
        "Mobile Backend Development",
        "App Maintenance & Updates",
      ],
      techStack: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "Expo",
        "Redux",
        "GraphQL",
      ],
      clients: [
        {
          name: "FitLife Fitness",
          project: "Personal training app",
          result: "100K+ downloads in 6 months",
        },
        {
          name: "DeliveryDash",
          project: "Food delivery mobile app",
          result: "Serving 25+ cities nationwide",
        },
        {
          name: "StudyBuddy",
          project: "Educational learning app",
          result: "Featured in App Store education category",
        },
        {
          name: "TravelGuide Pro",
          project: "Travel planning application",
          result: "4.8★ rating with 50K+ reviews",
        },
      ],
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      subtitle: "Scalable Infrastructure",
      description:
        "Leverage the power of cloud computing with our comprehensive cloud solutions. We help businesses migrate, optimize, and scale their infrastructure for maximum efficiency and cost-effectiveness.",
      services: [
        "Cloud Migration & Strategy",
        "Infrastructure as Code (IaC)",
        "DevOps & CI/CD Pipelines",
        "Cloud Security & Compliance",
        "Monitoring & Performance Optimization",
        "Disaster Recovery Solutions",
      ],
      techStack: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Terraform",
        "Kubernetes",
        "Docker",
        "Jenkins",
        "Ansible",
      ],
      clients: [
        {
          name: "DataFlow Analytics",
          project: "AWS cloud migration",
          result: "60% reduction in infrastructure costs",
        },
        {
          name: "MediaStream Plus",
          project: "Auto-scaling video platform",
          result: "Handles 1M+ concurrent users",
        },
        {
          name: "SecureVault Systems",
          project: "Multi-cloud backup solution",
          result: "99.99% uptime guarantee achieved",
        },
        {
          name: "InnovateLab",
          project: "Kubernetes orchestration",
          result: "50% faster deployment cycles",
        },
      ],
      gradient: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Bot,
      title: "AI Automation",
      subtitle: "Intelligent Process Automation",
      description:
        "Revolutionize your business operations with cutting-edge AI automation solutions. We create intelligent workflows that reduce manual tasks, increase efficiency, and provide data-driven insights for better decision making.",
      services: [
        "Custom AI Workflow Development",
        "Business Process Automation (BPA)",
        "Intelligent Document Processing",
        "Chatbot & Virtual Assistant Development",
        "Data Pipeline Automation",
        "AI-Powered Analytics & Reporting",
      ],
      techStack: [
        "n8n",
        "Make (Zapier)",
        "OpenAI API",
        "LangChain",
        "Python",
        "TensorFlow",
        "Hugging Face",
        "Airtable",
        "Notion API",
        "Slack API",
      ],
      clients: [
        {
          name: "AutoFlow Logistics",
          project: "End-to-end supply chain automation",
          result: "85% reduction in manual processing time",
        },
        {
          name: "CustomerCare Pro",
          project: "AI chatbot with sentiment analysis",
          result: "70% improvement in response time",
        },
        {
          name: "DataMine Analytics",
          project: "Automated report generation system",
          result: "90% faster business intelligence delivery",
        },
        {
          name: "RecruitAI Solutions",
          project: "Resume screening & candidate matching",
          result: "60% faster hiring process",
        },
      ],
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-500/10",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900" />
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -100]),
            opacity: useTransform(
              scrollYProgress,
              [0, 0.5, 1],
              [0.3, 0.6, 0.2]
            ),
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#a0ff4a]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#a0ff4a]">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep dive into our comprehensive service offerings and discover how
            we can transform your digital presence
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative ${index % 2 === 1 ? "lg:flex-row-reverse" : ""} flex flex-col lg:flex-row items-center gap-16`}
            >
              {/* Service Icon & Info */}
              <div className="lg:w-1/2">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6`}
                >
                  <service.icon className="text-white" size={40} />
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-xl text-[#a0ff4a] mb-6">
                  {service.subtitle}
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Services List */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    What We Offer:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.services.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-[#a0ff4a] rounded-full" />
                        <span className="text-gray-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Technologies We Use:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 ${service.bgColor} border border-white/10 rounded-full text-sm text-white font-medium hover:border-[#a0ff4a]/50 transition-all duration-300`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Client Success Stories */}
              <div className="lg:w-1/2">
                <h4 className="text-2xl font-bold text-white mb-8 text-center">
                  Success Stories
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.clients.map((client, idx) => (
                    <motion.div
                      key={client.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <h5 className="text-lg font-semibold text-white mb-2">
                        {client.name}
                      </h5>
                      <p className="text-gray-300 text-sm mb-3">
                        {client.project}
                      </p>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="text-[#a0ff4a]" size={16} />
                        <span className="text-[#a0ff4a] text-sm font-medium">
                          {client.result}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
