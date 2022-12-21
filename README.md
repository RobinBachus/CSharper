# CSharper Practice

## About

This is a website to practice c#, html, css and javascript. It should include most of the basic concepts we saw in the last few weeks of lessons.

## Installation

To install this project get the source code from Github and run:

```powershell
# This does not install devDependencies
PS CSharper> npm install --omit=dev
```

I tried remove any unnecessary dependencies so this should be fairly small.  
To install the server component use:

```powershell
PS CSharper> git submodule update --init --recursive
PS CSharper> cd server/
# The module should already be up to date on newer versions of git, but just to be safe we pull the latest version
PS CSharper/server> git pull origin master
```

Finally to start the two components, run:

```powershell
# Start vite to host the website on http://localhost:5173
PS CSharper> npm run dev
```

And in a separate window run:

```powershell
# Start the c# server on http://localhost:8000
PS CSharper> npm run dotnet
```

### Extra info and commands

- If you want the developer dependencies from npm just leave out the `--omit=dev` from the `npm install` command. The difference in size is ~33mb without vs. ~145mb with dev dependencies.

- To host the website on a different port use:

    ```powershell
    PS CSharper> npm run dev -- --port [PORTNUMBER]
    ```

- The server can't be run on a different port (yet) because the website code can't be changed when starting the server, and the server port is hardcoded. This may be changed in the future to work with a `.env` file.

## Website content sketch / implementation TODO list

### Home

- [x] about

### Calculator

- [x] Basic calculus ([+], [-], [*], [/])
- [x] Math.Pow, Math.sqrt
- [x] Divisibility checker
- [x] Return a given length of pi
- [x] Add information about the operators

### Boolean operations

- [x] Option for string or number (string only [==])
- [x] Check if expression is true ([<], [>], [==], [<=], [>=])
- [x] Not flag [!] to reverse output
- [x] Check if a number is prime
- [x] Add information about the operators

### Random generator

- [ ] Get a given amount of random numbers between two values
- [ ] Get a given amount of random characters
- [ ] Randomly rearrange a sentence
- [ ] Get a random color
- [ ] Add information about the operators

### Converter

- [ ] Convert euros to dollars and reverse
- [ ] Covert chars to Unicode and reverse
- [ ] Add information about the operators
