---
course: math-55a
chapter: 1
section: N9
title: Sets, Functions and Equivalence Relations
source-pages: 1-3
---

## The empty function

$Y^\varnothing = \{\varnothing\}$, i.e., the set of all functions from $\varnothing \to Y$ has only one element: the empty set.

The empty set contains no elements to map to $y \in Y$ for any $y$. We can show this is true by taking a restriction of $f : \varnothing \to Y$, given by $g : \varnothing \to Z$, since, of course, $\varnothing \subset \varnothing$.

Let’s look at the equivalence class of $f$. Let us form a partition on $Y^\varnothing$. We know there exists at least one map, namely $\varnothing \mapsto y$ for all $y \in Y$ (note $\operatorname{dom}(\varnothing) = \varnothing$). Now assume there exists another, so that we have $[\varnothing]_R$ and $[f]_R$, where both are equivalence classes. Then there exist $a$ and $b$ such that $a \neq b$, $a \in [\varnothing]_R$ and $b \in [f]_R$. Then it is obvious that $a = \varnothing$, since nothing maps to $y \in Y$. So for $b$ we have $f : \varnothing \to Y$, $b \mapsto y$, so $b \in \varnothing$; but this cannot be, since $\varnothing$ is empty. So there is no $b \neq a$, and therefore $a$ is the only element in all of $[f]_R = [\varnothing]_R = \{\varnothing\}$.

:::proposition
If $X \neq \varnothing$, then $\varnothing^X$ is empty.
:::

:::proof
A map $X \to \varnothing$ means that some element must map to something, but $a \notin \varnothing$ for any $a \in U$. Thus there is no such map, and $\varnothing^X = \varnothing$.
:::

## Unions of families

Take families $A_k : K \to X$ and $I_j : J \to K$, with
$$K = \bigcup_{j \in J} I_j.$$
Then
$$\bigcup_{k \in K} A_k = \bigcup_{j \in J} \Big( \bigcup_{i \in I_j} A_i \Big).$$
In the finite case:
$$\bigcup_{j=1}^{n} \Big( \bigcup_{i=1}^{m} A_i \Big)_j.$$

## Part 1

:::exercise Problem 1
:::solution
It must be a relation $R$ which satisfies 3 axioms:

1. Reflexivity: $aRa$ for all $a$.
2. Symmetry: $aRb \Rightarrow bRa$ for all $a, b$.
3. Transitivity: $aRb,\ bRc \Rightarrow aRc$ for all $a, b, c$.
:::
:::

:::exercise Problem 2
:::solution
True. If $A \subseteq X$, then all $x \in A$ must map to some $y \in Y$, so there must exist some $f(A)$. Therefore every $f(A) \subseteq Y$.
:::
:::

:::exercise Problem 3
:::solution
$g \circ f : X \to Z$.
:::
:::

:::exercise Problem 4
:::solution
True. This seems vacuously true: since there is no $x \in \varnothing$, there are no $a$ and $b$ such that $a \neq b$ or such that $f(a) \neq f(b)$. So $a \neq b \Rightarrow f(a) \neq f(b)$ is true, and $f$ is injective.
:::
:::

:::exercise Problem 5
:::solution
This cannot be true (it is false) when $Y \neq \varnothing$, since “for all $y$ there exists $f(x)$ such that $f(x) = y$” cannot be true: as we showed above, every $f : \varnothing \to Y$ has at most one element, $\varnothing$.
:::
:::

:::exercise Problem 6
:::solution
$[x]_R$ is all $x_n \in X$ such that $x R x_n$, where $R$ is an equivalence relation.
:::
:::

:::exercise Problem 7
:::solution
When it is bijective.
:::
:::

:::exercise Problem 8
:::solution
$|X \times Y| = 15$.
:::
:::

:::exercise Problem 9
Let $f : X \to Y$ be a function, and let $R$ on $X$ be
$$xRy \iff f(x) = f(y).$$
Show that $R$ is an equivalence relation.

:::solution
Since $f(y)$ is defined, $y \in X$ as well. Then:

1. Reflexive: $f(x) = f(x)$ is obviously true.
2. Symmetric: $f(x) = f(y) \iff f(y) = f(x)$ holds, so $xRy \Rightarrow yRx$.
3. Transitive: if $f(x) = f(y)$ and $f(y) = f(z)$, then $f(x) = f(z)$ (transitive law), so $xRz$. $\square$
:::
:::

:::exercise Problem 10
If $f : X \hookrightarrow Y$ and $g : Y \hookrightarrow Z$, show that $g \circ f : X \to Z$ is injective as well.

:::solution
Consider that $a = b \iff f(a) = f(b)$ is a biconditional. Given this, we can construct $x_1 = x_2 \iff f(x_1) = f(x_2)$, which can be written $x_1 = x_2 \iff y_1 = y_2$ (with $y_i = f(x_i)$). Notice that for $g : Y \hookrightarrow Z$, $y_1 = y_2 \iff g(y_1) = g(y_2)$, which is to say $y_1 = y_2 \iff z_1 = z_2$ (with $z_i = g(y_i)$). Therefore
$$x_1 = x_2 \iff y_1 = y_2 \iff z_1 = z_2,$$
so we can say $x_1 = x_2 \iff z_1 = z_2$. Thus $g \circ f : X \to Z$ is injective. $\square$
:::
:::

:::exercise Problem 11
Let $f : X \leftrightarrow Y$ be a bijection. Show that $f^{-1} \circ f = \id_X$.

:::solution
Consider an arbitrary $x$. Given the bijection, we know that $x \mapsto y$, and since it is bijective, $y \mapsto x$, for all $x \in X$, $y \in Y$. Thus no matter what $x$ or $y$ are, we have
$$f^{-1} \circ f : x \mapsto y \mapsto x \implies f^{-1} \circ f = \id_X. \qquad \square$$
:::
:::

:::exercise Problem 12
(a) If $\frac{a-b}{3} \in \ZZ$ and $\frac{b-c}{3} \in \ZZ$, then $\frac{a-c}{3} \in \ZZ$. We intend to prove this.

:::solution
(a) The distance of $a$ and $b$ from each other is some multiple of 3, say $a - b = 3m$. The same must be true for $b - c$, say $b - c = 3n$. Thus the distance from $a$ to $c$ is $a - c = 3m + 3n = 3(m+n)$ with $m, n \in \ZZ$, so
$$\frac{a-c}{3} = m + n \in \ZZ. \qquad \square$$

(b) The equivalence class $[0]_R$ in this case is all multiples of 3: $b \in [0]_R \iff \frac{0-b}{3} \in \ZZ$, so $[0]_R = 3\ZZ = \{\dots, -3, 0, 3, 6, \dots\}$.

(c) There are infinitely many integers divisible by 3, so each class is countably infinite; but there are exactly three distinct equivalence classes, $[0]_R$, $[1]_R$, $[2]_R$.

:::
:::

:::exercise Problem 13
:::solution
(a) Since $f(x)$ is linear with nonzero slope (as a map $\RR \to \RR$), it must be bijective, so injectivity is automatically satisfied.

(b) Since $f(x)$ is linear with nonzero slope, it must be bijective, so surjectivity is automatically satisfied.

(c) Since $f(x)$ is bijective, $f^{-1}$ exists, and it is given by
$$x = f(y) = 2y + 1 \implies x - 1 = 2y \implies \boxed{\frac{x-1}{2} = f^{-1}(x)}.$$
:::
:::

:::exercise Problem 14
Given $A = \{1, 2, 3\}$, $B = \{a, b\}$.

:::solution
(a) $B^A \subseteq \mathcal{P}(A \times B)$, so at most we have $2^6 = 64$ functions. But a function chooses one of the 2 elements of $B$ for each of the 3 elements of $A$, so there are really $2^3 = 8$ VALID functions.

(b) None (?)

(c) At least 6 functions are surjective.

:::
:::

:::exercise Problem 15
Let $\sim$ be an equivalence relation on $X$. Show that $X/{\sim}$ (the set of equivalence classes) forms a partition of $X$.

:::solution
To start, I prefer the notation $[X]_\sim$ personally, so that is what I will use. The union of all $[x]_\sim$ being $X$ is obvious. So we must mainly prove that it is a set of disjoint unions. Assume there is $z \in [x_1]_\sim \cap [x_2]_\sim$ with $[x_1]_\sim \neq [x_2]_\sim$ (for contradiction). Then $x_1 \sim z$ and $z \sim x_2$, but by the transitive property, $x_1 \sim x_2$! Thus there is a contradiction, and they must be in the same class. Therefore all distinct equivalence classes $[x]_\sim \in [X]_\sim$ are disjoint, and therefore they form a partition. $\square$
:::
:::

:::exercise Problem 16
$f$ is bijective $\iff$ there exists $g : Y \to X$ such that $g \circ f = \id_X$ and $f \circ g = \id_Y$. We attempt to show this is true.

:::solution
Let us say we have a “left inverse function” given by $g \circ f = \id_X$. Let $f(x_1) = f(x_2)$; we show that if $g \circ f = \id_X$ then $x_1 = x_2$. Now $g(f(x_1)) = x_1$ and $g(f(x_2)) = x_2$, so $g(f(x_1)) = g(f(x_2))$ means $x_1 = x_2$.

Conversely, if $f(x_1) = f(x_2) \Rightarrow x_1 = x_2$, define $g$ on $f(X)$ by $g(f(x)) = x$ (well defined because $f$ is injective) and arbitrarily on the rest of $Y$ (possible when $X \neq \varnothing$). Then $g \circ f = \id_X$.

Now the “right inverse”: $f \circ g = \id_Y \iff$ for all $y$ there exists $x$ with $f(x) = y$.

- For $\Rightarrow$: $g(y) = x \Rightarrow f(g(y)) = f(x) \Rightarrow y = f(x)$. ✓
- For $\Leftarrow$: for each $y$ choose an $x$ with $f(x) = y$ and set $g(y) = x$. Then $f(g(y)) = f(x) = y$. ✓

For the direction “bijection $\Rightarrow$”, the first part ($f^{-1} \circ f = \id_X$) was proven in Problem 11; the second is given by $y \mapsto x \mapsto y$ for all $y \in Y$, so $f \circ f^{-1} = \id_Y$. $\square$
:::
:::

:::exercise Problem 17
:::solution
(a) Yes: any $f : X \to X$ has an $f^{-1}$ $\iff$ $f$ is bijective.

(b) $f \circ f$ for all $x \in X$:
$$f(f(1)) = 3, \quad f(f(2)) = 1, \quad f(f(3)) = 2, \quad f(f(4)) = 4.$$

(c) $f^{-1}(1) = 3$, $f^{-1}(2) = 1$, $f^{-1}(3) = 2$, $f^{-1}(4) = 4$. Notice then that $f \circ f = f^{-1}$.

(d) $f^{-1}(1) = 3$, $(f^{-1} \circ f)(2) = 2$.
:::
:::
