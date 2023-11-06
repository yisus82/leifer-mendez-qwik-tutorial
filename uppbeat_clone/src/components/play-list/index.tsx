import {
  component$,
  Resource,
  useResource$,
} from '@builder.io/qwik';
import { getData } from '~/api/data';
import PlayerWave from '../player-wave';

export interface PlayListItemProps {
  src: string,
  preview: string,
  name: string,
  artist: string,
  cover: string,
  tags: string[],
  id: number,
}

const PlayListItem = component$(({id, name, artist, cover, tags, src, preview}:PlayListItemProps) => {
  return (
    <div class='group'>
      <div class='group-hover:bg-white transition-all ease-out duration-75 cursor-pointer rounded-tl-full rounded-bl-full p-2 items-center flex'>
        <div class='flex gap-6 w-1/5'>
          <div>
            <img
              class='rounded-full h-[60px] w-[60px] object-cover'
              src={cover}
              alt={`Cover of ${name} by ${artist}`}
              width={60}
              height={60}
            />
          </div>
          <div class='text-sm flex flex-col justify-center'>
            <div class='font-semibold'>{name}</div>
            <div>{artist}</div>
            <div
              class={'text-pink-600 text-xs font-medium transition-opacity ease-in opacity-0 group-hover:opacity-100'}
            >
              More Like this
            </div>
          </div>
        </div>
        <div class='flex content-center items-center gap-2 w-1/4'>
          {tags.map(tag => {
            return (
              <>
                <span
                  class={'group-hover:bg-gray-100 bg-white rounded-2xl text-xs px-2 py-1 h-fit'}
                >
                  {tag}
                </span>
              </>
            );
          })}
        </div>
        <div class='flex gap-6 w-1/2'>
          <div class='flex justify-center items-center w-full'>
            <PlayerWave src={src} preview={preview} id={`wave_${id}`} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default component$(() => {
  const resourceData = useResource$(() => {
    return getData();
  });

  return (
    <div
      class='pl-14 min-h-[calc(100vh_-_206px_-_76px)]'
    >
      <div class='bg-gray-100 rounded-t-2xl'>
        <div class='p-6 py-4 border-gray-200'></div>
        <div class='p-6 flex flex-col gap-2'>
          <Resource value={resourceData} 
          onPending={() => <span>Cargando...</span>} 
          onRejected={() => <span>Error!</span>}
          onResolved={data => data.map((itemProps:PlayListItemProps) => <PlayListItem key={itemProps.id} {...itemProps} />)}
           />
        </div>
      </div>
    </div>
  );
});