# Testing Routing

## Overview

Now that we've got our routes setup, it's crucial that when we make changes to our application that we don't break any existing route - that's where tests come in!

## Objectives

- Describe routing testing
- Write a test for routes and expect API calls/templates/Controllers

## Instructions

When we test our routes/states we should check that the URL is as we expect, that it's using the correct template and fetching the correct data that it needs.

To get all of our states configuration, we can inject `$state` and use `$state.get` to retrieve the configuration object for that state.

An example test would look like:

```js
describe('Routes', function () {
	var $state;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$state = $injector.get('$state');
	}));

	describe('Settings', function () {
		var state;

		it('should have the correct URL', function () {
			state = $state.get('settings');

			expect(state.url).toEqual('/settings');
		});
	});
});
```

Here we're testing that the URL is correct. We can then test the `templateUrl` too:

```js
describe('Routes', function () {
	var $state;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$state = $injector.get('$state');
	}));

	describe('Settings', function () {
		var state;

		it('should have the correct URL', function () {
			state = $state.get('settings');

			expect(state.url).toEqual('/settings');
		});

		it('should use the correct template', function () {
            expect(state.templateUrl).toEqual('views/settings.html');
        });
	});
});
```

We'd then repeat this for all of our routes. This ensures that all of our routes are correct so that if we accidentally change a URL in the future, we won't be providing a bad user experience to the existing users!