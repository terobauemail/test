
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { HandCoins, Receipt, FileText, Users, CreditCard, ChartPie } from "lucide-react";

const Index = () => {
  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Bookkeeping Services
            </h2>
            <p className="font-opensans text-lg text-gray-700 max-w-3xl mx-auto">
              We offer comprehensive virtual bookkeeping services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<HandCoins size={42} />} 
              title="Monthly Bookkeeping" 
              description="Accurate and timely recording of all financial transactions, including income, expenses, and reconciliations."
            />
            <ServiceCard 
              icon={<Receipt size={42} />} 
              title="Accounts Payable/Receivable" 
              description="Management of vendor bills, customer invoices, and payment collections to keep your cash flow healthy."
            />
            <ServiceCard 
              icon={<FileText size={42} />} 
              title="Financial Reporting" 
              description="Clear, detailed financial statements and reports that give you insight into your business performance."
            />
            <ServiceCard 
              icon={<Users size={42} />} 
              title="Payroll Services" 
              description="Complete payroll processing, tax filings, and management of employee benefits and deductions."
            />
            <ServiceCard 
              icon={<CreditCard size={42} />} 
              title="Expense Management" 
              description="Tracking and categorizing business expenses to maximize tax deductions and improve budgeting."
            />
            <ServiceCard 
              icon={<ChartPie size={42} />} 
              title="Financial Analysis" 
              description="Expert analysis of your financial data to identify trends, opportunities, and areas for improvement."
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800" 
                alt="Professional workspace with computer" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Our Virtual Bookkeeping Services?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-montserrat font-semibold text-xl text-secondary mb-2">
                    Expert Team
                  </h3>
                  <p className="font-opensans text-gray-700">
                    Our team consists of certified bookkeepers and accountants with years of industry experience across various business sizes and sectors.
                  </p>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl text-secondary mb-2">
                    Cost-Effective Solution
                  </h3>
                  <p className="font-opensans text-gray-700">
                    Save up to 50% compared to hiring an in-house bookkeeper, with no overhead costs for office space, benefits, or training.
                  </p>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl text-secondary mb-2">
                    Customized Approach
                  </h3>
                  <p className="font-opensans text-gray-700">
                    We tailor our services to your specific business needs, whether you're a startup, small business, or growing enterprise.
                  </p>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl text-secondary mb-2">
                    Secure & Confidential
                  </h3>
                  <p className="font-opensans text-gray-700">
                    We use bank-level encryption and adhere to strict confidentiality protocols to keep your financial data safe and secure.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-secondary hover:bg-secondary-hover text-white">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="LedgerPro transformed our financial management. They took over our messy books and turned them into clear, actionable reports that help us make better business decisions."
              author="Sarah Johnson"
              position="Owner"
              company="Bright Ideas Marketing"
            />
            <TestimonialCard 
              quote="Working with LedgerPro has saved us both time and money. Their team is responsive, detail-oriented, and truly cares about our business success."
              author="Michael Chen"
              position="CEO"
              company="TechStart Solutions"
            />
            <TestimonialCard 
              quote="As a small business owner, I was drowning in paperwork until I found LedgerPro. Now I can focus on growing my business while they handle the numbers with precision."
              author="Jessica Rivera"
              position="Founder"
              company="Coastal Designs"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection 
        title="Ready to Transform Your Bookkeeping?"
        subtitle="Schedule a free consultation today and discover how our virtual bookkeeping services can save you time and money."
        buttonText="Get Started Today"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Index;
