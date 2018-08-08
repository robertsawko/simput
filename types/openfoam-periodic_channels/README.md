# OpenFOAM periodic channel experiment

## What is case manager for openfoam periodic channel experiment?

This type creates input decks for an array of simulations for steady state,
fully developed flows in a 2D channel for different Reynolds. It demonstrated
simput capability to manage multiple cases that share a set of common setting
with only a small fraction of inputs exposed to the user.

## Simput Integration

Simput provides a simple way to write any kind of text file.

This project is meant to illustrate how Simput can be used to generate
templated files for multiple cases. Simput requires a javascript description of
any user input. To build a Simput package use; 

```sh
$ Simput -c src/ -o versions/ -t openfoam-periodic
```

Add the compiled package to Simput:

```sh
$ Simput -a versions/openfoam-periodic.js
```

## Running Simput

### Running interactively
The following command will start a server which serves Simput's interactive form.

```sh
$ Simput -t openfoam-periodic -o sample/empty/.
```
