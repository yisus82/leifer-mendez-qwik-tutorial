import { Slot, component$ } from '@builder.io/qwik';
import Header from '~/components/header';
import Sidebar from '~/components/sidebar';

export default component$(() => {
  return (
    <>
      <Header />
      <Sidebar />
      <Slot />
    </>
  );
});
