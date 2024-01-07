import './App.css'
import Header from "./Header.jsx";
import WidgetHolder from "./widgets/WidgetHolder.jsx";

export default function App() {
    return (
        <>
            <Header/>
            <div className={"w-full h-[calc(100%-68px)] flex flex-row"}>
                <WidgetHolder/>
                <div className={"m-14 p-16 bg-gray-300 w-full"}>
                    <div className={"text-center text-6xl"}>Welcome, <b>User 1</b></div>
                </div>
            </div>
        </>
    )
}
