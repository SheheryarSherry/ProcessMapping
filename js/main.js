WinJS.UI.processAll().done(function () {
    var splitView = document.querySelector(".splitView").winControl;
    new WinJS.UI._WinKeyboard(splitView.paneElement); // Temporary workaround: Draw keyboard focus visuals on NavBarCommands
});
WinJS.Namespace.define("Sample", {
    modes: {
        play: {
            icon: "play",
            label: "Play",
            tooltip: "Play this song"
        },
        pause: {
            icon: "pause",
            label: "Pause",
            tooltip: "Pause this song"
        }
    },
    currentMode: null,
    togglePlayPause: WinJS.UI.eventHandler(function (ev) {
        var status = document.querySelector(".status");
        Sample.currentMode = (Sample.currentMode === Sample.modes.play) ? Sample.modes.pause : Sample.modes.play;
        var command = ev.currentTarget;
        if (command.winControl) {
            status.textContent = command.winControl.section + " command " + command.winControl.label + " was pressed";
            command.winControl.label = Sample.currentMode.label;
            command.winControl.icon = Sample.currentMode.icon;
            command.winControl.tooltip = Sample.currentMode.tooltip;
        }
    }),
    outputCommand: WinJS.UI.eventHandler(function (ev) {
        var status = document.querySelector(".status");
        var command = ev.currentTarget;
        if (command.winControl) {
            var label = command.winControl.label || command.winControl.icon || "button";
            var section = command.winControl.section || "";
            var msg = section + " command " + label + " was pressed";
            status.textContent = msg;
        }
    })
});
Sample.currentMode = Sample.modes.play;

WinJS.UI.processAll();
var myData = new WinJS.Binding.List([
        { title: "Start/End", text: "Low-fat frozen yogurt", picture: "/images/shape.png" },
        { title: "Process", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
        { title: "Condition", text: "Gelato", picture: "/images/fruits/60Mint.png" },
       
]);
WinJS.Namespace.define("Sample.ListView", {
    data: myData
});
WinJS.UI.processAll();