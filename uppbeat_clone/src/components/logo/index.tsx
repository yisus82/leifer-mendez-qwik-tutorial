import { component$ } from '@builder.io/qwik';
import Logo from '~/assets/images/logo.svg';

export default component$(() => {
  return (
    <span>
      <img src={Logo} width="200" height="150" alt="Uppbeat logo"/>
    </span>
  );
});