describe("Sign Up Form ", function () {
    let removeLabel = jasmine.createSpy('RemoveLabel');
    removeLabel('event', 'elementId', function () {
        return true;
    });
    let validateForm = jasmine.createSpy('ValidateForm');
    validateForm('name', function () {
        return true;
    });
    it('When enter the value to the input field then call the removeLabel method', function () {
        expect(removeLabel).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(String), jasmine.any(Function));
    });

    it('When enter the values to the input field then validate the value with the validate form', function () {
        removeLabel('xyz', 'elementId');
        expect(validateForm).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(Function));
    });

    it('When enter the value in any of the input field then validateForm should call', function () {
        expect(validateForm).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(Function));
    });
});