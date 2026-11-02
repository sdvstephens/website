---
course: neuroscience
chapter: 12
section: G16
title: Language and the Brain
lecturer: Matilde Marcolli
source-pages: 1-37
---

The main reference for this lecture is Jonathan R. Brennan’s book *Language and the Brain* (Oxford, 2022), the source of most of the figures described below.

## What is language?

There are two questions here:

- What is *Language*? (French *langage*, Spanish *lenguaje*, …)
- What is *a Language*? (French *langue*, Spanish *lengua*, …)

They are similar to the questions “What is Life?” and “What is an organism?” in biology. The subject is **natural** language, as opposed to artificial languages (formal languages, programming languages, …).

The point of view of this course: **language is a kind of structure**. It can be approached mathematically and computationally, like many other kinds of structures, and the main purpose of mathematics is the understanding of structures.

Some basic facts:

- There are many different *languages*: more than 7000 are classified, in more than 200 **language families**, plus isolated languages that do not fit any known family.
- Languages **change** over time (the subject of historical linguistics).
- The **variability** is *not* arbitrary: language is an extremely structured system.
- **Spoken language** goes through the auditory cortex … *but* not always: there are **signed languages**, and there is reading and writing.
- Language has a **computational structure**.
- Language is a very recent **evolutionary development**, with structural differences from forms of animal communication such as those of primates, songbirds and cetaceans.

### Levels of structure

A language exists at many different levels of structure.

- **Phonology**: *sound* structures; the building blocks (phonemes); tone systems; phonetics (the physical aspects of sound).
- **Morphology**: *words* (roots, affixes, stress); the building blocks (morphemes); morphological typology (how languages use morphemes); lexicology; word formation; paradigms (the words associated to the same lexeme, such as conjugation and declension); morphosyntax.
- **Syntax** (Greek $\sigma\acute{\upsilon}\nu\tau\alpha\xi\iota\varsigma$, “ordering together”): *sentences*; the core computational process of sentence building (I-language, the internal language faculty); hierarchical structures; movement and transformations; cross-linguistic syntactic variation (syntactic parameters); the interface with the sensory-motor system (externalization); the interface with the conceptual-intentional system (the syntax–semantics interface).
- **Semantics**: *meaning*; semantic parsing of syntactic structures; semantic spaces (proximity, similarity); truth values (formal logic, propositional calculus).

**Syntax** is the large-scale structure of language and its key computational mechanism. It is also what most clearly distinguishes human language from animal communication, so it is the key focus in understanding what language *is* as a structure.

### An analogy with physics

Physics looks very different at different *scales*:

- general relativity and cosmology ($\ge 10^{10}$ m);
- classical physics ($\sim 1$ m);
- quantum physics ($\le 10^{-10}$ m);
- quantum gravity ($10^{-35}$ m).

The slide shows this with a strip of twelve photographs zooming in step by step, from a spiral galaxy and star fields down through a landscape seen from the air, a hand, the texture of skin and finally a cluster of cells. Despite dreams of a unified theory, we deal with different mathematical models for different levels of structure.

In the same way we view language at different “scales”:

- units of sound;
- words;
- sentences;
- global meaning.

We expect to be dealing with different mathematical structures and different models at these different levels. The mechanisms in the brain involved in language also vary according to these different scales.

## Language in the brain: early observations

The slide shows a side view of the left hemisphere with the frontal, parietal, occipital and temporal lobes colored, **Broca’s area** in the frontal lobe (Brodmann areas 44 and 45), **Wernicke’s area** in the temporal lobe (Brodmann area 22), and the **arcuate fasciculus**, the bundle of fibers joining them.

- The early evidence came from observations of patients whose language capacities were compromised after various kinds of brain damage.
- Pierre Paul Broca (1860s): localization in the left frontal lobe. **Broca’s area** is involved in speech production.
- Carl Wernicke (1870s): language relies on links between the frontal and temporal lobes (speech production and speech comprehension). **Wernicke’s area** is in the temporal lobe.

## Methods for studying language in the brain

**fMRI** (functional magnetic resonance imaging) senses differences in blood oxygenation, the **BOLD signal** (blood-oxygenation-level dependent). It identifies the location of brain activity well, but it is *slow*: its temporal resolution is on the order of seconds, against the millisecond speed of neural activity, and speech runs at 2–6 words per second. The slide shows fMRI maps on the left hemisphere for separate language processes (phonemic, reading, comprehension, semantic, naming, articulation), an overlap map of all of them, and the regions involved in at least two of the processes.

**Electrophysiological techniques** record electrical activity. They have high temporal resolution but not very good spatial resolution (it is hard to locate the source of the signal). They are **EEG** (electroencephalography) and **MEG** (magnetoencephalography, which has higher spatial resolution than EEG). The slide’s figure shows how an experiment works:

- (A) a continuous EEG recording, about 15 seconds long, from electrodes on the scalp while words are presented (cat, fork, bird, cup, chair, frog, bee); the words belong to two conditions;
- (B) averaging the stretches of signal after the words of each condition gives an **event-related potential** for each condition, an amplitude curve over the first second after the word, whose peaks differ in latency and polarity between the two conditions;
- (C) the topography of the response, as maps of the scalp.

**Stimulation techniques**:

- **TMS** (transcranial magnetic stimulation) uses a strong, focused magnetic field to induce or inhibit electrical currents in the cortex, with a resolution of a few millimeters for the target area. It can induce an action potential or inhibit neural activity (“virtual lesions”).
- **DCS** (direct cortical stimulation) uses a current instead of a magnetic field. It is invasive and used during brain surgery. A non-invasive version is **tDCS** (transcranial direct current stimulation).

These stimulation techniques are used to check whether a certain region is *causally* related to a particular language activity.

## From sounds to words

![From sound to word in three steps: the acoustic signal becomes a neuro-auditory representation (the neurogram), then a neuro-phonological representation (the phonological sketch), then a lexical item](/notes/neuroscience/figures/h13-sound-to-word.svg)

The figure on the slide shows (A) the ear with the cochlea unrolled, from the base, which responds to high frequencies (20,000 Hz), through mid frequencies (1,500 Hz), to the apex, which responds to low frequencies (20 Hz); and (B) the brain with the auditory cortex marked.

- **Cochlea**: different sites respond to different frequencies. This is a spatial code: the cochlea computes a spectrogram of the sound.
- **Cochleagram**: the neural responses that represent the sound.
- These responses pass through subcortical structures and arrive at Heschl’s gyrus in the **primary auditory cortex** (in the contralateral hemisphere).

:::definition
**Tonotopy** is the cortical spatial code for sound: different parts of the auditory cortex respond to different frequencies (they have different receptive fields).
:::

The **speech signal** has two parts, the **speech envelope** (the waveform) and the **frequencies** (the fine structure). The slide shows the sound wave of “cats are soft and furry” with its phonetic transcription [k æ t s ɑ r s ɑ f t ɛ n d f ɝ i] under it: the envelope carries the temporal information (below 20 Hz), and the spectrogram underneath carries the spectral information in the fine structure (above 50 Hz).

How is the temporal information from the speech envelope encoded in the auditory cortex? The slide’s figure plots the speech envelope (black) and the neural activity in the auditory cortex (green) over 100 seconds of listening; they track each other, with correlation $\rho = 0.53$.

:::definition
**Periodotopy** is another spatial code, which maps the waveform of the speech envelope.
:::

So there are two coordinates: sound energy at different frequencies, and varying temporal patterns of loudness. The primary auditory cortex has gradient spatial maps for both the spectral and the temporal information. The slide shows both maps on Heschl’s gyrus (HG) and the primary auditory area hA1 next to the superior temporal gyrus (STG): a tonotopic map with a color scale from 400 to 6400 Hz, and a periodotopic map with a color scale from 2 to 256 Hz (scale bar 1 cm).

Tonotopy and periodotopy use *continuous* variables. Language has to pass from these to *discrete* combinatorial information:

- **phonemes** are a discrete system;
- populations of neurons in the *superior temporal gyrus* have **phonemic receptive fields**.

From the neurogram (tonotopy and periodotopy) in the primary auditory cortex, a **phonological sketch** is generated within 100–150 milliseconds in the superior temporal gyrus surrounding the auditory cortex. This integrates information over a short window (for spectral detail) and over a longer window (for the speech envelope).

:::definition
**Analysis by synthesis**: the phonological sketch is refined through feedback loops between the acoustic input and linguistic knowledge. The result is word recognition.
:::

![Analysis by synthesis: a speech waveform feeds the neurogram, then the phonological sketch, then lexical access; an analysis-by-synthesis stage exchanges information with the phonological sketch, receives input from lexical access, and sends top-down predictions back to the neurogram](/notes/neuroscience/figures/h13-analysis-by-synthesis.svg)

The location of the peak of the **M100** brain response (an MEG response about 100 ms after the sound) differs for different vowel phonemes. The slide shows a vowel chart (front, central and back vowels, by how high the tongue is placed) for the vowels of English with example words (*eat*, *it*, *hey*, *yes*, *hat*, *her*, *up*, *who*, *good*, *go*, *boy*, *hot*, *hi*, *how*), and below it the measured peak locations in millimeters. For the front vowels [i], [y], [ɛ], [œ] the high and low vowels separate along an inferior-to-superior plane; for the back vowels [ɑ], [ɯ], [ɔ], [u] they separate along an anterior-to-posterior plane. In both plots the unrounded and the rounded vowels also separate along the medial–lateral axis.

## Words

The slide sets up the notation
$$\text{word} \;:=\; \text{lexical item} \;:=\; \langle\, \text{FORM},\ \text{MEANING},\ \text{STRUCTURE} \,\rangle,$$
where the form is the phonology, orthography, …, and the meaning is the concept, the semantic features, … For example, *cat* is ⟨/kæt/, CAT, NOUN⟩, where the slide draws the meaning CAT as a picture of a cat.

- One distinguishes between **words** and **lexical items**.
- There is a large but finite set $\mathcal{SO}_0$ of lexical items (meant as form plus structure: stem, morphological and syntactic features).
- There is a map $\varphi : \mathcal{SO}_0 \to \mathcal{S}$ to some **semantic space** $\mathcal{S}$: the association of meaning to words.
- This pairing of the form and the meaning of words happens in the *posterior middle temporal gyrus* (**pMTG**).
- The posterior areas of the left temporal lobe are linked to semantics (Wernicke: damage there affects semantics).

Damage to the pMTG preserves correct syntax, and it also preserves semantics (patients judge the similarity and proximity of concepts correctly), but it damages the link from semantics to linguistic form.

MEG measures the magnetic fields of the brain’s responses while a person hears or reads a single word. The slide shows these responses on the left hemisphere at successive times (55, 170, 250, 320 and 420 ms for spoken words; 100, 170, 250, 320 and 420 ms for written words).

- **Spoken word**: primary auditory cortex $\to$ superior temporal gyrus $\to$ temporal lobe (pMTG, lexical) and anterior areas.
- **Written word**: primary visual cortex $\to$ ventral pathway (visual object recognition) $\to$ a ventral region at the border of the temporal and occipital lobes (letters: the **visual word-form area**); then the pathway merges with the one for spoken words.

### Morphemes

**Morphemes** are the basic building blocks of word formation. In the slide’s examples each piece is a pair ⟨form, meaning⟩, with the meanings drawn as pictures (a cat, a goose, a leaf):

| Word | Decomposition | Pieces | Word recognized |
|---|---|---|---|
| “cats” | cat + s | ⟨/kæt/, CAT⟩ and ⟨/s/, PLURAL⟩ | ⟨/kæt/, CAT⟩ ⟨/s/, PLURAL⟩ |
| “geese” | goose + [plural] | ⟨/gus/, GOOSE⟩ and ⟨ø, PLURAL⟩ | ⟨/gis/, GOOSE GOOSE⟩ |
| “natural” | nature + al | ⟨/nætʃɹ/, NATURE⟩ and ⟨/ʌl/, ADJECTIVE⟩ | ⟨/nætʃɹʌl/, ADJECTIVE-OF-NATURE⟩ |

In “geese” the plural morpheme has no form of its own (ø): it shows up as the change of vowel. In “natural” the meaning of the whole is the adjective formed from *nature*.

:::definition Full decomposition hypothesis
Words are recognized after being decomposed into morphemes.
:::

### Semantics in the brain

Large parts of the brain, working together, are involved in semantics: the temporal, frontal and parietal lobes. The slide shows (A) the regions involved in semantic processing marked on views of the left hemisphere, and (B) flattened maps of the cortex colored by which class of meaning activates each spot. A wide range of regions is activated by words in different classes of meaning (for example, red marks social words).

Semantics is needed for more than words: it is also needed to interpret visual scenes and for other tasks. Semantic spaces are older than the development of language, and some of them are specialized for words.

For instance, *semantic dementia* affects the visual system as well as language. The slide contrasts two models of how concepts are stored, a “distributed-only theory” (separate areas for action, sound, motion, shape, color and words, linked to each other) and a “distributed-plus-hub theory” (the same areas, all linked through a hub in the anterior temporal lobe). Next to them are pictures of a duck, a camel and a seal beside a patient’s drawings of the same animals: the drawings keep the features that animals in general have and lose the distinctive ones, so the duck and the seal get four legs and the camel loses its hump. Brain scans of the patient complete the slide. The **anterior temporal lobes** are the main site of neural degeneration in semantic dementia.

## Syntax: the core part of the faculty of language

- Sentences are hierarchical structures; they are more than strings of words.
- There are two key aspects: **structure formation** and **movement**.

![The hierarchical structure of “The red apple that I cut is on this table”: the subject [the red apple that I cut] is built from the determiner “the” and the phrase “red apple” (adjective plus noun), joined with the relative clause “that I cut”; the predicate [is on this table] contains a verb and a prepositional phrase; a dashed arrow from “cut” back to the subject marks that the apple is what was cut, and a dotted arc joins “this” and “table”](/notes/neuroscience/figures/h13-red-apple-tree.svg)

In the slide’s tree for “The red apple that I cut is on this table,” the internal nodes carry meanings as well as categories: “red apple” denotes a red apple (the slide draws it), and the determiner phrase denotes $[\![\text{the}]\!]$ applied to it. The object of *cut* is the red apple, far away in the string: this long-distance link is marked by the dashed arrow. The slide also shows a photograph of a cut apple on a cutting board.

### The generative model and its brain signals

The **theoretical linguistics model** (generative linguistics) has:

- a **core computational mechanism** (free structure formation and movement);
- a **system of filters**:
  1. grammaticality (phases, theta roles, syntactic parameters, the interface with morphology);
  2. semantics (plausibility, consistency);
- an interface with the sensory-motor system.

The theoretical linguistics model can be formulated mathematically (this is the subject of the next lecture). The **main question** is: what are the neuroscience counterparts of all these aspects of the model, that is, how are they instantiated in the neurocomputational architecture of the brain?

For the **filters**, EEG shows two main brain signals, **event-related potentials** (ERPs) involved in sentence parsing: the **N400** for semantic acceptability and the **P600** for syntactic acceptability.

**Syntax: grammaticality.** The slide plots the ERP for grammatical sentences (solid curve) against ungrammatical ones (dashed curve), with negative voltage drawn upward (scale mark $-3\,\mu$V) and the 400 ms point marked: from about 500 ms on, the ungrammatical curve swings down, that is, positive. A scalp map of the difference between grammatical and ungrammatical sentences at 700 to 900 milliseconds is strongest at the back of the head. The P600 is strongest over the central posterior parts of the scalp, and ungrammatical sentences show an increased positive response.

**Semantics: plausibility and predictability.** The slide plots the size of the predictability effect (blue) and of the plausibility effect (red) from 0 to 1000 ms after the word, with the 400 ms point marked, and rows of scalp maps from 100 to 600 ms for each. Both predictability and plausibility affect the N400 signal; the predictability effect appears earlier and with a larger amplitude.

:::example Jabberwocky
How can the semantic effects of interpretability and predictability be disentangled from the structural constraints of syntax? One way is to use sentences that are syntactically correct but made of pseudo-words, as in Lewis Carroll’s “Jabberwocky”:

> *‘Twas brillig, and the slithy toves*
>
> *Did gyre and gimble in the wabe:*
>
> *All mimsy were the borogoves,*
>
> *And the mome raths outgrabe.*

Areas of the *left anterior temporal lobe* respond differently to sentences made of real words and to syntactically correct sentences made of pseudo-words. In the slide’s plot of the response amplitude in the temporal pole (TP) against the size of the constituents (conditions c01, c02, c03, c04, c06, c12), the response to normal sentences grows with constituent size, while the response to “jabber” sentences stays flat near zero.
:::

### The fronto-temporal combinatoric network

The slide’s brain map outlines the regions involved: the inferior frontal gyrus (pars opercularis and pars triangularis), the anterior temporal lobe, the superior and middle temporal gyri, and the posterior temporal lobe, with the post-central and supra-marginal gyri labeled for orientation.

- These regions are found by comparing sentences with unstructured word lists.
- The **left inferior frontal gyrus** (LIFG) and anterior and posterior temporal regions are involved in understanding sentences.
- The **arcuate fasciculus** consists of white-matter tracts (large bundles of axons) between the temporal lobe and the inferior frontal lobe.
- These tracts connect specific “hot spots” involved in comprehending sentences.

### The compositional process

Is building a sentence a bottom-up or a top-down process? The slide’s figure compares the two for “Ada loves Winston,” word by word; the circled numbers count how many structure-building steps each new word triggers.

![Bottom-up (A) and top-down (B) structure building for “Ada loves Winston”: bottom-up builds DP(Ada) at the first word, V(loves) at the second, and at “Winston” builds DP(Winston), then VP, then S (3 steps); top-down builds S, DP and VP at “Ada” (3 steps), then one step at “loves” and one at “Winston”](/notes/neuroscience/figures/h13-ada-loves-winston.svg)

Linguistic theory proposes a structure-building model that is **bottom-up**: the Merge action on workspaces (next lecture).

The response to simple two-word compositions (“red boat”) appears in the **left anterior temporal lobe** (LATL) at 250 milliseconds, the initial stage of composition. It is followed by the **ventro-medial prefrontal cortex** (VMPFC) at 400 milliseconds, perhaps a later semantic evaluation of the composed phrase (the syntax–semantics interface). The slide shows the MEG amplitude (in nAm) over the first 500 ms in each region: a peak in the LATL between 200 and 300 ms marked “two-word composition,” and a later difference in the VMPFC between about 300 and 450 ms.

But the same area, the LATL, also appears to be involved in both syntactic structure building and conceptual or semantic aspects, which interact: there is increased activity for structure building *if* the words in the composition make the meaning more specific (restrictive), and not if they make it broader, more general. What is the role of the different sub-regions of the LATL?

### Syntax in the posterior temporal lobe

- Activity in the left posterior temporal lobe increases for **sentences** compared to **phrases**.
- Different parts of the **left posterior temporal lobe** (LPTL) encode **thematic roles** (theta theory) such as agent and patient (the external argument and the internal argument).

The slide’s figure (A) plots the response over time in four regions (IFG, ATL, PTL and TPJ, the temporo-parietal junction) while a sentence, “the poet will recite a verse,” and a word list, “the fencer the baby their bill,” are presented word by word over three seconds; the PTL and TPJ show an interaction between structure and word position. Panel (B) is a horizontal brain slice showing the neighboring spots in the left posterior temporal lobe that encode the patient and the agent.

### Dependencies

- The left inferior frontal gyrus (LIFG) is involved in sentence processing.
- The original idea (Broca, Wernicke) of a split between comprehension and production is more subtle in the modern understanding.
- In linguistic theory, the same mechanism that is responsible for building sentences also acts for parsing sentences.
- Non-fluent Broca’s aphasia is now understood to be a comprehension problem as well as a production problem.

:::example Passivization
The slide pairs each of the sentences

- (a) “The deer was chased by the lion,”
- (b) “The tiger was chased by the lion”

with two pictures: the lion chasing the other animal, and the other animal chasing the lion. Patients have problems when the sentence is “semantically reversible,” as in (b), where a tiger could just as well chase a lion: then only the syntax tells the two pictures apart, and the syntax is what is affected.
:::

In the structure-formation process of syntax, long-distance dependencies are typically introduced by *movement* (transformations). In “The tiger was chased ___ by the lion,” the tiger is linked to the empty position after *chased*.

- Large studies of stroke patients look at the patterns of lesion overlap, and studies of neurodegenerative disorders affecting language-related brain regions measure the thickness of the cortical gray matter.
- Reduced gray matter in the inferior frontal gyrus affects complex, semantically reversible sentences.

There are different kinds of long-distance dependencies in syntax:

- *wh*-movement: “Which song did the band play ___ at the concert?”;
- anaphora, and backward anaphora: in “Because she extinguished the flames, the firefighter saved them,” *she* and *the firefighter* refer to the same person, and the pronoun comes first.

![Long-distance dependencies: in “The tiger was chased ___ by the lion” an arc joins “tiger” to the gap after “chased,” and in “Which song did the band play ___ at the concert?” an arc joins “which song” to the gap after “play”](/notes/neuroscience/figures/h13-movement-gaps.svg)

![Backward anaphora in “Because she extinguished the flames, the firefighter saved them”: “she” and “firefighter” point to the same referent; to process it, “she” is added to working memory, held in memory, and integrated with the noun “firefighter” when it arrives](/notes/neuroscience/figures/h13-backward-anaphora.svg)

Longer dependencies place more demand on working memory. This shows in the activation of the *pars triangularis* part of the LIFG: the slide’s bar chart of the percent signal change there is higher for long than for short dependencies, both for *wh*-questions (about 1.8 against 1.5) and for backward anaphora (about 1.9 against 1.1).

### Two streams

The last slide puts the pieces together on a map of the left hemisphere, as two streams joining six components.

![The dual-stream picture: a dorsal stream links articulation, the sensory-motor interface, acoustic analysis (the neurogram) and phonological analysis; a ventral stream links phonological analysis, the lexical interface and the combinatoric network, which links back to articulation](/notes/neuroscience/figures/h13-dual-stream.svg)

## References

- Jonathan R. Brennan, *Language and the Brain*, Oxford University Press, 2022.
- Lewis Carroll, “Jabberwocky” (quoted as an example of syntax with pseudo-words).
