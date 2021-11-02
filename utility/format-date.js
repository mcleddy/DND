"use strict";

function formatDate(date) {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
}

function formatMessageDates(messages) {
    return messages.map(message => {
        return {
            ...message,
            created_at: formatDate(message.created_at)
        };
    });
}

module.exports = {
    formatMessageDates
};