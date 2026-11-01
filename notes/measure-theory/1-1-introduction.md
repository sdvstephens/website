---
course: measure-theory
chapter: 1
section: 1.1
title: Introduction
source-pages: 25-30
---

The ideal: for every $n\in\NN$, a function $\mu$ on the sets $E_\alpha\subset\RR^n$, $\mu:\{E_\alpha\}\to\overline{\RR}_{\ge0}$ (or $\mu:\{E_\alpha\}\to[0,\infty]$), so that $\mu(E)$ is the $n$-dimensional measure of $E\subset\RR^n$, with $\mu(E)$ given by the usual integrals, for example.

Naively, we wish for these to hold for $\mu$:

- (i) If $\{E_\alpha\}_{\alpha\in A}$ (finite, or a sequence $E_1,E_2,\dots$) are all disjoint, then $\mu(E_1\cup E_2\cup\cdots)=\mu(E_1)+\mu(E_2)+\cdots$.
- (ii) If $E\cong F$ ($\cong$ for congruent here), i.e. $E$ can be transformed into $F$ by translations, rotations and reflections, then $\mu(E)=\mu(F)$.
- (iii) $\mu(Q)=1$, where $Q$ is the unit cube: $Q\coloneqq\{x\in\RR^n\mid 0\le x_j<1,\ \forall j=1,\dots,n\}$.

These, it turns out, are mutually inconsistent. Let $n=1$. Define $\sim$ on $[0,1)$ such that $x\sim y$ iff $(x-y)\in\QQ$. Let $N\subset[0,1)$ be such that $N$ contains precisely one member of each equivalence class (by AOC). Let $R=\QQ\cap[0,1)$, and for every $r\in R$ let

$$N_r=\{x+r\mid x\in N\cap[0,1-r)\}\cup\{x+r-1\mid x\in N\cap[1-r,1)\}.$$

---

- (0) $\lambda:\sP(\RR)\to\overline{\RR}_{\ge0}$ ($A\subset\RR$)
- (1) $\lambda([a,b])=b-a$
- (2) $\lambda(A+x)=\lambda(A)$ (measure invariance under congruence)
- (3) $\lambda\big(\bigcup_{j\ge1}A_j\big)=\sum_{j\ge1}\lambda(A_j)$ for disjoint $A_j$

$x\sim y$ iff $x-y\in\QQ$; $[x]=\{y\in\RR\mid y-x\in\QQ\}$, so define $\Lambda=\RR/\!\sim$, with $\alpha,\beta,\dots$ elements of $\Lambda$. $\Lambda$ is uncountable.

Let $\Omega\subseteq\RR$ have 1 and only 1 point of each equivalence class ($\alpha=[x]=\{\dots,x,\dots\}$: choose one point from within $(0,1)$). So $\Omega\subset(0,1)$.

:::lemma Claim
If $p,q\in\QQ$, then either $\Omega+q=\Omega+p$ or $(\Omega+p)\cap(\Omega+q)=\varnothing$.
:::

:::proof
Assume $(\Omega+p)\cap(\Omega+q)\neq\varnothing$. Let the intersection be denoted $\Phi$. Take $x\in\Phi$, so $x=\alpha+p$ with $\alpha\in\Omega$, and $x=\beta+q$ with $\beta\in\Omega$. Ah! So

$$x=\alpha+p=\beta+q\implies\alpha-\beta=q-p.$$

$p-q\in\QQ$ since $p,q\in\QQ$, so $\alpha-\beta\in\QQ$, BUT then $\alpha\sim\beta$! So $\alpha$ is equivalent to $\beta$, and therefore $\Omega+q=\Omega+p$.
:::

Now consider $\lambda\Big(\sum_{q\in\QQ\cap[-1,1]}(\Omega+q)\Big)$ (the sum $=$ the union of sets whose pairwise intersections are $\varnothing$).

:::lemma Claim (2)
$\Omega+q\subseteq(-1,2)$.
:::

$\Omega\subseteq(0,1)$ and $q\in\QQ\cap[-1,1]$ $\implies$ $\sum_{q\in\QQ\cap[-1,1]}(\Omega+q)\subset(-1,2)$. Here $\sum\equiv\bigsqcup$, disjoint union.

So then

$$\lambda\Big(\sum_{q\in\QQ\cap[-1,1]}(\Omega+q)\Big)\le\lambda\big((-1,2)\big).$$

:::note
Note that $E\subseteq F\implies\lambda(E)\le\lambda(F)$, since $F$ can be written $F=E\cup(F\setminus E)$.
:::

Now $\lambda(F)$, where $E\subset F$, is such that $\lambda(F)=\lambda(E\cup F\setminus E)=\lambda(E)+\lambda(F\setminus E)$.

So $\lambda((-1,2))=2-(-1)=3$. Thus

$$\sum_{q\in\QQ\cap[-1,1]}\lambda(\Omega+q)\le3.$$

Ah! But $\lambda(A)=\lambda(A+x)$. So then

$$\sum_{q\in\QQ\cap[-1,1]}\lambda(\Omega+q)=\sum_{q\in\QQ\cap[-1,1]}\lambda(\Omega).$$

But there are infinitely many terms in this sum, one for each $q\in\QQ\cap[-1,1]$ (and $\Omega$ itself is clearly uncountable), and since they are all the same, it increases at a constant rate. Thus $\sum_{q\in\QQ\cap[-1,1]}^{\infty}\lambda(\Omega)$ is either $\infty$, or it must be $0$ since it needs to be $\le3$ (and is bounded by a finite number).

But $(0,1)\subseteq\sum_{q\in\QQ\cap[-1,1]}(\Omega+q)\implies\sum$ is $\infty$, so

$$\infty=0!\ \#$$

Folland writes this as: $x\sim y\iff x-y\in\QQ$. $N\subset[0,1)$ “is” $[0,1)/\!\sim$ (one representative per class), so for every $n\in[0,1)$, the class $[n]$ is represented in $N$. $R=\QQ\cap[0,1)$, and for every $r\in R$ we let

$$N_r=\{x+r\mid x\in N\cap[0,1-r)\}\cup\{x+r-1\mid x\in N\cap[1-r,1)\}.$$

So every $x\in[0,1)$ is in one and only one $N_r$. If $y\in N$ is such that $x\sim y$, i.e. $y\in[x]$, then $x\in N_r$ where $r=x-y$ if $x\ge y$, or $r=x-y+1$ if $x<y$. If $x\in N_r\cap N_s$, then $x-r$ (or $x-r+1$) and $x-s$ (or $x-s+1$) would be distinct elements of $N$ belonging to the same equivalence class, which cannot be.

Suppose $\mu:\sP(\RR)\to[0,\infty]$ satisfies (i), (ii), (iii). Then

$$\mu(N)=\mu\big(N\cap[0,1-r)\big)+\mu\big(N\cap[1-r,1)\big)=\mu(N_r)\quad\forall r\in R.$$

Since $R$ is countable, $\mu([0,1))=\sum_{r\in R}\mu(N_r)$. But by (iii), $\mu([0,1))=1$, and since $\mu(N_r)=\mu(N)$, $\sum_{r\in R}\mu(N_r)$ is either $0$ (if $\mu(N)=0$) or $\infty$ (if $\mu(N)>0$). Thus no such $\mu$ can exist.

:::theorem Banach–Tarski Paradox
Let $U,V$ be open bounded sets in $\RR^n$, $n\ge3$. There exist $k\in\NN$ and subsets $E_i,F_i$, $i\in\{1,\dots,k\}$, of $\RR^n$ such that:

- (a) the $E_i$‘s are disjoint and their union is $U$;
- (b) the $F_i$‘s are disjoint and $\bigcup_i^k F_i=V$;
- (c) $E_i\cong F_i$ (congruent) for all $i\in\{1,\dots,k\}$.
:::

![Banach–Tarski sketch: pieces of a small ball (e.g. a pea) are moved into a big ball (e.g. Earth)](/notes/measure-theory/figures/m2-banach-tarski.svg)

Thus these measure axioms do not hold well in the “real world” (the $\Sigma$ of the parts is the whole, and the parts of each are congruent to another’s decomposition, thus for all $i\in\{1,\dots,k\}$, $E_i\cong F_i$). Now say $\mu:\sP(\RR^n)\to\overline{\RR}_{\ge0}$ with the same axioms as before. Let $B$ be a ball such that $B=U$, and let $V$ be two disjoint translates of $B$ (i.e. $B+1$ disjoint from $B$, and $B+2$ disjoint from $B$ and $B+1$, with $V=(B+1)\cup(B+2)$).

Then

$$\mu(B)=\sum\mu(E_i)=\sum\mu(F_i)=\mu(V)=2\mu(B),$$

which can only be if $\mu(B)$ is $0$ or $\infty$; contradiction, since we assume $0<\mu(B)<\infty$.

**Moral:** $\RR^n$ is so strangely put together that it’s impossible to define a geometrically reasonable notion of measure.

So instead of trying $\mu$ defined on ALL subsets of $\RR^n$, we try $\mu$ on a class of subsets of $\RR^n$. Such a class should be such that it includes all sets one is likely to meet in practice.

Let’s think more abstractly/generally! (ii) and (iii) relate to Euclidean geometry, but (i) doesn’t, so a set function satisfying (i) we may call a measure.

:::example Examples
$\mu(E)$ in a physics problem represents the total mass in the region $E$; in probability theory, consider a set $X$ which represents the possible outcomes of an experiment, and for $E\subset X$, $\mu(E)$ is the probability that the outcome lies in $E$.
:::
