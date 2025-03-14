import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="bg-[#664D30] p-6 drop-shadow-xl rounded-xl hover:scale-105 transition">
      <Icon className="w-8 h-8 mb-4 text-[#eddbc1]" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}