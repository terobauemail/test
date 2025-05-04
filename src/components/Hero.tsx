
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Expert Virtual Bookkeeping for Your Business
            </h1>
            <p className="font-opensans text-xl mb-8 text-gray-100">
              We handle your books so you can focus on growing your business. Affordable, reliable, and 100% virtual.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-hover text-primary font-medium">
                <Link to="/contact">Schedule a Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/services">Learn About Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" 
                alt="Professional using a laptop for bookkeeping" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
