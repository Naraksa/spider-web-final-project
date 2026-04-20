/*============================================*/
/*  spider.js  —  Spider Species Page         */
/*  SpiderWeb  |  INFO 250  |  AUPP 2026      */
/*============================================*/

// ── SPIDER DATABASE ──────────────────────────
// All modal content lives here — HTML stays clean
const SPIDERS = {

    'black-widow': {
        name: 'Black Widow',
        sci:  'Latrodectus mactans',
        img:  '../asset/images/spider_blackwidow.jpg',
        regionBadge: '<span class="badge badge--america">🌎 America</span>',
        dangerBadge: '<span class="badge badge--high">⚠ HIGH</span>',
        fields: [
            ['Appearance',   'Shiny jet-black body, ~2.5 cm. Females have the iconic red hourglass marking on the underside of the abdomen. Males are much smaller and rarely seen.'],
            ['Region',       'Throughout the US (especially southern states), Canada, Mexico, the Caribbean, and Latin America.'],
            ['Habitat',      'Woodpiles, rock crevices, sheds, garages, under decks. Prefers dry, dark, sheltered areas. Spins irregular webs near ground level.'],
            ['Bite Effects', 'Severe muscle cramping, nausea, fever, increased blood pressure, sweating. Rarely fatal in healthy adults. Causes 2,500+ poison control visits per year in the US.'],
            ['Behaviour',    'Non-aggressive. Bites only in defence — most bites occur when the spider is accidentally pressed against skin. Females rarely leave their web.'],
        ],
        funFact: 'The southern black widow\'s venom is 15 times stronger than a rattlesnake\'s, ounce for ounce — yet fatalities in healthy adults are almost unheard of because only a tiny amount is injected.'
    },

    'brown-recluse': {
        name: 'Brown Recluse',
        sci:  'Loxosceles reclusa',
        img:  '../asset/images/spider_brownrecluse.jpg',
        regionBadge: '<span class="badge badge--america">🌎 America</span>',
        dangerBadge: '<span class="badge badge--high">⚠ HIGH</span>',
        fields: [
            ['Appearance',   'Light to dark brown with a distinctive dark violin-shaped marking on the cephalothorax. Has only 6 eyes (in 3 pairs) — most spiders have 8.'],
            ['Region',       'Central Midwest US (Ohio to Nebraska) south through Texas and Georgia. Absent from Hawaii.'],
            ['Habitat',      'Attics, basements, closets, storage boxes, old shoes — anywhere warm, dry, and undisturbed. Also found in woodpiles outdoors.'],
            ['Bite Effects', 'Often painless at first. Venom is necrotic — it destroys cell membranes, causing a slow-healing ulcer. Can cause liver/kidney damage in rare cases.'],
            ['Behaviour',    'True to its name — reclusive and non-aggressive. Bites happen when the spider is accidentally trapped against skin, such as inside clothing.'],
        ],
        funFact: 'Brown recluse spiders can survive extreme temperatures and go months without food or water. Many reported "brown recluse bites" are actually yellow sac spider bites.'
    },

    'wolf-spider': {
        name: 'Wolf Spider',
        sci:  'Family Lycosidae',
        img:  '../asset/images/spider_wolf.jpg',
        regionBadge: '<span class="badge badge--america">🌎 America</span>',
        dangerBadge: '<span class="badge badge--low">● LOW</span>',
        fields: [
            ['Appearance',   'Dark brown to grey, hairy, robust build. Up to 2 inches including legs. Females carry a round egg sac attached to their spinnerets.'],
            ['Region',       'Nationwide across the US; 125+ species in North America; found worldwide in forests, gardens, grasslands, and marshes.'],
            ['Habitat',      'Ground-dwelling hunters. Live in burrows or under leaf litter, stones, and logs. Also found inside homes, especially in autumn.'],
            ['Bite Effects', 'Localized redness and swelling; similar to a bee sting. Rare allergic reactions possible but medical treatment rarely needed.'],
            ['Behaviour',    'Solitary hunters. Do not spin webs to catch prey — they stalk and pounce. Active mainly at night. Females are famously protective of their young.'],
        ],
        funFact: 'After eggs hatch, wolf spider females carry all their spiderlings on their back for several days. If the egg sac is accidentally removed, the mother will search for it and carry it again.'
    },

    'tarantula': {
        name: 'American Tarantula',
        sci:  'Aphonopelma spp.',
        img:  '../asset/images/spider_tarantula.jpg',
        regionBadge: '<span class="badge badge--america">🌎 America</span>',
        dangerBadge: '<span class="badge badge--low">● LOW</span>',
        fields: [
            ['Appearance',   'Large and heavy; body 4.5–11 cm; covered in thick brown or tan hair. Slow-moving. Fangs point downward (mygalomorph style).'],
            ['Region',       'Primarily southwestern deserts and arid regions — Texas, Arizona, New Mexico, California.'],
            ['Habitat',      'Dry, arid desert scrubland and rocky areas. Burrow-dwellers. Primarily nocturnal — males wander in autumn searching for mates.'],
            ['Bite Effects', 'Painful puncture wounds (large fangs), localized swelling. Urticating hairs on the abdomen can cause severe skin and eye irritation if flicked.'],
            ['Behaviour',    'Slow and gentle when unprovoked. Rear up with front legs when seriously threatened. Males die shortly after mating; females can live 20+ years.'],
        ],
        funFact: 'A species named Aphonopelma johnnycashi (Johnny Cash\'s tarantula) was discovered near Folsom Prison, California — named for Cash\'s all-black attire and his famous live album recorded there in 1968.'
    },

    'jumping-spider': {
        name: 'Jumping Spider',
        sci:  'Family Salticidae',
        img:  '../asset/images/spider_jumping.jpg',
        regionBadge: '<span class="badge badge--america">🌎 America</span>',
        dangerBadge: '<span class="badge badge--none">○ NONE</span>',
        fields: [
            ['Appearance',   'Compact and short-legged; densely covered in colourful hair or iridescent scales. Large forward-facing eyes. 4–18 mm. Huge variation in colour by species.'],
            ['Region',       'Found throughout all of North America; globally one of the most diverse spider families with 6,000+ species.'],
            ['Habitat',      'Outdoor surfaces — tree bark, garden walls, fences, rocks; also around windows and doors indoors. Active during the day.'],
            ['Bite Effects', 'Bites extremely rare and cause only minor irritation. Far more likely to retreat than bite when approached.'],
            ['Behaviour',    'Uniquely intelligent for a spider — they plan routes to prey, solve simple puzzles, and can track moving objects with their eyes. Active in daylight.'],
        ],
        funFact: 'Jumping spiders have the best vision of any spider — they can detect movement up to 45 cm away with their large forward-facing principal eyes, giving them near-360° vision overall.'
    },

    'wandering-spider': {
        name: 'Brazilian Wandering Spider',
        sci:  'Phoneutria spp.',
        img:  '../asset/images/spider_wandering.jpg',
        regionBadge: '<span class="badge badge--america">🌎 America</span>',
        dangerBadge: '<span class="badge badge--extreme">☠ EXTREME</span>',
        fields: [
            ['Appearance',   'Brown/grey with hairy legs; large and robust. Body up to 48 mm — about the length of an adult\'s index finger. Leg span up to 15 cm.'],
            ['Region',       'Brazil, Peru, Argentina, and throughout tropical South America. Occasionally transported globally in banana shipments ("banana spider").'],
            ['Habitat',      'Amazon rainforest floor; in banana plants, dense vegetation, and termite mounds. Hides in shoes, cars, and dark corners at night.'],
            ['Bite Effects', 'Severe burning pain, profuse sweating, irregular heartbeat, vertigo. In men: priapism (prolonged painful erection). Powerful antivenom available.'],
            ['Behaviour',    'Highly aggressive. Does not build a web for prey. Raises front legs straight up as a warning display when threatened. Wanders at night.'],
        ],
        funFact: 'Scientists are actively researching a compound in its venom (PnTx2-6) as a possible treatment for erectile dysfunction. The venom\'s priapism effect gave the first clue.'
    },

    'goliath': {
        name: 'Goliath Birdeater',
        sci:  'Theraphosa blondi',
        img:  '../asset/images/spider_goliath.jpg',
        regionBadge: '<span class="badge badge--america">🌎 America</span>',
        dangerBadge: '<span class="badge badge--moderate">◆ MODERATE</span>',
        fields: [
            ['Appearance',   'Enormous. Body up to 13 cm; leg span up to 30 cm — the world\'s largest spider by mass. Dark brown covered in reddish-brown bristles.'],
            ['Region',       'Rainforests of northern South America — Venezuela, Brazil, Guyana, Suriname.'],
            ['Habitat',      'Deep burrows in the rainforest floor. Prefers humid lowland forest with moist, soft soil near streams.'],
            ['Bite Effects', 'Painful puncture wounds (large fangs), localized swelling. Urticating hairs cause severe skin and eye irritation lasting days.'],
            ['Behaviour',    'Nocturnal ambush predator. Makes an audible hissing (stridulation) by rubbing leg hairs together as a warning. Despite the name, rarely eats birds.'],
        ],
        funFact: 'When walking, the Goliath Birdeater makes a clearly audible clicking sound from its feet — like tiny hoofbeats. It mostly eats insects, frogs, mice, and lizards, not birds.'
    },

    'garden-spider': {
        name: 'European Garden Spider',
        sci:  'Araneus diadematus',
        img:  '../asset/images/spider_garden.jpg',
        regionBadge: '<span class="badge badge--europe">🏰 Europe</span>',
        dangerBadge: '<span class="badge badge--none">○ NONE</span>',
        fields: [
            ['Appearance',   'Plump, rounded abdomen with a distinctive white cross-shaped dot pattern on a brown/orange/grey background. Females up to 20 mm; males much smaller.'],
            ['Region',       'Throughout all of Europe; also introduced to North America. Common in gardens, parks, and hedgerows.'],
            ['Habitat',      'Gardens, forest edges, hedgerows, meadows. Builds large symmetrical orb webs between plants, fences, and window frames.'],
            ['Bite Effects', 'Virtually never bites humans. If it did, it would cause only minor local irritation, similar to a mosquito bite.'],
            ['Behaviour',    'Rebuilds its entire orb web every single day, often consuming the old silk to recycle the proteins. Sits at the hub or hides in a shelter at the edge.'],
        ],
        funFact: 'The white cross marking on its abdomen is caused by deposits of guanine — the same chemical that makes birds\' feathers iridescent. It\'s not pigment, it\'s a stored waste product.'
    },

    'med-widow': {
        name: 'Mediterranean Black Widow',
        sci:  'Latrodectus tredecimguttatus',
        img:  '../asset/images/spider_medwidow.jpg',
        regionBadge: '<span class="badge badge--europe">🏰 Europe</span>',
        dangerBadge: '<span class="badge badge--high">⚠ HIGH</span>',
        fields: [
            ['Appearance',   'Black body with 13 red/orange spots on the abdomen (tredecimguttatus means "thirteen-spotted"). Females ~10–15 mm. Very similar to North American black widow.'],
            ['Region',       'Mediterranean basin — Spain, Portugal, France, Italy, Greece, North Africa, Middle East.'],
            ['Habitat',      'Open grasslands, wheat fields, olive groves, vineyards. Hides in low vegetation and near ground level, often in agricultural settings.'],
            ['Bite Effects', 'Muscle cramps, intense pain, nausea, sweating, hypertension (latrodectism). Medical treatment usually required; antivenom available.'],
            ['Behaviour',    'Generally passive; bites in defence. More common encounters occur during harvest season when agricultural workers disturb nests in fields.'],
        ],
        funFact: 'In 19th-century Italy, mass bite outbreaks among grain harvesters inspired the "tarantella" — a frenzied dance believed to cure the venom\'s effect. The dance lives on as folk tradition.'
    },

    'sand-spider': {
        name: 'Six-Eyed Sand Spider',
        sci:  'Sicarius hahni',
        img:  '../asset/images/spider_sandspi.jpg',
        regionBadge: '<span class="badge badge--africa">🌍 Africa</span>',
        dangerBadge: '<span class="badge badge--extreme">☠ EXTREME</span>',
        fields: [
            ['Appearance',   'Flat, grey/tan/sandy body with textured, granular skin that collects grains of sand as camouflage. 8–15 mm body. 6 eyes in 3 pairs. Extremely flat profile.'],
            ['Region',       'Sandy desert regions of Namibia, Botswana, and South Africa.'],
            ['Habitat',      'Open sand dunes and deserts. Buries itself in sand with only its eyes visible, waiting motionlessly for prey. Also hides in rock crevices.'],
            ['Bite Effects', 'Tissue necrosis and disseminated intravascular coagulation (DIC) — the venom prevents blood from clotting. Potentially fatal. No antivenom exists.'],
            ['Behaviour',    'Remarkably patient ambush predator. Can survive over a year without food or water. Non-aggressive to humans unless directly handled.'],
        ],
        funFact: 'Despite having some of the most dangerous venom of any spider on Earth, human fatalities are virtually unknown — because it lives in remote desert and human encounters are extremely rare.'
    },

    'orb-weaver': {
        name: 'Golden Silk Orb-Weaver',
        sci:  'Nephila spp.',
        img:  '../asset/images/spider_orbweaver.jpg',
        regionBadge: '<span class="badge badge--africa">🌍 Africa</span>',
        dangerBadge: '<span class="badge badge--none">○ NONE</span>',
        fields: [
            ['Appearance',   'Distinctly large females, 4–5 cm body; long, banded yellow-and-black legs; silvery-grey body. Males are tiny (~5 mm) and reddish-brown.'],
            ['Region',       'Tropical and subtropical Africa, Asia, Australia, and the Americas — one of the most globally distributed large spiders.'],
            ['Habitat',      'Dry open woodland, forest edges, coastal zones, gardens. Builds huge orb webs up to 1 metre wide between trees and shrubs.'],
            ['Bite Effects', 'Not considered dangerous. Bites are rare; effects minor — local pain and irritation only.'],
            ['Behaviour',    'Females sit conspicuously in the centre of their webs. The silk is natural golden colour — not yellow paint. Webs oriented to catch morning sunlight.'],
        ],
        funFact: 'A Madagascan golden silk cape took 4 years and over 1 million spiders to produce. Nephila silk is heat-stable to 250°C, stronger than steel by weight, and has natural antibacterial properties.'
    },

    'funnel-web': {
        name: 'Sydney Funnel-Web Spider',
        sci:  'Atrax robustus',
        img:  '../asset/images/spider_funnelweb.jpg',
        regionBadge: '<span class="badge badge--australia">🦘 Australia</span>',
        dangerBadge: '<span class="badge badge--extreme">☠ EXTREME</span>',
        fields: [
            ['Appearance',   'Shiny jet-black or dark brown; robust and heavily built; body 1.5–3.5 cm; large, clearly visible fangs. Males are smaller but significantly more venomous.'],
            ['Region',       'Sydney metropolitan area and surrounding eastern Australian highlands, within roughly a 100 km radius of Sydney.'],
            ['Habitat',      'Moist habitats — gardens, under logs, rock crevices, burrows. Often falls into swimming pools and can survive submerged for over 24 hours.'],
            ['Bite Effects', 'Venom contains 40+ toxic proteins that rapidly overload the nervous system. Profuse sweating, muscle twitching, nausea, convulsions; can kill in under 15 minutes if untreated.'],
            ['Behaviour',    'Aggressive. Will bite repeatedly when threatened and does not flee. Males wander in search of females after rain, greatly increasing encounter risk.'],
        ],
        funFact: '"With a funnel-web bite to the torso, you\'re dead. No other spider can claim that reputation." — Dr. Robert Raven, Queensland Museum. Paradoxically, its venom is far more dangerous to primates than to cats or dogs.'
    },

    'redback': {
        name: 'Redback Spider',
        sci:  'Latrodectus hasselti',
        img:  '../asset/images/spider_redback.jpg',
        regionBadge: '<span class="badge badge--australia">🦘 Australia</span>',
        dangerBadge: '<span class="badge badge--high">⚠ HIGH</span>',
        fields: [
            ['Appearance',   'Jet-black body with a distinctive red or orange stripe on the upper abdomen. Females 10–15 mm; males tiny (~3 mm) and brown.'],
            ['Region',       'Found throughout Australia in all states and territories. Also introduced to Japan, New Zealand, and parts of Southeast Asia.'],
            ['Habitat',      'Under rocks, logs, plant pots, outdoor furniture, letterboxes, garages, and outhouses. Lives in most Australian environments including urban areas.'],
            ['Bite Effects', 'Severe local and radiating pain, sweating, nausea, vomiting, headache, abdominal cramps (latrodectism). Up to 10,000 bites per year; no deaths since antivenom (1956).'],
            ['Behaviour',    'Passive. Females spend their entire lives in their web. When prey arrives, they wrap it in sticky silk before biting multiple times and liquefying the insides.'],
        ],
        funFact: 'Australian country singer Slim Newton won the Golden Guitar Award in 1973 for his hit "The Redback on the Toilet Seat." The song became one of Australia\'s most beloved novelty classics.'
    },

    'huntsman': {
        name: 'Huntsman Spider',
        sci:  'Family Sparassidae',
        img:  '../asset/images/spider_huntsman.jpg',
        regionBadge: '<span class="badge badge--australia">🦘 Australia</span>',
        dangerBadge: '<span class="badge badge--low">● LOW</span>',
        fields: [
            ['Appearance',   'Large and flat; leg span up to 15–16 cm; long hairy legs that extend sideways like a crab; brown to grey; extremely fast-moving.'],
            ['Region',       'Throughout Australia; also common across Southeast Asia, South Africa, and other tropical regions worldwide.'],
            ['Habitat',      'Under tree bark, in rock crevices, inside homes (walls, behind frames, inside cars). One of the most common spiders to live alongside humans.'],
            ['Bite Effects', 'Local pain and swelling; rarely nausea or headache. Resolves without medical treatment. Venom is mild.'],
            ['Behaviour',    'Does not build a prey web. Nocturnal active hunter. Extremely fast. Females guard egg sacs fiercely — will attack if her sac is threatened.'],
        ],
        funFact: 'Despite being terrifying to encounter on a car visor, huntsman spiders are genuinely beneficial to have at home — they prey on cockroaches, mosquitoes, and other pest insects.'
    },

    'peacock': {
        name: 'Peacock Spider',
        sci:  'Maratus spp.',
        img:  '../asset/images/spider_peacock.jpg',
        regionBadge: '<span class="badge badge--australia">🦘 Australia</span>',
        dangerBadge: '<span class="badge badge--none">○ NONE</span>',
        fields: [
            ['Appearance',   'Tiny — 4–5 mm body. Males have a brilliant, iridescent, fan-like flap on the abdomen patterned in blues, reds, oranges, and yellows. Females are brown.'],
            ['Region',       'Eastern and southwestern Australia. New species discovered regularly — some named after Picasso, Marvel heroes, and the Mona Lisa.'],
            ['Habitat',      'Low vegetation, grassland, leaf litter, and heathland. Also found in gardens and forest edges.'],
            ['Bite Effects', 'Completely harmless. Too small to bite humans. Venom has no medical significance.'],
            ['Behaviour',    'Males raise the iridescent abdomen flap and wave their legs in a rhythmic, multi-step dance to attract females. If rejected, they risk being eaten by the female.'],
        ],
        funFact: 'Wildlife photographer Jürgen Otto\'s peacock spider videos have been watched tens of millions of times online — turning this tiny 5 mm spider into a global celebrity. New species are still being discovered every year.'
    },
    'joro': {
    name: 'Joro Spider',
    sci: 'Trichonephila clavata',
    img: '../asset/images/spider_joro.jpg',
    regionBadge: '<span class="badge badge--asia">🌏 Asia</span>',
    dangerBadge: '<span class="badge badge--none">○ NONE</span>',
    fields: [
        ['Habitat', 'Forests, gardens, and urban areas in East Asia'],
        ['Behavior', 'Builds large orb webs; non-aggressive'],
        ['Venom', 'Not dangerous to humans']
    ],
    funFact: 'Famous for its bright yellow color and massive webs. Recently spread to the US.'
},

'bird-spider': {
    name: 'Chinese Bird Spider',
    sci: 'Haplopelma spp.',
    img: '../asset/images/spider_chinesebird.jpg',
    regionBadge: '<span class="badge badge--asia">🌏 Asia</span>',
    dangerBadge: '<span class="badge badge--high">⚠ HIGH</span>',
    fields: [
        ['Habitat', 'Tropical forests in Southeast Asia'],
        ['Behavior', 'Aggressive and fast-moving'],
        ['Venom', 'Medically significant venom']
    ],
    funFact: 'Often kept in the exotic pet trade but not beginner-friendly.'
},

'asian-orb': {
    name: 'Golden Orb-Weaver',
    sci: 'Nephila pilipes',
    img: '../asset/images/spider_asian_orb.jpg',
    regionBadge: '<span class="badge badge--asia">🌏 Asia</span>',
    dangerBadge: '<span class="badge badge--none">○ NONE</span>',
    fields: [
        ['Habitat', 'Forests and gardens in Southeast Asia'],
        ['Behavior', 'Spins huge golden webs'],
        ['Venom', 'Harmless to humans']
    ],
    funFact: 'Produces one of the strongest natural silks in the world.'
},
};

// ── FILTER STATE ─────────────────────────────
let activeRegion = 'all';
let activeDanger = 'all';

function applyFilter(btn) {
    const filterType = btn.dataset.filter;
    const value      = btn.dataset.value;

    // Update active button in this group
    btn.closest('.filter-btns').querySelectorAll('.filter-btn').forEach(b =>
        b.classList.remove('active')
    );
    btn.classList.add('active');

    if (filterType === 'region') activeRegion = value;
    if (filterType === 'danger') activeDanger  = value;

    filterCards();
}

function filterCards() {
    const cards   = document.querySelectorAll('.spider-card');
    let   visible = 0;

    cards.forEach(card => {
        const matchRegion = activeRegion === 'all' || card.dataset.region === activeRegion;
        const matchDanger = activeDanger  === 'all' || card.dataset.danger === activeDanger;
        const show = matchRegion && matchDanger;
        card.classList.toggle('hidden', !show);
        if (show) visible++;
    });

    document.getElementById('visible-count').textContent = visible;
    const noRes = document.getElementById('no-results');
    if (noRes) noRes.style.display = visible === 0 ? 'block' : 'none';
}

// ── MODAL ────────────────────────────────────
function openModal(id) {
    const spider  = SPIDERS[id];
    if (!spider) return;

    const overlay = document.getElementById('modal-overlay');
    const img     = document.getElementById('modal-img');
    const imgFb   = document.getElementById('modal-img-fallback');

    // Image with fallback
    img.src = spider.img;
    img.alt = spider.name;
    img.style.display = 'block';
    imgFb.style.display = 'none';
    img.onerror = () => {
        img.style.display = 'none';
        imgFb.style.display = 'flex';
    };

    // Badges
    document.getElementById('modal-badges').innerHTML = spider.regionBadge + spider.dangerBadge;

    // Title + sci name
    document.getElementById('modal-title').textContent = spider.name;
    document.getElementById('modal-sci').textContent   = spider.sci;

    // Fields
    document.getElementById('modal-fields').innerHTML = spider.fields
        .map(([label, value]) =>
            `<div class="modal-field">
                <span class="modal-field-label">${label}</span>
                <span class="modal-field-value">${value}</span>
            </div>`
        ).join('');

    // Fun fact
    document.getElementById('modal-funfact').textContent = spider.funFact;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(e) {
    // Allow close from: overlay background click, close button, or called with no argument
    if (e) {
        const isOverlay = e.target === document.getElementById('modal-overlay');
        const isCloseBtn = e.target.closest('.modal-close');
        if (!isOverlay && !isCloseBtn) return;
    }
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        document.getElementById('modal-overlay')?.classList.remove('open');
        document.body.style.overflow = '';
    }
});

// ── SCROLL REVEAL on grid cards ─────────────
document.addEventListener('DOMContentLoaded', () => {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity  = '1';
                entry.target.style.transform = 'translateY(0)';
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.spider-card').forEach((card, i) => {
        card.style.opacity   = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`;
        obs.observe(card);
    });
});
