import { motion } from 'framer-motion';
import Logo from './Logo';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">关于我们</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-200 mx-auto mb-6 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-800/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-amber-500/20 shadow-xl">
                <Logo size={200} />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Marconi工作室</h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Marconi工作室是一家专注于电子工程领域的专业技术服务提供商，致力于为客户提供高质量的电子方案定制、产品开发与设计技术支持。
              </p>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                我们拥有一支经验丰富的工程师团队，在单片机开发、FPGA应用、硬件电路设计等领域拥有深厚的技术积累，能够满足从消费类到工业级、军工级不同级别产品的开发需求。
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                秉承专业、创新、可靠的服务理念，我们始终以客户需求为导向，为客户提供最优质的解决方案，助力客户在激烈的市场竞争中脱颖而出。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}