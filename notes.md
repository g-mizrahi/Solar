# Solar System

A Javascript app to simulate a solar system.

## Classes

1. Body : a class to describe celestial bodies.
  - mass
  - `x, y` (coordinates)
  - `vx, vy` (speed)
  - `ax, ay` (acceleration)
  - `fx, fy` (forces on the body)
  - shape (by default a sphere)
2. Space : a class to describe the ambient space
  - `r, g, b` (color)
  - `w, h` (size)
  - viscosity (to simulate a viscous space)

## Computing order

1. For every body compute the force applied to it
2. Then the acceleration
3. Then the speed
4. Then move the body with the computed speed
