export default function Widget({ widgetName, widgetTitle, gradientClasses, children }) {
    /* Boilerplate for a widget. The widget is expected to provide and load its own content. */
    var widget;
    if (widgetTitle == null || widgetTitle === "") {
        widget = widgetName
    } else {
        widget = widgetName + " • " + widgetTitle
    }
    gradientClasses = `w-100 bg-red-50 p-3 rounded-lg ` + gradientClasses
    return (<>
        <div className={gradientClasses}>
            <div className="text-sm uppercase font-light pb-2">
                {widget}
            </div>
            <div>
                {children}
            </div>
        </div>
    </>)
}