# awesome-genome-visualization

A list of interesting genome visualizers, genome browsers, or
genome-browser-like implementations

See the new companion website here
https://cmdcolin.github.io/awesome-genome-visualization/

Follow the BlueSky https://bsky.app/profile/awesomegenomeviz.bsky.social or
Mastodon account https://genomic.social/@awesomegenomevisualization

Note that the organization on the GitHub README here is a best effort
categorization using the first tag applied to each tool, but tools can have
multiple tags too. See the website to see all tags applied to tools

The general focus here is on tools that plot things in genomic or sequence
coordinate space

Note: This list runs the gammut from bespoke and simple to more general-purpose
and complex tools. Some are historical, or may be for more visual inspiration
only

I also encourage you to make your own visualization, things like R, ggplot2,
matplotlib, and (the elephant in the room: coding agents, but careful with
these, they can hamper your learning if you become overly reliant on them) make
this much easier! But also consider making your visualization code re-usable for
the wider community! And feel free to send PRs for more tools!

Finally, at least 68% (393/572) tools in this list have written publications for
their tools. They went through the effort to write it up, cite these tools!!

New rule: 2026-10-11 I will no longer be accepting tools without source
available. I don't want feel inspired to share source-not-available vibe-coded
tools in this repo. Rare exceptions may be made for commercial vendors that have
unique functionality in line with pre-existing commercially tagged tools, or
certain web based tools (e.g. my Silo tag), where sharing the code is not
feasible.

## Genome browser

- ABrowse (genome browser) (Had integrations with BioMart, Taverna)
  [(pub)](https://doi.org/10.1186/1471-2105-13-2)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/abrowse2.png)
- [Argo](https://web.archive.org/web/20070924141423/http://www.broad.mit.edu/annotation/argo/)
  (See also the tool 'Combo', a comparative version)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/argo.png)
- [ATCC Genome Portal](https://docs.onecodex.com/en/articles/3996697-using-the-genome-browser)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/atcc.png)
- [BasePlayer](https://baseplayer.fi/)
  [(pub)](https://doi.org/10.1038/s41596-018-0052-3)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/baseplayer.png)
- [Biodalliance](http://www.biodalliance.org/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btr020)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/biodalliance.png)
- [Biodalliance comparative demo](http://biodalliance.org/dev/test-comparative.html)
  [(pub)](https://doi.org/10.1093/bioinformatics/btr020)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/biodalliance_comparative.png)
- [Celera genome browser](https://www.csee.umbc.edu/~turner/presentations/bvw2002/sld009.htm)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/celera.jpeg)
- [cisGenome Browser](https://jhui2014.github.io/browser/screenshots.html)
  [(pub)](https://doi.org/10.1093/bioinformatics/btq286)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cisgenome.png)
- [CodeXomics](https://scilence2022.github.io/CodeXomics/) (AI-native genome
  browser: conversational agents drive the view and run BLAST, primer design,
  and structure lookups; MCP server and plugin architecture included)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/codexomics.png)
- [CrossBrowse](https://github.com/shenkers/CrossBrowse)
  [(pub)](https://doi.org/10.1101/272880)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/crossbrowse.png)
- [DNASTAR](https://www.dnastar.com/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/dnastar.png)
- [Ensembl genome browser](https://useast.ensembl.org/Homo_sapiens/Location/View?r=17:63992802-64038237)
  [(pub)](https://doi.org/10.1093/nar/30.1.38)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ensembl.png)
- [Ensembl genome browser 2020 edition](http://2020.ensembl.org/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/2020ensembl.png)
- [Epiviz](https://epiviz.github.io/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btaa591)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/epiviz.png)
- [GBrowse 2](http://gmod.org/wiki/GBrowse) (Original gbrowse paper
  https://doi.org/10.1101/gr.403602) [(pub)](https://doi.org/10.1093/bib/bbt001)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gbrowse.png)
- [Geneious](https://www.geneious.com/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/geneious.png)
- [Genestack](https://genestack.com/blog/2015/05/28/navigation-in-genestack-genome-browser/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genestack.png)
- [GenomeMaps](http://www.genomemaps.org/)
  [(pub)](https://doi.org/10.1093/nar/gkt530)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genomemaps.jpg)
- [Genoverse](https://github.com/wtsi-web/Genoverse)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genoverse.png)
- [Golden Helix](https://www.goldenhelix.com/products/GenomeBrowse/) (Free for
  academic use)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/goldenhelix.png)
- [Gosling](https://gosling.js.org/) (Comparative views are limited to band
  tracks, see https://gosling.js.org/?example=BAND)
  [(pub)](https://doi.org/10.1109/TVCG.2021.3114876)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gosling.png)
- [gtracks](https://gitlab.com/salk-tm/gtracks) (Powered by pyGenomeTracks)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gtracks.png)
- [HiGlass](https://higlass.io)
  [(pub)](https://doi.org/10.1186/s13059-018-1486-1)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/higlass.png)
- [IGB](https://bioviz.org/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btw069)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/igb.jpg)
- [IGV](https://igv.org/) [(pub)](https://doi.org/10.1038/nbt.1754)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/igv.jpg)
- [IGV.js](https://github.com/igvteam/igv.js/)
  [(pub)](https://doi.org/10.1101/2020.05.03.075499)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/igvjs.png)
- [JBR](https://artyomovlab.wustl.edu/jbr/2018_h3k27ac_aging/) (Not open source,
  at least not on github)
  [(pub)](https://doi.org/10.1093/bioinformatics/btab376)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/jbr.png)
- [JBrowse](http://jbrowse.org/jbrowse1.html) (See also JBrowse plugin registry
  https://gmod.github.io/jbrowse-registry. Runs on the web or as a desktop app
  using Electron) [(pub)](https://doi.org/10.1186/s13059-016-0924-1)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/jbrowse.png)
- [JBrowse 2](http://jbrowse.org/jb2) (See gallery for more examples
  https://jbrowse.org/jb2/gallery)
  [(pub)](https://doi.org/10.1101/2022.07.28.501447)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/jbrowse2.png)
- [Kero-BROWSE](https://kero.hgc.jp/examples/CLCL/hg38/index.html) (Also can
  visualize basic synteny, see tracks e.g.
  https://kero.hgc.jp/tool/keyword.html#kero:chrX:153,724,868-153,744,762 human
  vs chimp) [(pub)](https://doi.org/10.1093/nar/gkx1001)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/kerobrowse.png)
- [NCBI Genome Data Viewer](https://www.ncbi.nlm.nih.gov/genome/gdv/)
  [(pub)](https://doi.org/10.1101/gr.266932.120)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gdv.png)
- [Nucleome browser](https://vis.nucleome.org/v1/main.html) (github at
  https://github.com/nucleome)
  [(pub)](https://doi.org/10.1101/2022.02.21.481225)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/nucleome.png)
- [Panoptes](https://www.malariagen.net/apps/ag1000g/phase1-AR3/index.html)
  [(pub)](https://doi.org/10.1093/bioinformatics/btx410)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/panoptes.png)
- [Persephone](https://persephonesoft.com/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/persephone.jpg)
- [Pileup.js](https://github.com/hammerlab/pileup.js)
  [(pub)](https://doi.org/10.1093/bioinformatics/btw167)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pileupjs.png)
- [Savant](http://bioinformatics-ca.github.io/savant_genome_browser_lab_2015/)
  [(pub)](https://doi.org/10.1093/nar/gks427)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/savant.jpg)
- [Strand NGS](https://www.strand-ngs.com/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/strandngs.png)
- [Sushi](https://www.bioconductor.org/packages/release/bioc/vignettes/Sushi/inst/doc/Sushi.pdf)
  [(pub)](https://doi.org/10.1093/bioinformatics/btu379)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/sushi.png)
- [svist4get](https://link.springer.com/article/10.1186/s12859-019-2706-8)
  [(pub)](https://doi.org/10.1186/s12859-019-2706-8)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/svis4get.png)
- [SWAV](http://swav.popgenetics.net/)
  [(pub)](https://doi.org/10.1038/s41598-019-57038-x)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/swav.png)
- [Tablet](https://ics.hutton.ac.uk/tablet/)
  [(pub)](https://doi.org/10.1093/bib/bbs012)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/tablet.jpeg)
- [trackplot (python)](https://github.com/ygidtu/trackplot)
  [(pub)](https://doi.org/10.1371/journal.pcbi.1011477)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/trackplot_python.png)
- [Trackster](https://galaxyproject.org/learn/visualization/)
  [(pub)](https://doi.org/10.1038/nbt.2404)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/trackster.png)
- [UCSC genome browser](https://genome.ucsc.edu/)
  [(pub)](https://doi.org/10.1101/gr.229102)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ucsc.jpg)
- [UGENE](http://ugene.net/)
  [(pub)](https://doi.org/10.1093/bioinformatics/bts091)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ugene.png)
- [UTGB (University of Tokyo Genome Browser)](http://utgenome.org/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btp350)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/utgb.png)
- [Valis browser](https://valis.bio/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/valis.png)
- [WashU epigenomics browser](https://epigenomegateway.wustl.edu/) (The ReactJS
  is a redesign, there is also a legacy version. Note also, there are
  comparative features
  https://www.biorxiv.org/content/10.1101/2022.11.29.518374v1)
  [(pub)](https://doi.org/10.1093/nar/gkz348)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/washu.png)
- [Zenbu](http://fantom.gsc.riken.jp/zenbu/)
  [(pub)](https://doi.org/10.1038/nbt.2840)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/zenbu.png)

## Accessibility

- [VIJB](https://github.com/NiBuMNHN/VIJB) (Companion to JBrowse that makes
  genome browsing usable for visually impaired people)
  [(pub)](https://doi.org/10.1093/bioinformatics/btag396)

## Annotation

- [ERGO](https://www.igenbio.com/ergo)
  [(pub)](https://doi.org/10.1093/nar/gkg148)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ergo.png)

## Assembly QC

- [ALVIS (chimeric alignment viewer)](https://github.com/SR-Martin/alvis)
  [(pub)](https://doi.org/10.1186/s12859-021-04056-0)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/alvis_chimeric.png)
- [Consed](http://bozeman.mbt.washington.edu/consed/consed.html)
  [(pub)](https://doi.org/10.1101/gr.8.3.195)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/consed.png)
- [GCI](https://github.com/yeeus/GCI)
  [(pub)](https://doi.org/10.1093/bioinformatics/btae633)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gci.jpg)
- [Genome Puzzle Master (GPM)](https://jianwei-zhang.github.io/LIMS/GPM-Manual.html)
  [(pub)](https://doi.org/10.1093/bioinformatics/btw370)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gpm.png)
- [Icarus QUAST](http://quast.sourceforge.net/icarus.html)
  [(pub)](https://doi.org/10.1093/bioinformatics/btw379)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/icarus.png)
- [MIRA](http://mira-assembler.sourceforge.net/docs/DefinitiveGuideToMIRA.html)
  (orig paper also describes mira here
  http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.23.7465&rep=rep1&type=pdf)
  [(pub)](https://doi.org/10.1101/gr.1917404)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mira.png)
- [vega](http://vega.archive.ensembl.org/Homo_sapiens/Location/Chromosome?r=6-QBL)
  (Mentioned in
  https://www.biorxiv.org/content/10.1101/2021.07.02.450883v1.full.pdf also
  note: vega standards for vertebrate genome annotation database)
  [(pub)](https://doi.org/10.1093/nar/gki135)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/vega.png)

## BLAST

- [BLAST+ (reading -outfmt 0 pairwise output is the original CLI bioinformatics!)](ftp://ftp.ncbi.nlm.nih.gov/blast/executables/blast+/LATEST/)
  [(pub)](https://doi.org/10.1186/1471-2105-10-421)
- [SequenceServer](https://sequenceserver.com/)
  [(pub)](https://doi.org/10.1093/molbev/msz185)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/sequenceserver.png)

## Chromatogram

- [ab1lens](https://fishka.bio/ab1lens) (Free, browser-based Sanger / .ab1
  chromatogram viewer. View and compare raw vs analyzed traces and basecalls,
  align a read to a reference to find mismatches, and export a high-resolution
  image. Runs entirely client-side — data never leaves the browser.)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ab1lens.jpg)

## Circular

- [Anvio](https://peerj.com/articles/1319/)
  [(pub)](https://doi.org/10.7717/peerj.1319)
- [bacircos](https://github.com/sablokg/bacircos) (Circular plots of bacterial
  genomes, MAGs and multi-genome synteny)
  [(pub)](https://doi.org/10.20944/preprints202609.2579.v1)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/bacircos.png)
- [BioCircos.js](http://bioinfo.ibp.ac.cn/biocircos/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btw041)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/biocircos.png)
- [BRICK (BRIG-like circular knowledgebase)](https://brick.ink/) (See also BRIG)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/brick.png)
- [BRIG](http://brig.sourceforge.net)
  [(pub)](https://doi.org/10.1186/1471-2164-12-402)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/brig.jpg)
- [CGView](http://cgview.ca/) (See also CGView comparison tool and other related
  https://paulstothard.github.io/cgview_comparison_tool/)
  [(pub)](https://doi.org/10.1093/nar/gkn179)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cgview.png)
- [CGView.js](https://js.cgview.ca/) (Used by proksee)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cgviewjs.png)
- [Circa](https://omgenomics.com/circa)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/circa.png)
- [Circleator](http://jonathancrabtree.github.io/Circleator/index.html)
  [(pub)](https://doi.org/10.1093/bioinformatics/btu505)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/circleator.png)
- [circlize](https://github.com/jokergoo/circlize)
  [(pub)](https://doi.org/10.1093/bioinformatics/btu393)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/circlize.jpeg)
- [Circos](http://circos.ca/) (no official github to my knowledge)
  [(pub)](https://doi.org/10.1101/gr.092759.109)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/circos.png)
- [CircosJS](https://github.com/nicgirault/circosJS)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/circosjs.png)
- [circularMT](https://github.com/msjimc/circularMT)
  [(pub)](https://doi.org/10.1093/bioinformatics/btae450)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/circularmt.png)
- [DNAPlotter](https://www.sanger.ac.uk/science/tools/dnaplotter)
  [(pub)](https://doi.org/10.1093/bioinformatics/btn578)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/dnaplotter.jpg)
- [gbdraw](https://github.com/satoshikawato/gbdraw)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gbdraw.png)
- [GenomeProjector](https://github.com/gaou/g-language/wiki)
  [(pub)](https://doi.org/10.1186/1471-2105-10-31)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/glanguage.jpg)
- [genoVi](https://github.com/robotoD/GenoVi)
  [(pub)](https://doi.org/10.1371/journal.pcbi.1010998)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genovi.png)
- [GGisy](https://github.com/Sanrrone/GGisy)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ggisy.png)
- [Gview](https://server.gview.ca/examples)
  [(pub)](https://doi.org/10.1093/bioinformatics/btq588)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gview.png)
- [JupiterPlot](https://github.com/JustinChu/JupiterPlot)
  [(pub)](https://doi.org/10.5281/zenodo.1241235)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/jupiterplot.png)
- [mummer2circos](https://github.com/metagenlab/mummer2circos)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mummer2circos.png)
- [OGDRAW](https://chlorobox.mpimp-golm.mpg.de/OGDraw.html)
  [(pub)](https://doi.org/10.1093/nar/gkz238)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ogdraw.png)
- [OmicCircos](http://bioconductor.org/packages/release/bioc/html/OmicCircos.html)
  [(pub)](https://doi.org/10.4137/CIN.S13495)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/omiccircos.png)
- [pyCirclize](https://github.com/moshi4/pyCirclize)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pycirclize.png)
- [pyCircos](https://github.com/ponnhide/pyCircos) (See also
  https://github.com/ponnhide/plasmidviewer)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pycircos.png)
- [RegulomeExplorer](http://explorer.cancerregulome.org/all_pairs/?dataset=TCGA_ACC)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cancerregulome.png)
- [seqviz](https://github.com/Lattice-Automation/seqviz#viewer)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/seqviz.png)
- [SyntenyPortal](http://bioinfo.konkuk.ac.kr/synteny_portal/)
  [(pub)](https://doi.org/10.1093/nar/gkw310)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/syntenyportal.png)
- [VicMAG](https://github.com/TsudaYusuke/VicMAG) (Plots many circular
  metagenome-assembled genomes at once, highlighting virulence and antimicrobial
  resistance genes) [(pub)](https://doi.org/10.1093/nargab/lqag109)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/vicmag.png)

## CNV

- [aCNVViewer](https://github.com/FJD-CEPH/aCNViewer)
  [(pub)](https://doi.org/10.1371/journal.pone.0189334)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/acnvviewer.png)
- [BAMScale](https://github.com/ncbi/BAMscale)
  [(pub)](https://doi.org/10.1186/s13072-020-00343-x)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/bamscale.png)
- [bcftools cnv](https://samtools.github.io/bcftools/howtos/cnv-calling.html)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/bcftools_cnv.png)
- CGH-Explorer [(pub)](https://doi.org/10.1093/bioinformatics/bti113)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cghexplorer.jpg)
- [CNANorm](https://www.bioconductor.org/packages/release/bioc/html/CNAnorm.html)
  [(pub)](https://doi.org/10.1093/bioinformatics/btr593)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cnanorm.png)
- [CNSpector](https://github.com/PapenfussLab/CNspector)
  [(pub)](https://doi.org/10.1038/s41598-019-42858-8)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cnspector.png)
- [cnvCurator](http://www.acsu.buffalo.edu/~lm69/cnvCurator)
  [(pub)](https://doi.org/10.1186/s12859-015-0766-y)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cnvcurator.png)
- [CNView](https://github.com/RCollins13/CNView)
  [(pub)](https://doi.org/10.1101/049536)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cnview.jpg)
- [CNVkit](https://cnvkit.readthedocs.io/en/stable/plots.html)
  [(pub)](https://doi.org/10.1371/journal.pcbi.1004873)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cnvkit.png)
- [CNVPlot](https://github.com/dantaki/CNVplot)
  [(pub)](https://doi.org/10.1101/030270)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cnvplot.jpg)
- [CNVpytor](https://github.com/abyzovlab/CNVpytor)
  [(pub)](https://doi.org/10.1093/gigascience/giab074)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cnvpytor.png)
- [copynumber](https://www.bioconductor.org/packages/release/bioc/vignettes/copynumber/inst/doc/copynumber.pdf)
  [(pub)](https://doi.org/10.1186/1471-2164-13-591)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/copynumber.png)
- [CoveragePlotter](http://lindenb.github.io/jvarkit/CoveragePlotter.html) (See
  also http://lindenb.github.io/jvarkit/WGSCoveragePlotter.html for
  multi-chromosome)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/coverageplotter.png)
- [covviz](https://brwnj.github.io/covviz/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/covviz.png)
- [genevisR](https://bioconductor.org/packages/release/bioc/vignettes/GenVisR/inst/doc/Intro.html)
  [(pub)](https://doi.org/10.1093/bioinformatics/btw325)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genevisr.png)
- [genome_coverage_plotter](https://github.com/matted/genome_coverage_plotter)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genome-coverage-plotter.png)
- [GenomePaint](https://genomepaint.stjude.cloud/) (Demos
  https://proteinpaint.stjude.org/bam/)
  [(pub)](https://doi.org/10.1016/j.ccell.2020.12.011)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genomepaint.png)
- [GenomeSpy](https://genomespy.app/)
  [(pub)](https://doi.org/10.1093/gigascience/giae040)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genomespy.png)
- [Genovar](http://genovar.sourceforge.net/)
  [(pub)](https://doi.org/10.1186/1471-2105-13-S7-S12)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genovar.png)
- [mocha](https://github.com/freeseek/mocha) (Has a full analysis pipeline
  associated with end result visualizations)
  [(pub)](https://doi.org/10.1038/s41586-018-0321-x)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mocha.png)
- Orchestral [(pub)](https://doi.org/10.1109/BioVis.2013.6664351)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/orchestral.png)
- [PURPLE](https://github.com/hartwigmedical/hmftools/blob/master/purity-ploidy-estimator/README.md)
  (intermutation-distance rainfall plots/katagesis plots are not technically in
  genomic coordinates, but do indicate genomic cluster of variants)
  [(pub)](https://doi.org/10.1101/781013)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/purple.png)
- [SeeNV](https://github.com/MSBradshaw/SeeNV)
  [(pub)](https://doi.org/10.1101/2024.05.08.593244)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/seenv.png)
- [sequenza](https://cran.r-project.org/web/packages/sequenza/vignettes/sequenza.html#plots-and-results)
  (also see https://sequenzatools.bitbucket.io/#/home)
  [(pub)](https://doi.org/10.1093/annonc/mdu479)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/sequenza.png)
- [SFARI](https://gene.sfari.org/database/human-gene/)
  [(pub)](https://doi.org/10.1242/dmm.005439)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/sfari.jpg)
- [SnoopCGH](http://snoopcgh.sourceforge.net/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btp488)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/snoopcgh.jpg)
- [SNPitty](https://bitbucket.org/ccbc/snpitty/src/master/)
  [(pub)](https://doi.org/10.1016/j.jmoldx.2017.11.011)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/snpitty.jpg)
- VAMP [(pub)](https://doi.org/10.1093/bioinformatics/btl359)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/vamp.jpg)

## Comparative genomics

- Combo (Based on the tool 'Argo')
  [(pub)](https://doi.org/10.1093/bioinformatics/btl193)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/combo.png)
- [Multiple genome viewer](http://www.informatics.jax.org/mgv/)
  [(pub)](https://doi.org/10.1007/s00335-021-09904-1)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mgv.png)
- [Parasight](https://baileylab.brown.edu/parasight/galframe.html) (Examples at
  https://ratparalogy.gs.washington.edu/)
  [(pub)](https://doi.org/10.1038/ng1562)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/parasight.png)

## Coverage

- [BAMdash](https://github.com/jonas-fuchs/BAMdash/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/bamdash.png)
- [dep](https://github.com/slw287r/dep) (Can handle very deep coverage)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/dep.png)
- [ggcoverage](https://cran.r-project.org/web/packages/ggcoverage/vignettes/ggcoverage.html)
  [(pub)](https://doi.org/10.1101/2022.09.01.503744)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ggcoverage.png)
- [Hagfish](https://github.com/mfiers/hagfish/wiki/Plots)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/hagfish.png)
- [Millefy](https://github.com/yuifu/millefy)
  [(pub)](https://doi.org/10.1186/s12864-020-6542-z)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/millefy.png)
- [Samtools coverage](http://www.htslib.org/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btp352)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/samtools_coverage.png)
- [Samtools depth visualization](https://twitter.com/yokofakun/status/1178686978541441025)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/depthplot.png)
- [SeqCover](https://brentp.github.io/seqcover/#gene=AIFM1)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/seqcover.png)
- [SEQing](https://github.com/malewins/SEQing)
  [(pub)](https://doi.org/10.1186/s12859-020-3434-9)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/seqing.png)
- [signac](https://github.com/timoast/signac/)
  [(pub)](https://doi.org/10.1038/s41592-021-01282-5)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/signac.png)
- [Trackplot (R)](https://github.com/PoisonAlien/trackplot)
  [(pub)](https://doi.org/10.1093/bioadv/vbae031)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/trackplot.png)
- [wiggleplotr](http://bioconductor.org/packages/devel/bioc/vignettes/wiggleplotr/inst/doc/wiggleplotr.html)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/wiggleplotr.png)

## Dotplot

- [asynt](https://github.com/simonhmartin/asynt)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/asynt.png)
- [cgplot](https://github.com/dfguan/cgplot)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cgplot.png)
- [CHROMEISTER](https://github.com/estebanpw/chromeister)
  [(pub)](https://doi.org/10.1038/s41598-019-46773-w)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/chromeister.png)
- [CoGe](https://genomevolution.org/coge/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btx144)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/coge.png)
- [D-GENIES](http://dgenies.toulouse.inra.fr/)
  [(pub)](https://doi.org/10.7717/peerj.4958)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/dgenies.png)
- [DAGchainer](http://dagchainer.sourceforge.net/)
  [(pub)](https://doi.org/10.1093/bioinformatics/bth397)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/dagchainer.png)
- [Delly-maze](https://github.com/dellytools/maze) (see also
  https://www.gear-genomics.com/maze/)
  [(pub)](https://doi.org/10.1093/bioinformatics/bts378)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/maze.png)
- [Discoplot](https://github.com/mjsull/DiscoPlot)
  [(pub)](https://doi.org/10.7287/peerj.preprints.1038v1)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/discoplot.png)
- DNAVis [(pub)](https://doi.org/10.1093/bioinformatics/bti807)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/dnavis.png)
- [Dot](https://dot.sandbox.bio/) (Python data preparation script)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/dot.png)
- [Dotlet](https://dotlet.vital-it.ch/) (The original publication was 2000 but
  updated ~2020 with reactjs)
  [(pub)](https://doi.org/10.1093/bioinformatics/16.2.178)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/dotlet.png)
- [Dotplot (chirimoyo)](https://chirimoyo.ac.uma.es/bitlab/portfolio/dotplot/)
- [dotPlotly](https://github.com/tpoorten/dotPlotly/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/dotplotly.png)
- [Dotter](https://sonnhammer.sbc.su.se/Dotter.html)
  [(pub)](<https://doi.org/10.1016/0378-1119(95)00714-8>)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/dotter.png)
- [Dottup](https://www.bioinformatics.nl/cgi-bin/emboss/help/dottup) (also seen
  here
  http://eichlerlab.gs.washington.edu/pubs/chm1-structural-variation/data/GRCh37/heterochromatic_extensions.pdf)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/dottup.png)
- [FlexiDot](https://github.com/molbio-dresden/flexidot)
  [(pub)](https://doi.org/10.1093/bioinformatics/bty395)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/flexidot.png)
- [GenomicBreaks](https://oist.github.io/GenomicBreaks/articles/GenomicBreaks.html)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genomicbreaks.png)
- [Gepard](http://cube.univie.ac.at/gepard)
  [(pub)](https://doi.org/10.1093/bioinformatics/btm039)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gepard.jpeg)
- [ggplot2 mummerplot](https://jmonlong.github.io/Hippocamplus/2017/09/19/mummerplots-with-ggplot2/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mummerplot_ggplot2.png)
- [Hobrac](https://github.com/Genoscope-LBGB/hobrac) (Finds a reference genome
  by homology and draws dotplots against it, including BUSCO-gene dotplots)
  [(pub)](https://doi.org/10.64898/2026.07.17.739168)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/hobrac.png)
- [iLambda Dotplot](https://github.com/iLambda/dotplot)
- [Jdot](https://github.com/LyonsLab/jdot)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/jdot.png)
- [JGI IMG](https://img.jgi.doe.gov/) (Dotplot use MUMmer)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/jgiimg.png)
- [last-dotplot](https://gitlab.com/mcfrith/last)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/last_dotplot.png)
- [local-rearrangements](https://github.com/mcfrith/local-rearrangements) (Can
  color dotplots with annotations for e.g. exons, transposons, low complexity
  regions. See also last-dotplot. Nice figure using it here
  https://genomemedicine.biomedcentral.com/articles/10.1186/s13073-020-00762-1/figures/4)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/local-rearrangements.png)
- [MashMap](https://github.com/marbl/MashMap/blob/master/scripts/generateDotPlot)
  [(pub)](https://doi.org/10.1093/bioinformatics/bty597)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mashmap.png)
- [MCScan (python version)](<https://github.com/tanghaibao/jcvi/wiki/MCscan-(Python-version)>)
  (Also has 2024 citation here
  https://onlinelibrary.wiley.com/doi/10.1002/imt2.211)
  [(pub)](https://doi.org/10.1186/s13059-014-0573-1)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mcscan_python.png)
- [mcutils](https://github.com/mchaisso/mcutils)
  (https://twitter.com/mjpchaisson/status/1040363992206569472)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mcutils_dotplot.jpeg)
- [Minidot](https://github.com/thackl/minidot)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/minidot.png)
- [ModDotPlot](https://github.com/marbl/ModDotPlot)
  [(pub)](https://doi.org/10.1101/2024.04.15.589623)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/moddotplot.png)
- [Mummer-idotplot](https://github.com/ryought/mummer-idotplot)
- [Mummerplot](http://mummer.sourceforge.net/)
  [(pub)](https://doi.org/10.1186/gb-2004-5-2-r12)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mummerplot.png)
- [odp (oxford dot plots)](https://github.com/conchoecia/odp) (Pub is not for
  visualization tool, but it is suggested to cite this paper)
  [(pub)](https://doi.org/10.1038/s41586-023-05936-6)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/odp.png)
- [oxford-plots](https://github.com/jherrero/oxford-plots) (Has nice description
  of a synteny pipeline here
  https://github.com/jherrero/oxford-plots/blob/master/examples/pig_X_Y.txt)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/oxford.png)
- [paf2dot](https://github.com/pangenome/paf2dot)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/paf2dot.png)
- [paf2dotplot](https://github.com/moold/paf2dotplot) (Based on dotPlotly)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/paf2dotplot.png)
- [pafr](https://github.com/dwinter/pafr)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pafr.png)
- [r2cat](https://github.com/phuseman/r2cat)
  [(pub)](https://doi.org/10.1093/bioinformatics/btp690)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/r2cat.jpeg)
- [Redotable](https://github.com/s-andrews/redotable)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/redotable.png)
- [shinyChromosome](http://150.109.59.144:3838/shinyChromosome/)
  [(pub)](https://doi.org/10.1016/j.gpb.2019.07.003)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/shinychromosome.png)
- [SyMap](http://www.agcol.arizona.edu/software/symap/)
  [(pub)](https://doi.org/10.1101/gr.5396706)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/symap.png)
- [syntenyPlotByR](https://github.com/shingocat/syntenyPlotByR)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/synteny_plot_by_r.png)
- [syntR](https://www.samuklab.com/syntR/articles/syntr_tutorial.html)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/syntr.png)
- [SynTView](http://hub18.hosting.pasteur.fr/SynTView/documentation/)
  [(pub)](https://doi.org/10.1186/1471-2105-14-277)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/syntview.png)
- [SYNY](https://github.com/PombertLab/SYNY)
  [(pub)](https://doi.org/10.1101/2024.05.09.593317)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/syny.png)
- [WGDI](https://github.com/SunPengChuan/wgdi)
  [(pub)](https://doi.org/10.1101/2021.04.29.441969)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/wgdi.png)

## Epigenomics

- [ChIA-Pipe](https://github.com/TheJacksonLaboratory/ChIA-PIPE)
  [(pub)](https://doi.org/10.1126/sciadv.aay2078)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/chiapipe.png)
- [Chip Monk](http://www.bioinformatics.babraham.ac.uk/projects/chipmonk/) (Also
  see SeqMonk https://www.bioinformatics.babraham.ac.uk/projects/seqmonk/)
  [(pub)](https://doi.org/10.1186/1752-0509-1-S1-P80)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/chipmonk.png)
- [Chipster](https://chipster.csc.fi/) (Copy number tutorial
  https://chipster.csc.fi/manual/cn-tutorial.pdf)
  [(pub)](https://doi.org/10.1186/1471-2164-12-507)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/chipster.jpg)
- [CoolBox](https://github.com/GangCaoLab/CoolBox) (fork of pyGenomeTracks)
  [(pub)](https://doi.org/10.1186/s12859-021-04408-w)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/coolbox.png)
- [HiPiler](http://hipiler.higlass.io)
  [(pub)](https://doi.org/10.1109/TVCG.2017.2745978)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/hipiler.png)
- [Juicebox](https://github.com/aidenlab/Juicebox)
  [(pub)](https://doi.org/10.1016/j.cels.2015.07.012)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/juicebox.jpg)
- [Juicebox.js](http://www.igv.org/doc/juiceboxjs.html)
  [(pub)](https://doi.org/10.1016/j.cels.2018.01.001)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/juiceboxjs.jpg)
- [Methplotlib](https://github.com/wdecoster/methplotlib)
  [(pub)](https://doi.org/10.1093/bioinformatics/btaa093)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/methplotlib.jpg)
- [python-genome-browser aka pygbrowse](https://github.com/phageghost/python-genome-browser/blob/master/pygbrowse_demonstration.ipynb)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pygbrowse.png)

## Expression

- [GTEX Locus browser](https://gtexportal.org/home/locusBrowserPage/ACTN3)
  [(pub)](https://doi.org/10.1126/science.aaz1776)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gtex_locus.png)
- [SashimiPlot](https://miso.readthedocs.io/en/fastmiso/sashimi.html) (See also
  rmats2sashimiplot which uses MISO. MATS stands for Multivariate Analysis of
  Transcript Splicing) [(pub)](https://doi.org/10.1093/bioinformatics/btv034)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/sashimi-plot-example.png)

## Gene fusion

- [AGFusion](https://github.com/murphycj/AGFusion) (See also
  https://www.agfusion.app/ for web based version)
  [(pub)](https://doi.org/10.1101/080903)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/agfusion.png)
- [arriba](https://github.com/suhrig/arriba)
  [(pub)](https://doi.org/10.1101/gr.257246.119)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/arriba.png)
- [Chimeraviz](https://github.com/stianlagstad/chimeraviz)
  [(pub)](https://doi.org/10.1093/bioinformatics/btx329)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/chimeraviz.png)
- [clinker (gene fusion software)](https://github.com/Oshlack/Clinker/)
  [(pub)](https://doi.org/10.1093/gigascience/giy079)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/clinker_fusion.png)
- [FusionInspector](https://github.com/FusionInspector/FusionInspector/wiki)
  (Uses igv.js) [(pub)](https://doi.org/10.1101/2021.08.02.454639)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/fusioninspector.png)
- [GeneFuse](https://opengene.org/GeneFuse/report.html)
  [(pub)](https://doi.org/10.7150/ijbs.24626)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genefuse.png)
- [MAVIS](http://mavis.bcgsc.ca/)
  [(pub)](https://doi.org/10.1093/bioinformatics/bty621)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mavis.png)

## Gene order

- BactoGENIE [(pub)](https://doi.org/10.1186/1471-2105-16-S11-S6)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/bactogenie.png)
- [clinker](https://github.com/gamcil/clinker)
  [(pub)](https://doi.org/10.1093/bioinformatics/btab007)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/clinker.png)
- [GCSnap](https://github.com/JoanaMPereira/GCsnap)
  [(pub)](https://doi.org/10.1016/j.jmb.2021.166943)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gcsnap.png)
- [GeCoViz](https://gecoviz.cgmlab.org/)
  [(pub)](https://doi.org/10.1093/nar/gkac367)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gecoviz.png)
- [geneviewer](https://nvelden.github.io/geneviewer/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/geneviewer.png)
- [Genome Context Viewer](https://www.legumefederation.org/gcv/phytozome_10_2/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btx757)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genome_context_viewer.png)
- [GGgenes](https://github.com/wilkox/gggenes)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gggenes.png)
- [multiGenomicContext](https://github.com/Sanrrone/multiGenomicContext)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/multicontext.png)
- [OMA local synteny browser](https://omabrowser.org/oma/synteny/ADH1A_HUMAN/)
  [(pub)](https://doi.org/10.1093/nar/gkaa1007)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/oma.png)
- [PSAT](http://www.nwrce.org/psat)
  [(pub)](https://doi.org/10.1186/1471-2105-9-170)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/psat.png)

## Gene structure

- [Apollo](https://web.archive.org/web/20060927154956/http://www.fruitfly.org/annot/apollo/)
  (URL is an archive.org link)
  [(pub)](https://doi.org/10.1186/gb-2002-3-12-research0082)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/apollo.jpg)
- [Apollo aka WebApollo](https://genomearchitect.readthedocs.io/en/latest/)
  [(pub)](https://doi.org/10.1186/gb-2013-14-8-r93)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/webapollo.jpg)
- [D3GB](http://d3gb.usal.es/) (Live link
  http://d3gb.usal.es/docs/HumanGenomeBrowser/index.html?r=12:121113963-121213963
  doesn't work anymore) [(pub)](https://doi.org/10.1089/cmb.2016.0213)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/d3gb.png)
- [ExonIntron](http://wormweb.org/exonintron)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/exonintron.png)
- [FeatureViewer](https://github.com/calipho-sib/feature-viewer)
  [(pub)](https://doi.org/10.5281/zenodo.596941)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/featureviewer.png)
- [Geneviz](https://jrderuiter.github.io/geneviz/usage.html)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/geneviz.png)
- [GenomeTools](http://genometools.org/)
  [(pub)](https://doi.org/10.1109/TCBB.2013.68)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genometools.png)
- [gff2ps](https://genome.crg.es/software/gfftools/GFF2PS.html) (Used to make
  original figures for the human Celera genome)
  [(pub)](https://doi.org/10.1093/bioinformatics/16.8.743)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gff2ps.png)
- [ggtranscript](https://github.com/dzhang32/ggtranscript)
  [(pub)](https://doi.org/10.1101/2022.03.28.486050)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ggtranscript.png)
- [TnT](https://tnt.marlin.pub/articles/introduction)
  [(pub)](https://doi.org/10.1093/bioinformatics/btw210)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/tnt.png)

## Genetic map

- [CMap](http://gmod.org/wiki/CMap)
  [(pub)](https://doi.org/10.1093/bioinformatics/btp458)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cmap.jpg)
- [pretzel](https://github.com/plantinformatics/pretzel)
  [(pub)](https://doi.org/10.1101/517953)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pretzel.png)

## Genome graph

- [AGB assembly graph browser](https://github.com/almiheenko/AGB)
  [(pub)](https://doi.org/10.1093/bioinformatics/btz072)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/agb.jpeg)
- [Bandage](https://github.com/rrwick/Bandage/) (See also BandageNG
  https://github.com/asl/BandageNG)
  [(pub)](https://doi.org/10.1093/bioinformatics/btv383)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/bandage.png)
- [BandageJS](https://github.com/GMOD/BandageJS) (Bandage-style GFA viewer in
  the browser. Highlights walks and reads one region at a time from a
  whole-genome pangenome. Demo https://jbrowse.org/demos/bandagejs/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/bandagejs.png)
- [ctag](https://github.com/AbeelLab/ctag) (See also hygene
  https://github.com/ProgrammingLife2017/hygene)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ctag.png)
- [gfaestus](https://github.com/chfi/gfaestus) (See demo video displaying GFF3
  annotations on graph https://www.youtube.com/watch?v=A-HnKXIrJl4)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gfaestus.png)
- [gfalook](https://github.com/pangenome/gfalook) (See also odgi viz)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gfalook.png)
- [GfaViz](https://github.com/ggonnella/gfaviz)
  [(pub)](https://doi.org/10.1093/bioinformatics/bty1046)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gfaviz.png)
- [ggbandage](https://github.com/GMOD/ggbandage) (Draws genome graphs as ggplot2
  layers, laid out as Bandage lays them out)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ggbandage.png)
- [ggtubemap](https://github.com/GMOD/ggtubemap) (Draws sequenceTubeMap-style
  tube maps as ggplot2 layers. See also sequenceTubeMap
  https://github.com/vgteam/sequenceTubeMap)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ggtubemap.png)
- [graphgenomeviewer](https://cmdcolin.github.io/graphgenomeviewer/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/graphgenomeviewer.png)
- [IGGE](https://github.com/immersivegraphgenomeexplorer/IGGE) (Not open source)
  [(pub)](https://doi.org/10.1109/SEGAH52098.2021.9551857)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/igge.png)
- [MoMi-G](https://github.com/MoMI-G/MoMI-G)
  [(pub)](https://doi.org/10.1186/s12859-019-3145-2)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/momig.png)
- [odgi draw + odgi viz + odgi inject](https://odgi.readthedocs.io/en/latest/index.html)
  (Example from https://github.com/pangenome/pggb, see also gene arrow map
  https://odgi.readthedocs.io/en/latest/rst/tutorials/injecting_gene_arrows.html)
  [(pub)](https://doi.org/10.1101/2021.11.10.467921)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/odgi.png)
- [panGraphViewer](https://github.com/TF-Chan-Lab/panGraphViewer)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pangraphviewer.jpg)
- [PangyPlot](https://github.com/ScottMastro/pangyplot)
  [(pub)](https://doi.org/10.1101/2025.10.31.684064)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pangyplot.png)
- [PG2 (PanGenoGrapher)](https://github.com/iVis-at-Bilkent/pangenographer) (Web
  tool for layout and visual analysis of pangenome graphs, with BLAST search
  over segments. Demo http://pg2.cs.bilkent.edu.tr)
  [(pub)](https://doi.org/10.1186/s12859-026-06555-4)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pg2.png)
- [PGR-TK](https://github.com/cschin/pgr-tk)
  [(pub)](https://doi.org/10.1038/s41592-023-01914-y)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pgrtk.png)
- [pgv (graph tool)](https://w-gao.github.io/pgv/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pgv2.png)
- [sequence tube map](https://github.com/vgteam/sequenceTubeMap) (See also
  https://github.com/cmdcolin/sequenceTubeMap, a fork with modernizations)
  [(pub)](https://doi.org/10.1093/bioinformatics/btz597)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/sequence_tube_map.png)
- [SGTK (scaffold graph toolkit)](https://olga24912.github.io/SGTK/)
  [(pub)](https://doi.org/10.1093/bioinformatics/bty956)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/sgtk.png)
- [Shasta](https://chanzuckerberg.github.io/shasta/ComputationalMethods.html#ReadGraph)
  (Uses graphviz) [(pub)](https://doi.org/10.1038/s41587-020-0503-6)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/shasta.png)
- [SloppyyGFA](https://github.com/mdondrup/SloppyyGFA) (Bandage-style de novo
  assembly graph viewer in the browser, rendered with WebGL. Demo
  https://mdondrup.github.io/SloppyyGFA/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/sloppyygfa.png)
- [strangepg](https://github.com/qwx9/strangepg)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/strangepg.png)
- [VAG](https://github.com/lipingfangs/VAG)
  [(pub)](https://doi.org/10.1101/2023.01.20.524849)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/vag.jpg)
- [VRPG](https://github.com/codeatcg/VRPG)
  [(pub)](https://doi.org/10.1101/2023.01.20.524991)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/vrpg.png)
- [waragraph](https://chfi.github.io/waragraph/) (Deployed to the web via wasm)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/waragraph.png)

## GWAS

- [CMPlot](https://github.com/YinLiLin/CMplot)
  [(pub)](https://doi.org/10.1016/j.gpb.2020.10.007)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cmplot.png)
- [GeneticsMakie.jl](https://github.com/mmkim1210/GeneticsMakie.jl)
  [(pub)](https://doi.org/10.1101/2022.04.18.488573)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/geneticsmakie.png)
- [ggplot2 manhattan plot](https://danielroelfs.com/blog/how-i-create-manhattan-plots-using-ggplot/)
  (This is not a preconfigured tool but a blog post tutorial with tidy data and
  ggplot2)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ggplot2_manhattan.png)
- [LDBlockShow](https://github.com/BGI-shenzhen/LDBlockShow)
  [(pub)](https://doi.org/10.1093/bib/bbaa227)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ldblockshow.png)
- [LocusBlend](https://github.com/Belloy-Lab/LocusBlend) (Regional GWAS plots
  that color variants by LD with several index variants at once, plus locus
  compare plots. Demo https://locusblend.wustl.edu)
  [(pub)](https://doi.org/10.64898/2026.07.15.26358129)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/locusblend.png)
- [Locuszoom](http://locuszoom.org/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btq419)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/locuszoom.png)
- [Locuszoom.js](http://locuszoom.org/locuszoomjs.php)
  [(pub)](https://doi.org/10.1093/bioinformatics/btab186)
- [PureScript genetics browser](https://github.com/chfi/purescript-genetics-browser)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/purescript.png)
- [RACER](https://oliviasabik.github.io/RACERweb/articles/IntroToRACER.html)
  [(pub)](https://doi.org/10.1101/495366)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/racer.png)

## Heatmap

- [EaSeq](https://easeq.net/screenshots/)
  [(pub)](https://doi.org/10.1038/nsmb.3180)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/easeq.png)
- [UCSC Xena](https://xena.ucsc.edu/)
  [(pub)](https://doi.org/10.1038/s41587-020-0546-8)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/xena.png)
- [vitessce](https://vitessce.io/) (Uses higlass, web based with (optional)
  Python and R integrations, not all visualization are 'genome coordinates')
  [(pub)](https://doi.org/10.1038/s41592-024-02436-x)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/vitessce.png)
- [VIVA](https://www.biorxiv.org/content/10.1101/589879v1.full.pdf)
  [(pub)](https://doi.org/10.1038/s41598-019-49114-z)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/viva.png)

## Hi-C

- [aplot](https://yulab-smu.top/aplot/cases.html#genomics-track-example)
  [(pub)](https://doi.org/10.1016/j.xinn.2025.100958)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/aplot.png)
- [figeno](https://github.com/CompEpigen/figeno)
  [(pub)](https://doi.org/10.1093/bioinformatics/btae354)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/figeno.png)
- [gcMapExplorer](https://github.com/rjdkmr/gcMapExplorer)
  [(pub)](https://doi.org/10.1093/nar/gkx644)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gcmapexplorer.png)
- [HiCPlotter](https://github.com/kcakdemir/HiCPlotter)
  [(pub)](https://doi.org/10.1186/s13059-015-0767-1)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/hicplotter.jpg)
- [Plotgardener](https://github.com/PhanstielLab/plotgardener/) (See also
  Plotgardener App, a graphical interface
  https://github.com/rishabhsvemuri/ThePlotgardenerApp)
  [(pub)](https://doi.org/10.1093/bioinformatics/btac057)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/plotgardener.png)
- [PretextView](https://github.com/wtsi-hpag/PretextView)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pretextview.jpg)
- [pyGenomeTracks](https://github.com/deeptools/pyGenomeTracks) (See also
  https://pypi.org/project/gtracks/ which is a separate project that is powered
  by pyGenomeTracks) [(pub)](https://doi.org/10.1093/bioinformatics/btaa692)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pygenometracks.png)
- [SparK](https://github.com/harbourlab/SparK)
  [(pub)](https://doi.org/10.1101/845529)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/spark.png)

## Ideogram

- [chromoMap](https://lakshay-anand.github.io/chromoMap/index.html)
  [(pub)](https://doi.org/10.1186/s12859-021-04556-z)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/chromomap.png)
- [chromPlot](https://www.bioconductor.org/packages/release/bioc/vignettes/chromPlot/inst/doc/chromPlot.pdf)
  [(pub)](https://doi.org/10.1093/bioinformatics/btw137)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/chromplot.png)
- [chrov](https://github.com/rraadd88/chrov) (See also usage in
  https://github.com/rraadd88/beditor)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/chrov.png)
- [CVit](https://sourceforge.net/projects/cvit/)
  [(pub)](https://doi.org/10.1155/2011/373875)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cvit.png)
- [Cvit.js](https://github.com/LegumeFederation/cvitjs)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cvitjs.png)
- [eweitz Ideogram](https://github.com/eweitz/ideogram)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/eweitz_ideogram.png)
- [ezcharts](https://github.com/epi2me-labs/ezcharts)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ezcharts.png)
- [Flash Gviewer](http://gmod.org/wiki/Flashgviewer/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/flashgviewer.png)
- [genomegraphs](http://bioconductor.org/packages/2.5/bioc/vignettes/GenomeGraphs/inst/doc/GenomeGraphs.pdf)
  [(pub)](https://doi.org/10.1186/1471-2105-10-2)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genomegraphs.png)
- [GenomeSyn](https://github.com/jmsong2/GenomeSyn)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genomesyn.png)
- [Genomicus](https://www.genomicus.biologie.ens.fr/genomicus/)
  [(pub)](https://doi.org/10.1093/nar/gkab1091)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genomicus.png)
- [ggbio](http://www.bioconductor.org/packages/2.11/bioc/vignettes/ggbio/inst/doc/ggbio.pdf)
  [(pub)](https://doi.org/10.1186/gb-2012-13-8-r77)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ggbio.png)
- [gtrellis](http://bioconductor.org/packages/devel/bioc/vignettes/gtrellis/inst/doc/gtrellis.html)
  [(pub)](https://doi.org/10.1186/s12859-016-1051-4)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gtrellis.png)
- [Ideogram](https://github.com/RCollins13/HumanIdiogramLibrary)
  [(pub)](https://doi.org/10.5281/zenodo.1210135)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/rcollins_ideogram.png)
- [Ideogram viewer](https://bioinformatics.mdanderson.org/public-software/ideogramviewer/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ideogramviewer.png)
- [Ideoplot](https://github.com/mchaisso/Ideoplot)
- [IdeoViz](https://www.bioconductor.org/packages/release/bioc/vignettes/IdeoViz/inst/doc/Vignette.pdf)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ideoviz.png)
- [karyoploteR](https://github.com/bernatgel/karyoploteR)
  [(pub)](https://doi.org/10.1093/bioinformatics/btx346)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/karyoploter.png)
- [KaryotypeSVG](https://github.com/andreasprlic/karyotypeSVG)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/karyotypesvg.png)
- NCBI Genome Decoration (Was located at
  https://www.ncbi.nlm.nih.gov/genome/tools/gdp/, sunsetted in 2023)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ncbi_genome_decoration.png)
- [PhenoGram](https://ritchielab.org/software/phenogram-downloads) (Can be web
  server or download) [(pub)](https://doi.org/10.1186/1756-0381-6-18)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/phenogram.png)
- [pyideogram](https://github.com/Balthasar-eu/pyideogram)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pyideogram.png)
- [RectChr](https://github.com/BGI-shenzhen/RectChr)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/rectchr.png)
- [RIdeogram](https://github.com/TickingClock1992/RIdeogram)
  [(pub)](https://doi.org/10.7717/peerj-cs.251)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/rideogram.png)
- [tagore](https://github.com/jordanlab/tagore)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/tagore.png)
- [Tripal MapViewer](https://github.com/statonlab/tripal_map)
  [(pub)](https://doi.org/10.1093/database/baz100)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/tripal_mapviewer.png)
- [UCSC Genome Graphs](http://genome.ucsc.edu/cgi-bin/hgGenome)
  [(pub)](https://doi.org/10.1101/gr.229102)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ucsc_genome_graph.png)

## K-mer

- [Panagram](https://github.com/kjenike/panagram)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/panagram.png)

## Linear

- [DnaFeaturesViewer](https://github.com/Edinburgh-Genome-Foundry/DnaFeaturesViewer)
  (See also https://github.com/Edinburgh-Genome-Foundry/Caravagene)
  [(pub)](https://doi.org/10.1093/bioinformatics/btaa213)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/dnafeaturesviewer.png)
- [DNAPlotLib](https://github.com/VoigtLab/dnaplotlib)
  [(pub)](https://doi.org/10.1021/acssynbio.6b00252)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/dnaplotlib.png)
- [EasyFig](https://mjsull.github.io/Easyfig/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btr039)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/easyfig.png)
- [GECO](http://bioinfo.mikrobio.med.uni-giessen.de/geco2/GecoMainServlet)
  [(pub)](https://doi.org/10.1093/bioinformatics/btl556)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/geco.png)
- [GIVE](https://zhong-lab-ucsd.github.io/GIVE_homepage/)
  [(pub)](https://doi.org/10.1186/s13059-018-1465-6)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/give_hic.png)
- [Gnomad browser](https://github.com/macarthur-lab/gnomadjs)
  [(pub)](https://doi.org/10.1038/s41586-020-2308-7)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gnomad.png)
- [LinearDisplay.pl](https://github.com/JCVenterInstitute/LinearDisplay) (readme
  says to cite this paper) [(pub)](https://doi.org/10.1038/s41586-019-1742-x)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/lineardisplay.png)
- [SynVisio](https://synvisio.github.io/)
  [(pub)](https://doi.org/10.1007/978-1-0716-2067-0_16)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/synvisio.png)

## Local ancestry

- [fineSTRUCTURE aka ChromoPainter](http://www.paintmychromosomes.com/)
  [(pub)](https://doi.org/10.1371/journal.pgen.1002453)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/finestructure.png)
- [GeMo](https://github.com/SouthGreenPlatform/GeMo)
  [(pub)](https://doi.org/10.1093/database/baac057)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gemo.png)
- [MOSAIC](https://maths.ucd.ie/~mst/MOSAIC/)
  [(pub)](https://doi.org/10.1534/genetics.119.302139)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mosaic.png)
- [winpca](https://github.com/MoritzBlumer/winpca)
  [(pub)](https://doi.org/10.48550/arXiv.2501.11982)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/winpca.png)

## Lollipop

- [trackViewer](https://bioconductor.org/packages/release/bioc/vignettes/trackViewer/inst/doc/trackViewer.html)
  [(pub)](https://doi.org/10.1038/s41592-019-0430-y)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/trackviewer.png)

## Long read

- [CurrentView](https://github.com/genometechlab/currentview) (Visualize and
  compare nanopore ionic current signals from POD5 files aligned to a reference
  via BAM. Overlay conditions, run statistics, GMM fitting, and UMAP, with an
  optional Dash web app.)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/currentview.png)
- [methylartist](https://github.com/adamewing/methylartist)
  [(pub)](https://doi.org/10.1101/2021.07.22.453313)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/methylartist.png)
- [SeqSizzle](https://github.com/ChangqingW/SeqSizzle)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/seqsizzle.png)

## Manhattan

- [ggwas](https://bczech.github.io/ggwas/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ggwas.png)
- [locuszoomr](https://cran.r-project.org/web/packages/locuszoomr/vignettes/locuszoomr.html)
  (See also easylabel for manhattan plots
  https://cran.r-project.org/web/packages/easylabel/vignettes/easylabel.html)
  [(pub)](https://doi.org/10.1093/bioadv/vbaf006)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/locuszoomr.jpg)
- [topr](https://github.com/totajuliusd/topr/) (Includes locuszoom style plot)
  [(pub)](https://doi.org/10.1186/s12859-023-05301-4)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/topr.png)

## Methylation

- [AnnoJ](https://brainome.ucsd.edu/howto_annoj.html) (See list of instances of
  the browser here https://ecker.salk.edu/genome-browser/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/annoj.png)
- [modbamtools](https://github.com/rrazaghi/modbamtools)
  [(pub)](https://doi.org/10.1101/2022.07.07.499188)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/modbamtools.png)
- [NanoMethViz](http://www.bioconductor.org/packages/release/bioc/html/NanoMethViz.html)
  [(pub)](https://doi.org/10.1371/journal.pcbi.1009524)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/nanomethviz.png)

## Microbiology

- [FastANI](https://github.com/ParBLiSS/FastANI)
  [(pub)](https://doi.org/10.1038/s41467-018-07641-9)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/fastani.jpg)
- [GeneViTo](http://athina.biol.uoa.gr/bioinformatics/GENEVITO/)
  [(pub)](https://doi.org/10.1186/1471-2105-4-53)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genevito.jpg)
- [IslandViewer and IslandPlot](https://bl.ocks.org/lairdm/c6c235dbfa6e6ee61565)
  (web app using it here https://pathogenomics.sfu.ca/islandviewer uses D3, SVG)
  [(pub)](https://doi.org/10.1093/nar/gkv401)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/islandplot.png)
- [lovis4u](https://github.com/art-egorov/lovis4u)
  [(pub)](https://doi.org/10.1101/2024.09.11.612399)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/lovis4u.png)

## MSA

- [AA (alignment annotator)](http://www.bioinformatics.org/strap/aa) (also see
  STRAP) [(pub)](https://doi.org/10.1093/nar/gku400)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/aa.png)
- [abrowse (MSA viewer)](https://github.com/ihh/abrowse)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/abrowse.png)
- [Alan](https://github.com/mpdunne/alan)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/alan.png)
- [alen](https://github.com/jakobnissen/alen)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/alen.png)
- [alignfigR](https://cran.r-project.org/web/packages/alignfigR/vignettes/my-vignette.html)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/alignfigr.png)
- [alignment.js](https://github.com/veg/alignment.js)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/alignmentjs.png)
- [AlignmentComparator](http://bioinfweb.info/AlignmentComparator/) (Uses
  http://bioinfweb.info/LibrAlign/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/alignmentcomparator.png)
- [AlignmentViewer](https://alignmentviewer.org/)
  [(pub)](https://doi.org/10.12688/f1000research.22242.2)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/alignmentviewer.png)
- [AliTreeViz](https://www.npmjs.com/package/alitreeviz)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/alitreeviz.png)
- [AliView](http://www.ormbunkar.se/aliview/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btu531)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/aliview.png)
- [Alv](https://github.com/arvestad/alv)
  [(pub)](https://doi.org/10.21105/joss.00955)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/alv.png)
- [ALVIS (MSA viewer)](https://www.ebi.ac.uk/research/goldman/software/alvis)
  (Introduces sequence bundles concept, also see web app version
  https://www.ebi.ac.uk/goldman-srv/sequencebundles/ source code
  https://bitbucket.org/schwarzlab/alvis/src/master/)
  [(pub)](https://doi.org/10.1093/nar/gkw022)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/alvis.png)
- [BioJS MSA](https://msa.biojs.net/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btw474)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/biojsmsa.png)
- [Boxshade](https://embnet.vital-it.ch/software/BOX_form.html) (Also available
  as a command line tool with `apt install boxshade`. See also rMSA which can
  automate running boxshade from within R)
  [(pub)](https://doi.org/10.1186/gb-2000-1-2-reports2047)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/boxshade.png)
- [CIAlign](https://github.com/KatyBrown/CIAlign) (Has useful utility functions
  to clean gaps and trim MSAs) [(pub)](https://doi.org/10.7717/peerj.12983)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cialign.png)
- [CView](https://sourceforge.net/projects/cview/)
  [(pub)](https://doi.org/10.1371/journal.pone.0259726)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cview.png)
- [ESPript](http://espript.ibcp.fr/ESPript/ESPript/) (Primarily a web interface
  but can download a binary for linux
  https://espript.ibcp.fr/ESPript/ESPript/esp_faq.php)
  [(pub)](https://doi.org/10.1093/bioinformatics/15.4.305)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/espript.png)
- [ete](http://etetoolkit.org/gallery/)
  [(pub)](https://doi.org/10.1093/molbev/msw046)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ete.png)
- [ggmsa](http://yulab-smu.top/ggmsa/) (See also ggtree)
  [(pub)](https://doi.org/10.1093/bib/bbac222)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ggmsa.png)
- [ggtree](https://github.com/YuLab-SMU/ggtree) (see
  https://yulab-smu.top/treedata-book/chapter7.html?q=msa#msaplot for MSA
  example) [(pub)](https://doi.org/10.1111/2041-210X.12628)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ggtree.png)
- [Gmaj](https://www.bx.psu.edu/miller_lab/dist/CHAP/docs/gmaj_geneconv.html)
  [(pub)](https://doi.org/10.1186/1471-2148-11-226)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gmaj.png)
- [Jalview](https://www.jalview.org/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btp033)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/jalview.jpg)
- [JSAV](http://www.bioinf.org.uk/software/jsav)
  [(pub)](https://doi.org/10.12688/f1000research.5486.1)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/jsav.png)
- [MacVector](https://macvector.com/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/macvector.png)
- [MEGA-X](https://www.megasoftware.net/) (original paper from 1994 but actively
  updated. requires EULA for download)
  [(pub)](https://doi.org/10.1093/molbev/msab120)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/megax.png)
- [MSABrowser](https://thekaplanlab.github.io/)
  [(pub)](https://doi.org/10.1093/bioadv/vbab009)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/msabrowser.png)
- [msaR](https://github.com/zachcp/msaR) (uses BioJS/MSA)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/msar.png)
- [MView](https://www.ebi.ac.uk/Tools/msa/mview/) (See also their web versions
  of clustal omega etc. which have similar outputs)
  [(pub)](https://doi.org/10.1093/bioinformatics/14.4.380)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mview.png)
- [NCBI MSA Viewer](https://www.ncbi.nlm.nih.gov/projects/msaviewer/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ncbimsa.png)
- [ProViz](http://slim.icr.ac.uk/proviz/index.php) (See also alphafold
  visualization as tracks
  http://slim.icr.ac.uk/projects/alphafold?page=alphafold_proviz_homepage)
  [(pub)](https://doi.org/10.1093/nar/gkw265)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/proviz.png)
- [pyBoxshade](https://github.com/mdbaron42/pyBoxshade) (also see boxshade)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pyboxshade.png)
- [pymsaplotter](https://github.com/orangeSi/pymsaploter)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pymsaplotter.png)
- [React MSAViewer](https://github.com/plotly/react-msa-viewer) (Plotly fully
  deleted the github unfortunately)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/react-msa-viewer.png)
- [react-msaview](https://github.com/GMOD/react-msaview)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/react-msaview.png)
- [rich-msa](https://github.com/althonos/rich-msa)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/richmsa.png)
- [rMSA](https://github.com/mhahsler/rMSA/blob/master/vignettes/rMSA_vignette.pdf)
  (Can automate boxshade)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/rmsa.png)
- [Rna Alignment Viewers (Colorstock, SScolor, Ratón)](http://biowiki.org/wiki/index.php?title=Rna_Alignment_Viewers&redirect=no)
  [(pub)](https://doi.org/10.1093/bioinformatics/btm635)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/rnaalignment.png)
- [salti](https://github.com/Sam-Sims/salti)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/salti.png)
- [Seaview](http://doua.prabi.fr/software/seaview)
  [(pub)](https://doi.org/10.1093/molbev/msp259)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/seaview.png)
- [seqotron](https://github.com/4ment/seqotron)
  [(pub)](https://doi.org/10.1186/s13104-016-1927-4)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/seqotron.png)
- [SeqTUI](https://github.com/ranwez-search/SeqTUI)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/seqtui.jpg)
- [seqvisr](https://github.com/vragh/seqvisr/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/seqvisr.png)
- [SNIPViz](http://www.yeastrc.org/snipviz/4.HTML_Config_retrieve_newick_and_fasta_from_server/snip_viz_HTML_config_with_newick_clustering.html)
  [(pub)](https://doi.org/10.1186/1756-0500-7-468)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/snpviz.png)
- [STRAP](http://www.bioinformatics.org/strap/) (also see AA)
  [(pub)](https://doi.org/10.1093/nar/gku400)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/strap.png)
- [termal](https://github.com/sib-swiss/termal)
  [(pub)](https://doi.org/10.1093/bioadv/vbaf208)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/termal.png)
- [TeXShade](http://mirrors.ibiblio.org/CTAN/macros/latex/contrib/texshade/texshade.pdf)
  [(pub)](https://doi.org/10.1093/bioinformatics/16.2.135)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/texshade.png)
- [Wasabi](http://wasabiapp.org/) [(pub)](https://doi.org/10.1093/molbev/msv333)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/wasabi.png)
- [wgatools](https://github.com/wjwei-handsome/wgatools)
  [(pub)](https://doi.org/10.1093/bioinformatics/btaf132)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/wgatools.png)

## Multi-way synteny

- [chromsyn](https://github.com/slimsuite/chromsyn)
  [(pub)](https://doi.org/10.1101/2022.04.22.489119)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/chromsyn.png)
- [genoPlotR](http://genoplotr.r-forge.r-project.org/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btq413)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genoplotr.png)
- [gggenomes](https://github.com/thackl/gggenomes)
  [(pub)](https://doi.org/10.48550/arXiv.2411.13556)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gggenomes.png)
- [hoodini](https://github.com/pentamorfico/hoodini) (Has a number of related
  repos for use in colab)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/hoodini.png)
- [MCGV](https://www.ncbi.nlm.nih.gov/mcgv/cm/mcgv/help)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mcgv.png)
- [Mumemto](https://github.com/vikshiv/mumemto)
  [(pub)](https://doi.org/10.1186/s13059-025-03644-0)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mumemto.png)
- [NGenomeSyn](https://github.com/hewm2008/NGenomeSyn) (See also RectChr)
  [(pub)](https://doi.org/10.1093/bioinformatics/btad121)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ngenomesyn.png)
- [ntSynt](https://github.com/BirolLab/ntSynt-viz) (Uses gggenomes)
  [(pub)](https://doi.org/10.1093/jeb/voag079)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ntsynt.png)
- [pauvre](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6991124/figure/fig-3/)
  [(pub)](https://doi.org/10.7717/peerj.8356)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pauvre.png)
- [SVbyEye](https://htmlpreview.github.io/?https://github.com/daewoooo/SVbyEye/blob/master/man/doc/SVbyEye.html)
  (AKA plotAVA) [(pub)](https://doi.org/10.1093/bioinformatics/btaf332)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/svbyeye.png)
- [TidyLocalSynteny](https://github.com/cxli233/TidyLocalSynteny)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/tidylocalsynteny.png)

## Novel layout

- [BigTop](https://blog.dnanexus.com/2019-05-21-bigtop-data-visualization/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/bigtop.png)
- [Cylindrical alignment app](https://sourceforge.net/projects/cylindrical-alignment-app/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cylindrical_alignment_viewer.png)
- [DNASkittle](https://www.dnaskittle.com/)
  [(pub)](https://doi.org/10.1186/1471-2105-10-452)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/dnaskittle.png)
- [FluentDNA](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7203487/)
  [(pub)](https://doi.org/10.3389/fgene.2020.00292)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/fluentdna.jpeg)
- [sockeye](https://www.bcgsc.ca/resources/software/sockeye)
  [(pub)](https://doi.org/10.1101/gr.1890304)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/sockeye.jpg)
- [spinteny](https://github.com/skinner/spinteny)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/spinteny.png)

## Pangenome

- [Chromatiblock](https://github.com/mjsull/chromatiblock)
  [(pub)](https://doi.org/10.21105/joss.02451)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/chromatiblock.png)
- [GENESPACE](https://github.com/jtlovell/GENESPACE/) (Note: plots in 'gene
  space' instead of actual genome coordinates. Includes a powerful analysis
  pipeline, worth reading the paper. See also DEEPSPACE, which uses genome
  coordinates and whole genome alignments)
  [(pub)](https://doi.org/10.7554/eLife.78526)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genespace.png)
- [Pan-Tetris](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4547177/)
  [(pub)](https://doi.org/10.1186/1471-2105-16-S11-S3)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pantetris.png)
- [PanAbyss](https://github.com/Pange31/PanAbyss) (Exploring and visualizing
  large pangenome graphs with PanAbyss: search by coordinates or annotations,
  identify regions shared by individuals or populations, and access other
  interactive features. Uses cytoscape.js)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/panabyss.png)
- [Panacaea](https://github.com/JCVenterInstitute/PanACEA)
  [(pub)](https://doi.org/10.1186/s12859-018-2250-y)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/panacaea.png)
- [Panache](https://github.com/SouthGreenPlatform/panache)
  [(pub)](https://doi.org/10.1093/bioinformatics/btab688)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/panache.png)
- [panX](http://pangenome.tuebingen.mpg.de/)
  [(pub)](https://doi.org/10.1093/nar/gkx977)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/panx.jpeg)
- [PGAP-X](https://pgapx.zhaopage.com/)
  [(pub)](https://doi.org/10.1186/s12864-017-4337-7)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pgapx.png)
- [PGV (pangenome tool)](https://github.com/ucrbioinfo/PGV)
  [(pub)](https://doi.org/10.1186/s12859-021-04424-w)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pgv1.png)
- [Phandango](https://jameshadfield.github.io/phandango/#/examples)
  [(pub)](https://doi.org/10.1093/bioinformatics/btx610)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/phandango.png)
- [RPAN (3kricedb)](http://cgm.sjtu.edu.cn/3kricedb/visualization/?tracks=DNA%2Cgene%2CPF)
  [(pub)](https://doi.org/10.1093/nar/gkw958)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/rpan.png)
- [SaVanache](https://savanache.ird.fr) (Indexes and views pangenome variation
  graphs; from the same group as Panache. Source
  https://forge.ird.fr/diade/savanache)
  [(pub)](https://doi.org/10.64898/2026.05.05.722901)
- [TASUKE](https://tasuke-wiki.dna.naro.go.jp/) (Visualization of multiple
  genomes resequencing data from species having larger genome. Requires a LAMP
  server ) [(pub)](https://doi.org/10.1093/dnares/dsz022)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/tasuke.png)

## Phylogeny

- [Gingr](https://harvest.readthedocs.io/en/latest/content/gingr.html)
  [(pub)](https://doi.org/10.1186/s13059-014-0524-x)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gingr.png)
- [Nextclade](https://clades.nextstrain.org/) (Related usage on nextstrain app
  also) [(pub)](https://doi.org/10.21105/joss.03773)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/nextclade.png)
- [Taxonium](https://taxonium.org) (Genome variation visualisation in Taxonium
  is provided by the 'Treenome Viewer':
  https://academic.oup.com/bioinformatics/article/39/1/btac772/6858450)
  [(pub)](https://doi.org/10.7554/eLife.82392)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/taxonium.png)
- [TreeBrowser (MicrobesOnline)](http://www.microbesonline.org/cgi-bin/treeBrowse.cgi?locus=17761)
  [(pub)](https://doi.org/10.1093/nar/gkp919)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/treegenome.png)

## Physical map

- [Internet Contig Explorer](https://www.bcgsc.ca/resources/software/ice)
  [(pub)](https://doi.org/10.1101/gr.819303)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/internet_contig_explorer.jpg)

## Plasmid

- [ApE (a plasmid editor)](https://jorgensen.biology.utah.edu/wayned/ape/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/aplasmideditor.png)
- [clonifier](https://dlesl.github.io/clonifier/) (per github: 'A web app for
  viewing plasmid maps & genomes, and simulating PCR and Gibson assembly')
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/clonifier.png)

## Population

- [GWAS catalog browser](https://www.ebi.ac.uk/gwas/variants/rs1558902)
  [(pub)](https://doi.org/10.1093/nar/gky1120)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gwascatalog.png)
- [Haploview](https://www.broadinstitute.org/haploview/haploview)
  [(pub)](https://doi.org/10.1093/bioinformatics/bth457)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/haploview.png)
- [Human genome dating](https://human.genome.dating/region/chr1_13250000) (made
  with vega/d3) [(pub)](https://doi.org/10.1371/journal.pbio.3000586)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/human_genome_dating.png)
- [pixy](https://pixy.readthedocs.io/en/latest/plotting.html#a-genome-wide-plot-of-summary-statistics)
  (The link in readthedocs shows a nice general purpose way to plot
  multi-chromosome plots in ggplot2 with facet grid. Alternative methods for
  multi-chromosome plots shown by the manhattan ggplot2 tutorial
  (https://danielroelfs.com/blog/how-i-create-manhattan-plots-using-ggplot/ uses
  cumulative bp instead of facet_grid))
  [(pub)](https://doi.org/10.1111/1755-0998.13326)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pixy.png)
- [PopSV](https://github.com/jmonlong/PopSV/blob/master/3-Visualization.md)
  [(pub)](https://doi.org/10.1371/journal.pgen.1007285)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/popsv.png)
- [vcfR](https://knausb.github.io/vcfR_documentation/) (image shows chromoqc
  output) [(pub)](https://doi.org/10.1111/1755-0998.12549)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/vcfr.png)

## Protein

- [Aquaria](http://aquaria.ws/Q9HD67/5i0i/A)
  [(pub)](https://doi.org/10.1038/nmeth.3258)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/aquaria.png)
- [drawProteins](https://github.com/brennanpincardiff/drawProteins)
  [(pub)](https://doi.org/10.12688/f1000research.14541.1)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/drawprotein.png)
- [Genomics 2 Proteins Portal](https://g2p.broadinstitute.org/)
  [(pub)](https://doi.org/10.1038/s41592-024-02409-0)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/g2pportal.png)
- [IBS (Illustrator for Biological Sequences)](http://ibs.biocuckoo.org/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btv362)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ibs.jpg)
- [Lollipops](https://github.com/joiningdata/lollipops)
  [(pub)](https://doi.org/10.1371/journal.pone.0160519)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/lollipops.png)
- [Mason](http://www.yeastrc.org/mason/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mason.png)
- [nightingale protvista](https://ebi-webcomponents.github.io/nightingale/#/msa)
  (Used on InterProScan website https://www.ebi.ac.uk/interpro/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btx120)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/nightingale.png)
- [PFAM generate_graphic](https://pfam.xfam.org/generate_graphic) (Also see
  guide here https://pfam.xfam.org/help#tabview=tab10)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pfam.png)
- [Prosite MyDomains](https://prosite.expasy.org/mydomains)
  [(pub)](https://doi.org/10.1093/nar/gkm977)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/prosite.png)
- [Protael](http://sanshu.github.io/protaelweb/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btv605)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/protael.png)
- [ProteinPaint](https://pecan.stjude.cloud/proteinpaint)
  [(pub)](https://doi.org/10.1038/ng.3466)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/proteinpaint.png)
- [pViz](https://github.com/Genentech/pviz)
  [(pub)](https://doi.org/10.1093/bioinformatics/btu567)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pviz.jpg)
- [TogoStanza Protein Browser](https://db-dev.jpostdb.org/ts/stanza/protein_browser/help.html)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/togostanza.png)

## Read alignment

- [alignoth](http://htmlpreview.github.io/?https://github.com/koesterlab/alignoth/blob/main/examples/plot.html)
  [(pub)](https://doi.org/10.1093/bioinformatics/btaf663)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/alignoth.png)
- [ASCIIGenome](https://github.com/dariober/ASCIIGenome)
  [(pub)](https://doi.org/10.1093/bioinformatics/btx007)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/asciigenome.png)
- [bamscope](https://github.com/jslfree080/bamscope)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/bamscope.png)
- [BAMSnap](https://github.com/parklab/bamsnap) (See also Bamsnap-LRS, a rewrite
  with long-read support)
  [(pub)](https://doi.org/10.1093/bioinformatics/btaa1101)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/bamsnap.png)
- [Bamsnap-LRS](https://github.com/comery/Bamsnap-LRS) (Batch snapshots of
  long-read alignments, rewritten from BAMSnap)
  [(pub)](https://doi.org/10.64898/2026.06.21.733121)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/bamsnap_lrs.png)
- [Chromatic](https://chromatic.nci.nih.gov/)
  [(pub)](https://doi.org/10.1177/1176935118771972)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/chromatic.png)
- [DrukBam](https://github.com/StephanHolgerD/DrukBam)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/drukbam.png)
- [Gambit](http://labsergen.langebio.cinvestav.mx/bioinformatics/jacob/?p=473)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gambit.png)
- [GenomeView (java app)](https://genomeview.org/content/quick-start-guide)
  [(pub)](https://doi.org/10.1093/nar/gkr995)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genomeview_java.png)
- [GSSPlayground](https://github.com/orangeSi/GSSplayground)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gssplayground.png)
- [Gviz](https://bioconductor.org/packages/release/bioc/html/Gviz.html)
  [(pub)](https://doi.org/10.1007/978-1-4939-3578-9_16)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gviz.png)
- [gw](https://github.com/kcleal/gw)
  [(pub)](https://doi.org/10.1038/s41592-025-02749-5)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gw.png)
- [Hapviz](https://github.com/ekg/hapviz)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/hapviz.png)
- [Hawkeye](https://github.com/peterhj/amos)
  [(pub)](https://doi.org/10.1186/gb-2007-8-3-r34)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/hawkeye.png)
- [iGenomics](https://github.com/stuckinaboot/iGenomics)
  [(pub)](https://doi.org/10.1093/gigascience/giaa138)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/igenomics.png)
- [JVarKit BamToSVG](http://lindenb.github.io/jvarkit/BamToSVG.html)
  [(pub)](https://doi.org/10.6084/m9.figshare.1425030)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/bamtosvg.jpg)
- [LookSeq](https://www.sanger.ac.uk/tool/lookseq/)
  [(pub)](https://doi.org/10.1101/gr.093443.109)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/lookseq.png)
- [Lucid viewer](https://lucidalign.com/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/lucidalign.png)
- [MagicViewer](http://bioinformatics.zj.cn/magicviewer/)
  [(pub)](https://doi.org/10.1093/nar/gkq302)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/magicviewer.jpeg)
- [MapView](https://web.archive.org/web/20201023093840/https://sites.google.com/site/wjwdavymapview/mapview/MapView.zip?attredirects=0)
  (URL is a direct link to zip file download on archive.org)
  [(pub)](https://doi.org/10.1093/bioinformatics/btp255)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mapview.jpg)
- [NGB](https://github.com/epam/NGB)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ngb.png)
- [pileuppy](https://gitlab.com/tprodanov/pileuppy)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pileuppy.png)
- [plotReads](http://campuspress.yale.edu/knightlab/ruddle/plotreads/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/plotreads.png)
- [pyBamView](https://mgymrek.github.io/pybamview/) (See supplementary info for
  more figures, supports padded SAM/BAM which is fairly rare)
  [(pub)](https://doi.org/10.1093/bioinformatics/btu565)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pybamview.png)
- [Sam2pairwise](https://github.com/mlafave/sam2pairwise)
  [(pub)](https://doi.org/10.5281/zenodo.11377)
- [Samtools tview](http://www.htslib.org/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btp352)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/tview.png)
- [shabam](https://github.com/dlrice/shabam)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/shabam.png)
- [Short read assembly browser](https://rapdb.dna.affrc.go.jp/AssemblyBrowser2/index.html?ref=%22chr01%22&run_id=%22G4toI1%22&start=%22234780%22&end=%22236631%22)
  [(pub)](https://doi.org/10.1093/pcp/pcs183)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/short_read_assembly_browser.png)
- [Staden](https://sourceforge.net/projects/staden/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btq268)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/staden.png)
- [tgv (terminal genome viewer)](https://github.com/zeqianli/tgv/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/tgv.png)
- [theBIGbam](https://github.com/bhagavadgitadu22/theBIGbam) (Genome browser and
  alignment viewer for large metagenomic and metatranscriptomic datasets, with
  circular mapping support)
  [(pub)](https://doi.org/10.1093/bioinformatics/btag459)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/thebigbam.png)
- [udon](https://github.com/ocxtal/udon) (Uses an advanced data structure for
  pileup, so visually a basic example but likely just a small demo)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/udon.png)
- [VizAln (from HipSTR)](https://github.com/tfwillems/HipSTR)
  [(pub)](https://doi.org/10.1038/nmeth.4267)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/hipstr.png)
- [wally](https://github.com/tobiasrausch/wally) (Available via the web from
  compiling to wasm)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/wally.png)

## Repeat

- [GraphAlignmentViewer](https://github.com/Illumina/GraphAlignmentViewer)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/graphalignmentviewer.png)
- [Mahi-mahi](https://github.com/nanoporetech/mahi-mahi) (Nanopore tandem repeat
  genotyper from Oxford Nanopore that plots per-read motif composition and CpG
  methylation for each locus, split by haplotype, plus read-length clustering
  plots and a tagged BAM for IGV)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mahi-mahi.png)
- [miropeats](http://www.littlest.co.uk/software/bioinf/old_packages/miropeats/)
  (image from 2021 paper
  https://www.biorxiv.org/content/10.1101/2021.12.08.471837v1.full.pdf)
  [(pub)](https://doi.org/10.1093/bioinformatics/11.6.615)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/miropeats.png)
- [PipMaker](http://pipmaker.bx.psu.edu/pipmaker/) (See also MultiPipMaker
  http://pipmaker.bx.psu.edu/pipmaker/mpm-example/index.html)
  [(pub)](https://doi.org/10.1101/gr.10.4.577)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pipmaker.png)
- [ProleTRact](https://github.com/Lionward/ProleTRact) (Tandem repeat viewer
  that shows motif composition of alleles; companion to the TandemTwister
  genotyper. Demo https://lionward.github.io/ProleTRact/)
  [(pub)](https://doi.org/10.1093/nargab/lqag096)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/proletract.png)
- [REPAVER](https://gitlab.com/gringer/bioinfscripts/)
  [(pub)](https://doi.org/10.13140/RG.2.2.15289.39522)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/repaver.jpg)
- [REViewer](https://github.com/Illumina/REViewer) (See also
  GraphAlignmentViewer, similar look and from illumina also)
  [(pub)](https://doi.org/10.1101/2021.10.20.465046)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/reviewer.png)
- [SODA](https://sodaviz.org/) (Describes itself as a low-level library to
  create larger applications with)
  [(pub)](https://doi.org/10.1093/nargab/lqac077)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/soda.png)
- [StainedGlass](https://github.com/mrvollger/StainedGlass)
  [(pub)](https://doi.org/10.1093/bioinformatics/btac018)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/stainedglass.png)
- [TRVZ (TRGT tandem repeat genotyping visualizer)](https://github.com/PacificBiosciences/trgt)
  [(pub)](https://doi.org/10.1101/2023.05.12.540470)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/trvz.png)

## Sashimi

- [GGsashimi](https://github.com/guigolab/ggsashimi)
  [(pub)](https://doi.org/10.1371/journal.pcbi.1006360)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ggsashimi.png)

## Sequence logo

- [LogoJS](https://logojs.wenglab.org/app/gallery/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btaa192)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/logojs.png)

## Signal track

- [Epilogos](https://epilogos.altius.org/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/epilogos.jpg)
- [Peax](https://github.com/Novartis/peax)
  [(pub)](https://doi.org/10.1111/cgf.13971)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/peax.png)
- [RepViz](https://bmcresnotes.biomedcentral.com/articles/10.1186/s13104-019-4473-z)
  [(pub)](https://doi.org/10.1186/s13104-019-4473-z)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/repviz.png)
- [wasm bigwig demo browser](https://shk656461.github.io/index.html)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/wasm_bigwig.png)

## Single cell

- [ArchR](https://www.archrproject.com/articles/Articles/tutorial.html)
  [(pub)](https://doi.org/10.1038/s41588-021-00790-6)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/archr.png)
- [casper](https://github.com/akdess/CaSpER)
  [(pub)](https://doi.org/10.1038/s41467-019-13779-x)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/casper.png)
- [copykat](https://github.com/navinlabcode/copykat/blob/master/vignettes/copycat-vignettes.pdf)
  [(pub)](https://doi.org/10.1038/s41587-020-00795-2)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/copykat.png)
- [gingko](https://github.com/robertaboukhalil/ginkgo)
  [(pub)](https://doi.org/10.1038/nmeth.3578)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gingko.jpeg)
- [MosaicCatcher pipeline](https://github.com/friendsofstrandseq/mosaicatcher-pipeline)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mosaicatcher.png)
- [numbat](https://kharchenkolab.github.io/numbat/)
  [(pub)](https://doi.org/10.1101/2022.02.07.479314)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/numbat.png)
- [scCNV_heatmap](https://github.com/StefanKurtenbach/scCNV_heatmap)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/sccnv_heatmap.png)

## Small variant

- [bcftools roh](https://samtools.github.io/bcftools/howtos/roh-calling.html)
  (Plots runs of homozygosity, has interactive plot-roh.py helper too)
  [(pub)](https://doi.org/10.1093/bioinformatics/btw044)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/bcftools_roh.png)
- [NucFreq](https://github.com/mrvollger/NucFreq)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/nucfreq.png)
- [phasius](https://github.com/wdecoster/phasius)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/phasius.png)
- [SNPduo](https://web.archive.org/web/20210518090714/http://pevsnerlab.kennedykrieger.org/SNPduo/)
  [(pub)](https://doi.org/10.1371/journal.pone.0006711)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/snpduo.png)
- [snpit](https://github.com/aineniamh/snipit)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/snpit.png)
- [vcfPlotein](https://vcfplotein.liigh.unam.mx/#/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/vcfplotein.png)
- [XVCF](https://github.com/rashidma/XVCF) (Shiny app for visualization and
  quality control of VCF and annotated somatic variant data)
  [(pub)](https://doi.org/10.1016/j.slast.2026.100447)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/xvcf.png)

## Splicing

- [IsoVis](https://isomix.org/isovis/)
  [(pub)](https://doi.org/10.1093/nar/gkae343)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/isovis.png)
- [Slinker](https://github.com/Oshlack/Slinker) (See also, clinker (gene fusion
  software)) [(pub)](https://doi.org/10.12688/f1000research.74836.1)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/slinker.png)
- [Spliceclust](https://github.com/pkimes/spliceclust)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/spliceclust.png)
- [splicejam](https://github.com/jmw86069/splicejam)
  [(pub)](https://doi.org/10.1016/j.celrep.2019.08.093)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/splicejam.png)
- [Vials](http://vials.io/) [(pub)](https://doi.org/10.1109/TVCG.2015.2467911)

## SV

- [10x genomics - Loupe](https://support.10xgenomics.com/genome-exome/software/visualization/latest/structural-variants)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/10xgenomics.png)
- [AmpliconArchitect](https://github.com/virajbdeshpande/AmpliconArchitect) (The
  term amplicon refers essentially to extrachromosomal DNA in cancer)
  [(pub)](https://doi.org/10.1038/s41467-018-08200-y)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ampliconarchitect.png)
- [asgart](https://github.com/delehef/asgart)
  [(pub)](https://doi.org/10.1093/bioinformatics/bty172)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/asgart.png)
- [bigly](https://github.com/brentp/bigly)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/bigly.png)
- [Bionano](https://bionanogenomics.com/technology/structural-variation/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/bionano.png)
- [CLC Genomics workbench](https://digitalinsights.qiagen.com/news/blog/discovery/structural-variant-detection-using-clc-genomics-workbench/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/clcgenomics.png)
- [Genome STRiP](http://software.broadinstitute.org/software/genomestrip/)
  [(pub)](https://doi.org/10.1038/ng.3200)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genomestrip.png)
- [GenomeView](https://github.com/nspies/genomeview)
  [(pub)](https://doi.org/10.1101/355636)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genomeview.png)
- [gGnomes](https://github.com/mskilab/gGnome)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ggnomesr.png)
- [gGnomes.js](https://github.com/mskilab/gGnome.js)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ggnomes.png)
- [Gremlin](http://compbio.cs.brown.edu/projects/gremlin/)
  [(pub)](https://doi.org/10.1109/tvcg.2010.163)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gremlin.png)
- [InGAP-SV](http://ingap.sourceforge.net/)
  [(pub)](https://doi.org/10.1093/nar/gkr506)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/ingap_sv.png)
- [Introgression browser](https://git.wageningenur.nl/aflit001/ibrowser)
  [(pub)](https://doi.org/10.1111/tpj.12800)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/introgression_browser.png)
- [LINX](https://github.com/hartwigmedical/hmftools/tree/master/linx) (part of
  the PURPLE/GRIDSS/LINX pipeline) [(pub)](https://doi.org/10.1101/781013)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/linx.png)
- [NeoLoopFinder](https://github.com/XiaoTaoWang/NeoLoopFinder)
  [(pub)](https://doi.org/10.1038/s41592-021-01164-w)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/neoloopfinder.png)
- [Pairoscope](http://pairoscope.sourceforge.net/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pairoscope.png)
- [plotsr](https://github.com/schneebergerlab/plotsr) (see also
  https://github.com/schneebergerlab/syri)
  [(pub)](https://doi.org/10.1101/2022.01.24.477489)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/plotsr.png)
- [QUAAK](https://github.com/YingZhou001/Quaak) (Quick Unique k-mer Assembly
  Assessment Kit. Uses unique k-mers to compare reference and query genomes,
  building synteny blocks to assess assembly completeness and flag large
  structural variations. Outputs reference-centric block-mapping plots. Sample
  image from
  https://s3-us-west-2.amazonaws.com/human-pangenomics/index.html?prefix=submissions/76E3F239-A9A6-4B6B-840F-B49053807394--R3_verkko-v2.3.2_hybrid_assembly_qc/HG00146/quaak/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/quaak.png)
- [ReConPlot](https://github.com/cortes-ciriano-lab/ReConPlot)
  [(pub)](https://doi.org/10.1101/2023.02.24.529890)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/reconplot.png)
- [Ribbon](http://genomeribbon.com/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btaa680)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genomeribbon.png)
- [Samplot](https://github.com/ryanlayer/samplot)
  [(pub)](https://doi.org/10.1186/s13059-021-02380-5)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/samplot.jpg)
- [SMRT View](http://files.pacb.com/software/smrtanalysis/2.3.0/doc/smrtview/help/Webhelp/App_View_Epipro.htm)
  (wiki page https://github.com/PacificBiosciences/DevNet/wiki/SMRT-View)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/smrtview.png)
- [SplitThreader](http://splitthreader.com/)
  [(pub)](https://doi.org/10.1101/087981)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/splitthreader.png)
- [SvABA](https://github.com/walaj/svaba#alignmentstxtgz)
  [(pub)](https://doi.org/10.1101/gr.221028.117)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/svaba.png)
- [SVhawkeye](https://github.com/yywan0913/SVhawkeye)
  [(pub)](https://doi.org/10.3389/fgene.2024.1352443)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/svhawkeye.jpg)
- [SVPV](https://github.com/VCCRI/SVPV)
  [(pub)](https://doi.org/10.1093/bioinformatics/btx117)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/svpv.jpg)
- [SVTopo](https://github.com/PacificBiosciences/SVTopo)
  [(pub)](https://doi.org/10.1186/s12864-025-12088-6)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/svtopo.png)
- [svv](https://github.com/ryanlayer/svv)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/svv.png)
- [svviz](https://github.com/svviz/svviz)
  [(pub)](https://doi.org/10.1093/bioinformatics/btv478)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/svviz.png)
- [svviz2](https://github.com/nspies/svviz2)
  [(pub)](https://doi.org/10.1093/bioinformatics/btv478)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/svviz2.png)
- [SynFlow](https://github.com/SouthGreenPlatform/SynFlow) (Interactive viewer
  for structural variation between chains of genomes. Demo
  https://synflow.southgreen.fr)
  [(pub)](https://doi.org/10.1093/bioinformatics/btag567)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/synflow.png)
- [vcf2circos](https://github.com/bioinfo-chru-strasbourg/vcf2circos) (Based on
  PCircos https://github.com/CJinny/PCircos)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/vcf2circos.png)

## Synteny

- [AccuSyn](https://accusyn.usask.ca/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/accusyn.png)
- [Aequatus](https://github.com/TGAC/Aequatus)
  [(pub)](https://doi.org/10.1093/gigascience/giy128)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/aequatus.png)
- [Artemis comparison tool (ACT)](https://www.sanger.ac.uk/science/tools/artemis-comparison-tool-act)
  [(pub)](https://doi.org/10.1093/bioinformatics/bti553)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/artemis_act.png)
- [AutoGraph](http://autograph.genouest.org/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btl618)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/autograph.png)
- [CHITRA](https://github.com/BioinformaticsOnLine/CHITRA) (Interactive synteny
  block and breakpoint viewer for chromosomal rearrangements, with linear and
  chord views. Demo https://chitra.bioinformaticsonline.com)
  [(pub)](https://doi.org/10.1093/bioadv/vbag200)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/chitra.png)
- [Cinteny](http://cinteny.cchmc.org/)
  [(pub)](https://doi.org/10.1186/1471-2105-8-82)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cinteny.png)
- [CrowsNest](https://pgsb.helmholtz-muenchen.de/crowsnest/help.html)
  [(pub)](https://doi.org/10.1007/978-1-4939-3167-5_8)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/crowsnest.png)
- [EvolutionHighway](http://eh-demo.ncsa.illinois.edu/) (The 'evolutionary
  highway' image type is reproduced in some other packages e.g.
  https://github.com/marta-fb/syntenyPlotteR, paper
  https://doi.org/10.1126/science.1111387)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/evolutionaryhighway.jpg)
- [GBrowse_syn](http://gmod.org/wiki/GBrowse_syn)
  [(pub)](https://doi.org/10.1002/0471250953.bi0912s31)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/gbrowse_syn.png)
- [GenomeMatcher](http://www.ige.tohoku.ac.jp/joho/gmProject/gmmanual.html)
  [(pub)](https://doi.org/10.1186/1471-2105-9-376)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genomematcher.png)
- [JAX Synteny browser](https://github.com/TheJacksonLaboratory/syntenybrowser)
  [(pub)](https://doi.org/10.1007/s00335-019-09821-4)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/jax_synteny_browser.png)
- [MCScanX](https://github.com/wyp1125/MCScanX)
  [(pub)](https://doi.org/10.1093/nar/gkr1293)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mcscanx.png)
- [mGSV (multiple genome synteny viewer)](https://github.com/kashmatic/mGSV)
  [(pub)](https://doi.org/10.1186/1471-2105-13-190)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mgsv.jpg)
- [MizBee](http://www.cs.utah.edu/~miriah/mizbee/Overview.html)
  [(pub)](https://doi.org/10.1109/TVCG.2009.167)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mizbee.jpg)
- [NCBI CGV](https://ncbiinsights.ncbi.nlm.nih.gov/2022/07/05/cgv-beta-release/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/cgv.png)
- [pyGenomeViz](https://github.com/moshi4/pyGenomeViz) (See also
  https://github.com/moshi4/MGCplotter https://github.com/moshi4/GBKviz
  https://github.com/moshi4/plot_genome_align_fig)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/pygenomeviz.png)
- [SafFire](https://mrvollger.github.io/SafFire/#ref=CHM13_v1.1&query=GRCh38)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/saffire.png)
- ShinySyn [(pub)](https://doi.org/10.1093/bioinformatics/btac503)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/shinysyn.png)
- [SimpleSynteny](https://www.dveltri.com/simplesynteny/about.html)
  [(pub)](https://doi.org/10.1093/nar/gkw330)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/simplesynteny.jpg)
- [Smash++](https://github.com/smortezah/smashpp)
  [(pub)](https://doi.org/10.1093/gigascience/giaa048)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/smashpp.png)
- [Sybil](http://sybil.sourceforge.net/) (Download
  https://sourceforge.net/projects/sybil/)
  [(pub)](https://doi.org/10.1007/978-1-59745-547-3_6)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/sybil.png)
- SynBrowse [(pub)](https://doi.org/10.1093/bioinformatics/bti555)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/synbrowse.png)
- [Synima](https://github.com/rhysf/Synima)
  [(pub)](https://doi.org/10.1186/s12859-017-1939-7)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/synima.png)
- [SyntenyPair Explorer](https://github.com/GibbonsLabGenomics/SyntenyPair-Explorer)
  (Installation-free pairwise synteny viewer that reads BLAST or MCScan output
  and GFF3. Demo https://gibbonslabgenomics.github.io/SyntenyPair-Explorer/)
  [(pub)](https://doi.org/10.64898/2026.07.23.740353)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/syntenypair_explorer.png)
- [syntenyPlotteR](https://github.com/marta-fb/syntenyPlotteR)
  [(pub)](https://doi.org/10.1093/bioadv/vbad161)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/syntenyplotter.png)
- [XMatchView](https://www.bcgsc.ca/resources/software/xmatchview)
  [(pub)](https://doi.org/10.21105/joss.00497)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/xmatchview.png)
- [ziplign](https://github.com/martinghunt/ziplign) (ACT (Artemis Comparison
  Tool) replacement)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/tna.png)

## Synthetic biology

- [Benchling](https://www.benchling.com/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/benchling.png)
- [Chopchop](http://chopchop.cbu.uib.no/)
  [(pub)](https://doi.org/10.1093/nar/gkz365)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/chopchop.png)
- [OpenVectorEditor](https://teselagen.github.io/tg-oss/ove/#/Editor)
- [plascad](https://github.com/David-OConnor/plascad)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/plascad.png)
- [plasmapR](https://github.com/BradyAJohnston/plasmapR)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/plasmapr.png)
- [SnapGene](https://www.snapgene.com/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/snapgene.png)
- [VectorBee](https://www.vectorbee.com/en/) (Not open source, but is free)

## Transcriptomics

- [SQANTI-browser](https://github.com/ConesaLab/SQANTI-browser) (Loads
  SQANTI3-classified long-read transcriptomes into the UCSC Genome Browser for
  filtering and curation) [(pub)](https://doi.org/10.64898/2026.05.25.727625)

## Transposon

- [TE-nest](https://github.com/cmdcolin/TEnest) (This was an online tool that
  does not appear to exist anymore see
  https://web.archive.org/web/20170712104431/http://www.plantgdb.org/tool/TEnest/.
  the github link is re-hosted source code also downloaded from archive.org.
  Also note: The notation of nested triangles may be equivalent to just a
  feature being annotated inside a feature: this link helps show this
  https://mcstitzer.github.io/maize_TEs/)
  [(pub)](https://doi.org/10.1104/pp.107.110353)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/tenest.jpg)
- [Transposcope](https://github.com/FenyoLab/transposcope)
  [(pub)](https://doi.org/10.1093/bioinformatics/btaa244)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/transposcope.png)

## Variant interpretation

- [Alamut](https://www.interactive-biosoftware.com/alamut-visual/)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/alamut.png)
- [Varsome](<https://varsome.com/security-validation/?next=/variant/hg19/NM_000088.3(COL1A1):c.658C%3ET>)
  [(pub)](https://doi.org/10.1093/bioinformatics/bty897)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/varsome.png)

## Whole-genome alignment

- [A-liner](https://github.com/mokuno3430/a-liner) (Linear alignment plots for
  genome comparisons, with gene, exon, scatter and highlight tracks)
  [(pub)](https://doi.org/10.1093/bioinformatics/btag408)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/a_liner.png)
- [AliTV](https://alitvteam.github.io/AliTV/d3/AliTV.html)
  [(pub)](https://doi.org/10.7717/peerj-cs.116)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/alitv.png)
- [Comparative assembly hub snake track](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4296145/)
  [(pub)](https://doi.org/10.1093/bioinformatics/btu534)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/comparative_assembly_hub.png)
- [Genome-plots-processing](https://github.com/filip-husnik/genome-plots-processing)
  [(pub)](https://doi.org/10.1073/pnas.1603910113)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/genome_plots_processing.png)
- [mauve-viewer](https://github.com/nconrad/mauve-viewer)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/mauve_viewer.png)
- [progressiveMauve viewer](http://darlinglab.org/mauve/user-guide/viewer.html)
  [(pub)](https://doi.org/10.1101/gr.2289704)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/progressive_mauve.png)
- [SequenceSurveyor](https://graphics.cs.wisc.edu/Vis/SequenceSurveyor/index.html)
  [(pub)](https://doi.org/10.1109/TVCG.2011.232)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/sequencesurveyor.png)
- [VISTA browser](http://pipeline.lbl.gov/cgi-bin/gateway2)
  [(pub)](https://doi.org/10.1093/nar/gkh458)
  [(img)](https://cmdcolin.github.io/awesome-genome-visualization/vista.png)

# Other lists

- [Awesome Bioinformatics](https://github.com/danielecook/Awesome-Bioinformatics)
- [Genocat](http://genocat.tools/) large collection of genomic visualizations
  with great review paper accompaniment
  https://onlinelibrary.wiley.com/doi/full/10.1111/cgf.13727
- [awesome-biological-visualizations](https://github.com/keller-mark/awesome-biological-visualizations)

Send in PRs for more stuff!

## License

This README.md and TOOLS.json are CC0
https://creativecommons.org/publicdomain/zero/1.0/

The website code is MIT
