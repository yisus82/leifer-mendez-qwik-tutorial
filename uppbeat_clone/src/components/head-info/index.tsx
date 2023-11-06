import { component$ } from '@builder.io/qwik';

export interface HeadInfoProps {
  title: string;
}

export default component$(({ title }: HeadInfoProps) => {
  return (
    <div class='flex gap-3 py-10 h-[206px] px-10 justify-around'>
      <h1 class='text-5xl font-black text-black'>{title}</h1>
      <div class='flex flex-col gap-2'>
        <p class='font-black text-lg'>
          Music for creators. No copyright issues.
        </p>
        <p class='font-black text-lg'>
          Upgrade for only $6.99 p/month to unlock everything.
        </p>
      </div>
    </div>
  );
});