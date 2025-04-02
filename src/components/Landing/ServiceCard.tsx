import { NeonGradientCard } from '../magicui/neon-gradient-card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="bg-[#c0bdbd] p-1 drop-shadow-xl rounded-xl hover:scale-105 hover:bg-[#3d3d3d] transition"><NeonGradientCard>
      <Icon className="w-8 h-8 mb-4 text-[#b89595]" />
      <h3 className="text-xl text-[#3d3d3d] font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p></NeonGradientCard>
    </div>
  );
}