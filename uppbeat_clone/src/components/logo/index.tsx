import { component$ } from '@builder.io/qwik';
import logoSrc from '~/assets/images/logo.svg';

export default component$(() => {
  return (
    <span>
      <img src={logoSrc} width="200" height="150" alt="Uppbeat logo"/>
    </span>
  );
});