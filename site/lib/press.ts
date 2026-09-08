// Source-of-truth for the /press page. All entries from the original
// zenka.org Squarespace site. Newest first.

export interface PressEntry {
  date: string;          // human-readable date as it appears on the page
  title: string;
  source?: string;       // outlet / venue
  byline?: string;       // "by ..."
  url?: string;          // external link
  note?: string;         // optional extra context
  thumbnail?: string;    // optional /images/press/...jpg — used when entry
                         // is a print/PDF article (YouTube auto-generates
                         // its own thumb from the URL).
}

// ============= TALKS & KEYNOTES =============
// Format: date · Name of Talk · Event Name: City, Country
// Newest first. Includes keynotes, panels, and gallery exhibitions.
export const talks: PressEntry[] = [
  { date: "June 14, 2017", title: "The Future: Fear, Follow, or Fantasize", source: "Mind the Product Conference: San Francisco, USA" },
  { date: "November 17, 2025", title: "How to Bend a Spoon", source: "Mission Achievement and Success Charter School: Albuquerque, USA", url: "https://www.mascharterschool.com/" },
  { date: "September 26 - October 31, 2026", title: "Augmented Reality Exhibition", source: "Jackson Hole Center for the Arts: Jackson Hole, USA", url: "https://JHCenterForTheArts.org" },
  { date: "May 30, 2026", title: "1+1 = 1: The New Math of the Renaissance", source: "Holomovement Wave: Cascais, Portugal" },
  { date: "May 30, 2026", title: "Choose Love: The Spoon Bending Experience", source: "Holomovement Wave: Cascais, Portugal" },
  { date: "May 9, 2026", title: "Bending Your Reality", source: "Soul Retreat Sedona: Sedona, USA", url: "https://www.jenniferspencermedium.com/retreat" },
  { date: "February 4, 2026", title: "Spoon Bending and Telekinesis", source: "Sensus Extra Ordinaries Training with Dalia Burgoin and Alex Stefan: Sedona, USA" },
  { date: "January 31, 2026", title: "Telekinesis & Spoon Bending Talk", source: "Shine Sanctuary for the Soul: Sedona, USA", url: "https://shinesedona.com/" },
  { date: "December 4, 2025", title: "Spoon Bending & PSI Abilities Workshop", source: "Humankind Center: Sedona, USA", url: "https://www.eventbrite.com/e/spoon-bending-psi-abilities-workshop-tickets-1976370406087" },
  { date: "October 25, 2025", title: "Global Oneness Summit", source: "Humanity's Team", url: "https://www.humanitysteam.org/panelists" },
  { date: "May 24, 2025", title: "The 7 Stages of Purpose", source: "Holomovement Wave: Asheville, USA", url: "https://www.youtube.com/watch?v=9Am9MsZWHHI" },
  { date: "September 14-15, 2024", title: "Starseed Academy Welcome · Contact & Spoon Bending", source: "Starseed Academy Contact Japan 2024: Tokyo, Japan" },
  { date: "May 23-27, 2024", title: "Evolutionary Technology and New Economies", source: "Holomovement Wave: Ibiza, Spain" },
  { date: "May 23-27, 2024", title: "The Purpose Lab Debut", source: "Holomovement Wave: Ibiza, Spain" },
  { date: "February 10, 2024", title: "How to Bend Your Reality", source: "Conscious Life Expo: Los Angeles, USA" },
  { date: "May 20, 2023", title: "How to Sculpt Your Dream Scape", source: "Dreamscape Conference: Sedona, USA" },
  { date: "January 1, 2021", title: "Seeds Crypto Live", source: "18-hour non-stop global broadcast", url: "https://youtu.be/o_bp9bnAzhQ" },
  { date: "December 12 & 19, 2020", title: "Zenka at the 12/12 Convergence: Science and Tech" },
  { date: "November 19, 2020", title: "The Future of Higher Education, Virtual Reality and Citizen Driven Science", source: "CSUN University: Northridge, USA", url: "https://youtu.be/iRgd6shlolA" },
  { date: "July 2019", title: "Plumbing a Tipping Point in the Consciousness Movement", source: "Institute of Noetic Sciences, 18th Annual International Conference: Santa Clara, USA", url: "https://www.youtube.com/watch?v=5OX0zZFUFmA" },
  { date: "January 2019", title: "Triple Smart Labs Summit", source: "Córdoba, Argentina" },
  { date: "September 2018", title: "UC Berkeley Innovation Lab Conference", source: "Berkeley, USA" },
  { date: "September 2018", title: "Institute of Contemporary Art, Los Angeles", source: "Los Angeles, USA" },
  { date: "January 2018", title: "I Have a Dream", source: "ARinAction at MIT: Boston, USA", url: "http://arinaction.org/" },
  { date: "January 2018", title: "AR/CV Meet Up", source: "Google Launchpad: San Francisco, USA", url: "https://www.eventbrite.com/e/augmented-reality-ces-recap-author-artist-demos-tickets-41408000444" },
  { date: "January 2018", title: "Ye Old Futurist Union", source: "Angel City Brewery: Los Angeles, USA", url: "https://www.eventbrite.com/e/resolved-we-need-virtual-reality-to-recreate-reality-tickets-41991355274" },
  { date: "November 2017", title: "Past Forward Tech Live Keynote", source: "National Trust for Historic Preservation: Chicago, USA", url: "https://www.youtube.com/watch?v=qHeEsvSBXQ0&t=135s" },
  { date: "June 2017", title: "The Art of VR Panel", source: "Sotheby's: New York, USA", url: "https://www.sothebys.com/en/videos/vr-society-presents-the-art-of-vr-at-sothebys" },
  { date: "May 2017", title: "AWE Augmented Reality World Expo", source: "AWE: Santa Clara, USA", url: "https://www.youtube.com/watch?v=4XStJ8zHwxs", note: "How to generate successful app ideas as we move into AR, MR, and VR 2.0." },
  { date: "April 12, 2017", title: "Zenka en la UCC", source: "Universidad Católica de Córdoba: Córdoba, Argentina", url: "https://www2.ucc.edu.ar/agenda/zenka-en-la-ucc/" },
  { date: "October 2016", title: "Can Augmented Reality Bring us to the Wisdom Age", source: "TEDx Jackson Hole: Wyoming, USA", url: "https://www.youtube.com/watch?v=2FA-IuDTMjE", note: "Sculptures and street art paint a picture of where we are in time and where we are headed based on new developments in VR and AR." },
  { date: "October 2016", title: "CSUN California State University", source: "Northridge, USA" },
  { date: "Ongoing", title: "Zenka | Nodo940 & The Dream Machine", source: "Nodo940 Gallery: Córdoba, Argentina", url: "https://www.nodo940.com.ar/#!/-zenka/" },
];

// ============= PODCAST, TV, FILM & RADIO =============
// Newest first. Includes podcast appearances, TV interviews, documentaries,
// short films, and radio segments.
export const interviews: PressEntry[] = [
  { date: "March 19, 2026", title: "Zenka Caro, Founder of LightNet", source: "Conscious Awakening Network", url: "https://www.youtube.com/watch?v=3TvVUu61Jfg" },
  { date: "January 13, 2026", title: "Jimmy Church, Fade to Black — Contact ET, Ep. 2264", source: "Fade to Black", url: "https://www.youtube.com/watch?v=wXevLd1v1Jg" },
  { date: "March 25, 2025", title: "Bridge to the Galaxy with Adam Cupell", source: "Alliance for Extraterrestrial Diplomatic Contact", url: "https://www.youtube.com/watch?v=2T1Qq2ixMNM" },
  { date: "May 27, 2024", title: "Ep. 4: Zenka Caro — How to Believe in Yourself", source: "Awaken Your Purpose Podcast", url: "https://www.youtube.com/watch?v=BGWVDiYeqj4" },
  { date: "April 24, 2024", title: "Mind Over Matter (Episode 57)", source: "Broader Lens Podcast", url: "https://www.youtube.com/watch?v=qGL4NH0DgZk" },
  { date: "April 1, 2024", title: "Muscle Testing and Pendulums", source: "United News Network", url: "https://www.youtube.com/watch?v=oqiJw6AUVMw" },
  { date: "March 12, 2024", title: "The Joy & Science Behind Spoon Bending with Zenka Caro", source: "Lisa Campion", url: "https://lisacampion.com/the-joy-science-behind-spoon-bending-with-zenka-caro/", thumbnail: "/images/press/joy-science-2024.jpg" },
  { date: "February 17, 2024", title: "Starseed Academy interview", source: "IdeateTV with Jennifer Le", url: "https://www.youtube.com/watch?v=HWEW3_XfYyU" },
  { date: "February 14, 2024", title: "Mind Over Matter: Consciousness & ET Communication with Zenka Caro", source: "The JeffMara Podcast", url: "https://www.youtube.com/watch?v=bG9KBKZZ3iM" },
  { date: "December 7, 2023", title: "A Collective Consciousness Think Tank: 10 Books That Led Zenka Caro to the Foundation of LightNet", source: "Sandie Sedgbeer", url: "https://www.youtube.com/watch?v=4dhH_a-FDjc" },
  { date: "October 23, 2023", title: "Ep. 1884 Zenka Caro: How to Contact ET", source: "FADE TO BLACK Radio", url: "https://www.youtube.com/watch?v=VggRuU0ugEw" },
  { date: "December 3, 2025", title: "Live With Intention: Zenka Caro Shares Insights From The Holomovement Purpose Lab", source: "BBR Wellness Consulting", url: "https://www.bbrconsulting.us/podcast/zenka-caro", thumbnail: "/images/press/bbr-live-with-intention-2025.jpg" },
  { date: "September 16, 2022", title: "Zenka Caro and CONTACT 2022 Event in Sedona", source: "HelloKITTY (YouTube)", url: "https://www.youtube.com/watch?v=rShBDTGz4Ek" },
  { date: "January 2, 2021", title: "Birthing a New World Docu-series", source: "Wendy Silvers", url: "https://wendysilvers.com/birthing-a-new-world/", thumbnail: "/images/press/birthing-new-world-2021.jpg" },
  { date: "January 29, 2020", title: "Zenka on Health Gig Podcast — The Future is Better Than Ever", source: "Health Gig Podcast", url: "https://soundcloud.com/healthgig/zenka/s-6KR3z", thumbnail: "/images/press/health-gig-2020.jpg" },
  { date: "January 23, 2020", title: "Tokyo and The Future of Cities", source: "Short Film by Alex Gorosh", url: "https://www.alexgorosh.com/work/v/tokyo-and-the-future-of-cities-director-editor?categoryId=666fdafe044168315b32869d", thumbnail: "/images/press/tokyo-future-cities-2020.jpg" },
  { date: "August 1, 2019", title: "Zenka on A Life Economy Podcast", source: "Futurism, Citizen-driven Science, and Empowering People in a Passion Based Economy", url: "https://podcasts.apple.com/us/podcast/003-zenka-empowering-people-in-a-passion-based-economy/id1469556430?i=1000445886792", thumbnail: "/images/press/life-economy-2019.jpg" },
  { date: "June 16, 2017", title: "Arapahoe School Takes Futuristic Leap", source: "Wyoming Public Radio", byline: "Rebecca Huntington", url: "http://wyomingpublicmedia.org/post/arapahoe-school-takes-futuristic-leap", thumbnail: "/images/press/arapaho-wpr-2017.jpg" },
  { date: "August 19, 2016", title: "Documenting the Evolution of VR Headsets with Zenka's Sculptures", source: "Voices of VR Podcast on Road to VR", byline: "Kent Bye", url: "http://www.roadtovr.com/documenting-evolution-vr-headsets-zenkas-sculptures/", thumbnail: "/images/press/voices-of-vr-2016.jpg" },
  { date: "August 18, 2015", title: "Jenny 'Zenka' Carden: Brush Stroke of Genius", source: "Innovation Crush", byline: "Chris Denson", url: "https://soundcloud.com/innovationcrush/95-jenny-carden-brush-stroke-of-genius", thumbnail: "/images/press/innovation-crush-2015.jpg" },
];

// ============= FEATURED PRESS =============
// The strongest press hits. Curated order (NOT chronological) — rendered
// with noSort=true so this exact sequence is preserved on the page.
export const featuredPrint: PressEntry[] = [
  { date: "September 25, 2024", title: "No Regrets: New Research Reveals How People Find Their Purpose In Life", source: "AP News, Benzinga, MENAFN, and 30+ outlets nationwide (via EIN Presswire)", url: "https://apnews.com/press-release/ein-presswire-newsmatics/arizona-0634a81e9e4753ab5f71b365c35d5e30", thumbnail: "/images/press/apnews-no-regrets-2024.jpg" },
  { date: "July 11, 2017", title: "Artists Show the Potential of VR", source: "Forbes Magazine", byline: "Charlie Fink", url: "https://www.forbes.com/sites/charliefink/2017/07/11/artists-show-potential-of-vr/", thumbnail: "/images/press/forbes-vr-2017.jpg" },
  { date: "April 2017", title: "White Mirror: A Positive Vision for the Future of Technology", source: "Upload VR", url: "https://uploadvr.com/white-mirror-positive-vision-future-technology/", thumbnail: "/images/press/uploadvr-white-mirror-2017.jpg" },
  { date: "September 12, 2023", title: "Research Group Makes Music with ETs", source: "The Realtime Report", url: "https://therealtimereport.com/2023/09/12/research-group-makes-music-with-ets/" },
  { date: "August 4, 2024", title: "Sedona is in Stitches: Kudos", source: "Verde News", url: "https://drive.google.com/file/d/11e6UYOW4TEMr6PR2jHtcg_ue5HDWrUSO/view", thumbnail: "/images/press/verdenews-sedona-stitches-2024.jpg" },
];

// ============= PRINT & DIGITAL PRESS =============
// Newest first, chronological.
export const printPress: PressEntry[] = [
  { date: "May 1, 2026", title: "Zenka Caro, Featured Leader Profile", source: "Evolutionary Leaders", url: "https://www.evolutionaryleaders.net/leaders/zenka-caro/" },
  { date: "October 25, 2022", title: "Faro se muestra mas de 20 galerias locales", source: "La Voz", url: "https://www.lavoz.com.ar/vos/artes/faro-se-muestra-mas-de-20-galerias-locales-presentan-obras-de-gran-formato-en-la-legislatura/", thumbnail: "/images/press/lavoz-faro-2022.jpg" },
  { date: "March 10, 2022", title: "Con un Laberinto Virtual de Julio Le Parc MAPA se Agranda y Hace Pie en La Rural", source: "La Nación", url: "https://www.lanacion.com.ar/cultura/con-un-laberinto-virtual-de-julio-le-parc-mapa-se-agranda-y-hace-pie-en-la-rural-nid08032022/?outputType=amp" },
  { date: "January 26, 2022", title: "Spoon Bending Party: Mind-Over-Matter in Sedona", source: "Signals AZ", url: "https://www.signalsaz.com/events/events/spoon-bending-party-mind-over-matter-in-sedona/" },
  { date: "March 12, 2020", title: "Five Futurists Who Comment on The Trends of Tomorrow", source: "Wiki.ezvid.com", url: "https://wiki.ezvid.com/m/5-futurists-who-comment-on-the-trends-of-tomorrow-wj5YVwTkhzjoO", thumbnail: "/images/press/ezvid-5-futurists-2020.jpg" },
  { date: "December 8, 2019", title: "Novel 20 years in the making honors local and family histories", source: "Chillicothe Gazette (as Jenny Carden)", url: "https://www.chillicothegazette.com/story/news/2019/12/08/novel-20-years-making-traces-local-and-family-histories/2599559001/", thumbnail: "/images/press/chillicothe-novel-2019.jpg" },
  { date: "July 2019", title: "Zenka's AR Ceramic Beetle is More Than an Insect", source: "Concordia News", byline: "Nancy Varekamp", url: "http://concordiapdx.org/wp-content/uploads/2019/06/cna-201907-web.pdf" },
  { date: "2019", title: "Convergence: The World will be Painted with Data", source: "Book, with Zenka Afterword", url: "https://www.amazon.com/Convergence-World-Will-Painted-Data/dp/0578460556" },
  { date: "June 14, 2017", title: "10 Things I learned at Mind the Product 2017", source: "Medium", byline: "Josh Johnson", url: "https://medium.com/building-creative-market/10-things-i-learned-at-mind-the-product-2017-2cbea5c8f96a", thumbnail: "/images/press/medium-mind-product-2017.jpg" },
  { date: "May 2017", title: "Augmented Reality is Everywhere but Nowhere", source: "Nerd Out", byline: "Nick Kelly", url: "http://www.nerdoutblog.com/2017/05/24/augmented-reality-everywhere-nowhere/", thumbnail: "/images/press/nerdout-ar-everywhere-2017.jpg" },
  { date: "April 13, 2017", title: "Futurists want to transform Black Mirror's dystopia into something better", source: "Venture Beat", url: "https://venturebeat.com/2017/04/13/futurists-want-to-transform-black-mirrors-dystopia-into-something-better/", thumbnail: "/images/press/venturebeat-black-mirror-2017.jpg" },
  { date: "September 28, 2016", title: "Art's Future Could be Augmented Reality", source: "Jackson Hole News & Guide", byline: "Isa Jones", url: "http://www.jhnewsandguide.com/stepping_out/arts/art-s-future-could-be-augmented-reality/article_417e9815-a72b-5b13-93c8-b7538faa631a.html", thumbnail: "/images/press/jhnewsandguide-ar-2016.jpg" },
  { date: "September 28, 2016", title: "CULTURE KLASH: Other Worldly", source: "Planet Jackson Hole", byline: "Meg Daly", url: "http://planetjh.com/2016/09/28/culture-klash-other-worldly/" },
  { date: "September 28, 2016", title: "Prints Come to Life at Center Gallery", source: "Jackson Hole News & Guide", byline: "Isa Jones", url: "http://www.jhnewsandguide.com/jackson_hole_daily/local/prints-come-to-life-at-center-gallery/article_73a76a0a-ca1e-58b5-a4a3-8137382634a0.html", thumbnail: "/images/press/jhnewsandguide-prints-2016.jpg" },
  { date: "July 11, 2015", title: "Tour of Zenka Art Exhibit: The History of Virtual Reality in Japanese Raku Sculpture", source: "Vrideo, 360 video interview (archived)", byline: "Chadwick Turner" },
  { date: "April 25, 2015", title: "These Brilliant Sculpture Masks Chart Virtual Reality's History", source: "Road To VR", byline: "Matthew Terndrup", url: "http://www.roadtovr.com/artist-documented-vrs-history-series-sculptures/" },
  { date: "March 6, 2015", title: "Ceramic Street Artist Zenka Takes on Virtual Reality", source: "LATaco", url: "http://www.lataco.com/taco/zenka-vr-show" },
  { date: "March 5, 2015", title: "Preview of Virtual Reality's 'Presence' by Zenka, Opening at District Gallery Saturday", source: "Cartwheel Art Magazine", byline: "Cindy Schwarzstein", url: "http://www.cartwheelart.com/2015/03/05/virtual-reality-presence-by-zenka-opening-at-district-gallery/" },
  { date: "March 4, 2015", title: "At Last! Virtual Reality Becomes Virtually Real", source: "KCRW (print and radio segment)", byline: "Lisa Napoli", url: "http://blogs.kcrw.com/whichwayla/2015/03/at-last-virtual-reality-becomes-virtually-real" },
  { date: "March 1997", title: "Village Views", source: "Terrace Park Historical Society (as Jenny Carden)", url: "https://tphistoricalsociety.org/Village-Views/VV-pdfs/1997/1997-03.pdf" },
  { date: "Featured", title: "The Women of Robertson Place", source: "The NO BS Spiritual Book Club", url: "https://www.thenobsspiritualbookclub.com/b/the-women-of-robertson-place/" },
];
