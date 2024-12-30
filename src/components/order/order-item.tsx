import Image from 'next/image';
import pasta from '../../../public/pasta.jpg';

export default function OrderItem() {
  return (
    <section className='p-2 my-2 flex border-y border-gray-400'>
      <div className='pr-2'><Image src={pasta} alt='pasta'height={100} width={100}/></div>
      <div>
        <p className='text-base font-mono'>토마토 파스타</p>
        <p className='text-sm text-gray-500'>수제 토마토 소스로 만든 음식입니다.</p>
        <p className='font-bold'>19000원</p>
      </div>
    </section>
  );
}