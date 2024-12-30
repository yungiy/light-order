import Link from 'next/link';

export default function MainHeaders() {
  return (
    <header className='flex w-full items-center justify-between border-b border-border bg-white px-4 py-[15px]'>
      <h1 className='text-lg font-bold text-red-600'>
        <Link href={''}>Light Order</Link>
      </h1>
    </header>
  );
}
