var Observable	= require("FuseJS/Observable");
var api			= require("assets/js/api");

function goWrite() {
	router.push( 'write' );
}

function goHome() {
	gotoPage( 'home' );
}

function goNotifications() {
	gotoPage( 'notifications' );
}

function goFavourites() {
	gotoPage( 'favourites' );
}

function goPublic() {
	gotoPage( 'publictimeline' );
}

function goSettings() {
	router.push( 'settings' );
}

function gotoPage( _pageid, _pushit ) {

	if ( 0 == arguments ) {
		return;
	}

	if ( 1 == arguments ) {
		var _pushit = false;
	}

	if ( _pushit ) {
		router.push( _pageid );
	} else {
		router.goto( _pageid );
	}

}

// setting this value to true is enough to make the app logout and go back to the splash screen
api.returntosplash.addSubscriber( function( newValue ) {

	if ( true === newValue.value ) {
		api.logOut();
		api.setError( 'You are not logged in' );
		router.goto( 'splash' );
	}

})

module.exports = {
	goHome: goHome,
	goNotifications: goNotifications,
	goFavourites: goFavourites,
	goWrite: goWrite,
	goPublic: goPublic,
	goSettings: goSettings,
	loading: api.loading,
	error: api.error
}
