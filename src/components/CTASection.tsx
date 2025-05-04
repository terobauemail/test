
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink 
}: CTASectionProps) => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="font-opensans text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent-hover text-primary font-medium">
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
