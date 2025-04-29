
import React from 'react';
import { cn } from "@/lib/utils";

interface MethodPillarProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const MethodPillar: React.FC<MethodPillarProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div className={cn("pillar-card flex flex-col items-center", className)}>
      <div className="p-3 mb-4 rounded-full bg-suri-50 text-suri-500">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default MethodPillar;
