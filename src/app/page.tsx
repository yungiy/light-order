import Footers from '@/components/layout/footers';
import MainHeaders from '@/components/layout/main-headers';
import SubHeaders from '@/components/layout/sub-headers';
import Classification from '@/components/order/classification';
import OrderItem from '@/components/order/order-item';

export default function Home() {
  return (
    <>
      <MainHeaders />
      <SubHeaders text='메인로고' />
      <Classification />
      <OrderItem/>
      <Footers />
    </>
  );
}
