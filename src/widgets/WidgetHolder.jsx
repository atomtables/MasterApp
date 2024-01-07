import Widget from "./Widget.jsx";
import WeatherWidget from "./WeatherWidget.jsx";

export default function WidgetHolder(array) {
    return (<>
        <div className="bg-gray-200 max-md:hidden max-lg:w-1/4 max-xl:w-1/5 w-1/6 p-2">
            <WeatherWidget/>
        </div>
    </>)
}