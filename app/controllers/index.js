function changeTheme(e) {
    var theme = e.source.theme;
    
    if(theme === 1){
    	$.btnChange.theme = 2;
    	$.btnChange.title = "Change Blue";
    	
    	$.addClass($.title, "greenTitleBackground"); 
    	$.removeClass($.title, "grayTitleBackground");
		
    }else if(theme === 2){
    	$.btnChange.theme = 3;
    	$.btnChange.title = "Change Gray";
    	$.addClass($.title, "blueTitleBackground"); 
    	$.removeClass($.title, "greenTitleBackground");
    }else{
    	$.btnChange.theme = 1;
    	$.btnChange.title = "Change Green";
    	$.addClass($.title, "grayTitleBackground"); 
    	$.removeClass($.title, "blueTitleBackground");
    }
}
alert(Ti.Platform.version);

$.mainWindow.open();
