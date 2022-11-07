# CSharper Practice

## About

This is a website to practice c#, html, css and javascript. It should include most of the basic concepts we saw in the last few weeks of lessons.

## Installation

To install this project get the source code from Github and run:

```powershell
PS CSharper> npm install
```

To install the server component use:

```powershell
PS CSharper> git submodule update --init --recursive
PS CSharper> cd server/
PS CSharper/server> git pull origin master
```

Finally to start the two components, run:

```powershell
PS CSharper> npm run dev
```

And in a separate window run:

```powershell
PS CSharper> npm run dotnet
```

## Website content sketch / implementation TODO list

### Home

- [x] about

### Calculator

- [x] Basic calculus ([+], [-], [*], [/])
- [x] Math.Pow, Math.sqrt
- [ ] Divisibility checker
- [ ] Return a given length of pi

### Boolean operations

- [ ] Option for string or number (string only [==] and [!=])
- [ ] Check if expression is true ([<], [>], [==], [<=], [>=], [!=])
- [ ] Not flag [!] to reverse output

### Random generator

- [ ] Get a given amount of random numbers between two values

### Converter

- [ ] Convert euros to dollars and reverse
- [ ] Covert chars to Unicode and reverse
