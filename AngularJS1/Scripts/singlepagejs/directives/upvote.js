'use strict';

eventsApp.directive('upvote', function () {
    return {
        restrict: 'E',
        templateUrl: window.location.origin + "/Templates/Directives/UpVote.html",
        scope: {
            //& means a function
            // note that &functioname is not needed because matches the attr upvote="handlerFromController()"
            upvote: "&",
            downvote: "&",
            // using @ means you're expecting a string so if we are going to use @ for count
            // then in the view we should have count="{{session.votecount}}" otherwise if it was count="session.votecount"
            // it will actually use session.votecount as a literal string, so always evaluate it first when using @ {{session.votecount}}
            count: "="
        }
    }
});