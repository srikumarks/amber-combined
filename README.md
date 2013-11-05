amber-combined
==============

Contains proof of concept minified Amber smalltalk deployable files.

Many posts have talked about combining all the [amber smalltalk]
js files into a single file to minimize http requests and size.
I attempted to do this and ended up with these files based on
the repository master version `2c6d7a81dfad3c2aa0b1a9c1e5233f25bd90a7f6`.

[amber smalltalk]: https://github.com/amber-smalltalk/amber

1. Copy the following files into the `amber/` root directory of the repository.
    1. link-and-minify.js
    2. amber_devel.js
    3. amber_deploy.js
    4. amber_helios.js
    5. amber_helios.html
    6. amber_devel.html
    7. Makefile

2. Make sure amber has been compiled according to the original instructions.

3. Run `make` in the `amber/` directory.

The `Makefile` illustrates how the ".min.js" files were generated. 
You can open the `amber_helios.html` and `amber_devel.html` in
a browser window and see that they are functional. I haven't yet figured
out the webdav part of the development cycle using these minified files.

Note that the `images/` folder currently contains more images than 
necessary (I think).

Requirements
------------

A proper installation of `requirejs` along with the optimizer `r.js`.
The best way to do this seems to be -

    npm install -g requirejs



