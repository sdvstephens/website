Evaluate $S = \displaystyle\int_0^{\pi/2} \frac{\sin x}{\sin x + \cos x}\,dx$. No antiderivative
in sight. But the interval $[0, \tfrac{\pi}{2}]$ is symmetric under $x \mapsto \tfrac{\pi}{2} - x$,
which swaps $\sin$ and $\cos$. What if you add $S$ to its own mirror image?

## Discovery

1. Let $S = \int_0^{\pi/2} \frac{\sin x}{\sin x + \cos x}\,dx$. Substitute $u = \tfrac{\pi}{2} - x$
   (so $du = -dx$, and the limits swap). What integral $S'$ do you get, written back in terms of
   the variable name $x$?
2. You now have two expressions, $S$ and $S'$, that are *equal* (a substitution doesn't change a
   definite integral). Do not simplify them separately. Instead add them: form $S + S'$ and
   combine the two integrands over the common denominator $\sin x + \cos x$. What does the
   numerator become?
3. From the value of $S + S'$ and the fact that $S = S'$, solve for $S$.
4. Now abstract the move. You exploited a transformation $T$ of the domain under which the *problem*
   was unchanged but the *integrand* was rearranged into something friendlier. In one sentence,
   what made $x \mapsto \tfrac{\pi}{2}-x$ the right transformation to try here — before you knew it
   would work?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Exploiting symmetry** is the discovery move: when a problem (a sum, integral, expression,
equation, or configuration) is *invariant* under some transformation $T$ — swapping two
variables, reversing an order, reflecting an interval, cycling indices — you may **combine the
object with its $T$-image** to collapse asymmetric detail into something symmetric and simple.
The workhorse instances are: adding a sum to its reversal (Gauss pairing), adding an integral to
its reflected copy, and *symmetrizing* an expression by averaging over all variable-permutations.
It applies precisely when you can spot a $T$ that fixes the overall problem while shuffling its
parts. The governing principle: **if the whole is invariant under $T$, then quantities computed
from it must respect that invariance**, so terms broken by $T$ must cancel or pair up. Caution:
$T$ must genuinely fix the problem (same domain, same constraints); a "symmetry" that alters the
limits or the constraint region is not a symmetry and the trick misfires.

### Proof

Why does combining an object with its image force simplification? The mechanism is an averaging
identity, justified in the two canonical settings.

**Reflection of a definite integral.** Suppose $g$ is integrable on $[a,b]$ and $T(x) = a+b-x$
maps $[a,b]$ to itself. The substitution $u = a+b-x$ gives, for any integrable $f$,
$$\int_a^b f(x)\,dx = \int_a^b f(a+b-x)\,dx. \tag{$\ast$}$$
(The minus sign from $du = -dx$ is absorbed by swapping the flipped limits back.) Now take
$f(x) = \frac{\sin x}{\sin x + \cos x}$ on $[0,\tfrac{\pi}{2}]$ with $T(x) = \tfrac{\pi}{2}-x$.
Since $\sin(\tfrac{\pi}{2}-x) = \cos x$ and $\cos(\tfrac{\pi}{2}-x) = \sin x$, identity $(\ast)$
gives $S = \int_0^{\pi/2}\frac{\cos x}{\cos x + \sin x}\,dx$. Adding this to the original $S$,
$$2S = \int_0^{\pi/2}\frac{\sin x + \cos x}{\sin x + \cos x}\,dx = \int_0^{\pi/2} 1\,dx
= \frac{\pi}{2},$$
so $S = \tfrac{\pi}{4}$. The asymmetric numerator vanished because the *sum* of a term and its
reflection is symmetric, and the symmetric object is trivial.

**Pairing a finite sum with its reversal (Gauss).** For $\displaystyle A = \sum_{k=1}^n a_k$,
write the same sum with indices reversed, $A = \sum_{k=1}^n a_{n+1-k}$ (reindexing, so equal).
Adding termwise,
$$2A = \sum_{k=1}^n (a_k + a_{n+1-k}).$$
When $a_k + a_{n+1-k}$ is constant — e.g. $a_k = k$, giving $a_k + a_{n+1-k} = n+1$ — the
right side is $n(n+1)$ and $A = \tfrac{n(n+1)}{2}$. Again: the reversal is *equal* to the
original, so adding cannot change the value, yet it converts a running sum into constant pairs.

**The general principle.** In both cases $T$ is a bijection of the index/domain fixing the total
object, so "$X = X\circ T$". Adding gives $2X = X + X\circ T$, and the *symmetrized* integrand or
summand $\tfrac{1}{2}(f + f\circ T)$ is $T$-invariant — hence often constant or otherwise
trivial. The trick is exactly the exploitation of the identity $X = X \circ T$. $\blacksquare$

### Worked Instance

Resolving the Hook. With $S = \int_0^{\pi/2}\frac{\sin x}{\sin x+\cos x}\,dx$ and the reflection
$x \mapsto \tfrac{\pi}{2}-x$, the Proof gives $S' = \int_0^{\pi/2}\frac{\cos x}{\sin x+\cos x}\,dx$
and $S = S'$. Then
$$2S = S + S' = \int_0^{\pi/2}\frac{\sin x + \cos x}{\sin x + \cos x}\,dx = \frac{\pi}{2}
\quad\Longrightarrow\quad S = \frac{\pi}{4}.$$
No antiderivative of the integrand was ever needed — only the interval's symmetry.

### Pitfalls

- **A fake symmetry.** The transformation must fix the *whole* problem — domain, limits, and all
  constraints. Reflecting over the wrong interval, or swapping variables that appear
  asymmetrically in a constraint, invalidates "$X = X\circ T$".
- **Simplifying the two copies separately.** The power is in *adding* (or multiplying) the object
  and its image, not evaluating each. Keep them symbolic until you combine.
- **Forgetting the factor.** Adding gives $2S$ (or $2A$); divide at the end. A common slip is
  reporting $S+S'$ as the answer.
- **Broken symmetry near boundaries.** Averaging can hide an issue at a fixed point of $T$ (e.g.
  $x = \tfrac{\pi}{4}$ here is harmless, but discontinuities at fixed points sometimes need care).

:::
:::

## Connections

Prereqs: **meta-small-cases** (small cases often reveal which variables or limits are symmetric).
This is the abstract engine behind Gauss's sum (**found-gauss-pairing**), reflection tricks in
definite integrals (**ana-integral-symmetry**), and it unlocks **meta-substitution-normalization**
(a normalization is a symmetry-respecting change of variables). Averaging over *all* permutations
of the variables is the "symmetrize" version used throughout **inequalities**. Recognition
trigger: the problem looks unchanged if you swap variables, reverse an order, or reflect an
interval — so add it to its own mirror image. Appears constantly on the Putnam.
