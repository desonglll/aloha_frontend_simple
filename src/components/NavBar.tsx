
interface NavBarItem {
    name: string,
    path: string,
}
function NavBar(){
    const navbarItems :NavBarItem[]= [
        {
            name: "Home",
            path: "/",
        }
    ]
    return (
        <>
            <div>
                <ul className={"flex flex-row"}>
                {navbarItems.map((item:NavBarItem) => (
                    <li><a href={item.path}>{item.name}</a></li>
                ))}
                </ul>
            </div>
        </>
    )
}
export default NavBar;