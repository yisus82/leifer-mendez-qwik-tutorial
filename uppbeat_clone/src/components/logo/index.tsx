import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import Logo from '~/assets/images/logo.svg';

export default component$(() => {
  return (
    <Link href='/'>
      <img src={Logo} width='200' height='150' alt='Uppbeat logo'/>
    </Link>
  );
});