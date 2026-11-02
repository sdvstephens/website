---
course: integrated-maths
chapter: 17
section: 17.4
title: Suprema, Completeness and the Archimedean Property
status: incomplete
---

The third group of axioms is a single axiom, completeness, which is about upper bounds of sets. This page defines the positive integers, sets up the language of upper bounds needed to state the axiom, and then derives its consequences.

## Positive integers and the real line

:::definition Inductive set
A set of real numbers is an **inductive set** if it has the following properties: the number $1$ is in the set, and for every $x$ in the set the number $x + 1$ is also in the set.
:::

$\RR$ is an inductive set, and so is $\RR^+$.

:::definition
A real number is called a **positive integer** if it belongs to *every* inductive set.
:::

Real numbers can be pictured as points on a line:

![A number line with arrows at both ends and tick marks labelled x, then dots, -1, 0, 1, dots, y](/notes/integrated-maths/figures/q1-ap-number-line.svg)

## Upper bounds, maximum element and supremum

Suppose $x \le B$ for every $x \in S$. Then $B$ is an **upper bound** of $S$, and $S$ is **bounded above**. This also means that for every $y \ge B$, $y$ is also an upper bound of $S$. If moreover $B \in S$, then $B$ is the **maximum element** or largest member of $S$. There can only be at most ONE such $B \in S$. We write this as $\max S = B$. Thus: $B = \max S$ if $B \in S$ and $x \le B$ for all $x \in S$. A set with no upper bound is called **unbounded above** (example: the set of all real numbers, $\RR$, has no $\max \RR$).

:::example
1. $S_1 = \RR^+$: $\max S_1$ DNE (does not exist), and $\max S_1 \notin S_1$.
2. $S_2 = \{x \mid 0 \le x \le 1\}$: $\max S_2 = 1$, and $\max S_2 \in S_2$.
3. $T = \{x \mid 0 \le x < 1\}$: $\sup T = 1$, but $\sup T \notin T$. (Does $\lim_{x \to 1} x \in T$?)
:::

$\sup T \neq \max T$: $\sup T$ is $1$, while $\max T$ would be $\lim_{x \to 1} x$.

:::remark Correction
The set $T$ has no maximum element, so $\max T$ does not exist. The number $\lim_{x \to 1} x = 1$ is $\sup T$, and it is not in $T$. The correct statement is that $T$ has a supremum but no maximum.
:::

![Two number lines. Left: the closed interval S from 0 to 1 with a filled dot at 1 marked max S, and the hatched region to the right of 1 marked upper bounds. Right: the interval T from 0 to 1 with an open dot at 1 marked least upper bound or sup T, and the hatched upper bounds to its right](/notes/integrated-maths/figures/q1-ap-sup-max.svg)

The least upper bound is known as the **supremum**.

:::theorem Theorem I.26
Two different numbers cannot both be least upper bounds for the same set.
:::

:::proof
Say we have two least upper bounds $B$ and $C$. Since $B$ is a least upper bound, $B \le C$. Then since $C$ too is a least upper bound, we have $B \ge C$. Thus $B \not> C$ and $B \not< C$, so $B = C$.
:::

We can now write, for a set $S$, $B = \sup S$.

## The least-upper-bound axiom

:::definition Axiom 10
Every nonempty set $S$ of real numbers which is bounded above has a supremum; that is, there is a real number $B$ such that $B = \sup S$.
:::

Moreover, $\sup S$ does not need to be in $S$: $\sup S \in S$ only when $\sup S = \max S$.

Similar to $\sup S$ we have $\inf S$ (the **infimum**), or the **greatest lower bound**, and $\min S$ is similar to $\max S$: $\min S$ is the minimum element in $S$.

:::example
$$
S = \left\{ \left(1 + \tfrac{1}{n}\right)^n \;\middle|\; n = 1, 2, 3, \dots \right\} = \left\{ 2, \tfrac{9}{4}, \tfrac{64}{27}, \tfrac{625}{256}, \tfrac{7776}{3125}, \dots \right\},
$$
since, for example,
$$
\left(1 + \tfrac{1}{4}\right)^4 = \left(\tfrac{5}{4}\right)^4 = \tfrac{625}{256}, \qquad \left(1 + \tfrac{1}{5}\right)^5 = \left(\tfrac{6}{5}\right)^5 = \tfrac{7776}{3125}.
$$
Then $\sup S = 2.718\ldots = e$ and $\inf S = 2$.
:::

## The Archimedean property

We must encounter consequences of the completeness axiom (Axiom 10).

:::theorem Theorem I.28
The set $P$ of positive integers $\{1, 2, 3, \dots\}$ is unbounded above.
:::

:::proof
Assume $P$ is bounded above. Since $P \neq \varnothing$, by Axiom 10 $P$ must have a least upper bound ($\sup P$), say $m$. The number $m - 1$ cannot be an upper bound of $P$, as it is less than $m$. So there must be at least one integer $n$ in $P$ such that $n > m - 1$. Thus $n + 1 > m$. But since $n + 1$ is in $P$ and $n + 1 > m$, we arrive at a contradiction.
:::

:::corollary Theorem I.29 / Corollary I.1
For every real $x$, there must be a positive integer $n$ such that $n > x$.
:::

:::proof
If there were no $n > x$, then $P$ would be bounded by $x$. However, by Theorem I.28 we know that $P$ is unbounded, so this cannot be.
:::

:::corollary Theorem I.30 / Corollary I.2
If $x > 0$ and if $y$ is an arbitrary real number, there exists a positive integer $n$ such that $nx > y$.
:::

:::proof
$nx > y \Leftrightarrow n > y/x$. Substitute $y/x$ for $x$ in Theorem I.29.
:::

Theorem I.30 is commonly known as the **Archimedean property** of the real number system. This, for the layman, means that any line, no matter how long, can be covered by a finite number of smaller lines. In other words, a small ruler, used enough times, can cover any given distance, no matter how large. However, there are “non-Archimedean geometries” in which this axiom is rejected. From this property we can formulate a theorem which will be useful in integral calculus.

:::theorem Theorem I.31
If three real numbers $a$, $x$ and $y$ satisfy the inequalities
$$
a \le x \le a + \frac{y}{n}
$$
for every integer $n \ge 1$, then $x = a$.
:::

(I am confused about this... is $y/n$ an infinitesimal???)

:::proof
If $x > a$, Theorem I.30 tells us that there is a positive integer $n$ satisfying $n(x - a) > y$. This contradicts Theorem I.14. Hence we cannot have $x > a$, so $x = a$.

(↑ What?? How??)
:::

:::remark Correction
The “I.14” in the proof is the display number of the hypothesis $a \le x \le a + y/n$; Theorem I.14 is a different result. Indeed $n(x - a) > y$ gives $x > a + y/n$, which contradicts $x \le a + y/n$. Hence $x > a$ is impossible, and $x = a$.
:::

## Fundamental properties of the supremum and infimum

:::theorem Theorem I.32
Let $h$ be a given positive number and let $S$ be a set of real numbers.

(a) If $S$ has a supremum, then for some $x \in S$ we have $x > \sup S - h$.

(b) If $S$ has an infimum, then for some $x \in S$ we have $x < \inf S + h$.
:::

(This establishes that the $\inf S$ and $\sup S$ can be changed by some sufficiently large $h \in S$.)

:::remark Correction
The theorem says that for every $h > 0$ there is a point of $S$ within distance $h$ of $\sup S$ (when the supremum exists), and likewise a point within $h$ of $\inf S$. The number $h$ is an arbitrary positive real number; it does not have to be large or to belong to $S$, and small $h$ is the interesting case.
:::

:::proof
If we had $x \le \sup S - h$ for all $x \in S$, then $\sup S - h$ would be an upper bound for $S$ smaller than its least upper bound. Therefore we must have $x > \sup S - h$ for at least one $x \in S$. This proves (a). The proof for (b) is similar.
:::

:::theorem Theorem I.33 (Additive property)
Given nonempty subsets $A$ and $B$ of $\RR$, let $C$ denote the set
$$
C = \{a + b \mid a \in A,\ b \in B\}.
$$
(a) If each of $A$ and $B$ has a supremum, then $C$ has a supremum and $\sup C = \sup A + \sup B$.

(b) If each of $A$ and $B$ has an infimum, then $C$ has an infimum and $\inf C = \inf A + \inf B$.
:::

:::proof
Assume each of $A$ and $B$ has a supremum. If $c \in C$, then $c = a + b$, where $a \in A$ and $b \in B$. Therefore $c \le \sup A + \sup B$; so $\sup A + \sup B$ is an upper bound for $C$. This shows that $C$ has a supremum and that
$$
\sup C \le \sup A + \sup B.
$$
Now let $n$ be any positive integer. By Theorem I.32 (with $h = 1/n$) there is an $a$ in $A$ and a $b$ in $B$ such that
$$
a > \sup A - \frac{1}{n}, \qquad b > \sup B - \frac{1}{n}.
$$
Adding these inequalities, we obtain
$$
a + b > \sup A + \sup B - \frac{2}{n}, \qquad \text{or} \qquad \sup A + \sup B < a + b + \frac{2}{n} \le \sup C + \frac{2}{n},
$$
since $a + b \le \sup C$. Therefore we have shown that
$$
\sup C \le \sup A + \sup B < \sup C + \frac{2}{n}
$$
for every integer $n \ge 1$. By Theorem I.31, we must have $\sup C = \sup A + \sup B$. This proves (a), and the proof of (b) is similar.
:::

:::theorem Theorem I.34
Given two nonempty subsets $S$ and $T$ of $\RR$ such that $s \le t$ for every $s$ in $S$ and every $t$ in $T$. Then $S$ has a supremum and $T$ has an infimum, and they satisfy $\sup S \le \inf T$.
:::

:::proof
Each $t$ in $T$ is an upper bound for $S$. Therefore $S$ has a supremum which satisfies the inequality $\sup S \le t$ for all $t$ in $T$. Hence $\sup S$ is a lower bound for $T$, so $T$ has an infimum which cannot be less than $\sup S$. In other words, we have $\sup S \le \inf T$, as asserted.
:::

## Existence of square roots of nonnegative real numbers

- $A = \{x \mid x^2 \ge 0\}$, thus $\sup(A) = A$.
- $\alpha^2 = A$, $\alpha \in \RR$, $\sup(A) = \alpha^2$:
  - $\alpha^2 > A \Rightarrow \sup(A) > A$; but $\sup$ is the least upper bound of $A$, thus $A \not> \sup(A)$.
  - $\alpha^2 < A \Rightarrow \sup(A) < A$, which violates Axiom 10.
  - $\alpha^2 = A \Rightarrow \sup(A) = A$ must be true. $\square$

:::remark Correction
The set $\{x \mid x^2 \ge 0\}$ is all of $\RR$, which has no supremum, and the argument treats the number $a$ and the set $A$ as the same object. The intended result (Theorem I.35) is that every $a \ge 0$ has a unique nonnegative square root; uniqueness follows from $0 \le b < c \Rightarrow b^2 < c^2$, and existence is proved as follows. Let $S = \{x \ge 0 \mid x^2 \le a\}$; it is nonempty ($0 \in S$) and bounded above by $1 + a$, so $b = \sup S$ exists by Axiom 10. If $b^2 < a$, a slightly larger number is still in $S$, contradicting that $b$ is an upper bound; if $b^2 > a$, a slightly smaller number is still an upper bound, contradicting that $b$ is the least one; so $b^2 = a$.
:::

## Exercises

(Sobbing and crying violently rn.)

:::exercise
If $x$ and $y$ are arbitrary real numbers with $x < y$, prove that there is at least one real $z$ satisfying $x < z < y$.

:::solution
Let $A$ and $B$ be subsets of $\RR$, and let $x \in A$ and $y \in B$, where $x < y$. Assume $A$ has a supremum of $z$ and $B$ has an infimum of $z$. Thus $\sup A = \inf B = z$. Thus $x < z < y$ exists. (Does this work?)

Sketch: $A \subseteq \RR$, $B \subseteq \RR$, with $\sup A = z$ and $\inf B = z$:
$$
A = \{x_1, x_2, \dots, z\}, \qquad B = \{z, y_1, y_2, \dots, y\}.
$$
(???)
:::
:::

:::remark Correction
Assuming sets with $\sup A = \inf B = z$ already assumes that such a $z$ exists, and even then only $x \le z \le y$ follows. A proof: let $z = (x + y)/2$. Adding $x$ and then $y$ to both sides of $x < y$ (Theorem I.18) gives $2x < x + y < 2y$, and multiplying by $\tfrac12 > 0$ (Theorem I.19) gives $x < z < y$.
:::

:::exercise
If $x \in \RR$, prove that there are integers $m$ and $n$ such that $m < x < n$.

:::solution
We know there must exist some $n$ such that $x < n$, by Theorem I.29. Assume $\RR$ is bounded below. Theorem I.27 tells us that there exists a greatest lower bound, say $b$. Then $b + 1$, being more than $b$, cannot be a lower bound for $\RR$. Thus there is at least one integer $p$ such that $p < b + 1$. For this $p$ we have $p - 1 < b$; this cannot be, because $b$ is a greatest lower bound. Thus we have a contradiction. Now we state that there exists a $y \in \RR$ such that $q \in \RR$ is $q < y$. We know this must be true because if not, there would be a greatest lower bound for $\RR$, contradicting what we just proved. Thus replace $q$ with $m$ and $y$ with $x$. We now have $m < x < n$.
:::
:::

:::remark Correction
The second half does not produce an integer $m < x$: it argues about real numbers below a real $y$, which is a different matter. A proof: by Theorem I.29 there are positive integers $n > x$ and $k > -x$. Then $m = -k$ is an integer with $m < x$, so $m < x < n$.
:::

:::exercise
If $x > 0$, prove that there is a positive integer $n$ such that $1/n < x$.

:::solution
In the previous proof we created a corollary which proved that there exists an $n$ such that $n > x$ when $x$ is some number in $\RR$. $(1/n)$ does not change this.
:::
:::

:::remark Correction
Having an integer $n > x$ does not by itself give $1/n < x$. A proof: Theorem I.29 applied to the real number $1/x$ gives a positive integer $n > 1/x$, and multiplying by $x/n > 0$ gives $x > 1/n$.
:::

:::exercise
If $x \in \RR$, prove that there is exactly one integer $n$ such that $n \le x < n + 1$. This $n$ is called the **greatest integer in $x$** and is denoted by $[x]$. For example, $[5] = 5$, $[5/2] = 2$, $[-8/3] = -3$.

(I’m honestly confused with what this is even saying.)
:::

:::exercise
If $x \in \RR$, prove that there is exactly one integer $n$ with $x \le n < x + 1$.

:::solution
We know $x < x + 1$; in terms of integers, $x + 1$ is one more than $x$, thus $x = n$. Assume $x < n < x + 1$ for integers. Then $x < n \Rightarrow x + 1 < n + 1$, but $n < x + 1$, thus this cannot be, and we must have one integer, where $x = n$.
:::
:::

:::remark Correction
Taking $n = x$ is wrong for a general real $x$: for $x = 1/2$ the integer is $n = 1$, and $x < n < x + 1$ can happen. A proof: by the previous exercise there is an integer $k$ with $k \le -x < k + 1$, that is, $-k - 1 < x \le -k$, so $n = -k$ satisfies $x \le n < x + 1$. If $n$ and $n'$ both satisfy this, then $|n - n'| < 1$, and two integers that close are equal.
:::

:::exercise
If $x, y \in \RR$ with $x < y$, prove that there exists at least one rational $r$ such that $x < r < y$, and hence infinitely many.

:::solution
By an earlier exercise we know that there exist $m < x < n$, where $m, n \in \RR$. Thus the inverse of $x$ must be true, thus $x < r < y$, where there exist infinitely many $r \in \RR$.
:::
:::

:::remark Correction
The argument given does not prove the claim, and its $r \in \RR$ should be $r \in \QQ$ (for real $r$ the claim is the first exercise in this section). A proof: by Theorem I.30 choose a positive integer $n$ with $n(y - x) > 1$. Let $m = [nx] + 1$, where $[\,\cdot\,]$ is the greatest integer; then $nx < m \le nx + 1 < ny$, so $r = m/n$ is rational with $x < r < y$. Repeating the construction between $x$ and $r$, and so on, gives infinitely many.
:::

:::exercise
If $x$ is rational, $x \neq 0$, and $y$ is irrational, prove that $x + y$, $x - y$, $xy$, $x/y$ and $y/x$ are all irrational.

:::solution
(a) Assume $x + y$, where $y$ is irrational and $x$ is rational, is rational. Then $x + y \in \QQ$. Then by this we know $x \in \QQ$ and $y \in \QQ$, but that cannot be; thus $x + y$ results in an irrational number.

(b) $x - y = x + (-y)$. Follows from (a).
:::
:::

:::remark Correction
The step ‘so $y \in \QQ$’ needs a reason: $y = (x + y) - x$ is a difference of two rationals, hence rational. This contradicts $y$ being irrational.
:::

:::exercise
Is the sum of two irrational numbers always rational? Say that we add $a + b$, where $a, b \in \PP$ (irrational).
:::
