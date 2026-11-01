---
course: math-55b
chapter: 2
section: N12
title: Compactness
source-pages: 27-28
---

**Compactness** is a finiteness/boundedness property of nice topological spaces, such as closed intervals $[a,b] \subset \RR$ and closed and bounded subsets of $\RR^n$.

E.g. any continuous map $f: K \to \RR$ with $K$ compact achieves its min and max.

:::definition
An **open cover** of a topological space $X$ is a collection of open subsets $\{U_i\}_{i \in I}$ such that $\bigcup_{i \in I} U_i = X$.
:::

:::definition
$X$ is **compact** if *every* open cover $\{U_i\}_{i \in I}$ of $X$ admits a finite subcover, i.e. there exist $i_1, \dots, i_n$ such that $U_{i_1} \cup \dots \cup U_{i_n} = X$.
:::

:::example
$\RR$ is not compact with the usual topology: $\RR = \bigcup_{n \in \ZZ} (n-1, n+1)$, but there is no finite subcover. The integer $n = k$ lies only in $(k-1, k+1)$, so we cannot discard any of the intervals and still have a cover.

:::

:::example
Finite sets are compact. Also $X = \{0\} \cup \{\tfrac{1}{n} : n \in \ZZ_{>0}\} \subset \RR$ is compact: let $\{U_i\}_{i \in I}$ be an open cover of $X$. There is $i_0 \in I$ such that $U_{i_0} \ni 0$, and since $U_{i_0}$ is open it also contains $\tfrac{1}{n}$ for all large enough $n \ge N$.
:::

:::proposition Claim
$[0,1]$ is compact in $\RR$ with the usual topology.
:::

:::proof
Take an open cover $\{U_i\}_{i \in I}$ of $[0,1]$. Let
$$A = \{x \in [0,1] \mid \text{there is a finite subcover } U_{i_1} \cup \dots \cup U_{i_n} \supset [0,x]\}.$$
$A \neq \emptyset$ because $0 \in A$. We want to show $1 \in A$. Let $a = \sup(A) \in [0,1]$.

First we show $a \in A$, i.e. that $[0,a]$ has a finite subcover. There is $i_0$ with $U_{i_0} \ni a$. Since $U_{i_0}$ is open, there is $\varepsilon > 0$ such that $B_\varepsilon(a) \subset U_{i_0}$. But $a = \sup(A)$, so there is $x \in A$ with $x > a - \varepsilon$. So there are $i_1, \dots, i_n$ such that $U_{i_1} \cup \dots \cup U_{i_n} \supset [0,x]$, and then $U_{i_0} \cup U_{i_1} \cup \dots \cup U_{i_n} \supset [0,a]$.

![The interval [0,1] with an open set around a = sup A and a point x of A just above a − ε](/notes/math-55b/figures/b2-sup-argument.svg)

Now assume $a < 1$. Since $a \in A$, there are $i_1, \dots, i_n$ such that $U_{i_1} \cup \dots \cup U_{i_n} \supset [0,a]$. This union is open and contains $a$, so it contains $B_\varepsilon(a)$ for some $\varepsilon > 0$. Take $a < a' \le 1$ with $a' - a < \varepsilon$; then $U_{i_1} \cup \dots \cup U_{i_n} \supset [0,a']$, so $a' \in A$, which contradicts $a = \sup(A)$. So $a = 1$, and there is a finite subcover of $[0,1]$.
:::
