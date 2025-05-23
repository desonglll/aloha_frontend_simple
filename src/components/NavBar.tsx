interface NavBarItem {
  name: string;
  path: string;
}
function NavBar() {
  const navbarItems: NavBarItem[] = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Tweet',
      path: '/tweet',
    },
    {
      name: 'Permission',
      path: '/permission',
    },
    {
      name: 'UserGroup',
      path: '/user_group',
    },
    {
      name: 'Role',
      path: '/role',
    },
  ];
  return (
    <>
      <div>
        <ul className={'flex flex-row'}>
          {navbarItems.map((item: NavBarItem) => (
            <li key={item.path}>
              <a className={'underline text-cyan-600 px-1'} href={item.path}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default NavBar;
