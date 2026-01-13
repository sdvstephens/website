---
course: math-55a
chapter: 1
section: 1.2
title: Relations
---

# Section 1.2: Relations

The review of ordered pairs leads us to our next discussion on relations. A relation in more colloquial terms is a dynamic or characteristic of a given element shared with another given element such that they are arranged in the form of ordered pairs. Think of equality; then think of equality as equating $(2+3,1+4)$, or perhaps something more interesting, the set of all $(x,y)$ such that $x$ is a man, $y$ is an enby (slay), and $x$ is married to $y$ (many such cases). We can then think of relations as sets of ordered pairs $R \subset A \times B$. Consider the following examples:

1. $R \coloneqq \{(x,y)\in \mathbb{N}^2 \mid y-x>0\} \iff xRy  \equiv y>x$, the relation of greater than;
2. $R\coloneqq \{ (a,B) \in A \times \mathcal{P}(A) \mid a \in B\} \iff aRB \equiv a \in B$, the relation of *belonging* (being an element of);
3. $R\coloneqq \{(c,d)\in \{\text{all cats}\} \times  \{\text{all dogs}\}  \mid c,d \text{ live in the same house}\}$.

Naturally, there are an infinite number of possible relations, however there is a particular class of these which we are interested in for the time being---that which relates two equivalent elements (the definition of what equivalence means is, for now, notably ambiguous).

If a relation $R$ exists s.t. $xRx$ for any $x \in  X$, then we say $R$ is reflexive. If $xRy \iff yRx$, it is symmetric, and if $xRy, \,  yRz \implies xRz$, it is transitive. If a given relation $R$ satisfies all three of these properties (reflexivity, symmetry, transitivity), then we say it is an **equivalence relation**.

:::definition
Equivalence relations}{An equivalence relation, usually denoted $\sim$, is a relation that is reflexive, symmetric, and transitive $\forall (a,b) \in  A \times  B$.
:::

:::example
Consider each of the three qualifiers (axioms) for the existence of an equivalence relation. Find an explicit relation that has one property but not the other for each of the three axioms.


:::solution
I apologize for the terse abstraction involved in this first example, but let
$$ R\coloneqq \{(1,1),(2,2),(3,3)(1,2),(2,3)\in \{1,2,3\}^2  \}  ,$$
notice that $(1,1),(2,2),(3,3)$ is true for $R$, thus reflexivity holds; however, it is quick to see that $(1,2)$ exists in $R$ but $(2,1)\not\in R$, thus symmetry cannot hold. For transitivity, notice that we have $(1,2) \text{ and }  (2,3)$, so we can set up the first step, but $(1,3)\not\in  R$! Thus transitivity fails. This example is a reminder that we need not think of concrete properties that can be applied in front of our eyes (shapes, dogs, even equality!) in order to have or manipulate some sort of mathematical relation. Next, consider a the relation $R\coloneqq \{(a,b)\mid a \neq  b\}$. First, $aRa$ is categorically untrue thus reflexivity means nothing to us. Symmetry, however, tells us that if $aRb$ then $bRa$, which is true! Transitivity may seems sneakily true at first, but notice that $aRb, \, bRa \implies aRa$ is not true (we simply replaced $c$ with another instance of $a$). Finally, transitivity as a singular property is pretty straightforward. Consider $x>y$, notice that $x > x \implies x < x$ is categorically untrue since $x$ can never be greater or less than itself, additionally, $x > y$ never implies $y > x$. For transitivity however, notice that $x > y, \, y > z \implies x > z$ is true!
:::
:::

Returning to our discussion of relations and partitions we can have this thing called an **induced relation**. Let $R\coloneqq X / \mathfrak{C}$, we say that if $x,y \in  \mathfrak{C}$ and $xX / \mathfrak{C} y$, then $X / \mathfrak{C}$ is the relation **induced** by the partition $\mathfrak{C}$.

:::proposition
Explicitly the relationship between the two is given as follows: if $R$ is an equivalence relation on $X,$ then the set of equivalence classes form a partition of $X$ that induces the relation $R,$ and if $\mathfrak{C}$ is a partition of $X,$ then the induced relation is an equivalence relation whose set of equivalence classes is exactly $\mathfrak{C}$.
:::

