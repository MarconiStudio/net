export default function Logo({ size = 24 }: { size?: number }) {
  return (
    <img 
      src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Marconi%20Studio%20logo%2C%20circular%20design%2C%20golden%20outer%20ring%2C%20signal%20waves%2C%20blue%20%E6%9F%B1%E7%8A%B6%E5%9B%BE&sign=769de78c9d5a639a44069853d8082a1b" 
      alt="Marconi Studio Logo" 
      width={size} 
      height={size}
      className="transition-transform duration-500 hover:scale-110 object-contain"
    />
  );
}