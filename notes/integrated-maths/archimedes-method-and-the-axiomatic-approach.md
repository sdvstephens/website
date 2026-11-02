---
course: integrated-maths
chapter: 17
section: 17.1
title: Archimedes’ Method and the Axiomatic Approach
---

Archimedes’ method finds the area of a parabolic segment by trapping it between sums of rectangles, the lower and upper sums $s_n$ and $S_n$ of the exercises at the end of this page. This page writes the result in integral notation, asks what such an argument rests on, and sets out the approach taken for the rest of this topic: the real numbers are pinned down by axioms.

## Archimedes’ result in integral notation

The post-Archimedean show of $x^2$ would be
$$
\int_0^b x^2\,dx = \frac{b^3}{3} \qquad \left(\text{shown here: } \int_0^b x^2\,dx = \frac{x^3}{3}\bigg|_0^b = \frac{b^3}{3} - \frac{0^3}{3} = \frac{b^3}{3}\right).
$$
Let us examine its anatomy:

- $x^2$ is the **integrand**;
- $0$ and $b$ are the **limits of integration**;
- the process is called **integration**.

## Deductive systems

:::definition
**Deductive systems** contain “undefined” concepts (axioms or postulates) and define all other matters in terms of these axioms. Statements deduced from these axioms are called **theorems**.
:::

:::example Deductive system (Aristotelian)
- Premise 1: All men are potatoes.
- Premise 2: I am a man.
- Conclusion: I am a potato.
:::

## The real numbers as an axiomatic system

We will let the real numbers themselves ($\RR$) be an axiom, and also some of their properties. (TF does this mean?? Is that to say that the class of the real numbers is $\RR \coloneqq \{x \mid x \in \QQ \text{ or } x \in \PP\}$, where $\PP$ is the irrational numbers?)

:::remark Correction
The real numbers are not themselves an axiom. We take the real numbers as undefined objects, as in a deductive system, and take some of their properties as axioms (the field, order and completeness axioms on the following pages). It is true that $\RR = \QQ \cup \PP$, but $\RR$ is not introduced that way here: the irrationals are defined later, as the real numbers that are not rational.
:::

There are $3$ groups of axioms: the field axioms, the order axioms, and the completeness axiom.

What is the “least-upper-bound” axiom / completeness / continuity axiom? It literally just means there are no gaps in $\RR$’s number line.

## Exercises

:::exercise
Modify the region of the parabolic segment by taking the ordinate at each $x$ to be (a) $2x^2$, (b) $3x^2$, (c) $\tfrac{1}{4}x^2$, (d) $2x^2 + 1$, (e) $ax^2 + c$ instead of $x^2$, and see what effect this has on the calculation of the area.

:::solution
(a)

![Graph of f(x) = 2x squared from the origin, with dotted ordinates of height 2x squared at x and 2b squared at b](/notes/integrated-maths/figures/q1-ap-ordinate-2x2.svg)

Each rectangle has base $B = \frac{b}{n}$ and the $k$th one has height $H = 2\left(\frac{kb}{n}\right)^2$. So the $k$th rectangle has area $H \cdot B$:
$$
2\left(\frac{k^2 b^2}{n^2}\right) \cdot \left(\frac{b}{n}\right) = \frac{2k^2 b^3}{n^3} = \frac{b^3}{n^3}\, 2k^2.
$$
Thus, just like when $x^2$ produced $\frac{b^3}{n^3}k^2$ and the summation was
$$
S_n(x^2) = \frac{b^3}{n^3}\left(1^2 + 2^2 + 3^2 + \dots + n^2\right),
$$
we now get
$$
S_n(2x^2) = \frac{b^3}{n^3}(2)\left(1^2 + 2^2 + 3^2 + \dots + n^2\right),
$$
and since we know that $1^2 + 2^2 + 3^2 + \dots + n^2 = \frac{n^3}{3} + \frac{n^2}{2} + \frac{n}{6}$, we can substitute and multiply by $2$. We get
$$
S_n(2x^2) = \frac{b^3}{n^3}\left(\frac{2n^3}{3} + \frac{2n^2}{2} + \frac{2n}{6}\right),
$$
and simplifying,
$$
S_n(2x^2) = \frac{b^3}{n^3}\left(\frac{2n^3}{3} + n^2 + \frac{n}{3}\right),
$$
and following the same steps for the lower sum,
$$
s_n(2x^2) = \frac{b^3}{n^3}\left(\frac{2n^3}{3} - n^2 + \frac{n}{3}\right).
$$

(b) Now we repeat with $3x^2$:
$$
S_n(3x^2) = \frac{b^3}{n^3}\left(\frac{3n^3}{3} + \frac{3n^2}{2} + \frac{3n}{6}\right) = \frac{b^3}{n^3}\left(n^3 + \frac{3n^2}{2} + \frac{n}{2}\right).
$$

(c) And with $\frac{x^2}{4}$:
$$
S_n\!\left(\tfrac{x^2}{4}\right) = \frac{b^3}{n^3}\left(\frac{1}{4}\right)\left(\frac{n^3}{3} + \frac{n^2}{2} + \frac{n}{6}\right) = \frac{b^3}{n^3}\left(\frac{n^3}{12} + \frac{n^2}{8} + \frac{n}{24}\right).
$$

(d) $2x^2 + 1$: the $k$th rectangle has area
$$
\left[2\left(\frac{kb}{n}\right)^2 + 1\right]\left[\frac{b}{n}\right],
$$
so summing gives $S_n(2x^2) + b$.

(e) $ax^2 + c$:
$$
S_n(ax^2 + c) = \frac{b^3}{n^3}\left(\frac{an^3}{3} + \frac{an^2}{2} + \frac{an}{6}\right) + cb.
$$

:::
:::

:::exercise
Take the ordinate at each $x$ to be $x^3$ instead of $x^2$.

:::solution
(a)

![Graph of f(x) = x cubed from the origin, with dotted ordinates of height x cubed at x and b cubed at b](/notes/integrated-maths/figures/q1-ap-ordinate-x3.svg)

With base $B = \frac{b}{n}$ and height $H = \left(\frac{kb}{n}\right)^3$,
$$
S_n = \frac{b^4}{n^4}\left(1^3 + 2^3 + \dots + n^3\right), \qquad s_n = \frac{b^4}{n^4}\left(1^3 + 2^3 + \dots + (n-1)^3\right).
$$

(b)
$$
s_n\left(\frac{n^4}{b^4}\right) < \frac{n^4}{4} < S_n\left(\frac{n^4}{b^4}\right),
$$
which gives the area $A$.

(c) $ax^3 + c$: $\;\frac{b^4}{n^4}(\cdots) + cb$.

:::
:::

:::exercise
Take the ordinate at each $x$ to be $x^m$.

:::solution
With $B = \frac{b}{n}$ and $H = \left(\frac{kb}{n}\right)^m$,
$$
S_n = \frac{b^{m+1}}{n^{m+1}}\left(1^m + 2^m + \dots + n^m\right), \qquad s_n = \frac{b^{m+1}}{n^{m+1}}\left(1^m + 2^m + \dots + (n-1)^m\right),
$$
and
$$
1^m + 2^m + \dots + (n-1)^m < \frac{n^{m+1}}{m+1} < 1^m + 2^m + \dots + n^m \qquad \text{when } n \ge 1 \text{ and } m \ge 1.
$$
:::
:::
