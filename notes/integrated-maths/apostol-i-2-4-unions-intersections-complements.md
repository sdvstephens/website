---
course: integrated-maths
chapter: 13
section: I 2.4
title: Unions, Intersections, Complements
source-pages: apostol-05
---

![Four diagrams of two sets A and B: overlapping circles with both shaded for the union, overlapping circles with only the overlap shaded for the intersection, two separate circles for disjoint sets, and two separate shaded circles showing a union can also look like this](/notes/integrated-maths/figures/q1-ap-venn.svg)

- $A \cup B$: the **union**.
- $A \cap B$: the **intersection**.
- $A \cap B = \varnothing$: $A$ and $B$ are **disjoint**.

If $A = \{1, 2, 3\}$ and $B = \{4, 5, 6\}$, then the union is $\{1, 2, 3, 4, 5, 6\}$, or $A \cup B$.

$$
A - B = \{x \mid x \in A \text{ and } x \notin B\}.
$$

Unions and intersections are similar to addition and multiplication in that they are both commutative and associative:
$$
(A \cup B) \cup C = A \cup (B \cup C) \qquad \text{and} \qquad (A \cap B) \cap C = A \cap (B \cap C).
$$

A collection of sets is known as a **class**. Cursive capital letters $\mcA, \mcB, \mcC, \mcD, \dots$ are used to denote classes.

The union of all the sets in the class $\mcF$ (meaning $A + B + \cdots$, or $A \cup B \cup C \cup D \cup \cdots$) is written
$$
\bigcup_{A \in \mcF} A = \bigcup_{k=1}^{n} A_k = A_1 \cup A_2 \cup A_3 \cup \dots \cup A_n,
$$
the second form only if $\mcF$ is finite and $\mcF = \{A_1, A_2, \dots, A_n\}$.

(Okay, what if we said $\mathcal{R} = \{\ZZ, \PP, \QQ\} = \RR$??)

:::remark Correction
The class $\mathcal{R} = \{\ZZ, \PP, \QQ\}$ (with $\PP$ the irrationals) has three members, each a set of numbers, so it does not equal $\RR$. What is true is that the union of its members is $\RR$: $\ZZ \cup \PP \cup \QQ = \QQ \cup \PP = \RR$, since $\ZZ \subseteq \QQ$.
:::

The exact same type of “summation” works for intersections:
$$
\bigcap_{A \in \mcF} A = \bigcap_{k=1}^{n} A_k = A_1 \cap A_2 \cap \dots \cap A_n.
$$

:::note
The **cardinality** or size of a set is written $|A|$. For example, if $P = \{p \mid p \text{ is a prime number}\}$, then $|P| = \infty$; and if $A = \{1, 2, 3\}$, then $|A| = 3$.
:::
