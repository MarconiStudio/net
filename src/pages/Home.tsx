export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-amber-400">静态部署验证页面</h1>
        <p className="text-xl text-gray-300 mb-10">这是一个纯静态网页，用于部署验证</p>
        <div className="bg-gray-800/50 p-8 rounded-lg inline-block">
          <p className="text-green-400 mb-4">✓ 静态页面加载成功</p>
          <p className="text-green-400 mb-4">✓ 样式渲染正常</p>
          <p className="text-green-400">✓ 可以进行部署</p>
        </div>
      </div>
    </div>
  );
}