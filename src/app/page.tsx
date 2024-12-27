import Footers from '@/components/layout/footers';
import MainHeaders from '@/components/layout/main-headers';
import SubHeaders from '@/components/layout/sub-headers';


export default function Home() {
  return (
    <>
      <MainHeaders />
      <SubHeaders text='메인로고' />
      <main>메인페이지</main>
      <Footers />
    </>
  );
}
