
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-6">
            About LedgerPro
          </h1>
          <p className="font-opensans text-xl text-gray-100 max-w-3xl mx-auto">
            Virtual bookkeeping experts dedicated to helping small businesses thrive.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat text-3xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 font-opensans text-gray-700">
                <p>
                  LedgerPro was founded in 2015 with a clear mission: to provide small and medium-sized businesses with access to professional bookkeeping services without the overhead cost of hiring full-time staff.
                </p>
                <p>
                  Our founder, Jennifer Martinez, spent over 15 years working as a CPA for large corporations before realizing that many small businesses were struggling with financial management but couldn't afford traditional accounting firms.
                </p>
                <p>
                  Starting with just three clients in the first year, LedgerPro has grown to serve over 200 businesses across the United States, from startups to established companies with multimillion-dollar revenues.
                </p>
                <p>
                  Today, we're proud to be at the forefront of virtual bookkeeping, embracing technology while maintaining the personal touch that our clients value. Our team of certified bookkeepers and accountants work remotely, allowing us to provide excellent service at competitive rates.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800" 
                alt="Team member working on financial reports" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-3xl font-bold text-primary mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat font-semibold text-xl text-secondary mb-3">
                Accuracy & Reliability
              </h3>
              <p className="font-opensans text-gray-700">
                We understand that financial data must be accurate and delivered on time, every time. Your business decisions depend on it.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat font-semibold text-xl text-secondary mb-3">
                Client-First Approach
              </h3>
              <p className="font-opensans text-gray-700">
                We tailor our services to your unique needs, providing personalized solutions and support that grows with your business.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat font-semibold text-xl text-secondary mb-3">
                Transparency
              </h3>
              <p className="font-opensans text-gray-700">
                Clear communication, upfront pricing, and no hidden fees. You'll always know what's happening with your books.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat font-semibold text-xl text-secondary mb-3">
                Continuous Learning
              </h3>
              <p className="font-opensans text-gray-700">
                We stay updated on the latest tax laws, accounting standards, and technologies to provide you with the best service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat font-semibold text-xl text-secondary mb-3">
                Security & Confidentiality
              </h3>
              <p className="font-opensans text-gray-700">
                Your financial data is sensitive. We employ industry-leading security measures to keep your information protected.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat font-semibold text-xl text-secondary mb-3">
                Proactive Support
              </h3>
              <p className="font-opensans text-gray-700">
                We don't just record transactions; we provide insights and identify potential issues before they become problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-3xl font-bold text-primary mb-6 text-center">
            Our Expert Team
          </h2>
          <p className="font-opensans text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Behind every number is a dedicated professional committed to your financial success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400" 
                  alt="Jennifer Martinez, Founder & CEO" 
                  className="w-full h-auto"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-lg">Jennifer Martinez</h3>
              <p className="font-opensans text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400" 
                  alt="Robert Johnson, Head of Bookkeeping" 
                  className="w-full h-auto"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-lg">Robert Johnson</h3>
              <p className="font-opensans text-gray-600">Head of Bookkeeping</p>
            </div>
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400" 
                  alt="Sarah Williams, Tax Specialist" 
                  className="w-full h-auto"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-lg">Sarah Williams</h3>
              <p className="font-opensans text-gray-600">Tax Specialist</p>
            </div>
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400" 
                  alt="Michael Chen, Client Success Manager" 
                  className="w-full h-auto"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-lg">Michael Chen</h3>
              <p className="font-opensans text-gray-600">Client Success Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-3xl font-bold text-primary mb-12 text-center">
            Our Qualifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4">
                {[
                  "Certified Public Accountants (CPA)",
                  "Certified Bookkeepers (CB)",
                  "QuickBooks Certified ProAdvisors",
                  "Xero Certified Advisors",
                  "Members of the American Institute of CPAs",
                  "Members of the National Association of Tax Professionals"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-secondary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="font-opensans">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild className="bg-secondary hover:bg-secondary-hover text-white">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                <span className="font-montserrat font-bold text-lg text-primary">CPA Certified</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                <span className="font-montserrat font-bold text-lg text-primary">QuickBooks Pro</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                <span className="font-montserrat font-bold text-lg text-primary">Xero Partner</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                <span className="font-montserrat font-bold text-lg text-primary">AICPA Member</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection 
        title="Ready to Work With Us?"
        subtitle="Let our expert team handle your bookkeeping needs while you focus on growing your business."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </div>
  );
};

export default About;
