import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import HeadInfo from '~/components/head-info';
import PlayList from '~/components/play-list';

export default component$(() => {
  return <>
    <HeadInfo title='Keep creating, keep inspiring 👌' />
    <PlayList />
  </>;
});

export const head: DocumentHead = {
  title: 'Uppbeat',
};