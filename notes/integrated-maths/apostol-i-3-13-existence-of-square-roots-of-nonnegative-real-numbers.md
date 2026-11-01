---
course: integrated-maths
chapter: 13
section: I 3.13
title: Existence of Square Roots of Nonnegative Real Numbers
source-pages: apostol-18
---

- $A = \{x \mid x^2 \ge 0\}$, thus $\sup(A) = A$.
- $\alpha^2 = A$, $\alpha \in \RR$, $\sup(A) = \alpha^2$:
  - $\alpha^2 > A \Rightarrow \sup(A) > A$; but $\sup$ is the least upper bound of $A$, thus $A \not> \sup(A)$.
  - $\alpha^2 < A \Rightarrow \sup(A) < A$, which violates Axiom 10.
  - $\alpha^2 = A \Rightarrow \sup(A) = A$ must be true. $\square$

:::remark Correction
The set $\{x \mid x^2 \ge 0\}$ is all of $\RR$, which has no supremum, and the argument treats the number $a$ and the set $A$ as the same object. The intended result (Theorem I.35) is that every $a \ge 0$ has a unique nonnegative square root; uniqueness follows from $0 \le b < c \Rightarrow b^2 < c^2$, and existence is proved as follows. Let $S = \{x \ge 0 \mid x^2 \le a\}$; it is nonempty ($0 \in S$) and bounded above by $1 + a$, so $b = \sup S$ exists by Axiom 10. If $b^2 < a$, a slightly larger number is still in $S$, contradicting that $b$ is an upper bound; if $b^2 > a$, a slightly smaller number is still an upper bound, contradicting that $b$ is the least one; so $b^2 = a$.
:::
