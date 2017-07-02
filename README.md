# Gloomhaven-scenario-creator
[![Build Status](https://travis-ci.org/on3iro/Gloomhaven-scenario-creator.svg?branch=master)](https://travis-ci.org/on3iro/Gloomhaven-scenario-creator)
[![Coverage Status](https://coveralls.io/repos/github/on3iro/Gloomhaven-scenario-creator/badge.svg?branch=master)](https://coveralls.io/github/on3iro/Gloomhaven-scenario-creator?branch=master)
[![Code Climate](https://codeclimate.com/github/on3iro/Gloomhaven-scenario-creator/badges/gpa.svg)](https://codeclimate.com/github/on3iro/Gloomhaven-scenario-creator)
[![Github Pages](https://img.shields.io/badge/GH--Pages-https%3A%2F%2Fon3iro.github.io%2FGloomhaven--scenario--creator%2F-149A86.svg?style=flat-square)](https://on3iro.github.io/Gloomhaven-scenario-creator/)
[![API Doc](https://doclets.io/on3iro/Gloomhaven-scenario-creator/dev.svg)](https://doclets.io/on3iro/Gloomhaven-scenario-creator/dev)

## Table of contents
* [About](#about)
* [Roadmap](#roadmap)
* [Contribution](#contribution)

## About
**Update 30.05.2017**
Another month went by and there still is no official statement regarding the licensing of the asset files Isaac provided nor has he replied to one of my messages and emails. I am still very busy writing my bachelors thesis. At this point I am actually considering to discontinue this project, though, because of the following reasons:
* By playing Gloomhaven on a regular basis (about 80 hours in with my group) I learned that this game probably already offers enough scenarios and content on its own, not to speak of the 17 solo scenarios and other additional content already created
* I am a bit short on time right now and in the near future
* Legal issues are still not sorted out and there is no actual clue if and when they might be

On the other hand it might be possible to tackle this project as a team from the get go. So if you have any ideas and would
like to contribute or breathe new life into the project, feel free to reach out to me and open an issue.


**Update 15.04.2017:**
I still have not heard back from Isaac Childres and unfortunately he has not yet provided any information
regarding the legal use of the game asset files he provided. Furthermore I am currently rather busy,
which is why the project is on halt for now. This does not mean that it is discontinued by any means,
but I want to get this whole legal thing sorted out before I invest more time in this rather complex endevor.
Lastly I consider a rewrite of the frontend in [Elm](http://elm-lang.org/), because I started learning the language
and am liking it a lot. The downside of this would be, that it might be harder for contributers to actually dive in
and contribute. But as this is a hobby project and I want to have some fun with it, this might be the direction I will take
it in.

__As of 12.02.2017 this project is still in very early development and does not yet
take any contributions!__

The Gloomhaven-scenario-creator is a web editor for scenarios, campaigns and assets for the
[Gloomhaven Board Game](http://www.cephalofair.com/gloomhaven) by Isaac Childres, which has been released
in early 2017. The *GSC* should make it easy to develop new content for the game and encourage people to do so.

This App is 100% unofficial and in no way related to Isaac Childres. I am currently trying to contact Isaac, though.
To get his approval for this app, because it will make heavy use of the games asset imagery.
I also plan to keep this app free and open source forever.

This web frontend is based on [React](https://facebook.github.io/react/) + [Redux](http://redux.js.org/)
and should be used in conjunction with a [Backend-API](https://github.com/on3iro/Gloomhaven-SC-backend).

## Roadmap
The following roadmap should highlight some development milestones and goals from top to bottom.
As certain features are going to be implemented, sub goals might appear.
Also priority of certain goals might change in the future, depending on user feedback.
There is currently no specific timeframe for each individual goal, because I am very busy right now and
because I still have no confirmation of approval for the project from Isaac Childres as of yet.

- [ ] Basic backend API
  - [x] User registration and login
  - [ ] Basic scenario creation
  - [ ] Basic campaign creation
- [ ] Initial Frontend
  - [x] Login/Logout/Register
  - [ ] Create private scenarios
  - [ ] Create private campaigns
- [ ] Hosting first Alpha-Version
  - [ ] Host on digital ocean
  - [ ] Inviting testers, open project for contribution
- [ ] implementing backend CI-pipeline and unit tests
- [ ] Scenario-/Campaign-(pre)view for quick game setup
- [ ] Ratingsystem and public scenario + campaign listings to easily find good scenarios and campaigns
- [ ] Comment-system
- [ ] Layout-Overhaul, General Design
  - [ ] Logo
  - [ ] Layout
- [ ] Release Beta, open to public
- [ ] Dynamic canvas map-editor
- [ ] User-Profiles + Characterclass-Flairs
- [ ] Asset creator

## Contribution
Please have a look at the latest **update** at the top of the README.
