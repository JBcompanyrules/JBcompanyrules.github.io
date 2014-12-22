var buttonWindow = null;
var static;
function  newLevel() {
  var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        try { 
          buttonWindow = new android.widget.PopupWindow();
          var layout = new android.widget.RelativeLayout(activity);
          var button = new android.widget.Button(activity);
          button.setText("Test!");
          button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg) { 
                //The function to run
                  print("Okay that worked");
                }
          }));
          layout.addView(button);
          buttonWindow.setContentView(layout);
          buttonWindow.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
          buttonWindow.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
          buttonWindow.setBackgroundDrawable(new
android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
          buttonWindow.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
        }catch(e){
          print("Button could not be displayed: " + e); 
        }
  }}));
}

function leaveGame() {  
  var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        if(buttonWindow != null) { 
          buttonWindow.dismiss(); 
          buttonwindow = null;     
        }
  }}));
}
