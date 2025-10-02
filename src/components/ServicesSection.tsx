import ServiceCard from './ServiceCard';
import { 
  Cpu, 
  CircuitBoard, 
  Code, 
  Server, 
  Shield, 
  Smartphone, 
  Factory 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const services = [
    {
      icon: Cpu,
      title: "电子方案定制",
      description: "根据客户需求提供从概念设计到原型验证的完整电子方案定制服务，满足特定功能与性能要求。"
    },
    {
      icon: CircuitBoard,
      title: "电子产品开发",
      description: "提供端到端的电子产品开发服务，包括硬件设计、软件开发、测试验证及生产支持。"
    },
    {
      icon: Code,
      title: "电子设计技术支持",
      description: "为客户提供专业的电子设计技术咨询与支持，解决设计过程中的技术难题。"
    },
      {
        icon: CircuitBoard,
        title: "单片机（嵌入式）开发",
        description: "专注于各类单片机与嵌入式系统开发，实现高效、稳定的控制与数据处理功能。"
      },
    {
      icon: Server,
      title: "FPGA开发",
      description: "提供FPGA架构设计、逻辑开发与验证服务，满足高速信号处理与复杂控制需求。"
    },
    {
      icon: CircuitBoard,
      title: "硬件电路设计",
      description: "专业的硬件电路设计服务，包括原理图设计、PCB Layout、EMC/EMI优化等。"
    },
    {
      icon: Smartphone,
      title: "消费类产品",
      description: "为消费电子产品提供定制化解决方案，注重用户体验与成本控制。"
    },
    {
      icon: Factory,
      title: "工业级产品",
      description: "开发适应工业环境的高可靠性、高稳定性电子产品，满足严苛工作条件要求。"
    },
    {
      icon: Shield,
      title: "军工级产品",
      description: "提供符合军工标准的高可靠性电子产品设计与开发服务，满足极端环境应用需求。"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">我们的服务</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-200 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            提供全方位的电子工程服务，满足不同领域与级别的产品需求
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}