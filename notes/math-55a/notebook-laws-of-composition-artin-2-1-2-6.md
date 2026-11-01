---
course: math-55a
chapter: 1
section: N3
title: Laws of Composition (Artin 2.1–2.6)
date: 2025-09-04
source-pages: math55-05
---

## 2.1 Laws of composition

- A **law of composition** is a function $f : S \times S \to S$ producing $f(a, b) = p$, where $a, b, p \in S$.
- Note: $a, b$ cannot be recovered from $p$; i.e., without knowing $a, b$, we cannot find them with $p$.
- We tend to reserve $+$ for commutative laws of composition, but $*$ can be either or.

Let $T$ be a set and $f$ and $g$ maps $T \to T$. Let $g \circ f \equiv t \mapsto g(f(t))$. The rule $g, f \mapsto g \circ f$ is a law of composition on the maps $T \to T$.

:::question
If composition is associative and any $* : S \times S \to S$ is a law of composition (?), then why is associativity of $*$ a group axiom?

Because a law of composition is not $\cong$ a binary operation; rather, it is a binary op.
:::

:::example
Let $T = \{a, b\}$. Then the maps $T \to T$ are 4 maps: $i$ (the identity), $i(a) = a$, $i(b) = b$; $\tau$, the “transposition”, defined by $\tau(a) = b$, $\tau(b) = a$; and 2 constant functions $\alpha, \beta$, with $\alpha(a) = a$, $\alpha(b) = a$, and $\beta(a) = b$, $\beta(b) = b$. For $\circ$ on the maps $T \to T$ we have the set $\{i, \tau, \alpha, \beta\}$, with a table (row $g$, column $f$, entry $g \circ f$):

| $\circ$ | $i$ | $\tau$ | $\alpha$ | $\beta$ |
|---|---|---|---|---|
| $i$ | $i$ | $\tau$ | $\alpha$ | $\beta$ |
| $\tau$ | $\tau$ | $i$ | $\beta$ | $\alpha$ |
| $\alpha$ | $\alpha$ | $\alpha$ | $\alpha$ | $\alpha$ |
| $\beta$ | $\beta$ | $\beta$ | $\beta$ | $\beta$ |

Since $\alpha \circ \beta = \alpha$ and $\beta \circ \alpha = \beta$, composition is not commutative.
:::

We can use the fact of associativity of composition to define a product of any given string of $n$ elements $a_1 a_2 \cdots a_n$ in $S$. Observe $(((a_1 a_2) a_3) a_4) \cdots$.

:::proposition 2.1.4
For a law of composition on a set $S$, there exists a unique way to define the product of $n$ elements $(a_1, a_2, \dots, a_n)$, denoted temporarily by $[a_1 a_2 \cdots a_n]$, with the following properties:
1. $[a_1] = a_1$, i.e. the product of any single $a_m$ is $a_m$;
2. any product $[a_1 a_2]$ is given by our law of composition;
3. for any $i \in \ZZ$ with $1 \leq i < n$, $[a_1 \cdots a_n] = [a_1 \cdots a_i][a_{i+1} \cdots a_n]$.
:::

:::proof
By induction: take $i = n - 1$; then for $i < n - 1$,
$$
[a_1 \cdots a_{n-1}][a_n] \implies [a_1 \cdots a_i][a_{i+1} \cdots a_{n-1}][a_n] \implies [a_1 \cdots a_i][a_{i+1} \cdots a_n],
$$
but more formally lol.
:::

## Identities, inverses and first examples

- Often we use $1$ multiplicatively and $0$ additively for our identity element (the reason why is obvious).
- If $la = 1$ and $ar = 1$, then $l = r$ (by associativity: $l = l(ar) = (la)r = r$); $a$ is then invertible.
- There may exist an element which is not invertible but has a right or a left inverse.
- For the symmetric group $S_n$, there are $n!$ permutations of a set of $n$ elements.
- All groups of order two are essentially the same group.
