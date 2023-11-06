import { Slot, component$, useContextProvider, useStore } from '@builder.io/qwik';
import Header from '~/components/header';
import Logo from '~/components/logo';
import Sidebar from '~/components/sidebar';
import PlayerContext from '~/context/player-ctx';

export default component$(() => {
  const statePlayer = useStore({src:'', play:false})

  useContextProvider(PlayerContext, statePlayer)

  return (
    <div class='h-[100vh] flex'>
    <div class='w-[256px] fixed '>
      <div class='bg-gray-50 h-[100vh]'>
        <div class='p-6 border-gray-200 border-b'>
          <Logo />
        </div>
        <div class=''>
          <Sidebar />
        </div>
      </div>
    </div>
    <div class='pl-[256px] w-full'>
      <Header />
      <Slot />
    </div>
  </div>
  );
});
