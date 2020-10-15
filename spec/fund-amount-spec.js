describe("Fund Amount", function () {
    let isNumeric = jasmine.createSpy('IsNumeric');
    isNumeric('event', function () {
        return true;
    });
    it('When enter the value to the input field then call the isNumeric method', function () {
        expect(isNumeric).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(Function));
    });
});