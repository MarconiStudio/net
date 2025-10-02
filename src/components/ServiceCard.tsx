import { motion } from 'framer-motion';
import { IconType } from 'lucide-react';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export default function ServiceCard(props: ServiceCardProps) {
  const { title, description } = props;
  const IconComponent = props.icon;
  return (
    <motion.div 
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-amber-500/10 transition-all duration-300 border border-gray-700 hover:border-amber-500/30 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-amber-900/30 to-amber-800/30 mb-6 group-hover:from-amber-900/50 group-hover:to-amber-800/50 transition-colors duration-300">
          <IconComponent className="h-8 w-8 text-amber-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}