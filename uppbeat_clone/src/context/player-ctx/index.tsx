import { createContextId } from '@builder.io/qwik';

export default createContextId<{src:string, play:boolean}>('player-context');