export default function Tag({ text }: { text: string }) {
  return (
    <span className='tag bg-zinc-400 bg-opacity-30 px-3 py-2 rounded-full text-sm border'>
      {text}
    </span>
  );
}