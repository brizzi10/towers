My project uses event listeners to monitor mouse activity, then manipulates the DOM accordingly.
Each tower has its own object that keeps track of the disk positions, total number of disks, and
the size of the top disk. These values are updated every time a disk is moved.

I started out appending and removing divs, but decided it was easier to simply have a full tower
in each column and toggle the appropriate disks on and off.

The disk preview was by far the most time consuming part of the process, mainly because of my own
lack of understanding of how event listeners function. I started out trying to turn them on and off,
but then realized I could simply use if else logic so that the listener triggers constantly,
but only actually does something if the appropriate criteria is met.

The solve feature was surprisingly easy to implement, once I understood the recursion I was able to use
the functions to move and update disks that I already had implemented in my previous code.

One shortcoming of my approach was that I got totally sidetracked away from my MVP model,
since I initially did not plan to use the disk preview and stumbled upon the idea while
setting up the html and css. By the time I got it working, there was definitely a level
of pressure with the presentation deadline looming and my actual game mechanics still not
completed.

My unsolved problems mainly are my own lack of comfort with css, resizing buttons,
using DOM manipulation instead of alert messages and things of that
nature. Definitely stuff I could figure out, but I prioritized devoting my time to
the js my time investment was probably 95% javascript/jquery and 5% html/css.

User Stories:

As a user, I want to be able to adjust the difficulty, so that the game has replay values

As a user, I only want the option to make legal moves, so that I am constantly not interrupted with "you can't do that".

As a user, I want to know when I've won, so that the game feels complete.

As a user, I want different rewards based on difficulty, so I feel validated for the extra time I put in.

As a user, I want a reset button, so that I do not have to constantly refresh the page.
