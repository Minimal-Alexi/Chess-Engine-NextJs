import Link from "next/link";
export const DashboardNavbar = () => {
    return (
        <nav className="flex gap-4">
            <Link href={"/dashboard/games"}>My Games</Link>
            <Link href={"/dashboard/users"}>Opponents</Link>
            <Link href={"/dashboard"}>Profile</Link>
        </nav>
    )
}