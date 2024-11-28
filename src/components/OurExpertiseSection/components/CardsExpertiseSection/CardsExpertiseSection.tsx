interface CardProps {
  iconSrc: string;
  title: string;
  description: string;
  animationClass: string;
}

export function Card({
  iconSrc,
  title,
  description,
  animationClass,
}: CardProps) {
  return (
    <div
      className={`w-1/3 border border-zinc-600 bg-gray-200 rounded-lg p-6 flex flex-col items-center gap-4 ${animationClass}`}
    >
      <img
        src={iconSrc}
        alt={`Ícone de ${title}`}
        className='w-20 h-20'
      />
      <h3 className='text-xl font-bold text-gray-800'>{title}</h3>
      <p className='text-sm text-zinc-700 text-center font-roboto'>
        {description}
      </p>
    </div>
  );
}
