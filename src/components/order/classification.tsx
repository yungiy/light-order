import Button from '../common/button';

export default function Classification() {
  return (
    <section className='flex row gap-1'>
      <Button className='h-10 w-24 rounded-full font-light'>파스타</Button>
      <Button className='h-10 w-24 rounded-full font-light'>피자</Button>
      <Button className='h-10 w-24 rounded-full font-light'>사이드</Button>
      <Button className='h-10 w-24 rounded-full font-light'>음료</Button>
      <Button className='h-10 w-24 rounded-full font-light'>맥주</Button>
      <Button className='h-10 w-24 rounded-full font-light'>와인</Button>
    </section>
  );
}
