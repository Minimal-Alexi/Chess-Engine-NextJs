import Link from "next/link";
export const PublicNavbar = () => {
    return (
        <nav className="flex gap-4">
            <Link href={"/"}>About Us</Link>
            <Link href={"/login"}>Log In</Link>
            <Link href={"/register"}>Sign Up</Link>
        </nav>
    )
}