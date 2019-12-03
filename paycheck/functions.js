'use strict';

function addEventListener(target, eventName, handler) {
    if (target) {
        if (HTMLCollection.prototype.isPrototypeOf(target)) {
            for (const targetItem of target) {
                targetItem.addEventListener(eventName, handler);
            }
        } else {
            target.addEventListener(eventName, handler);
        }
    }
}