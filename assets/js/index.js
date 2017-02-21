$(function () {
    //禁用右键、文本选择功能、复制按键
    $(document).bind("contextmenu",function(){return false;});
    $(document).bind("selectstart",function(){return false;});
    $(document).keydown(function(){return key(arguments[0])});
    //按键时提示警告
    function key(e){
        var keynum;
        if(window.event){
            keynum = e.keyCode; // IE
        }else if(e.which){
            keynum = e.which; // Netscape/Firefox/Opera
        }
        if(keynum == 17){
            alert("禁止复制内容！");
            return false;
        }
    }

	$("body").prepend('<ul class="cb-slideshow"><li><span></span></li><li><span></span></li><li><span></span></li><li><span></span></li><li><span></span></li><li><span></span></li></ul>');
    $("body").prepend('<noscript><iframe src=""></iframe></noscript>');
    //加载Head
	$(".c-head").load("head.html",function(){
		
		//加载页面根据URL不同显示的菜单不同（开始）
		var pathname =  window.location.pathname;
		var hrefs = pathname.split("\/"); 
		var href = hrefs[hrefs.length-1];
		
		var nums,num1,num2;
		if(href.split(".html").length == 1 || href.split(".html")[0] == "index")
		{
			num1 = "home"
		}
		else
		{
			nums = href.split(".html")[0].split("tab")[1].split("-");
			
			num1 = nums[0];
			if(nums.length == 2)
			{
				num2= nums[1];
			}
		}
		$(".c-nav li").each(function(){
			$(this).removeClass("hover");
			$(this).removeClass("active");
		});
		$(".c-nav li[data-hash='"+num1+"']").addClass("active hover");
		
		$(".c-nav li div span a").each(function(){
			$(this).removeClass("hover");
		});
		if(num2)
		{
			$(".c-nav li[data-hash='"+num1+"'] div span a:nth-child("+num2+")").addClass("hover");
		}
		//加载页面根据URL不同显示的菜单不同（结束）
		
		//鼠标经过菜单改变显示
		var hasHover= $(".hover");
		$(".c-nav li").hover(function(){
			$(this).addClass("hover");
			if(!$(this).is(hasHover) )
			{
				hasHover.removeClass("hover");
			}

		},function(){
			$(this).removeClass("hover");
			hasHover.addClass("hover");
		});	 
	});
	//加载footer
    $(".c-foot").load("foot.html");

    //切换tab页面显示
    $(".c-detail-nav li").click(function(){
        var selectedTab = $(this).attr("data-tab");

        $(".c-detail-nav").find("li").removeClass("active").filter('[data-tab="' + selectedTab + '"]').addClass("active"),
            $(".c-detail-content").find(".c-detail-scroll:visible").animate({
                left: "60px",
                opacity: 0
            }, 300, function () {
                $(this).css({display: "none"})
            }),
            $(".c-detail-content").find('.c-detail-scroll[data-tab="' + selectedTab+ '"]').css({
            display: "block",
            visible: "hidden",
            left: "-60px",
            opacity: 0
        }).animate({visible: "visible", left: 0, opacity: 1}, 300, function () {
            $(this).css({display: "block"})
        })
    });

   

    // Initialize the Gallery as image carousel:
    if(document.getElementById('links0'))
	{
		document.getElementById('links0').onclick = function (event) {
			event = event || window.event;
			var target = event.target || event.srcElement,
				link = target.src ? target.parentNode : target,
				options = {index: link, event: event,container: '#blueimp-gallery0'},
				links = this.getElementsByTagName('a');
			blueimp.Gallery(links, options);
		};
	}
    
	if(document.getElementById('links1'))
	{
		document.getElementById('links1').onclick = function (event) {
			event = event || window.event;
			var target = event.target || event.srcElement,
				link = target.src ? target.parentNode : target,
				options = {index: link, event: event,container: '#blueimp-gallery1'},
				links = this.getElementsByTagName('a');
			blueimp.Gallery(links, options);
		};
	}
	
	if(document.getElementById('links2'))
	{
		document.getElementById('links2').onclick = function (event) {
			event = event || window.event;
			var target = event.target || event.srcElement,
				link = target.src ? target.parentNode : target,
				options = {index: link, event: event,container: '#blueimp-gallery2'},
				links = this.getElementsByTagName('a');
			blueimp.Gallery(links, options);
		};
	}
	
	if(document.getElementById('links3'))
	{
		document.getElementById('links3').onclick = function (event) {
			event = event || window.event;
			var target = event.target || event.srcElement,
				link = target.src ? target.parentNode : target,
				options = {index: link, event: event,container: '#blueimp-gallery3'},
				links = this.getElementsByTagName('a');
			blueimp.Gallery(links, options);
		};
	}
	
	if(document.getElementById('links4'))
	{
		document.getElementById('links4').onclick = function (event) {
			event = event || window.event;
			var target = event.target || event.srcElement,
				link = target.src ? target.parentNode : target,
				options = {index: link, event: event,container: '#blueimp-gallery4'},
				links = this.getElementsByTagName('a');
			blueimp.Gallery(links, options);
		};
	}
	
	if(document.getElementById('links5'))
	{
		document.getElementById('links5').onclick = function (event) {
			event = event || window.event;
			var target = event.target || event.srcElement,
				link = target.src ? target.parentNode : target,
				options = {index: link, event: event,container: '#blueimp-gallery5'},
				links = this.getElementsByTagName('a');
			blueimp.Gallery(links, options);
		};
	}
	
	if(document.getElementById('links6'))
	{
		document.getElementById('links6').onclick = function (event) {
			event = event || window.event;
			var target = event.target || event.srcElement,
				link = target.src ? target.parentNode : target,
				options = {index: link, event: event,container: '#blueimp-gallery6'},
				links = this.getElementsByTagName('a');
			blueimp.Gallery(links, options);
		};
	}
	
	if(document.getElementById('links7'))
	{
		document.getElementById('links7').onclick = function (event) {
			event = event || window.event;
			var target = event.target || event.srcElement,
				link = target.src ? target.parentNode : target,
				options = {index: link, event: event,container: '#blueimp-gallery7'},
				links = this.getElementsByTagName('a');
			blueimp.Gallery(links, options);
		};
	}
	
	if(document.getElementById('links8'))
	{
		document.getElementById('links8').onclick = function (event) {
			event = event || window.event;
			var target = event.target || event.srcElement,
				link = target.src ? target.parentNode : target,
				options = {index: link, event: event,container: '#blueimp-gallery8'},
				links = this.getElementsByTagName('a');
			blueimp.Gallery(links, options);
		};
	}

    if(document.getElementById('links9'))
    {
        document.getElementById('links9').onclick = function (event) {
            event = event || window.event;
            var target = event.target || event.srcElement,
                link = target.src ? target.parentNode : target,
                options = {index: link, event: event,container: '#blueimp-gallery9'},
                links = this.getElementsByTagName('a');
            blueimp.Gallery(links, options);
        };
    }

})