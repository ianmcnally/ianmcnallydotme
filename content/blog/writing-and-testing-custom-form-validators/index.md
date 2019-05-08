---
title: "Writing and testing custom form validators"
date: "2015-04-03"
---

Custom form validators are a powerful feature in Angular.

Say I’ve got a form, and an input for a name. I want the name to be unique from a list of pre-existing names. Shout out to Beatles fans:

//- form.html

<form name\="nameform"\>
    <input name\="nameinput" ng-model\="fifthMember" unique-name-validator current-names\="theBeatles" />
</form\>

//- controller.js
$scope.theBeatles \= \['John', 'George', 'Paul', 'Ringo'\];

### Creating a validator

Take a look at the attribute unique-name-validator and current-names. That’s a reference to the custom validator, which wraps itself in a directive:

angular.module('addABeatle').directive('uniqueNameValidator', function(){
    return {
        require: 'ngModel',
        scope: {
            currentNames: '='
        },
        link: function($scope, \_e, \_a, modelController){
            modelController.$validators.uniqueName \= function(newName){
                return !\_.contains($scope.currentNames, newName);
            };
        }
    };
});

Requiring ngModel gives you access to the model controller that handles the ng-model="fifthBeatles". On that controller, a validator is added. All it is is a function that returns true if the input is valid, false if it’s invalid.

From there, I use the current-names attribute, that gets attached to $scope when I isolate it on the directive, to test if the name is unique ([lodash](http://lodash.com) used here).

### Testing

Testing, after some setup work, is pretty straight forward.

You create an element and $compile it. To get a reference to the input, I leveraged Angular’s behavior of attach forms onto the current $scope.

describe('directive: uniqueNameValidator', function(){
    var $scope, input;

    beforeEach(inject(function($compile, $rootScope){
        $scope \= $rootScope.$new();
        $scope.theBeatles \= \['John', 'George', 'Paul', 'Ringo'\];
        var element \= '<form name="nameform"><input name="nameinput" ng-model="fifthMember" unique-name-validator current-names="theBeatles" /></form>';
        $compile(element)($scope);
        input \= $scope.nameform.nameinput;
    }));

Then the tests become a matter of setting the view’s value, and testing for $valid or $invalid:

    it('marks a unique name $valid', function(){
        input.$setViewValue('Pete Best'); // Beatles dropout!
        $scope.$digest();
        expect(input.$valid).toBe(true);
    });

    it('marks a not unique name $invalid', function(){
        input.$setViewValue('Paul');
        $scope.$digest();
        expect(input.$invalid).toBe(true);
    });

});

And now you’re a hero.
