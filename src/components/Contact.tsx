import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShoppingCart,
  MessageSquare
} from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">联系我们</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-200 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            无论您有任何需求或疑问，都欢迎与我们联系，我们将竭诚为您服务
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-8">联系方式</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center mr-4">
                    <ShoppingCart className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">淘宝店铺</h4>
                    <a 
                      href="https://shop.example.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      Marconi工作室
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">电子邮箱</h4>
                    <a 
                      href="mailto:contact@marconi-studio.com" 
                      className="text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      contact@marconi-studio.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">联系电话</h4>
                    <a 
                      href="tel:+8612345678901" 
                      className="text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      +86 123 4567 8901
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center mr-4">
  <MessageSquare className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">微信咨询</h4>
                    <span className="text-gray-400">Marconi_Studio</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">发送咨询</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">您的姓名</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="请输入您的姓名"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">电子邮箱</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="请输入您的电子邮箱"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">咨询主题</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="请输入咨询主题"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">咨询内容</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="请详细描述您的需求或问题..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-gradient-to-r from-amber-400 to-amber-200 hover:from-amber-300 hover:to-amber-100 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  发送咨询
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}