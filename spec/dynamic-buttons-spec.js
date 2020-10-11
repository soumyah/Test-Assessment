describe("Dynamic Buttons", function () {
    let dynamicButtons = jasmine.createSpy('DynamicButtons');
    dynamicButtons(12, function () {
        return true;
    });
    let addEventListener = jasmine.createSpy(document.addEventListner);
    addEventListener('DOMContentLoaded', function () {
        return true;
    });
    let buttons = jasmine.createSpy('button');
    let i = 5;
    buttons(i, function () {
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
        expect(buttons).toHaveBeenCalledWith(5, jasmine.any(Function));
    });
    it('When the button method called, get the text of the button', function () {
        const elementMock = {
            innerHTML: 'Button 1'
        };
        buttons(1);
        spyOn(document, 'getElementById').and.returnValue(elementMock);
        expect(document.getElementById('dynamic-buttons').innerHTML).toBe('Button 1');
    });
    it('When the button method called, append the button to the dynamic_button id', function () {
        jasmine.createSpy(document.getElementById('dynamic-buttons'), 'appendChild').and.returnValue(null);
        buttons(1);
        expect(document.getElementById('dynamic-buttons')).toEqual(null);
    });
});