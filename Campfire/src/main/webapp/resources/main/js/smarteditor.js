let oEditors = []

smarteditor = function() {
   nhn.husky.EZCreator.createInIFrame({
      oAppRef: oEditors,
      elPlaceHolder: "postContent",
      sSkinURI: "/resources/smarteditor/SmartEditor2Skin.html",
      fCreator: "createSEditor2",
      htParams: { fOnBeforeUnload : function() {} }
   })
}

$(document).ready(function() {
   smarteditor()
})



function save() {
   oEditors.getById["postContent"].exec("UPDATE_CONTENTS_FIELD", []);
   const content = document.getElementById("postContent").value;
   return;
}
