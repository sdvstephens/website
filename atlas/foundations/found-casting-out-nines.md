A student claims $457 \times 638 = 291{,}566$. Before checking the multiplication the long way, a bookkeeper adds the digits of each factor, of the product, multiplies the little sums, and in seconds says "that's wrong." How can a handful of single-digit sums catch an error in a six-digit product?

## Discovery

1. Recall that the digit sum of a number is congruent to the number itself mod $9$. So for any integer $n$, replacing $n$ by its digit sum does not change $n \bmod 9$. Take $457$: what is $457 \bmod 9$, found by summing its digits (and, if needed, summing again)?
2. Do the same for $638$. Now you have $457 \equiv a$ and $638 \equiv b \pmod 9$ for small $a,b$. If a correct product $P = 457 \times 638$ exists, what must $P$ be congruent to mod $9$? (You may use, from the modular-arithmetic idea, that congruences multiply: $457\cdot 638 \equiv a\cdot b$.)
3. The *claimed* product is $291{,}566$. Compute its digit sum mod $9$. Compare with your prediction from step 2. If they disagree, what can you conclude about the claim — and, just as important, what can you *not* conclude if they agree?
4. Suppose two answers both pass the check but only one is right. Construct (or describe) a wrong answer that the nines test would fail to catch. What kind of error slips through?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Casting out nines** is a consistency check for arithmetic based on reducing mod $9$ via digit sums. For any integers whose sum, difference, or product you have computed, reduce each operand to its digit-sum residue mod $9$, perform the same operation on those small residues, and compare with the digit-sum residue of your answer. If they differ, the computation is definitely wrong. If they match, the computation *may* be right — the check can miss errors, but never falsely condemns a correct answer. It is a fast one-way filter, not a proof of correctness.

### Proof

The check rests on two facts. First (from the digit-sum rule), every integer $n$ satisfies $n \equiv S(n) \pmod 9$, where $S(n)$ is its digit sum; iterating, $n$ is congruent mod $9$ to its digital root, a single digit. Second, congruence mod $9$ is preserved by addition, subtraction, and multiplication: if $x \equiv x'$ and $y \equiv y' \pmod 9$, then $x+y \equiv x'+y'$, $x-y \equiv x'-y'$, and $xy \equiv x'y' \pmod 9$.

Now suppose we have computed, say, a product $P = xy$. If the computation is correct, then genuinely $P = xy$, so
$$S(P) \equiv P = xy \equiv S(x)\,S(y) \pmod 9.$$
Thus a *correct* answer always passes the check — the test never rejects truth. Contrapositive: if $S(P) \not\equiv S(x)S(y) \pmod 9$, the answer $P$ cannot equal $xy$, so it is wrong. This is the detecting power.

But the converse fails. Passing means only $P \equiv xy \pmod 9$; it does not force $P = xy$. Any error that changes the true product by a multiple of $9$ — including the very common transposition of two digits, which alters a number by a multiple of $9$ — leaves the residue unchanged and escapes detection. Hence the check is sound (never false alarm) but incomplete (misses $\tfrac{1}{9}$-ish of random errors, and all multiple-of-$9$ errors). $\blacksquare$

### Worked Instance

Check the claim $457 \times 638 = 291{,}566$.
- $457$: digit sum $4+5+7 = 16 \to 1+6 = 7$, so $457 \equiv 7 \pmod 9$.
- $638$: digit sum $6+3+8 = 17 \to 1+7 = 8$, so $638 \equiv 8 \pmod 9$.
- Predicted product residue: $7 \times 8 = 56 \to 5+6 = 11 \to 2$, so a correct product is $\equiv 2 \pmod 9$.
- Claimed product $291{,}566$: digit sum $2+9+1+5+6+6 = 29 \to 2+9 = 11 \to 2$. That gives residue $2$ — which *matches*.

So the nines check does **not** flag this particular claim. (In fact $457 \times 638 = 291{,}566$ is correct.) The bookkeeper's quick "that's wrong" in the Hook would only be justified had the residues disagreed; the lesson is that a *pass* is reassurance, not proof, and a genuine catch happens only when the residues clash.

### Pitfalls

- A *pass* does not prove correctness. Transposing digits, or any error that shifts the answer by a multiple of $9$, sails through undetected.
- The check is one-directional: mismatch $\Rightarrow$ definitely wrong; match $\Rightarrow$ possibly right. Never report a matched check as a correctness guarantee.
- Reduce fully to a single digit (the digital root) to make the final comparison trivial, but remember a digit sum of $9$ (or $0$) both represent residue $0 \pmod 9$.
- It only checks $+,-,\times$ cleanly. Division and remainders need care.

:::
:::

## Connections

Prereqs: the digit-sum rule for $3$ and $9$ (which supplies $n \equiv S(n) \pmod 9$) and the fact that congruences multiply. Casting out nines is the oldest practical *application* of modular arithmetic — a working example of reducing to a residue class to gain information cheaply. It foreshadows checksums and error-detecting codes. Recognition trigger: "quickly sanity-check this arithmetic" — reduce mod $9$ (or mod $11$ via the alternating sum) and compare.

## History

Casting out nines is an ancient method for checking arithmetic by replacing each number with its digit sum modulo 9. It was described by Indian mathematicians and by the Neoplatonist Iamblichus (c. 300 AD), reached the Islamic world, and was popularized in Europe by Fibonacci's Liber Abaci (1202) and later reckoning manuals. The method works because $10\equiv 1\ (\mathrm{mod}\ 9)$, so a number and its digit sum are congruent mod 9; an arithmetic result that fails the check must be wrong. It gave merchants and clerks a fast partial verification in an age of hand computation, though it cannot catch every error. The technique is a vivid historical application of what Gauss later formalized as congruence. ANABASIS presents casting out nines as modular arithmetic put to practical use.
