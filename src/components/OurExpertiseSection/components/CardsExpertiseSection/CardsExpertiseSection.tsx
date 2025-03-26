import { motion } from 'framer-motion';

interface CardProps {
  iconSrc: string;
  title: string;
  description: string;
  index: number; // Adicionamos um índice para controlar o delay
}

export function Card({ iconSrc, title, description, index }: CardProps) {
  return (
    <motion.div
      className='lg:w-1/3 w-full border border-zinc-600 bg-gray-200 rounded-lg p-6 flex flex-col items-center gap-4 hover:cursor-pointer'
      initial={{ opacity: 0, y: 100 }} // Começa fora da tela, como no slideInBottom
      whileInView={{ opacity: 1, y: 0 }} // Fica visível e sobe
      whileHover={{ scale: 1.05 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
    >
      <img
        src={iconSrc}
        alt={`Ícone de ${title}`}
        className='w-20 h-20'
      />
      <h3
        className='text-xl font-bold text-gray-800'
        aria-label={title}
      >
        {title}
      </h3>
      <p className='text-sm text-zinc-700 text-center font-roboto'>
        {description}
      </p>
    </motion.div>
  );
}
