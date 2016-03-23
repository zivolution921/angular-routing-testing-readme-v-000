angular
    .module('app', ['ui.router'])
	.config(function ($stateProvider) {
		$stateProvider
			.state('settings', {
				url: '/settings',
				templateUrl: 'views/settings.html',
				controller: 'SettingsController'
			})
			.state('settings.user', {
				url: '/user',
				templateUrl: 'views/settings/user.html',
				controller: 'UserSettingsController'
			})
			.state('settings.notifications', {
				url: '/notifications',
				templateUrl: 'views/settings/notifications.html',
				controller: 'NotificationsSettingsController'
			});
	});