describe("Dynamic Buttons", function () {
    let dynamicButtons = jasmine.createSpy('DynamicButtons');
    dynamicButtons(12, function () {
        return true;
    });
    let addEventListener = jasmine.createSpy(document.addEventListner);
    addEventListener('DOMContentLoaded', function () {
        return true;
    });
    let buttonTags = jasmine.createSpy('buttonTags');
    let i = 5;
    buttonTags(i, function () {
        return true;
    });
    let removeLabel = jasmine.createSpy('RemoveLabel');
    removeLabel('event', 'elementId', function () {
        return true;
    });
    let validateForm = jasmine.createSpy('ValidateForm');
    validateForm('name', function () {
        return true;
    });
    it('When the page loads, dynamicButtons method should call with n number of arguments', function () {
        expect(dynamicButtons).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
    });
    it('When the document loaded, the document should call the addEventListner', function () {
        dynamicButtons(5);
        expect(addEventListener).toHaveBeenCalledWith('DOMContentLoaded', jasmine.any(Function));
    });
    it('When the document loaded, create n number of buttons/dynamic buttons', function () {
        dynamicButtons(5);
        addEventListener('DOMContentLoaded');
        expect(buttonTags).toHaveBeenCalledWith(5, jasmine.any(Function));
    });
    it('When the button method called, get the text of the button', function () {
        const elementMock = {
            innerHTML: 'Button 1'
        };
        buttonTags(1);
        spyOn(document, 'getElementById').and.returnValue(elementMock);
        expect(document.getElementById('dynamic-buttons').innerHTML).toBe('Button 1');
    });
    it('When the button method called, append the button to the dynamic_button id', function () {
        jasmine.createSpy(document.getElementById('dynamic-buttons'), 'appendChild').and.returnValue(null);
        buttonTags(1);
        expect(document.getElementById('dynamic-buttons')).toEqual(null);
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