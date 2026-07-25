You know $\cos 30^\circ$ and $\cos 45^\circ$ exactly. Can you get $\cos 75^\circ$ from them without a calculator? Adding the angles is easy; the question is what happens to their cosines when you do.

## Discovery

1. On the unit circle, let $A = (\cos\alpha,\sin\alpha)$ and $B=(\cos\beta,\sin\beta)$. Write down the squared distance $|AB|^2$ by expanding $(\cos\alpha-\cos\beta)^2+(\sin\alpha-\sin\beta)^2$ and simplifying with the Pythagorean identity. Your answer should involve one product term.
2. Now rotate the whole picture so that $B$ moves to $(1,0)$. Rotation preserves distances, so $A$ moves to the point at angle $\alpha-\beta$, namely $(\cos(\alpha-\beta),\sin(\alpha-\beta))$. Compute $|AB|^2$ again as the squared distance from this point to $(1,0)$.
3. You now have two expressions for the same $|AB|^2$. Set them equal. What identity for $\cos(\alpha-\beta)$ pops out?
4. Replace $\beta$ by $-\beta$ and use the reflection rules $\cos(-\beta)=\cos\beta$, $\sin(-\beta)=-\sin\beta$. What formula for $\cos(\alpha+\beta)$ do you get?
5. To reach $\sin(\alpha+\beta)$, use $\sin\theta = \cos(90^\circ-\theta)$ and feed $90^\circ-(\alpha+\beta)=(90^\circ-\alpha)-\beta$ into your difference formula. What comes out?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For all angles $\alpha,\beta$:
$$\cos(\alpha\pm\beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta,$$
$$\sin(\alpha\pm\beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta.$$
The signs pair as written: the cosine formula *flips* the sign, the sine formula *keeps* it. Setting $\alpha=\beta=\theta$ gives the double-angle forms $\cos 2\theta = \cos^2\theta-\sin^2\theta$ and $\sin 2\theta = 2\sin\theta\cos\theta$.

### Proof

Let $A=(\cos\alpha,\sin\alpha)$, $B=(\cos\beta,\sin\beta)$ on the unit circle. Directly,
$$|AB|^2 = (\cos\alpha-\cos\beta)^2 + (\sin\alpha-\sin\beta)^2 = 2 - 2(\cos\alpha\cos\beta+\sin\alpha\sin\beta),$$
using $\cos^2+\sin^2=1$ twice.

Rotation by $-\beta$ is a rigid motion (it preserves all distances), and it carries $B$ to $(1,0)$ and $A$ to the point at angle $\alpha-\beta$, i.e. $A'=(\cos(\alpha-\beta),\sin(\alpha-\beta))$. Hence
$$|AB|^2 = |A'(1,0)|^2 = (\cos(\alpha-\beta)-1)^2 + \sin^2(\alpha-\beta) = 2 - 2\cos(\alpha-\beta).$$
Equating the two expressions and cancelling $2$ and $-2$:
$$\cos(\alpha-\beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta.$$
Substituting $\beta \to -\beta$ (with $\cos$ even, $\sin$ odd) gives $\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta$.

For sine, use the cofunction identity $\sin\theta=\cos(90^\circ-\theta)$:
$$\sin(\alpha+\beta)=\cos\big(90^\circ-\alpha-\beta\big)=\cos\big((90^\circ-\alpha)-\beta\big).$$
Apply the difference formula with $90^\circ-\alpha$ in place of $\alpha$ and use $\cos(90^\circ-\alpha)=\sin\alpha$, $\sin(90^\circ-\alpha)=\cos\alpha$:
$$\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta.$$
Replacing $\beta\to-\beta$ yields the difference version. $\blacksquare$

### Worked Instance

$\cos 75^\circ = \cos(45^\circ+30^\circ) = \cos 45^\circ\cos 30^\circ - \sin 45^\circ\sin 30^\circ$
$$= \frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2} - \frac{\sqrt2}{2}\cdot\frac12 = \frac{\sqrt6-\sqrt2}{4}.$$
Numerically $\approx 0.2588$, matching $\cos 75^\circ$. And $\sin 75^\circ=\sin(45^\circ+30^\circ)=\tfrac{\sqrt2}{2}\cdot\tfrac{\sqrt3}{2}+\tfrac{\sqrt2}{2}\cdot\tfrac12=\tfrac{\sqrt6+\sqrt2}{4}$; note $\cos^2 75^\circ+\sin^2 75^\circ=\tfrac{(6+2-2\sqrt{12})+(6+2+2\sqrt{12})}{16}=1$. ✓

### Pitfalls

- The cosine formula reverses the sign: $\cos(\alpha+\beta)$ has a **minus** in front of $\sin\alpha\sin\beta$. Mixing this up is the most common error.
- $\cos(\alpha+\beta)\ne\cos\alpha+\cos\beta$ — trig functions are not additive.
- In the double-angle $\cos 2\theta$, three equivalent forms exist: $\cos^2\theta-\sin^2\theta = 2\cos^2\theta-1 = 1-2\sin^2\theta$. Pick whichever eliminates the variable you don't want.

:::
:::

## Connections

Prereqs: the unit circle and its reflection rules. This is the engine room of trigonometry: every multiple-angle identity, the law of cosines (unlocks: `geo-law-sines-cosines`), and the passage to complex exponentials descend from here. Because the addition rule is exactly how rotations compose, it foreshadows De Moivre's theorem (unlocks: `tc-demoivre`) and sum-to-product (unlocks: `tc-sum-to-product`). Recognition trigger: any angle that splits as a sum or difference of angles you already know.
