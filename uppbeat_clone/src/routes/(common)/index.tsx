import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import HeadInfo from '~/components/head-info';

export default component$(() => {
  return <>
    <HeadInfo title="Keep creating, keep inspiring 👌" />
  </>;
});

export const head: DocumentHead = {
  title: 'Uppbeat',
};