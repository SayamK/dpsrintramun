function timer(){
		var t = new Date("15 November, 2018");
		var d = new Date();

		var current_year = d.getYear();
		var target_year = t.getYear();
		var next_year = current_year+1;

		var current_month = d.getMonth();
		var next_month = current_month+1;

		var current_leap_year = 0;

		if(current_year%4==0)
		{
			current_leap_year=1;
		}

		var days=0;

		for(i=next_year;i<target_year;i++)
		{
			if(i%4==0)
				days+=366;
			else
				days+=365;
		}


		var last_month=12;

	//Taking out days remaining in this year
		if(current_year==target_year)
		{
			last_month=t.getMonth();
		}
		for(j=next_month;j<last_month;j++)
		{
			if(j==0)
				days+=31;
			else if(j==1)
			{
				if(current_leap_year==1)
					days+=29;
				else
					days+=28;
			}
			else if(j==2)
				days+=31;
			else if(j==3)
				days+=30;
			else if(j==4)
				days+=31;
			else if(j==5)
				days+=30;
			else if(j==6)
				days+=31;
			else if(j==7)
				days+=31;
			else if(j==8)
				days+=30;
			else if(j==9)
				days+=31;
			else if(j==10)
				days+=30;
			else if(j==11)
				days+=31;
		}

	//Taking out days to elapse in target year
	target_month=t.getMonth();
	if(current_year==target_year)
	{
		target_month=0;
	}
	for(j=0;j<target_month;j++)
		{
			if(j==0)
				days+=31;
			else if(j==1)
			{
				if(current_leap_year==1)
					days+=29;
				else
					days+=28;
			}
			else if(j==2)
				days+=31;
			else if(j==3)
				days+=30;
			else if(j==4)
				days+=31;
			else if(j==5)
				days+=30;
			else if(j==6)
				days+=31;
			else if(j==7)
				days+=31;
			else if(j==8)
				days+=30;
			else if(j==9)
				days+=31;
			else if(j==10)
				days+=30;
			else if(j==11)
				days+=31;
		}

		//Month days
		if(d.getMonth()==t.getMonth())
		{
			console.log("muah");
			for(i=(d.getDate()+1);i<=t.getDate();i++)
				days++;
		}

		else
		{
		//Taking out days remaining in this month
			var current_day = d.getDate();
			var total_days_this = 30;

				if(current_month==0)
					total_days_this=31;
				else if(current_month==1)
				{
					if(current_leap_year==1)
						total_days_this=29;
					else
						total_days_this=28;
				}
				else if(current_month==2)
					total_days_this=31;
				else if(current_month==3)
					total_days_this=30;
				else if(current_month==4)
					total_days_this=31;
				else if(current_month==5)
					total_days_this=30;
				else if(current_month==6)
					total_days_this=31;
				else if(current_month==7)
					total_days_this=31;
				else if(current_month==8)
					total_days_this=30;
				else if(current_month==9)
					total_days_this=31;
				else if(current_month==10)
					total_days_this=30;
				else if(current_month==11)
					total_days_this=31;

			for(i=current_day+1;i<=total_days_this;i++)
			{
				days++;
			}

			//Taking out days remaining in target month
			var target_day = t.getDate();
			var total_days_that = 30;
			target_month = t.getMonth();

				if(target_month==0)
					total_days_that=31;
				else if(target_month==1)
				{
					if(current_leap_year==1)
						total_days_that=29;
					else
						total_days_that=28;
				}
				else if(target_month==2)
					total_days_that=31;
				else if(target_month==3)
					total_days_that=30;
				else if(target_month==4)
					total_days_that=31;
				else if(target_month==5)
					total_days_that=30;
				else if(target_month==6)
					total_days_that=31;
				else if(target_month==7)
					total_days_that=31;
				else if(target_month==8)
					total_days_that=30;
				else if(target_month==9)
					total_days_that=31;
				else if(target_month==10)
					total_days_that=30;
				else if(target_month==11)
					total_days_that=31;


				for(i=1;i<=target_day;i++)
					days++;

		}
//Time Remaining
		//Hours
		var current_hours=d.getHours();
		var hours = 24-(current_hours+1);

		//Minutes
		var current_minutes=d.getMinutes();
		var minutes = 60-(current_minutes+1);

		//Seconds
		var current_seconds=d.getSeconds();
		var seconds = 60-(current_seconds);

		$("#days span").html(days);
		$("#hours span").html(hours);
		$("#minutes span").html(minutes);
		$("#seconds span").html(seconds);
}


$(document).ready(function(){
	var x = setInterval(function(){
		timer();
	},1000)

	$("#l1").click(function(){
		// console.log("chal");
  		var i=$(".first").offset().top;
  		$("body").animate({scrollTop:(i)},1000);
	});

	$("#l2").click(function(){
  		var i=$(".second").offset().top;
  		$("body").animate({scrollTop:(i)},500);
	});

	$("#l3").click(function(){
  		var i=$(".message").offset().top;
  		$("body").animate({scrollTop:(i)},500);
	});

	$("#l4").click(function(){
  		var i=$(".updates").offset().top;
  		$("body").animate({scrollTop:(i)},500);
	});

	$("#l5").click(function(){
  		var i=$("#secretariat").offset().top;
  		$("body").animate({scrollTop:(i)},500);
	});

	$("#l6").click(function(){
  		var i=$(".fourth").offset().top;
  		$("body").animate({scrollTop:(i)},500);
	});

	$("#l7").click(function(){
  		var i=$(".resources").offset().top;
  		$("body").animate({scrollTop:(i)},500);
	});

	$("#l8").click(function(){
			var i=$(".fifth").offset().top;
			$("body").animate({scrollTop:(i)},500);
	});


	$("#l9").click(function(){
 		window.open("register.html","_self");
	});

	$(".pro").click(function() {
		 window.open("http://sayamkanwar.com/","_self");
	});


});
