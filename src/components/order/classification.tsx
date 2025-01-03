import Button from '../common/button';

export default function Classification() {
  return (
    <section className='flex row gap-1 font-normal p-2'>
      <Button className='h-10 w-24 rounded-full'>파스타</Button>
      <Button className='h-10 w-24 rounded-full'>피자</Button>
      <Button className='h-10 w-24 rounded-full'>사이드</Button>
      <Button className='h-10 w-24 rounded-full'>음료</Button>
      <Button className='h-10 w-24 rounded-full'>맥주</Button>
      <Button className='h-10 w-24 rounded-full'>와인</Button>
    </section>
  );
}
