// 可以左右滑動換照片
// #home要對應到data-role="page"的ID
// 藝人圖片的陣列(aryArtistSrc)內名稱須備妥圖檔
	$(document).on("pagecreate","#home",function(){
		$(document).on("swipeleft swiperight","#home",function(e){
			if(e.type==="swipeleft"){
				swipe_shownext();
			}else if(e.type==="swiperight"){
				swipe_showprev();
			}
		});
	});


	var swipe_index=0;
	var swipe_curImgSrc; // 目前取得的藝人圖檔名
	
	// 藝人圖片
	var swipe_aryArtistSrc = new Array("Artist01.jpg", "Artist02.jpg", "Artist03.jpg","Artist04.jpg", "Artist05.jpg", "Artist06.jpg","Artist07.jpg", "Artist08.jpg", "Artist09.jpg","Artist10.jpg");

	function swipe_showprev() { // 上一筆
		swipe_index --;
		if (swipe_index<0){
			swipe_index=9;// 可循環
		} 
		swipe_curImgSrc="img/" + swipe_aryArtistSrc[swipe_index]; // 目前取得的圖檔名稱
		// console.log(curImgSrc);常用來看值是否正確
		$("#swipe_pimg").attr("src",swipe_curImgSrc); // 動態顯示圖片，圖片id
	}

	function swipe_shownext() { // 下一筆
		swipe_index ++;
		if (swipe_index>9){
			swipe_index=0;// 可循環
		}	
		swipe_curImgSrc="img/" + swipe_aryArtistSrc[swipe_index]; // 目前取得的圖檔名稱
		$("#swipe_pimg").attr("src",swipe_curImgSrc); // 動態顯示圖片，圖片id***
	}