export default function Header() {
    return (
        <>
            <nav className="p-4 bg-gray-700 dark:bg-gray-300 flex justify-between align-middle">
                <button className="text-2xl text-white dark:text-black">MasterApp</button>
                <button className="text-white dark:text-black bg-green-950 text-xl p-1">User 1</button>
            </nav>
        </>
    )
}