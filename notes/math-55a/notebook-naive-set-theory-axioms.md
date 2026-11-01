---
course: math-55a
chapter: 1
section: N1
title: Naive Set Theory Axioms
source-pages: math55-03
---

## The axioms

:::definition I. Axiom of extension
Two sets are equal iff they have the same elements.
:::

:::definition II. Axiom of specification
For every set $A$ and every assertion $S(x)$, there exists a set $B$ which is all the $x \in A$ such that $S(x)$ is true. $B$ is called a **subset** of $A$.
:::

:::definition III. Axiom of pairs
For any two sets there exists a set that they both belong to.
:::

:::definition IV. Axiom of unions
For every collection of sets there exists a set that contains all the elements of at least one set of the given collection.
:::

:::note Union notation
$$
\bigcup \mathcal{C} \equiv \bigcup_{X \in \mathcal{C}} X \equiv \bigcup \{ X : X \in \mathcal{C} \}.
$$
:::

## Consequences and terms

- Set pair generation comes from $\{a\} \cup \{b\} = \{a, b\}$.
- $A \cap B = \emptyset$: $A$ and $B$ are **disjoint**.
- If any two distinct sets in a collection are disjoint, they are **pairwise disjoint** (a pairwise disjoint collection).
- Distributive law: $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$, and the inverse (with $\cup$ and $\cap$ swapped): $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$.
- Difference $\equiv$ relative complement.
- Under difference, $E$ is our universe, such that $\emptyset' = E$, $E' = \emptyset$.
- De Morgan laws.
- Principle of duality for sets.
- **Relation**: a set of ordered pairs (cf. functions).
  - reflexive (duh): $xRx$;
  - symmetric: $xRy \Rightarrow yRx$;
  - transitive (duh).
