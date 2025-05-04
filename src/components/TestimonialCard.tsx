
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const TestimonialCard = ({ quote, author, position, company }: TestimonialCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="mb-4 text-accent text-4xl">"</div>
        <p className="font-opensans text-gray-700 italic">
          {quote}
        </p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div>
          <p className="font-montserrat font-semibold">{author}</p>
          <p className="text-sm text-gray-600 font-opensans">
            {position}, {company}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
