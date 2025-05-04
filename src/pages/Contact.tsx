
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you as soon as possible!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="font-opensans text-xl text-gray-100 max-w-3xl mx-auto">
            Have questions or ready to get started? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-montserrat text-3xl font-bold text-primary mb-6">
                Get In Touch
              </h2>
              <p className="font-opensans text-gray-700 mb-8">
                Fill out the form below and one of our bookkeeping experts will contact you within one business day.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-montserrat font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block font-montserrat font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-montserrat font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block font-montserrat font-medium mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block font-montserrat font-medium mb-2">
                    Service Interested In
                  </label>
                  <Select onValueChange={handleSelectChange} value={formData.service}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly-bookkeeping">Monthly Bookkeeping</SelectItem>
                      <SelectItem value="accounts-payable-receivable">Accounts Payable/Receivable</SelectItem>
                      <SelectItem value="financial-reporting">Financial Reporting</SelectItem>
                      <SelectItem value="payroll">Payroll Services</SelectItem>
                      <SelectItem value="tax-preparation">Tax Preparation</SelectItem>
                      <SelectItem value="business-advisory">Business Advisory</SelectItem>
                      <SelectItem value="other">Other Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-montserrat font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your business and bookkeeping needs..."
                    rows={5}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-hover text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
                <h2 className="font-montserrat text-3xl font-bold text-primary mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 text-secondary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-1">Our Office</h3>
                      <p className="font-opensans text-gray-700">
                        123 Financial Street<br />
                        Suite 456<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 text-secondary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-1">Phone</h3>
                      <p className="font-opensans text-gray-700">
                        (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 text-secondary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-1">Email</h3>
                      <p className="font-opensans text-gray-700">
                        info@ledgerpro.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 text-secondary">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-1">Business Hours</h3>
                      <p className="font-opensans text-gray-700">
                        Monday - Friday: 9:00 AM - 5:00 PM (EST)<br />
                        Saturday & Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-8 rounded-lg text-white">
                <h3 className="font-montserrat font-bold text-xl mb-4">Schedule a Free Consultation</h3>
                <p className="font-opensans mb-6">
                  Not ready to fill out a form? Give us a call to schedule a free 30-minute consultation with one of our bookkeeping experts.
                </p>
                <Button asChild className="bg-white text-secondary hover:bg-gray-100">
                  <a href="tel:5551234567">(555) 123-4567</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-gray-100">
        <div className="h-96 w-full bg-gray-300">
          {/* Replace with actual map if needed */}
          <div className="w-full h-full flex items-center justify-center">
            <p className="font-montserrat text-gray-600">Interactive Map Would Go Here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
