---
course: math-55b
chapter: 2
section: 5
title: Uniform Convergence and Connectedness
date: 2026-02-04
lecturer: Denis Auroux
source-pages: 1-4
---

## Last time

Topologies on products $\prod_{i\in I} X_i$, e.g. $X^I = \{\text{functions } I\to X\}$:

$$\mathcal{T}_{\text{product}} \subset \mathcal{T}_{\text{uniform}} \subset \mathcal{T}_{\text{box}}$$

- $\mathcal{T}_{\text{product}}$: basis $\prod U_i$, $U_i\subset X_i$ open, $U_i = X_i$ for all but a finite number of $i$.
- $\mathcal{T}_{\text{uniform}}$ (for metric spaces): $d_\infty((x_i),(y_i)) = \sup\{d_i(x_i,y_i),\ i\in I\}$ if this is $\le 1$, else $1$.
- $\mathcal{T}_{\text{box}}$: basis $\prod U_i$, $U_i\subset X_i$ open.

For $X^Y = \{f\colon Y\to X\}$:

- in the product topology, $f_n\to f \iff f_n(y)\to f(y)$ for all $y\in Y$: **pointwise convergence**;
- in the uniform topology, $f_n\to f \iff \sup\{d(f_n(y),f(y)),\ y\in Y\}\to 0$: **uniform convergence**.

:::remark
On $\RR^\NN$ the product topology is actually metrizable, using a clever modification of $d_\infty$ (see Munkres Thm. 20.5), while the box topology isn’t metrizable (Munkres, end of §21). On uncountable products, neither box nor product are metrizable (Munkres, end of §21).
:::

:::example
In $\mathcal{F} = \{f\colon [0,1]\to\RR\}$, $f_n(x) = x^n$ converges pointwise (i.e. in the product topology) to

$$f(x) = \lim_{n\to\infty} f_n(x) = \begin{cases} 0 & \text{if } x<1,\\ 1 & x = 1,\end{cases}$$

but not uniformly ($\sup_x |f_n(x) - f(x)| = 1 \not\to 0$).

$g_n(x) = \frac1n$ (constant functions) $\to g(x) = 0$ uniformly (and pointwise), but not in the box topology: $g_n$ never belongs to $U = \{f \mid |f(x)| < x\ \forall x>0\}$, a box neighborhood of $g = 0$. In fact it’s almost impossible for a nonconstant sequence of functions to converge in the box topology.
:::

The notion of uniform convergence is important in real analysis because it is well behaved with respect to continuity and differentiability. For example:

:::theorem
Given a topological space $X$, a metric space $Y$, and a sequence of functions $f_n\colon X\to Y$: if $f_n$ is continuous for all $n$ and $f_n\to f$ uniformly, then $f$ is continuous.
:::

:::proof
Let $V\subset Y$ be open and $p\in f^{-1}(V)$. There is $\eps>0$ such that $B_\eps(f(p))\subset V$. Let $N$ be such that $\sup_{q\in X} d(f_N(q), f(q)) < \frac\eps3$. Let $U\ni p$ be open such that $q\in U \Rightarrow d(f_N(p), f_N(q)) < \frac\eps3$ (continuity of $f_N$). Then, using the triangle inequality, for all $q\in U$,

$$d(f(p),f(q)) \le d(f(p),f_N(p)) + d(f_N(p),f_N(q)) + d(f_N(q),f(q)) < \frac\eps3+\frac\eps3+\frac\eps3 = \eps.$$

So $U\subset f^{-1}(B_\eps(f(p)))\subset f^{-1}(V)$.
:::

:::corollary
$\mathcal{C}(X,Y) = \{\text{continuous } f\colon X\to Y\}$ is a closed subspace of $\big(\mathcal{F}(X,Y) = Y^X, \text{ uniform topology}\big)$.
:::

## Connected spaces (Munkres §23–24)

:::definition
A topological space $X$ is **connected** if it cannot be written as $X = U\cup V$ where $U, V$ are disjoint nonempty open sets. (Such a decomposition is called a **separation** of $X$.)
:::

![Two disjoint blobs: a space that is not connected](/notes/math-55b/figures/a2-not-connected.svg)

:::note
This is equivalent to: $X = U\cup V$, $U, V\subset X$ disjoint nonempty, $\overline{U}\cap V = \emptyset$, $U\cap\overline{V} = \emptyset$. The latter is easier to check for the subspace topology, but equivalent: since $U = X - V$ and vice versa, the separation condition implies $U$ and $V$ are closed in $X$, hence also open ($U = X - V$, $V = X - U$).
:::

:::proposition
$E\subset\RR$ is connected (in the subspace topology) iff for all $x, y\in E$, $x<z<y \Rightarrow z\in E$.
:::

I.e. connected subspaces of $\RR$ = **intervals** (all kinds: closed/open/half-open, semi-infinite, all of $\RR$, …) (“no gaps”).

:::proof
- If there are $x<z<y$ with $x,y\in E$, $z\notin E$, then

  $$E = \underbrace{\big((-\infty,z)\cap E\big)}_{\text{open},\ \ni x} \cup \underbrace{\big((z,\infty)\cap E\big)}_{\text{open},\ \ni y}$$

  gives a separation, so $E$ is not connected.
- Assume $x<z<y$, $x,y\in E \Rightarrow z\in E$, and assume $E$ isn’t connected, i.e. we have a separation $E = U\cup V$, $U, V\subset E$ open in the subspace topology, nonempty. Let $x\in U$, $y\in V$; without loss of generality $x<y$. By assumption $[x,y]\subset E$. Let $z = \sup([x,y]\cap U)$ ($\in [x,y]\subset E$, so $z\in U$ or $z\in V$).

  First assume $z\in V$: then $V$ open in $E$ gives $\eps>0$ such that $(z-\eps, z+\eps)\cap E\subset V$. But then $[x,y]\cap U$ contains no element of $(z-\eps,z+\eps)$, contradicting $\sup = z$.

  So $z\in U$; necessarily $z<y$ (since $y\in V$), and $(z,y]\subset V$ (since $z = \sup([x,y]\cap U)$). But $U$ open in $E$ gives $\eps>0$ such that $(z-\eps,z+\eps)\cap E\subset U$, hence $(z-\eps,z+\eps)\cap V = \emptyset$, giving a contradiction.
:::

:::theorem
$f\colon X\to Y$ continuous, $X$ connected $\Rightarrow$ $f(X)\subset Y$ is connected.
:::

:::proof
If $U\cup V$ is a separation of $f(X)$, then $f^{-1}(U)\cup f^{-1}(V)$ is a separation of $X$, contradiction! (Subspace topology: $U = f(X)\cap U' \neq \emptyset$ with $U'$ open in $Y$ $\Rightarrow$ $f^{-1}(U) = f^{-1}(U')\neq\emptyset$ is open in $X$; and $f^{-1}(U)\cap f^{-1}(V) = f^{-1}(U\cap V) = \emptyset$.)
:::

This implies the **intermediate value theorem**:

:::theorem Intermediate value theorem
Let $X$ be a connected topological space and $f\colon X\to\RR$ continuous. If $a, b\in X$ and $r$ lies between $f(a)$ and $f(b)$, then there is $c\in X$ such that $f(c) = r$.
:::

:::proof
Since $X$ is connected, so is $f(X)\subset\RR$. The result then follows from the above characterization of connected subspaces of $\RR$ (“no gaps”).
:::

:::remark Fact
$A, B\subset X$ connected (for the subspace topology) $\not\Rightarrow$ $A\cap B$ connected. Example:

![Two overlapping horseshoe regions A and B in the plane whose intersection has two pieces](/notes/math-55b/figures/a2-intersection-not-connected.svg)
:::

But things are better for *unions* of connected sets, provided they overlap.

:::theorem
Let $A_i\subset X$ be connected subspaces, all containing some point $p\in X$ (i.e. $\bigcap A_i\neq\emptyset$). Then $Y = \bigcup A_i$ is connected.
:::

:::proof
Assume $Y = U\cup V$, disjoint, open in $Y$. Without loss of generality, $p\in U$. Then $U\cap A_i$ and $V\cap A_i$ are disjoint and open in $A_i$. Since $A_i$ is connected and $p\in U\cap A_i$, we must have $A_i\subset U$ for all $i$. Hence $Y = \bigcup A_i\subset U$ (and $V = \emptyset$). So $Y$ is connected.
:::

:::theorem
$X, Y$ connected $\Rightarrow$ $X\times Y$ is connected.
:::

:::proof
Fix $(x_0, y_0)\in X\times Y$. Then for all $x\in X$, $A_x = (X\times\{y_0\})\cup(\{x\}\times Y)$ is connected by the previous theorem (both pieces contain $(x, y_0)$), and now $X\times Y = \bigcup_{x\in X} A_x$ (all containing $(x_0,y_0)$), so $X\times Y$ is connected.

![The sets A_x and A_x’ in the rectangle X × Y, crosses sharing the horizontal line at height y0](/notes/math-55b/figures/a2-product-crosses.svg)
:::

In fact, more is true (won’t prove):

:::theorem
$X_i$, $i\in I$ connected $\Rightarrow$ $\prod_{i\in I} X_i$ with the product topology is connected.
:::

(This is false for the uniform and box topologies: e.g. $\RR^I = \{\text{functions } I\to\RR\}$ for infinite $I$. Say $f\colon I\to\RR$ is **bounded** if $f(I)\subset\RR$ is a bounded subset. Then $\{\text{bounded}\}\cup\{\text{unbounded}\}$ is a separation of $\RR^I$ in the uniform topology.)

:::outline Notes not reached in this lecture, covered at the start of [Lecture 6](/notes/math-55b/06-path-connectedness-and-compact-spaces)
**Path-connectedness**

:::definition
Let $X$ be a topological space, $x, y\in X$. A **path** from $x$ to $y$ is a continuous map $f\colon [a,b]\to X$ (where $[a,b]$ has the subspace topology of the standard $\RR$) such that $f(a) = x$ and $f(b) = y$.
:::

:::definition
$X$ is **path-connected** if every pair of points in $X$ can be joined by a path.
:::

![An annulus X with two different paths from x to y](/notes/math-55b/figures/a2-two-paths.svg)

:::note
The relation $x\sim y \iff x$ and $y$ can be connected by a path is an **equivalence relation**, i.e.

1. $x\sim x$ (constant path $f(t) = x$);
2. $x\sim y \iff y\sim x$ (backwards path $f(-t)$);
3. $x\sim y$ and $y\sim z \Rightarrow x\sim z$ (**concatenate** paths: $f = \begin{cases} f_1(t) & t\in[a,c]\\ f_2(t) & t\in[c,b]\end{cases}$).
:::

The equivalence classes are called the **path components** of $X$. (Will return to these in algebraic topology!)

:::theorem
If $X$ is path-connected then $X$ is connected.
:::

:::proof
Assume not, i.e. $X = U\sqcup V$ disjoint open, $x\in U$, $y\in V$. Pick a path $f\colon [a,b]\to X$ connecting $x$ to $y$. Then $[a,b] = f^{-1}(U)\sqcup f^{-1}(V)$ are open subsets (containing $a$ and $b$ respectively). This contradicts the connectedness of $[a,b]$.
:::

The converse is false in general, but true for nice enough spaces, e.g. CW-complexes.

:::example The “topologist’s sine curve”
Let

$$S = \underbrace{\{(x,y) \mid y = \sin(\tfrac1x),\ x>0\}}_{\eqqcolon S_0} \cup \{(0,0)\}\subset\RR^2.$$

![Graph of sin(1/x) for x > 0 together with the origin](/notes/math-55b/figures/a2-sine-curve.svg)

The “main” part $S_0$ is connected, since it’s the image of $\RR_+$ (connected) under the continuous map $x\mapsto (x, \sin\frac1x)$.

Hence $S$ is connected: if $S = U\cup V$ disjoint open, then $S_0 = (U\cap S_0)\cup(V\cap S_0)$ is disjoint and open, so one of them (e.g. $V\cap S_0$) is empty. Then $V\subset S - S_0 = \{(0,0)\}$. But $\{(0,0)\}$ is not open in $S$, so in fact $V = \emptyset$.

On the other hand, $S$ is not path-connected: there’s no path connecting $(\frac1\pi, 0)$ to $(0,0)$. (Proof later, using compactness: the image of such a path is a closed subset of $\RR^2$ and must contain all of $S\cap\big([0,\frac1\pi]\times\RR\big)$, but that set isn’t closed: $(0,1)$ is a limit point of it not in $S$.)

:::

However, for nice enough spaces the two notions are equivalent.

:::theorem
$A\subset\RR^n$ open $\Rightarrow$ $A$ is connected iff $A$ is path-connected.
:::

:::proof
Already seen: path-connected $\Rightarrow$ connected. We show: not path-connected $\Rightarrow$ not connected.

Assume $A$ open in $\RR^n$: then the path components of $A$ are open. Indeed, if $x\in A$ then there is $r>0$ such that $B_r(x)\subset A$, and any two points of $B_r(x)$ can be connected inside $A$ by a straight line segment. So all of $B_r(x)$ is in the same path component. Now: if $A$ is not path-connected then

$$A = (\text{one path component})\cup\Big(\bigcup \text{all other path components}\Big)$$

gives a separation.
:::

This implies similar results for other classes of spaces, e.g. topological manifolds and CW-complexes.

For these kinds of spaces, path components are also **connected components**, i.e. they give a partition of $X$ into disjoint connected open (and closed) subsets. Such a partition only exists if $X$ is **locally connected**, i.e. the topology has a basis consisting of connected open subsets. (Counterexample: $\QQ\subset\RR$ isn’t locally connected: each point of $\QQ$ is its own path component, but these aren’t open.)

**Compactness (Munkres §26–…)**

Compactness is a “finiteness/boundedness” property of nice topological spaces such as closed bounded intervals $[a,b]\subset\RR$, or more generally, closed bounded subsets of $\RR^n$.

E.g.: any continuous map $f\colon K\to\RR$ with $K$ compact achieves its maximum and minimum.

The definition isn’t very intuitive.

:::definition
An **open cover** of a topological space $X$ is a collection of open subsets $(U_i)_{i\in I}$ such that $\bigcup_{i\in I} U_i = X$.
:::

:::definition
$X$ is **compact** if *every* open cover $(U_i)_{i\in I}$ of $X$ admits a **finite subcover**, i.e. there are $i_1,\dots,i_n$ such that $X = U_{i_1}\cup\dots\cup U_{i_n}$.
:::
:::
