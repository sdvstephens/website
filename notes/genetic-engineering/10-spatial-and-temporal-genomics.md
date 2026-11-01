---
course: genetic-engineering
chapter: 1
section: 10
title: Spatial and Temporal Genomics
lecturer: Fei Chen
source-pages: 16-18
---

Why understand cell types? Programmable medicines + gene therapy stuff.

Things needed:

1. How to read and write the genome.
2. Targeting specific cell types.
3. Understanding the molecular basis of a given disease.

“Diseases of cell types”: for every given neurodegenerative disease there are specific cell types that are lost (but we don’t know all the cell types of the brain!). We don’t want to classify cells by morphology.

## Measuring the transcriptome from single cells (mRNA)

- **1996–early 2000s**: manual cell picking with microarrays, or in situ hybridization, but not both simultaneously. (Then: about 3,000,000,000 dollars.)
- **2010s**: next-generation DNA sequencing (now about 500 dollars).
- **Innovation**: cells go into droplets (reaction chambers) made with oil and water.

![A microfluidic cross junction with oil from the top, cells and beads from the bottom and water from the right, making droplets](/notes/genetic-engineering/figures/d1-droplet-junction.svg)

How do you get only one cell per droplet? Tighter concentration (low Poisson loading), so most droplets are empty. Two cells do happen sometimes; math helps you. Mix two species’ cells, boom.

What’s the point of the plastic bead? It carries PCR primers for reverse transcription, and each one has a unique “barcode” that marks all the mRNA of the cell.

**2015**: looking at cells by what genes they express. How to determine what the cutoff is? Know bio, lol. Genes and cells go to clusters and become “cell types.”

- Unstable RNA isn’t represented. It only captures truly 10% of a cell’s RNA (it used to be 1%).
- You can do it large-scale or manually to get it higher: fewer cells + more sensitivity vs. more cells + lower sensitivity.
- Using stats and bulk-cell data to recover.
- Certain genes are more sensitive to measurement, hence pseudorandom. A problem? Same gene in many cells, not gene A vs. gene B, etc.

## Spatial genomics

Problem with single cells: collecting zoos instead of ecosystems → spatial genomics.

- Drew inspiration from GPS satellite triangulation.
- DNA barcodes, when cleaved, act like GPS data (use for Jirsa’s virtual brain twins (VBTs)?), and the stack becomes pseudo-3D.
- More than 5000 different molecular clusters in neurons.

> “The glia are kinda boring.” Dr. Fei Chen, 2026

The worm has about 300 neurons, all distinct; glia function in a more generalized way, hence their seeming molecular homogeneity. 97% of the >5000 clusters are from neurons.

## Neurons, cell types and objective functions

- Info + model weights ⇒ number of neurons ↑.
- Algorithms and objective functions ⇒ number of cell types ↑. (Can expression come from experience?)

![Two sketched graphs of number of cell types against number of neurons, rising gently on the left and steeply on the right](/notes/genetic-engineering/figures/d1-cell-types-vs-neurons.svg)

- Less or more complex (reminds me of OCD?).
- Encoded innate behavior into the genome.
- The steep curve → innate behaviors in new things of logic.

- References on the figure: Langlieb et al. 2023; Erö et al. 2018.

Overfitting + double descent → defects of the objective function (steering subsystem) ⇝ OCD and psychiatric things? Overexpression or underexpression (or other) of specific cell types? Fun question.
