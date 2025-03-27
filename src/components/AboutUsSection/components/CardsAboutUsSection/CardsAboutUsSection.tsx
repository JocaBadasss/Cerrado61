import { motion } from 'framer-motion';

interface CardProps {
  iconSrc: string;
  title: string;
  description: string;
  index: number; // Adicionamos um índice para controlar o delay
  classname?: string;
}

export function Card({
  iconSrc,
  title,
  description,
  index,
  classname,
}: CardProps) {
  return (
    <motion.div
      className={`w-3/4 border border-zinc-600 bg-gray-200 rounded-lg lg:p-2  p-4 flex flex-col  lg:flex-row items-center lg:gap-4  ${classname} justify-around `}
      initial={{ opacity: 0, y: 100 }} // Começa fora da tela, como no slideInBottom
      whileInView={{ opacity: 1, y: 0 }} // Fica visível e sobe
      transition={{
        duration: 0.6,
        ease: 'easeInOut',
        delay: index * 0.3, // Delay progressivo entre os cards
      }}
      viewport={{ once: true }}
    >
      <div className='flex flex-row items-center lg:gap-4 '>
        <img
          src={iconSrc}
          alt={`Ícone de ${title}`}
          className='lg:w-20 lg:h-20 w-14 h-14'
        />
      </div>

      <div className='flex items-center flex-col gap-2'>
        <h3 className='text-xl font-bold text-gray-800'>{title}</h3>
        <p className='text-sm text-zinc-700 text-center font-roboto min-h-[3.75rem] lg:min-h-min lg:min-w-[50rem]'>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
