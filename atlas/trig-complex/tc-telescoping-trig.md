What is $\sin 1^\circ + \sin 2^\circ + \cdots + \sin 179^\circ$? Adding $179$ sines by hand is hopeless — but multiply the whole sum by one cleverly chosen number and it collapses to a two-term answer.

## Discovery

1. Recall the product-to-sum identity $2\sin A\sin B = \cos(A-B)-\cos(A+B)$. Fix a common gap $d$. What does $2\sin\tfrac{d}{2}\,\sin(k d)$ equal? Write it as a difference of two cosines.
2. Look at the right-hand side of step 1 as $C_k - C_{k+1}$ (or $C_{k-1}-C_k$) for some sequence $C$. Identify $C_k$ explicitly.
3. Now consider $\displaystyle\sum_{k=1}^{n}\sin(kd)$. Multiply the whole sum by $2\sin\tfrac{d}{2}$ and apply step 1 to each term. What kind of sum do you now have on the right?
4. A sum of consecutive differences collapses. Write down what's left after cancellation, then divide back by $2\sin\tfrac{d}{2}$ to isolate the original sum. (Assume $\sin\tfrac{d}{2}\ne 0$.)
5. Test your formula on a tiny case, $\sin d + \sin 2d$ with $d=90^\circ$, to make sure it isn't off by a term.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For $\sin\tfrac{d}{2}\ne 0$,
$$\sum_{k=1}^{n}\sin(kd) = \frac{\sin\!\left(\tfrac{nd}{2}\right)\,\sin\!\left(\tfrac{(n+1)d}{2}\right)}{\sin\!\left(\tfrac{d}{2}\right)},\qquad
\sum_{k=1}^{n}\cos(kd) = \frac{\sin\!\left(\tfrac{nd}{2}\right)\,\cos\!\left(\tfrac{(n+1)d}{2}\right)}{\sin\!\left(\tfrac{d}{2}\right)}.$$
The mechanism: multiplying by $2\sin\tfrac{d}{2}$ converts each term into a difference of cosines (resp. sines) of consecutive multiples of $\tfrac{d}{2}$, and the sum telescopes.

### Proof

Fix $d$ with $\sin\tfrac{d}{2}\ne 0$. By product-to-sum, for each $k$,
$$2\sin\tfrac{d}{2}\,\sin(kd) = \cos\!\left(kd-\tfrac{d}{2}\right) - \cos\!\left(kd+\tfrac{d}{2}\right) = \cos\!\left(\tfrac{(2k-1)d}{2}\right) - \cos\!\left(\tfrac{(2k+1)d}{2}\right).$$
Set $C_k = \cos\!\left(\tfrac{(2k-1)d}{2}\right)$; then the right side is $C_k - C_{k+1}$. Summing $k=1$ to $n$,
$$2\sin\tfrac{d}{2}\sum_{k=1}^{n}\sin(kd) = \sum_{k=1}^{n}(C_k - C_{k+1}) = C_1 - C_{n+1} = \cos\tfrac{d}{2} - \cos\!\left(\tfrac{(2n+1)d}{2}\right).$$
Now apply sum-to-product to the right side, $\cos X - \cos Y = -2\sin\tfrac{X+Y}{2}\sin\tfrac{X-Y}{2}$, with $X=\tfrac{d}{2}$, $Y=\tfrac{(2n+1)d}{2}$:
$$\cos\tfrac{d}{2} - \cos\!\left(\tfrac{(2n+1)d}{2}\right) = -2\sin\!\left(\tfrac{(n+1)d}{2}\right)\sin\!\left(-\tfrac{nd}{2}\right) = 2\sin\!\left(\tfrac{(n+1)d}{2}\right)\sin\!\left(\tfrac{nd}{2}\right).$$
Dividing by $2\sin\tfrac{d}{2}$ gives the stated sine formula. The cosine sum is identical with $2\sin\tfrac{d}{2}\cos(kd)=\sin\!\left(kd+\tfrac{d}{2}\right)-\sin\!\left(kd-\tfrac{d}{2}\right)$, which telescopes to $\sin\!\left(\tfrac{(2n+1)d}{2}\right)-\sin\tfrac{d}{2}=2\sin\tfrac{nd}{2}\cos\tfrac{(n+1)d}{2}$, then divide by $2\sin\tfrac{d}{2}$. $\blacksquare$

### Worked Instance

Evaluate $\sin 1^\circ + \sin 2^\circ + \cdots + \sin 179^\circ$. Here $d=1^\circ$ and $n=179$:
$$\sum_{k=1}^{179}\sin(k^\circ) = \frac{\sin\!\left(\tfrac{179}{2}^\circ\right)\sin\!\left(\tfrac{180}{2}^\circ\right)}{\sin\!\left(\tfrac12^\circ\right)} = \frac{\sin 89.5^\circ\cdot\sin 90^\circ}{\sin 0.5^\circ} = \frac{\sin 89.5^\circ}{\sin 0.5^\circ} = \frac{\cos 0.5^\circ}{\sin 0.5^\circ} = \cot 0.5^\circ.$$
So the enormous sum equals $\cot 0.5^\circ \approx 114.6$. (The symmetry $\sin k^\circ=\sin(180^\circ-k)^\circ$ confirms the sum is positive and large.)

### Pitfalls

- The multiplier is $2\sin\tfrac{d}{2}$, using **half** the common gap. Using $2\sin d$ does not telescope.
- The formula breaks when $\sin\tfrac{d}{2}=0$ (i.e. $d$ a multiple of $360^\circ$); then every term is $0$ anyway, handle separately.
- Keep angle units consistent: if $d$ is in degrees, so are all the halved arguments.
- Don't confuse the two answers — the sine sum has $\sin\tfrac{(n+1)d}{2}$ on top, the cosine sum has $\cos\tfrac{(n+1)d}{2}$.

:::
:::

## Connections

Prereqs: sum-to-product / product-to-sum, whose difference-of-cosines identity is exactly what makes the sum collapse. This is the trig cousin of general telescoping and geometric-series summation; the same sum $\sum\cos(kd)+i\sum\sin(kd)$ can also be attacked as a geometric series $\sum e^{ikd}$ via Euler's formula. Recognition trigger: a long sum of $\sin$ or $\cos$ at equally spaced angles — reach for the $2\sin\tfrac d2$ multiplier.
