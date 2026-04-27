// Source-of-truth for the /press page. All entries from the original
// zenka.org Squarespace site. Newest first.

export interface PressEntry {
  date: string;          // human-readable date as it appears on the page
  title: string;
  source?: string;       // outlet / venue
  byline?: string;       // "by ..."
  url?: string;          // external link
  note?: string;         // optional extra context
}

// ============= TALKS & KEYNOTES =============
export const talks: PressEntry[] = [
  { date: "2026", title: "Holomovement Wave Portugal", source: "Cascais Miragem Health & Spa, Cascais, Portugal" },
  { date: "May 23-26, 2025", title: "Asheville Wave: The 7 Stages of Purpose", source: "Wortham Center for the Performing Arts, Asheville, NC", url: "https://www.youtube.com/watch?v=9Am9MsZWHHI" },
  { date: "2024", title: "Ibiza Wave", source: "Ibiza, Spain" },
  { date: "February 9-12, 2024", title: "How to Bend Your Reality", source: "Conscious Life Expo 2024, Los Angeles" },
  { date: "February 17, 2024", title: "Starseed Academy interview", source: "Conscious Life Expo 2024, Los Angeles · IdeateTV with Jennifer Le", url: "https://www.youtube.com/watch?v=HWEW3_XfYyU" },
  { date: "May 20, 2023", title: "How to Sculpt Your Dream Scape", source: "Dreamscape Sedona at Sedona Hub" },
  { date: "November 17, 2026", title: "Speaking Engagement", source: "Mission Achievement and Success Charter School, Albuquerque, NM", url: "https://www.mascharterschool.com/" },
  { date: "January 31, 2026", title: "Telekinesis & Spoon Bending Talk", source: "Shine Sanctuary for the Soul, Sedona, AZ", url: "https://shinesedona.com/" },
  { date: "May 9, 2026", title: "Spoon Bending Talk", source: "Soul Retreat Sedona with Jennifer Spencer", url: "https://www.jenniferspencermedium.com/retreat" },
  { date: "December 4, 2025", title: "Spoon Bending & PSI Abilities Workshop", source: "Humankind Center, Sedona, AZ", url: "https://www.eventbrite.com/e/spoon-bending-psi-abilities-workshop-tickets-1976370406087" },
  { date: "Jan 2 2021", title: "Birthing a New World Docu-series", url: "https://wendysilvers.com/birthing-a-new-world/" },
  { date: "Jan 1 2021", title: "Seeds Crypto Live", source: "Seeds Crypto event, 18-hour non-stop global broadcast", url: "https://youtu.be/o_bp9bnAzhQ" },
  { date: "Dec 12 & 19 2020", title: "Zenka at the 12/12 Convergence: Science and Tech" },
  { date: "Nov 19 2020", title: "The Future of Higher Education, Virtual Reality and Citizen Driven Science", source: "CSUN University", url: "https://youtu.be/iRgd6shlolA" },
  { date: "Jan 2020", title: "The Future is Better Than Ever", source: "Health Gig Podcast", url: "https://bit.ly/zenka-futurist" },
  { date: "Jan 2020", title: "Tokyo and The Future of Cities", source: "Documentary by Alex Gorosh" },
  { date: "Aug 2019", title: "Citizen Driven Science & The Passion Economy", source: "A Life Economy Podcast", url: "https://podcasts.apple.com/us/podcast/003-zenka-empowering-people-in-a-passion-based-economy/id1469556430?i=1000445886792" },
  { date: "July 2019", title: "Institute of Noetic Sciences, 18th Annual International Conference", source: "Santa Clara, CA" },
  { date: "Jan 2019", title: "Triple Smart Labs Summit", source: "Cordoba, Argentina" },
  { date: "Sept 2018", title: "UC Berkeley Innovation Lab Conference", source: "Berkeley" },
  { date: "Sept 2018", title: "Institute for Contemporary Art, Los Angeles", source: "Los Angeles" },
  { date: "Jan 2018", title: "Fink's Metaverse, Ft. Zenka, Book Release CES", source: "Las Vegas", url: "http://a.co/dHuEGMK" },
  { date: "Jan 2018", title: "I Have a Dream — ARinAction @ MIT", source: "Boston", url: "http://arinaction.org/" },
  { date: "Jan 2018", title: "AR/CV Meet Up", source: "Google Launchpad, San Francisco", url: "https://www.eventbrite.com/e/augmented-reality-ces-recap-author-artist-demos-tickets-41408000444" },
  { date: "Jan 2018", title: "Ye Old Futurist Union", source: "Angel City Brewery, Los Angeles", url: "https://www.eventbrite.com/e/resolved-we-need-virtual-reality-to-recreate-reality-tickets-41991355274" },
  { date: "Nov 2017", title: "Past Forward Tech Live Keynote", source: "Chicago, National Trust for Historic Preservation", url: "https://www.youtube.com/watch?v=qHeEsvSBXQ0&t=135s", note: "Lays out a plan for a four-dimensional (time and space) search engine capable of bringing the world into the Wisdom Age." },
  { date: "May 2017", title: "AWE Augmented Reality World Expo", source: "Santa Clara, CA", url: "https://www.youtube.com/watch?v=4XStJ8zHwxs", note: "How to generate successful app ideas as we move into AR, MR, and VR 2.0." },
  { date: "June 2017", title: "The Art of VR Panel", source: "Sotheby's, New York" },
  { date: "Oct 2016", title: "Can Augmented Reality Bring us to the Wisdom Age", source: "TEDx Jackson Hole, WY", url: "https://www.youtube.com/watch?v=2FA-IuDTMjE", note: "Sculptures and street art paint a picture of where we are in time and where we are headed based on new developments in VR and AR." },
  { date: "Oct 2016", title: "CSUN California State University", source: "Northridge" },
];

// ============= PODCAST, FILM & RADIO INTERVIEWS =============
export const interviews: PressEntry[] = [
  { date: "March 19, 2026", title: "Zenka Caro, Founder of LightNet", source: "Conscious Awakening Network", url: "https://www.youtube.com/watch?v=3TvVUu61Jfg" },
  { date: "January 13, 2026", title: "Contacting ET (Ep. 2264)", source: "FADE TO BLACK Radio", url: "https://www.youtube.com/watch?v=wXevLd1v1Jg" },
  { date: "January 13, 2026", title: "FADE to BLACK Radio with Jimmy Church", source: "Spreaker (audio version)", url: "https://www.spreaker.com/episode/fade-to-black-host-jimmy-church-guest-zenka-caro--69431224" },
  { date: "March 25, 2025", title: "Bridge to the Galaxy with Adam Cupell", source: "Alliance for Extraterrestrial Diplomatic Contact", url: "https://www.youtube.com/watch?v=2T1Qq2ixMNM" },
  { date: "2025", title: "Bending Spoons & Contacting ETs: Celebrating the 4th", source: "IMDb listing", url: "https://www.imdb.com/title/tt41602477/" },
  { date: "May 27, 2024", title: "Ep. 4: Zenka Caro, Holomovement Purpose Lab Founder", source: "Awaken Your Purpose", url: "https://awakenyourpurpose.podbean.com/e/ep-4-zenka-caro-holomovement-purpose-lab-founder/" },
  { date: "April 24, 2024", title: "Mind Over Matter (Episode 57)", source: "Broader Lens Podcast", url: "https://www.youtube.com/watch?v=qGL4NH0DgZk" },
  { date: "April 1, 2024", title: "Muscle Testing and Pendulums", source: "LightNet", url: "https://www.youtube.com/watch?v=oqiJw6AUVMw" },
  { date: "March 12, 2024", title: "The Joy & Science Behind Spoon Bending with Zenka Caro", source: "Lisa Campion", url: "https://lisacampion.com/the-joy-science-behind-spoon-bending-with-zenka-caro/" },
  { date: "February 14, 2024", title: "Zenka Caro on The JeffMara Podcast", source: "LightNet (Vimeo)", url: "https://vimeo.com/913084990" },
  { date: "December 7, 2023", title: "A Collective Consciousness Think Tank: 10 Books That Led Zenka Caro to the Foundation of LightNet", source: "Sandie Sedgbeer", url: "https://www.youtube.com/watch?v=4dhH_a-FDjc" },
  { date: "October 23, 2023", title: "Ep. 1884 Zenka Caro: How to Contact ET", source: "FADE TO BLACK Radio", url: "https://www.youtube.com/watch?v=VggRuU0ugEw" },
  { date: "September 16, 2022", title: "Zenka Caro and CONTACT 2022 Event in Sedona", source: "HelloKITTY (YouTube)", url: "https://www.youtube.com/watch?v=rShBDTGz4Ek" },
  { date: "March 10, 2022", title: "Con un Laberinto Virtual de Julio Le Parc MAPA se Agranda y Hace Pie en La Rural", source: "La Nacion", url: "https://www.lanacion.com.ar/cultura/con-un-laberinto-virtual-de-julio-le-parc-mapa-se-agranda-y-hace-pie-en-la-rural-nid08032022/?outputType=amp" },
  { date: "Jan 25, 2021", title: "Zenka on Innovation19 with Daniel Anstandig", source: "Spotify", url: "https://open.spotify.com/episode/3AHu7daYwtQR2e2kvbbvep" },
  { date: "Jan 29, 2020", title: "Zenka on Health Gig Podcast — The Future is Better Than Ever", url: "https://bit.ly/zenka-futurist" },
  { date: "Jan 23, 2020", title: "Tokyo and The Future of Cities", source: "Short Film by Alex Gorosh" },
  { date: "August 1, 2019", title: "Zenka on A Life Economy Podcast", source: "Futurism, Citizen-driven Science, and Empowering People in a Passion Based Economy", url: "https://podcasts.apple.com/us/podcast/003-zenka-empowering-people-in-a-passion-based-economy/id1469556430?i=1000445886792" },
  { date: "July 27, 2019", title: "Plumbing a Tipping Point in the Consciousness Movement", source: "Zenka Caro", url: "https://www.youtube.com/watch?v=5OX0zZFUFmA" },
  { date: "June 16, 2017", title: "Arapahoe School Takes Futuristic Leap", source: "Wyoming Public Radio", byline: "Rebecca Huntington", url: "http://wyomingpublicmedia.org/post/arapahoe-school-takes-futuristic-leap" },
  { date: "Aug 19, 2016", title: "Documenting the Evolution of VR Headsets with Zenka's Sculptures", source: "Voices of VR Podcast on Road to VR", byline: "Kent Bye", url: "http://www.roadtovr.com/documenting-evolution-vr-headsets-zenkas-sculptures/" },
  { date: "Aug 18, 2015", title: "Jenny 'Zenka' Carden: Brush Stroke of Genius", source: "Innovation Crush", byline: "Chris Denson", url: "https://soundcloud.com/innovationcrush/95-jenny-carden-brush-stroke-of-genius" },
];

// ============= PRINT & DIGITAL PRESS =============
export const printPress: PressEntry[] = [
  { date: "Featured", title: "Global Oneness Summit Panelists", source: "Humanity's Team", url: "https://www.humanitysteam.org/panelists" },
  { date: "Featured", title: "Zenka Caro, Featured Leader Profile", source: "Evolutionary Leaders", url: "https://www.evolutionaryleaders.net/leaders/zenka-caro/" },
  { date: "Featured", title: "Zenka | Nodo940 & The Dream Machine", source: "Nodo940", url: "https://www.nodo940.com.ar/#!/-zenka/" },
  { date: "Featured", title: "Events 2020 to Present", source: "Dean Radin", url: "https://www.deanradin.com/events-2025" },
  { date: "2024", title: "At the Conscious Life Expo, Spoon Bending Party", source: "Oh No, Ross and Carrie! Podcast (Facebook)", url: "https://www.facebook.com/photo.php?fbid=699259365541805&set=a.442059081261836&type=3" },
  { date: "September 25, 2024", title: "No Regrets: New Research Reveals How People Find Their Purpose In Life", source: "AP News, Benzinga, MENAFN, and 30+ outlets nationwide (via EIN Presswire)", url: "https://0e190a550a8c4c8c4b93-fcd009c875a5577fd4fe2f5b7e3bf4eb.ssl.cf2.rackcdn.com/EINPresswire-Report2-745966559-no-regrets-new-research-reveals-how-people-find-their-purpose-in-life-1.pdf" },
  { date: "August 4, 2024", title: "Sedona is in Stitches: Kudos", source: "Verde News", url: "https://www.verdenews.com/news/2024/aug/04/sedona-is-in-stitches/" },
  { date: "September 12, 2023", title: "Research Group Makes Music with ETs", source: "The Realtime Report", url: "https://therealtimereport.com/2023/09/12/research-group-makes-music-with-ets/" },
  { date: "October 25, 2022", title: "Faro se muestra mas de 20 galerias locales", source: "La Voz", url: "https://www.lavoz.com.ar/vos/artes/faro-se-muestra-mas-de-20-galerias-locales-presentan-obras-de-gran-formato-en-la-legislatura/" },
  { date: "January 26, 2022", title: "Spoon Bending Party: Mind-Over-Matter in Sedona", source: "Signals AZ", url: "https://www.signalsaz.com/events/events/spoon-bending-party-mind-over-matter-in-sedona/" },
  { date: "Featured", title: "The Women of Robertson Place", source: "The NO BS Spiritual Book Club", url: "https://www.thenobsspiritualbookclub.com/b/the-women-of-robertson-place/" },
  { date: "December 8, 2019", title: "Novel 20 years in the making honors local and family histories", source: "Chillicothe Gazette (as Jenny Carden)", url: "https://www.chillicothegazette.com/story/news/2019/12/08/novel-20-years-making-traces-local-and-family-histories/2599559001/" },
  { date: "March 1997", title: "Village Views", source: "Terrace Park Historical Society (as Jenny Carden)", url: "https://tphistoricalsociety.org/Village-Views/VV-pdfs/1997/1997-03.pdf" },
  { date: "March 12, 2020", title: "Five Futurists Who Comment on The Trends of Tomorrow", source: "Wiki.ezvid.com", url: "https://wiki.ezvid.com/m/5-futurists-who-comment-on-the-trends-of-tomorrow-wj5YVwTkhzjoO" },
  { date: "July 2019", title: "Zenka's AR Ceramic Beetle is More Than an Insect (Page 3)", source: "Concordia News", byline: "Nancy Varekamp", url: "http://concordiapdx.org/wp-content/uploads/2019/06/cna-201907-web.pdf" },
  { date: "2019", title: "Convergence: The World will be Painted with Data", source: "Book, with Zenka Afterword", url: "https://www.amazon.com/Convergence-World-Will-Painted-Data/dp/0578460556" },
  { date: "July 11, 2017", title: "Artists Show the Potential of VR", source: "Forbes Magazine", byline: "Charlie Fink", url: "https://www.forbes.com/sites/charliefink/2017/07/11/artists-show-potential-of-vr/" },
  { date: "April 12, 2017", title: "Zenka en la UCC", source: "UCC", url: "https://www2.ucc.edu.ar/agenda/zenka-en-la-ucc/" },
  { date: "June 20, 2017", title: "My 10 Takeaways from Mind the Product 2017", source: "Product Coalition", byline: "Nacho Bassino", url: "https://productcoalition.com/my-10-takeaways-from-the-mind-the-product-conference-4e094e3912b5" },
  { date: "June 14, 2017", title: "10 Things I learned at Mind the Product 2017", source: "Medium", byline: "Josh Johnson", url: "https://medium.com/building-creative-market/10-things-i-learned-at-mind-the-product-2017-2cbea5c8f96a" },
  { date: "June 17, 2017", title: "10 Take Aways from Mind the Product 2017", source: "Product Plan", byline: "Shaun Juncal", url: "https://www.productplan.com/mind-the-product-2017/" },
  { date: "May 2017", title: "Augmented Reality is Everywhere but Nowhere", source: "Nerd Out", byline: "Nick Kelly", url: "http://www.nerdoutblog.com/2017/05/24/augmented-reality-everywhere-nowhere/" },
  { date: "April 2017", title: "White Mirror: A Positive Vision for the Future of Technology", source: "Upload VR", url: "https://uploadvr.com/white-mirror-positive-vision-future-technology/" },
  { date: "April 2017", title: "Futurists want to transform Black Mirror's dystopia into something better", source: "Venture Beat", url: "https://venturebeat.com/2017/04/13/futurists-want-to-transform-black-mirrors-dystopia-into-something-better/" },
  { date: "Sept 28, 2016", title: "Art's Future Could be Augmented Reality", source: "Jackson Hole News & Guide", byline: "Isa Jones", url: "http://www.jhnewsandguide.com/stepping_out/arts/art-s-future-could-be-augmented-reality/article_417e9815-a72b-5b13-93c8-b7538faa631a.html" },
  { date: "Sept 28, 2016", title: "CULTURE KLASH: Other Worldly", source: "Planet Jackson Hole", byline: "Meg Daly", url: "http://planetjh.com/2016/09/28/culture-klash-other-worldly/" },
  { date: "Sept 28, 2016", title: "Prints Come to Life at Center Gallery", source: "Jackson Hole News & Guide", byline: "Isa Jones", url: "http://www.jhnewsandguide.com/jackson_hole_daily/local/prints-come-to-life-at-center-gallery/article_73a76a0a-ca1e-58b5-a4a3-8137382634a0.html" },
  { date: "April 25, 2015", title: "These Brilliant Sculpture Masks Chart Virtual Reality's History", source: "Road To VR", byline: "Matthew Terndrup", url: "http://www.roadtovr.com/artist-documented-vrs-history-series-sculptures/" },
  { date: "March 4, 2015", title: "At Last! Virtual Reality Becomes Virtually Real", source: "KCRW (print and radio segment)", byline: "Lisa Napoli", url: "http://blogs.kcrw.com/whichwayla/2015/03/at-last-virtual-reality-becomes-virtually-real" },
  { date: "July 11, 2015", title: "Tour of Zenka Art Exhibit: The History of Virtual Reality in Japanese Raku Sculpture", source: "Vrideo, 360 video interview", byline: "Chadwick Turner", url: "http://www.vrideo.com/watch/tkBNMZw" },
  { date: "March 5, 2015", title: "Preview of Virtual Reality's 'Presence' by Zenka, Opening at District Gallery Saturday", source: "Cartwheel Art Magazine", byline: "Cindy Schwarzstein", url: "http://www.cartwheelart.com/2015/03/05/virtual-reality-presence-by-zenka-opening-at-district-gallery/" },
  { date: "March 6, 2015", title: "Ceramic Street Artist Zenka Takes on Virtual Reality", source: "LATaco", url: "http://www.lataco.com/taco/zenka-vr-show" },
];
