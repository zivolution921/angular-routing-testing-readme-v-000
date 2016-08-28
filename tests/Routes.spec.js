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