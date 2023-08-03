let oEditors = []

smarteditor = function() {
   nhn.husky.EZCreator.createInIFrame({
      oAppRef: oEditors,
      elPlaceHolder: "editorTxt",
      sSkinURI: "../smarteditor/SmartEditor2Skin.html",
      fCreator: "createSEditor2",
      htParams: { fOnBeforeUnload : function() {} }
   })
}

$(document).ready(function() {
   smarteditor()
})

function save() {
   oEditors.getById["editorTxt"].exec("UPDATE_CONTENTS_FIELD", []);
   const content = document.getElementById("editorTxt").value;
   return;
}
