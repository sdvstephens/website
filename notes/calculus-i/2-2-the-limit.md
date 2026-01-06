---
course: calculus-i
chapter: 2
section: 2.2
title: The Limit
---

# Section 2.2: The Limit

In the previous section we looked at a couple of problems and in both problems we had a function and we wanted to know how that function was behaving at some point $x = a$. At this stage of the game we no longer care where the functions came from and we no longer care if we're going to see them down the road again or not. All that we need to know or worry about is that we've got these functions and we want to know something about them.

To answer the questions in the last section we chose values of $x$ that got closer and closer to $x = a$ and we plugged these into the function. We also made sure that we looked at values of $x$ that were on both the left and the right of $x = a$. Once we did this we looked at our table of function values and saw what the function values were approaching as $x$ got closer and closer to $x = a$ and used this to guess the value that we were after.

This process is called **taking a limit** and we have some notation for this. The limit notation for the two problems from the last section is,

$$\lim_{x \to 1} \frac{2 - 2x^2}{x - 1} = -4 \qquad \lim_{t \to 5} \frac{t^3 - 6t^2 + 25}{t - 5} = 15$$

In this notation we will note that we always give the function that we're working with and we also give the value of $x$ (or $t$) that we are moving in towards.

:::definition
We say that the limit of $f(x)$ is $L$ as $x$ approaches $a$ and write this as

$$\lim_{x \to a} f(x) = L$$

provided we can make $f(x)$ as close to $L$ as we want for all $x$ sufficiently close to $a$, from both sides, without actually letting $x$ be $a$.
:::

This is not the exact, precise definition of a limit. If you would like to see the more precise and mathematical definition of a limit you should check out the Definition of a Limit section at the end of this chapter. The definition given above is more of a "working" definition that helps us get an idea of just what limits are and what they can tell us about functions.

:::example
**Example 1:** Estimate the value of the following limit.

$$\lim_{x \to 2} \frac{x^2 + 4x - 12}{x^2 - 2x}$$

:::solution
Notice that we did say estimate the value of the limit. We are not going to directly compute limits in this section. The point of this section is to give us a better idea of how limits work and what they can tell us about the function.

We will choose values of $x$ that get closer and closer to $x = 2$ and plug these values into the function. Doing this gives the following table of values:

| $x$ | $f(x)$ | $x$ | $f(x)$ |
|-----|--------|-----|--------|
| 2.5 | 3.4 | 1.5 | 5.0 |
| 2.1 | 3.857 | 1.9 | 4.158 |
| 2.01 | 3.985 | 1.99 | 4.015 |
| 2.001 | 3.999 | 1.999 | 4.002 |

From this table it appears that the function is going to 4 as $x$ approaches 2, so

$$\lim_{x \to 2} \frac{x^2 + 4x - 12}{x^2 - 2x} = 4$$
:::
:::

An alternative notation that we will occasionally use in denoting limits is

$$f(x) \to L \quad \text{as} \quad x \to a$$
