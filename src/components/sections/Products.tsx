import { motion } from 'motion/react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { Eye, Info } from 'lucide-react';

export const Products = () => {
  const products = [
    {
      name: 'X-1 ARBITER',
      type: 'Industrial Robotic Arm',
      image: '/src/assets/images/industrial_robotic_arm_1779118127158.png',
      features: ['6-Axis Precision', '50kg Payload', 'Sub-mm Accuracy'],
      desc: 'The gold standard for high-speed manufacturing and precision assembly.',
    },
    {
      name: 'SENTINEL PRIME',
      type: 'Smart Automation System',
      image: '/src/assets/images/ai_smart_machine_1779118144586.png',
      features: ['AI Diagnostics', 'Real-time Analytics', 'Modular Design'],
      desc: 'An all-in-one smart manufacturing core that thinks as it builds.',
    },
    {
      name: 'CORE OPTIC V3',
      type: 'Vision & Sensor Module',
      image: '/src/assets/images/precision_sensor_detail_1779118163371.png',
      features: ['LiDAR Mapping', 'Thermal Scanners', '360° Vision'],
      desc: 'The most advanced robotic vision system ever engineered for industrial environments.',
    },
  ];

  return (
    <section id="products" className="py-24 bg-white/[0.02]">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-cyan font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
              Flagship Products // 03
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tighter">ENGINEERED FOR SUPREMACY</h2>
            <p className="text-gray-500 text-lg font-light uppercase tracking-[0.1em]">
              The core components of the next industrial revolution.
            </p>
          </motion.div>
          <Button variant="outline" size="md">
            View Full Catalog
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard className="p-0 group hover:border-cyan/30 transition-all duration-500 overflow-hidden flex flex-col h-full bg-black/40">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 scale-105 group-hover:scale-100 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 h-6 px-3 border border-cyan text-cyan text-[8px] font-mono uppercase tracking-widest flex items-center gap-2 glass-panel">
                    <div className="w-1 h-1 bg-cyan animate-pulse" />
                    [ACTIVE_MODEL]
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1 block">
                      {product.type}
                    </span>
                    <h3 className="text-2xl font-extrabold tracking-tight mb-3 uppercase text-white">{product.name}</h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                      {product.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-[9px] font-mono px-2 py-1 bg-white/5 text-gray-500 uppercase tracking-widest"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <Info size={14} /> Specs
                    </Button>
                    <Button variant="secondary" size="sm" glow className="w-full gap-2">
                      <Eye size={14} /> View
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
