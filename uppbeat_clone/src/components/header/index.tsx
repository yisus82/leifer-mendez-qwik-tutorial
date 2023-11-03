import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import Button from '../button';

export default component$(() => {
  return (
    <header class='h-[76px] p-5 pt-4 flex'>
      <div class='w-full flex'>
        <span>InputSrc</span>
      </div>
      <div class='flex gap-2'>
        <div class='flex gap-2'>
          <Button label="Pricing" color="default" />
          <Button label="Go Premiun" icon="uil-star" color="primary" />
        </div>
        <div class='flex gap-2'>
          <Link href='/auth/login'>
            <span>Avatar</span>
          </Link>
        </div>
      </div>
    </header>
  );
});
