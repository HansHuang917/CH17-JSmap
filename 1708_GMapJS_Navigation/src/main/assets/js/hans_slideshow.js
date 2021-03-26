	// 圖片id要補在html的圖片內(最下面)
	// 5000=5秒換一張圖
	// 藝人圖片的陣列(aryArtistSrc)內名稱須備妥圖檔
	$(function(){
			setInterval(slide_shownext,5000)//自動播放圖片
	});

	var slide_index=0;
	var curImgSrc; // 目前取得的藝人圖檔名
	// 藝人圖片
	var aryArtistSrc = new Array("Artist01.jpg", "Artist02.jpg", "Artist03.jpg","Artist04.jpg", "Artist05.jpg", "Artist06.jpg","Artist07.jpg", "Artist08.jpg", "Artist09.jpg","Artist10.jpg");

	function slide_shownext() { // 下一筆
		slide_index ++;
		if (slide_index>9){
			slide_index=0;// 可循環
		}	
		curImgSrc="img/" + aryArtistSrc[slide_index]; // 目前取得的圖檔名稱
		// curArtist=aryArtistName[slide_index]; // 目前取得的藝人名稱
		// curlink=linkweb[slide_index];// 目前取得的網站
		$("#slide_pimg").attr("src",curImgSrc); // 動態顯示圖片，圖片id***
	}