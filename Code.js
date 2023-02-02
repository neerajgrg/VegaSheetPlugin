let taskPanelView = "taskpanel/TaskpanelView";

function onInstall(e) {
  onOpen(e);
}

function onOpen(e) {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("AdaptiveFormBlock")
    .addItem('ShowFormSideBar', 'showFormSideBar')
    .addToUi();
}

function showFormSideBar() {
    var ui = HtmlService.createTemplateFromFile(taskPanelView).evaluate()
    .setTitle("Adaptive Form")
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SpreadsheetApp.getUi().showSidebar(ui);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}