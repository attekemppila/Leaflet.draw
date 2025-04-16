/**
 * @class L.TsmapUtil
 * @aka TsmapUtil
 */
L.TsmapUtil = {

	// tsmap: listener not found - remove listener only if it exists
	// @method hasListenerInEvents(): boolean
	// Checks to see if listenerFunction exists in eventsArray
	hasListenerInEvents: function (eventsArray, listenerFunction) {
		return eventsArray && eventsArray.some(function(event) { return event.fn === listenerFunction; });
	}
};
