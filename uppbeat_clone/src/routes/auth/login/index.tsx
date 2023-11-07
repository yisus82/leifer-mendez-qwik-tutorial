import { $, component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link, useNavigate } from '@builder.io/qwik-city';
import { SignJWT } from 'jose';
import Button from '~/components/button';

const fakeAuthService = async (credentials: { email: string, password: string; }) => {
  const secret = new TextEncoder().encode('mySecretKey');
  const alg = 'HS256';
  const JWT = await new SignJWT(credentials).setProtectedHeader({ alg }).sign(secret);
  console.log('JWT', JWT);
  document.cookie = `uppbeat_token=${JWT}; Secure; SameSite=Strict; path=/`;
};

export default component$(() => {
  const navigate = useNavigate();
  const store = useStore({
    email: '',
    password: '',
  });

  const signIn = $(() => {
    fakeAuthService({email: store.email, password: store.password});
    navigate('/');
  });

  return (
    <div class='h-screen w-full flex justify-center content-center items-center'>
      <form preventdefault:submit onSubmit$={signIn}>
        <div class='grid gap-3 p-3'>
          <input
            value={store.email}
            onInput$={(_event, element) => (store.email = element.value)}
            class='qwik-input'
            type='email'
            name='email'
            placeholder='Email'
          />
          <input
            value={store.password}
            onInput$={(_event, element) => (store.password = element.value)}
            class='qwik-input'
            type='password'
            name='password'
            placeholder='Password'
          />
          <div class='flex gap-2'>
            <Button
              icon='uil-sign-out-alt'
              label='Sign in'
              color='primary'
            />
            <Link href='/'>
              <Button label='Cancel' color='default' />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Uppbeat | Login',
};
