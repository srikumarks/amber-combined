all:
	r.js -o link-and-minify.js name=amber_devel out=amber_devel.min.js
	r.js -o link-and-minify.js name=amber_deploy out=amber_deploy.min.js
	r.js -o link-and-minify.js name=amber_helios out=amber_helios.min.js
