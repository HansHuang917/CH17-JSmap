// 可以左右滑動打開panel
// #product要和data-role="page"的ID相對應
// #right_pa&#left_pa和data-role="panel"的ID相對應
$(document).on("pagecreate","#product",function(){
	$(document).on("swipeleft swiperight","#product",function(e){
	if($(".ui-page-active").jqmData("panel")!=="open"){
		if(e.type==="swipeleft"){
			$("#right_pa").panel("open");
		}else if(e.type==="swiperight"){
			$("#left_pa").panel("open");
		}
	}
});
});
	