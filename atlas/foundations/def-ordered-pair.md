On a map, "$3$ east, $5$ north" and "$5$ east, $3$ north" send you to different corners. Yet a set
cannot tell them apart: $\{3,5\} = \{5,3\}$. We need an object that *remembers which came first* —
built out of nothing but sets.

## Discovery

1. Write the two-element set $\{3, 5\}$. By extensionality, does it record any difference between
   "$3$ then $5$" and "$5$ then $3$"? What information have you lost?
2. You want a single object $O(a,b)$ such that $O(a,b) = O(c,d)$ holds *only* when $a = c$ **and**
   $b = d$ — first matches first, second matches second. Using only sets and membership, try to
   *tag* one of the two entries so it stands out as "the first." (Hint: put one entry inside an
   extra layer of braces.)
3. Test your tagged object on a hard case: what should happen when $a = b$? And does your object
   ever accidentally equal the object for a *different* pair? Push on it until you either break it
   or trust it.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **ordered pair** $(a, b)$ is an object with **first coordinate** $a$ and **second coordinate**
$b$, whose defining property is
$$(a,b) = (c,d)\quad\Longleftrightarrow\quad a = c\ \text{ and }\ b = d.$$
That order-sensitive property is *all* we require of it. A concrete set-theoretic realisation
(Kuratowski) shows such an object exists:
$$(a,b)\ :=\ \big\{\,\{a\},\ \{a,b\}\,\big\}.$$
The singleton $\{a\}$ tags $a$ as the first coordinate; the pair $\{a,b\}$ supplies both entries.

### Proof

We verify the Kuratowski set satisfies the defining property — this is the well-definedness /
existence content of the definition. Everything uses only $\in$ and extensionality.

($\Leftarrow$) If $a = c$ and $b = d$, then $\{a\} = \{c\}$ and $\{a,b\} = \{c,d\}$, so
$\{\{a\},\{a,b\}\} = \{\{c\},\{c,d\}\}$ by extensionality.

($\Rightarrow$) Suppose $\{\{a\},\{a,b\}\} = \{\{c\},\{c,d\}\}$. Split on whether $a = b$.

*Case $a = b$.* Then $\{a,b\} = \{a\}$, so the left side is $\{\{a\}\}$ — a set with one member.
The right side must also have one member, forcing $\{c\} = \{c,d\}$, hence $c = d$, and the right
side is $\{\{c\}\}$. Then $\{a\} = \{c\}$ gives $a = c$; with $a=b$, $c=d$ we get $a=c$ and
$b=d$.

*Case $a \ne b$.* Then $\{a\}$ (one member) and $\{a,b\}$ (two members) are different sizes, so on
the right the one-member set $\{c\}$ must equal the one-member set on the left, namely $\{a\}$;
thus $a = c$. And the two-member set $\{a,b\}$ must equal $\{c,d\}$. From $\{a,b\} = \{c,d\}$ and
$a = c$: extensionality says $b \in \{c,d\} = \{a,d\}$, and $b \ne a$, so $b = d$. In both cases
$a = c$ and $b = d$. $\blacksquare$

### Worked Instance

The map corners: $(3,5)$ and $(5,3)$. As Kuratowski sets,
$(3,5) = \{\{3\},\{3,5\}\}$ and $(5,3) = \{\{5\},\{5,3\}\} = \{\{5\},\{3,5\}\}$. Their singletons
differ ($\{3\} \ne \{5\}$), so the sets differ — the pairs are unequal, exactly as the map demands.
Contrast the plain set: $\{3,5\} = \{5,3\}$. The extra layer of braces around the first coordinate
is precisely the memory of "which came first."

### Pitfalls

- **Order matters: $(a,b) \ne (b,a)$ unless $a = b$.** This is the entire reason the object exists.
- **The Kuratowski formula is a *realisation*, not the meaning.** What matters is the defining
  property; other encodings (e.g. $\{\{a,1\},\{b,2\}\}$-style) work too. Don't over-invest in the
  braces — invest in "$(a,b)=(c,d) \iff a=c \wedge b=d$."
- **$\{a,b\}$ is not $(a,b)$.** One is an unordered set, the other the ordered pair.
- The case $a=b$ collapses $\{a,b\}$ to a singleton — the proof must handle it separately, as
  above; skipping it is a classic gap.

:::
:::

## Connections

Built on the set primitive (membership $+$ extensionality) and nothing else, this is the first
*constructed* object: order manufactured from unordered sets. It is the atom of the function
(a function is a set of ordered pairs) and of the coordinate plane ($\RR^2$ is a set of ordered
pairs of reals). Recognition trigger: any time "which is first" matters — coordinates, inputs vs
outputs, directed edges — you are using an ordered pair.

## History

The ordered pair captures the idea that order matters — that $(a,b)$ differs from $(b,a)$ — which unordered sets cannot express. René Descartes' coordinate geometry (1637) already relied on ordered pairs of numbers to locate points, but a definition purely in terms of sets came only in the twentieth century. Norbert Wiener gave one in 1914, and Felix Hausdorff another, before Kazimierz Kuratowski published the now-standard $(a,b)=\{\{a\},\{a,b\}\}$ in 1921. This reduction mattered because it showed that relations and functions, built from ordered pairs, require no new primitives beyond sets and membership. It was a key step in the set-theoretic unification of mathematics. ANABASIS uses Kuratowski's construction to bootstrap ordered pairs from the set primitive.
