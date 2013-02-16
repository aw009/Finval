			var form_data = parseURLIntoObject(window.location.search);
			
			$('a:not([data-toggle])').each(function () {
				var newURL = $(this).attr('href') + window.location.search;
				$(this).attr('href', newURL);
			});

			if (form_data.user_name) {
				var user = {
					name : form_data.user_name,
					email : form_data.user_email,
					phone : form_data.user_phone,
					password : form_data.user_password,
					id : 2
				};
			}
			
			console.log(user);
			
			if (user) {
				//Put all your code for changing the page if the user is logged in
				$('#log_in').hide();
				$('#sign_up').hide();
			

				$('#greet_user').html('Welcome' + form_data.user_name);
				if (typeof form_data== 'undefined'){
					$('body').html('Please log in');
				}
				
			} else {
				$('#account_info').hide();
			}