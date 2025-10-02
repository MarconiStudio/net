import Logo from './Logo';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Logo size={32} />
              <span className="ml-2 text-xl font-bold text-white">Marconi工作室</span>
            </div>
            <p className="text-gray-400 text-sm">
              专业电子工程解决方案提供商
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">服务</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">电子方案定制</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">电子产品开发</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">设计技术支持</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">单片机开发</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">公司</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">关于我们</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">联系我们</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">服务流程</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">技术博客</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">淘宝店铺: Marconi工作室</li>
              <li className="text-gray-400 text-sm">邮箱: contact@marconi-studio.com</li>
              <li className="text-gray-400 text-sm">电话: +86 123 4567 8901</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Marconi工作室. 保留所有权利.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              <span className="sr-only">淘宝店铺</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C6.052 16.672 5.339 15.681 5.339 12.53c0-3.151.713-4.142 2.822-4.386 2.099-.244 6.782-.244 8.883 0 2.109.244 2.822 1.235 2.822 4.386 0 3.151-.713 4.142-2.822 4.386z" />
                <path d="M12 9.865c-1.182 0-2.14.958-2.14 2.135s.958 2.135 2.14 2.135 2.14-.958 2.14-2.135-.958-2.135-2.14-2.135zm0 3.202c-.582 0-1.055-.473-1.055-1.067s.473-1.067 1.055-1.067c.582 0 1.055.473 1.055 1.067s-.473 1.067-1.055 1.067z" />
                <path d="M15.364 8.303c-.398 0-.722.324-.722.722s.324.722.722.722c.398 0 .722-.324.722-.722s-.324-.722-.722-.722z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              <span className="sr-only">微信</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              <span className="sr-only">QQ</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.906 16.563c-1.672 1.362-5.028 1.362-6.699 0C6.547 15.198 5.063 13.053 5.063 10.063c0-3.203 2.597-5.8 5.8-5.8s5.8 2.597 5.8 5.8c0 2.99-1.484 5.135-3.156 6.5zm-3.906-6.719c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            本网站内容仅供参考，实际服务内容以淘宝店铺信息为准
          </p>
        </div>
      </div>
    </footer>
  );
}