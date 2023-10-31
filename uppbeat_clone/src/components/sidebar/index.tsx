import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <nav>
      <ul>
        <li>
          <a href='/home'>Home</a>
        </li>
        <li>
          <a href='/history'>History</a>
        </li>
        <li>
          <a href='/trending'>Trending</a>
        </li>
      </ul>
    </nav>
  );
});
