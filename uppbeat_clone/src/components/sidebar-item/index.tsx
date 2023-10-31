import {
  $,
  component$,
  useStylesScoped$,
} from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
  
export interface SideBarItemProps {
  name?: string;
  icon?: string;
  route?: string;
}

export default component$(
  ({ name, icon, route }: SideBarItemProps) => {
    useStylesScoped$(SideBarItemStyle);
    const navigation = useNavigate();

    const moveToPage = $(() => {
      if (route) {
        navigation(route);
      }
    });

    return (
      <div onClick$={moveToPage} class='qwik-sidebar-item-component'>
        <i class={`uil ${icon}`} />
        <span class='text-sm'>
          {name}
        </span>
      </div>
    );
  }
);
  
export const SideBarItemStyle = `
  div:hover{
    opacity: 1;
    transform: translateX(20px);
  }
`;
  