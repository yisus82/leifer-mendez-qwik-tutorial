import { component$ } from '@builder.io/qwik';
import GenericAvatar from '~/assets/images/generic_avatar.svg';

export interface AvatarProps {
  src?: string;
  alt: string;
}

export const Avatar = component$(({ src, alt }: AvatarProps) => {
  console.log(GenericAvatar)
  return (
    <div class='w-[40px] h-[40px]'>
      <img class='qwik-avatar'
        src={src ?? GenericAvatar}
        alt={alt}
        width={40}
        height={40}
      />
    </div>
  );
});