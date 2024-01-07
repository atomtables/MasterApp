import Widget from "./Widget.jsx";

export default function WeatherWidget() {
    return (
        <Widget widgetName={"Weather"} widgetTitle={"Edison, NJ"} gradientClasses={"bg-gradient-to-br from-weather-cyan from-45% to-weather-blue"}>
            <div className="text-3xl flex items-center">
                <span className={"material-icons text-6xl pr-2"}>sunny</span>
                <div className={"flex flex-col"}>
                    <div className={"p-0 leading-none"}>70° F</div>
                    <div className={"text-lg"}>Sunny</div>
                </div>
            </div>
            <div>H: 74° • L: 66°</div>
            <div>0% chance of rain</div>
        </Widget>
    )
}