import type { QwikMouseEvent } from '@builder.io/qwik';
import { $, component$, useSignal } from '@builder.io/qwik';
import Lofi from '~/assets/images/lofi.jpg';

export const InputList = component$(() => {
  return (
    <div class='bg-gray-100 rounded-b-xl z-10 absolute w-[370px] mt-[-10px]'>
      <ul class='px-2 pt-4 pb-3 flex flex-col gap-3'>
        <li class='uppercase text-sm text-gray-500'>Trending</li>
        <li class='flex gap-3 ease-in duration-75 hover:translate-x-4 cursor-pointer'>
          <div>
            <img
              class='w-[40px] h-[40px] rounded-full object-contain'
              src={Lofi}
              alt='Lofi Beats'
              width={40}
              height={40}
            />
          </div>
          <div class='flex content-center items-center'>
            <span class='font-medium text-xs'>Lofi Beats</span>
          </div>
        </li>
      </ul>
    </div>
  );
});

export default component$(() => {
  const canSearch = useSignal(false);

  const handleDropList = $((event: QwikMouseEvent<HTMLElement>) => {
    const id = (event.target as HTMLElement).id;
    if (id === 'search-input' || id === 'search-button' || id === 'search-icon') {
      canSearch.value = true;
    } else {
      canSearch.value = false;
    }
  });

  return (
    <div window:onClick$={handleDropList} class={{'drop-shadow-lg': canSearch.value}}>
      <div class={{'qwik-search-input': true}}>
        <input
          class='bg-transparent w-full'
          id='search-input'
          placeholder='Search tracks, artists, styles or sound effects'
          type='search'
        />
        <div class='flex justify-center content-center items-center'>
          <button
            class='bg-slate-800 rounded-lg w-2 h-2 flex justify-center content-center items-center'
            id='search-button'
          >
            <i class='text-white uil uil-search' id='search-icon' />
          </button>
        </div>
      </div>
      {canSearch.value ? <InputList /> : null}
    </div>
  );
});