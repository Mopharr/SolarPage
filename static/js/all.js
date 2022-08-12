$(window).load(function() {
	var sbWidth=$(window).width();
	function configIframe(){
		
		/*滚动的推荐产品 开始*/
		var demoShownum=4;
		var demoWidth=$('#demo').width();
		var demoLiWidth=(demoWidth-demoWidth*0.04*3)/demoShownum;
		if ( matchMedia( 'only screen and (max-width:767px)' ).matches ) {
			var demoShownum=2;
			var demoWidth=$('#demo').width();
			var demoLiWidth=(demoWidth-demoWidth*0.04*1)/demoShownum;
		} 
		var LiCount=$('#demo #indemo #demo1 ul').children('li').length;
		var MarginW=demoWidth*0.04;
		$('#demo #indemo ul li').css('margin-right',MarginW);
		var demoUlWidth=demoLiWidth*LiCount+MarginW*LiCount;
		$('#demo #indemo ul').width(demoUlWidth);
		$('#demo #indemo ul li').width(demoLiWidth);
		$('#demo #indemo').width(demoUlWidth*2);
		/*滚动的推荐产品 结束*/
	}
	
	configIframe();

	/*窗口改变事件*/
	window.onresize = function () {
		/*window.location.reload();*/
		configIframe();
		
	}

});

//鼠标点击事件
$(".search_bt").click(function(){
  $(".search-box").slideToggle();
});
	

/*网站导航点击事件*/
var menu_flag=0;
$('.btn-menu').click(function(event){
	if(menu_flag==0){     	
		$(this).toggleClass('active');
		$('#nav ul').slideToggle(300);
		menu_flag=1;
	}else{
		$(this).toggleClass('active');
		$('#nav ul').slideToggle(300);
		menu_flag=0;
	 }
	event.stopPropagation();
});

/*联系方式tab切换*/
$(".contact .tags_title .one").hover(function(){
	$(this).removeClass('ron');
	$(".contact .tags_title .two").addClass('ron');
	$(".contact .content2").hide();
    $(".contact .content1").show();
},function(){
    
});
$(".contact .tags_title .two").hover(function(){
	$(this).removeClass('ron');
	$(".contact .tags_title .one").addClass('ron');
	$(".contact .content1").hide();
    $(".contact .content2").show();
},function(){
    
});


/* -----QQ 侧边悬浮 ---- */
$( ".suspension .a").bind("mouseenter", function(){
	var _this = $(this);
	var s = $(".suspension");
	var isService = _this.hasClass("a-service");
	var isServicePhone = _this.hasClass("a-service-phone");
	var isQrcode = _this.hasClass("a-qrcode");
	if(isService){ s.find(".d-service").show().siblings(".d").hide();}
	if(isServicePhone){ s.find(".d-service-phone").show().siblings(".d").hide();}
	if(isQrcode){ s.find(".d-qrcode").show().siblings(".d").hide();}
});
$(".suspension, .suspension .a-top").bind("mouseleave", function(){
	$(".suspension").find(".d").hide();
});
$(".suspension .a-top").bind("mouseenter", function(){
	$(".suspension").find(".d").hide(); 
});
$(".suspension .a-top").bind("click", ".suspension .a-top", function(){
	$("html,body").animate({scrollTop: 0});
});
$(window).scroll(function(){
	var st = $(document).scrollTop();
	var $top = $(".suspension .a-top");
	if(st > 400){
		$top.css({display: 'block'});
	}else{
		if ($top.is(":visible")) {
			$top.hide();
		}
	}
});	   