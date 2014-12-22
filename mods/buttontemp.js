var buttonWindow = null;
function  newLevel() {
  var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        try { 
          buttonWindow = new android.widget.PopupWindow();
          var layout = new android.widget.RelativeLayout(activity);
          var button = new android.widget.Button(activity);
          button.setText("Test!");
          button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg) { //This lets our button run something
                //The function() comes from activity.runOnUiThread()
                  print("Okay that worked");
                }
          }));
          layout.addView(button);//Add our button to our layout
          buttonWindow.setContentView(layout);//Add our layout to our window
          buttonWindow.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
          buttonWindow.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
          //Make our window the same size as the button within
          buttonWindow.setBackgroundDrawable(new
android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
          //The outline of our button's(The window) color
          buttonWindow.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
          //The location of our button on the screen, BOTTOM RIGHT
          //The 0, 0 is the margin size, use this to push it around along those locations
        }catch(problem){
          print("Button could not be displayed: " + problem); //Print our error if we failed to make the button
        }
  }}));
}

function leaveGame() {    //Get rid of it when we leave the world
  var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        if(buttonWindow != null) { //If our window still exists
          buttonWindow.dismiss(); //Remove it from the screen
          buttonwindow = null;     //Reset it
        }
  }}));
}
