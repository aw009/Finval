			var form_data = parseURLIntoObject(window.location.search);
			
			$('a:not([data-toggle])').each(function () {
				var newURL = $(this).attr('href') + window.location.search;
				$(this).attr('href', newURL);
			});

			if (form_data.user_name) {
				var user = {
					id : 2,					
					name : form_data.user_name,
					email : form_data.user_email,
					password : form_data.user_password
				};
			}
						
			if (user) {
				//Put all your code for changing the page if the user is logged in
				$('#log_in').hide();
				$('#sign_up').hide();
			
				$('#greet_user').html('This is for the one and only ' + form_data.user_name +'!');
				if (typeof form_data== 'undefined'){
					$('body').html('Please log in');
				}	
			} else {
				$('#account_info').hide();
			}