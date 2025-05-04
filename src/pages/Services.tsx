
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import { 
  HandCoins, 
  Receipt, 
  FileText, 
  Users, 
  CreditCard, 
  ChartPie, 
  DollarSign,
  Briefcase,
  Settings
} from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const Services = () => {
  const services = [
    {
      icon: <HandCoins size={48} />,
      title: "Monthly Bookkeeping",
      description: "Accurate recording and categorization of all financial transactions to keep your books up-to-date and compliant.",
      benefits: [
        "Transaction categorization and reconciliation",
        "Bank and credit card statement reconciliation",
        "Monthly financial statements",
        "Custom reporting tailored to your needs",
        "QuickBooks or Xero management"
      ]
    },
    {
      icon: <Receipt size={48} />,
      title: "Accounts Payable & Receivable",
      description: "Comprehensive management of your business payments and collections to maintain healthy cash flow.",
      benefits: [
        "Invoice generation and delivery",
        "Payment tracking and collection",
        "Vendor bill management",
        "Payment processing",
        "Aging reports and analysis"
      ]
    },
    {
      icon: <FileText size={48} />,
      title: "Financial Reporting",
      description: "Clear, accurate financial reports that provide insight into your business performance and help with decision-making.",
      benefits: [
        "Balance sheets",
        "Profit and loss statements",
        "Cash flow statements",
        "Custom KPI dashboards",
        "Year-over-year comparisons"
      ]
    },
    {
      icon: <Users size={48} />,
      title: "Payroll Services",
      description: "End-to-end payroll processing that ensures your employees are paid accurately and on time.",
      benefits: [
        "Payroll processing and direct deposit",
        "Tax calculations and withholdings",
        "Year-end W-2 and 1099 preparation",
        "Benefits and deductions management",
        "Compliance with state and federal regulations"
      ]
    },
    {
      icon: <DollarSign size={48} />,
      title: "Tax Preparation",
      description: "Comprehensive tax preparation services to ensure compliance and maximize deductions for your business.",
      benefits: [
        "Business tax return preparation",
        "Estimated tax payment calculations",
        "Tax planning and strategy",
        "IRS representation (if needed)",
        "Year-round tax support"
      ]
    },
    {
      icon: <Briefcase size={48} />,
      title: "Business Advisory",
      description: "Strategic financial guidance to help your business grow and succeed in today's competitive market.",
      benefits: [
        "Budget development and tracking",
        "Cash flow forecasting",
        "Profitability analysis",
        "Growth planning",
        "Business performance reviews"
      ]
    },
    {
      icon: <CreditCard size={48} />,
      title: "Expense Management",
      description: "Systematic tracking and categorization of expenses to maximize tax deductions and improve budgeting.",
      benefits: [
        "Receipt management",
        "Expense categorization",
        "Reimbursement processing",
        "Expense policy compliance",
        "Spending analysis and reporting"
      ]
    },
    {
      icon: <Settings size={48} />,
      title: "Accounting System Setup",
      description: "Professional setup and optimization of your accounting software to streamline your financial processes.",
      benefits: [
        "Software selection assistance",
        "Chart of accounts setup",
        "Integration with other business systems",
        "Data migration from previous systems",
        "Staff training and support"
      ]
    },
    {
      icon: <ChartPie size={48} />,
      title: "Financial Analysis",
      description: "In-depth analysis of your financial data to identify trends, opportunities, and areas for improvement.",
      benefits: [
        "Trend analysis and forecasting",
        "Benchmark comparisons",
        "Margin and pricing analysis",
        "Return on investment calculations",
        "Break-even analysis"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does virtual bookkeeping work?",
      answer: "Virtual bookkeeping works through secure cloud-based platforms. We access your financial information through encrypted software, record and categorize transactions, reconcile accounts, and provide regular financial reports. We communicate via email, phone, and video calls as needed."
    },
    {
      question: "Is virtual bookkeeping secure?",
      answer: "Yes, we use bank-level encryption and follow strict security protocols to protect your financial data. All our systems are password-protected with multi-factor authentication, and we sign confidentiality agreements with all clients."
    },
    {
      question: "What accounting software do you use?",
      answer: "We primarily work with QuickBooks Online and Xero, but we can adapt to other systems if needed. If you're not currently using accounting software, we can help you select and set up the best option for your business."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing depends on the size of your business, transaction volume, and specific services needed. We offer monthly packages starting at $350 for basic bookkeeping, with custom pricing for additional services. Contact us for a personalized quote."
    },
    {
      question: "How often will we communicate?",
      answer: "Communication frequency depends on your needs. At minimum, we provide monthly financial reports and check-ins. Many clients opt for weekly updates, and we're always available for questions or concerns via email or phone."
    },
    {
      question: "Can you help catch up my bookkeeping if I'm behind?",
      answer: "Absolutely! We offer catch-up bookkeeping services for businesses that have fallen behind. We'll organize your financial records, reconcile accounts, and get your books up-to-date so you can start fresh."
    },
    {
      question: "Do I need to provide receipts for all transactions?",
      answer: "For best practices and tax purposes, we recommend keeping receipts for all business expenses. However, we can often work with bank and credit card statements for regular, clearly categorized expenses."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-6">
            Our Bookkeeping Services
          </h1>
          <p className="font-opensans text-xl text-gray-100 max-w-3xl mx-auto">
            Comprehensive virtual bookkeeping solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-montserrat text-3xl font-bold text-primary mb-6">
              Bookkeeping Services Designed for Your Business
            </h2>
            <p className="font-opensans text-lg text-gray-700">
              At LedgerPro, we offer a full range of virtual bookkeeping services to keep your finances organized
              and your business compliant. Our team of certified professionals is dedicated to providing accurate,
              timely, and valuable financial information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                <div className="text-secondary mb-4">{service.icon}</div>
                <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">
                  {service.title}
                </h3>
                <p className="font-opensans text-gray-700 mb-6">
                  {service.description}
                </p>
                <h4 className="font-montserrat font-medium text-secondary mb-3">
                  Key Benefits:
                </h4>
                <ul className="space-y-2 font-opensans">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="text-accent mr-2">•</div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-3xl font-bold text-primary mb-12 text-center">
            Our Bookkeeping Process
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary"></div>
              
              {/* Process steps */}
              <div className="space-y-16">
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                      <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">
                        1. Initial Consultation
                      </h3>
                      <p className="font-opensans text-gray-700">
                        We start by understanding your business, current financial systems, and specific needs to create a customized plan.
                      </p>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-secondary border-4 border-white"></div>
                    <div className="md:w-1/2 md:pl-12">
                      <img 
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500" 
                        alt="Initial consultation" 
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 order-last md:text-right">
                      <img 
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500" 
                        alt="System setup" 
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-secondary border-4 border-white"></div>
                    <div className="md:w-1/2 md:pl-12 order-first">
                      <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">
                        2. System Setup & Onboarding
                      </h3>
                      <p className="font-opensans text-gray-700">
                        We set up or optimize your accounting software, establish secure access protocols, and create a streamlined workflow.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                      <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">
                        3. Monthly Bookkeeping
                      </h3>
                      <p className="font-opensans text-gray-700">
                        We handle all your daily transactions, reconciliations, and financial record-keeping with meticulous attention to detail.
                      </p>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-secondary border-4 border-white"></div>
                    <div className="md:w-1/2 md:pl-12">
                      <img 
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500" 
                        alt="Monthly bookkeeping" 
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 order-last md:text-right">
                      <img 
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500" 
                        alt="Reporting and analysis" 
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-secondary border-4 border-white"></div>
                    <div className="md:w-1/2 md:pl-12 order-first">
                      <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">
                        4. Reporting & Analysis
                      </h3>
                      <p className="font-opensans text-gray-700">
                        We provide regular financial statements and reports with insights to help you make informed business decisions.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                      <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">
                        5. Ongoing Support & Optimization
                      </h3>
                      <p className="font-opensans text-gray-700">
                        We continuously improve your financial processes, provide advice, and adjust our services as your business grows.
                      </p>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-secondary border-4 border-white"></div>
                    <div className="md:w-1/2 md:pl-12">
                      <img 
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500" 
                        alt="Ongoing support" 
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-3xl font-bold text-primary mb-6 text-center">
            Pricing Plans
          </h2>
          <p className="font-opensans text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            We offer flexible pricing options tailored to the size and needs of your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <div className="p-6 bg-gray-50">
                <h3 className="font-montserrat font-bold text-xl text-primary">Starter</h3>
                <div className="mt-4 font-montserrat">
                  <span className="text-3xl font-bold">$350</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="mt-2 text-sm text-gray-600 font-opensans">
                  For small businesses with basic bookkeeping needs
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 font-opensans">
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Monthly bookkeeping</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Bank reconciliation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Basic financial statements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Up to 100 monthly transactions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Monthly check-in call</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild className="w-full bg-primary hover:bg-primary-hover">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl border-2 border-secondary overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-accent text-primary px-4 py-1 font-montserrat font-medium text-sm">
                Popular
              </div>
              <div className="p-6 bg-secondary bg-opacity-10">
                <h3 className="font-montserrat font-bold text-xl text-secondary">Growth</h3>
                <div className="mt-4 font-montserrat">
                  <span className="text-3xl font-bold">$650</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="mt-2 text-sm text-gray-600 font-opensans">
                  For growing businesses with moderate transaction volume
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 font-opensans">
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Everything in Starter</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Up to 250 monthly transactions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Accounts payable/receivable</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Customized reporting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Bi-weekly check-in calls</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild className="w-full bg-secondary hover:bg-secondary-hover">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <div className="p-6 bg-gray-50">
                <h3 className="font-montserrat font-bold text-xl text-primary">Premium</h3>
                <div className="mt-4 font-montserrat">
                  <span className="text-3xl font-bold">$950</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="mt-2 text-sm text-gray-600 font-opensans">
                  For established businesses with complex financial needs
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 font-opensans">
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Everything in Growth</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Up to 500 monthly transactions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Payroll processing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Advanced financial analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Weekly check-in calls</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild className="w-full bg-primary hover:bg-primary-hover">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="font-opensans text-lg text-gray-700 mb-6">
              Need a custom solution? We offer tailored packages for businesses with unique requirements.
            </p>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-3xl font-bold text-primary mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-montserrat font-semibold text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-opensans text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="font-opensans text-lg text-gray-700 mb-6">
              Have more questions? We're happy to help!
            </p>
            <Button asChild className="bg-secondary hover:bg-secondary-hover text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection 
        title="Ready to Streamline Your Bookkeeping?"
        subtitle="Let our expert team take care of your books so you can focus on growing your business."
        buttonText="Get Started Today"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Services;
