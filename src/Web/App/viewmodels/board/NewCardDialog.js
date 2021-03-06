﻿define(function (require) {
    var dialog = require('plugins/dialog');
    var http = require('plugins/http');

    var NewCard = function (boardId, lanes, lane) {
        this.boardId = boardId;
        this.title = ko.observable();
        this.description = ko.observable();
        this.laneId = ko.observable(lane || lanes[0].id);
        this.lanes = lanes;
    };

    $.extend(NewCard.prototype, {
        close: function () {
            dialog.close(this);
        },
        save: function (card) {
            var self = this;
            return http.put("/api/card", {
                title: self.title(),
                description: self.description(),
                boardId: self.boardId,
                laneId: self.laneId()
            }).then(function(result) {
                return dialog.close(self, card);
            });
        
        }
    });

    return NewCard;
});