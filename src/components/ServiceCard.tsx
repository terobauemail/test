
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="h-full transition-transform hover:-translate-y-1">
      <CardHeader className="pb-2">
        <div className="text-secondary mb-3">{icon}</div>
        <CardTitle className="font-montserrat">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base font-opensans">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
