// Centralized content for every service detail page (ServiceDetail.jsx).
// Keyed by slug, which matches the "path" used in Services.jsx (e.g. "/service/chain-solder" -> "chain-solder").

const servicesData = {
  "3d-cad-cam-design": {
    name: "3D CAD/CAM Design",
    price: "$150",
    turnaround: "5–7 business days",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Digital Render Only",
      subtitle: "3D CAD file and printable render",
    },
    optionB: {
      title: "Render + Wax/Resin Print",
      subtitle: "Includes a physical print for approval",
    },
    description: [
      "Custom 3D CAD/CAM design for a new piece, a redesign of an existing item, or a family heirloom being reimagined. We translate your sketch, reference photo, or description into a precise digital model.",
      "The design is built to scale with accurate stone sizing, prong placement, and metal weight estimates, then rendered from multiple angles so you can review every detail before anything is fabricated.",
      "Once approved, the CAD file is used to CAM-mill a wax or resin model for casting, or milled directly depending on the piece — giving a far more accurate result than hand-carving alone.",
    ],
    includes: [
      "Custom 3D CAD modeling to your specifications",
      "Accurate stone and metal weight estimates",
      "Multi-angle photorealistic renders",
      "CAM file prepared for wax/resin milling",
    ],
    signs: [
      "You have a sketch or reference photo but no physical design yet",
      "An heirloom piece needs to be redesigned or reimagined",
      "You want to see a piece before it's fabricated",
      "A one-of-a-kind design needs precise, repeatable specs",
    ],
    types: ["Engagement Rings", "Wedding Bands", "Pendants", "Earrings", "Custom Pieces"],
    faqs: [
      {
        q: "What do I need to provide to start a design?",
        a: "A sketch, reference photo, or even a written description works. The more detail you can share about stone sizes and style, the closer the first render will be to your vision.",
      },
      {
        q: "How many rounds of revisions are included?",
        a: "We include revisions until the render matches your vision before moving to milling — details are refined together in the additional details field or by follow-up.",
      },
      {
        q: "Do I need the wax/resin print before fabrication?",
        a: "It's optional but recommended for complex or high-value pieces, since it lets you and our bench team confirm fit and proportions in hand before committing metal.",
      },
      {
        q: "Can this be used for a resize or redesign of an existing ring?",
        a: "Yes, we can model based on your existing piece's measurements and build the new design around them.",
      },
    ],
  },

  "bail-fabrication": {
    name: "Bail Fabrication",
    price: "$85",
    turnaround: "3–5 business days",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Standard Bail",
      subtitle: "Matched to your pendant's metal and finish",
    },
    optionB: {
      title: "Reinforced Bail",
      subtitle: "Heavier gauge for larger or denser pendants",
    },
    description: [
      "Custom bail fabrication for pendants that have lost their original bail, or that need a sturdier one to hang correctly on a chain. Each bail is hand-formed and soldered to match the metal type, karat, and finish of your piece.",
      "Send in your pendant and we measure the opening, fabricate a bail to the correct gauge and profile, then solder it into place and polish the join seamlessly into the existing metal.",
      "We match yellow, white, and rose gold as well as sterling silver and platinum. If the original bail broke off cleanly, we can often replicate its exact shape; otherwise we recommend a style based on the pendant's weight and wear pattern.",
    ],
    includes: [
      "Custom bail sized to your pendant",
      "Metal and karat matching",
      "Soldering and seam polishing",
      "Fit and strength check before return",
    ],
    signs: [
      "Bail is missing or broken off",
      "Pendant won't sit straight on a chain",
      "Original bail is bent or stretched",
      "Pendant slides or spins unexpectedly",
    ],
    types: ["Pendants", "Charms", "Lockets", "Religious Medals"],
    faqs: [
      {
        q: "Will the new bail match my pendant exactly?",
        a: "We match metal type, karat, and finish as closely as possible, and shape the bail to suit the pendant's design so it looks original once installed.",
      },
      {
        q: "Can you fix a bail instead of replacing it?",
        a: "If the existing bail is only bent or slightly stretched, we can often reshape and reinforce it, which is faster and less costly than a full fabrication.",
      },
      {
        q: "Will soldering affect nearby stones?",
        a: "We shield any surrounding gemstones and use targeted, low-heat soldering techniques. For heat-sensitive stones, the piece may be temporarily set aside during soldering.",
      },
      {
        q: "What if my pendant doesn't have a bail at all?",
        a: "We can fabricate and attach a new bail to a pendant that never had one, choosing a placement and size that balances the piece properly on a chain.",
      },
    ],
  },

  "chain-solder": {
    name: "Chain Solder",
    price: "$45",
    turnaround: "1–2 business days",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Standard Repair",
      subtitle: "Single break, next available bench slot",
    },
    optionB: {
      title: "Rush Repair",
      subtitle: "Priority queue, same-day where possible",
    },
    description: [
      "Precision chain soldering to repair a broken link, snapped clasp connection, or separated segment without weakening the surrounding chain. Ideal for fine chains that are too delicate for cold connectors.",
      "The break is cleaned, realigned under magnification, and soldered using metal-matched solder so the repair is invisible once polished. We test the join under tension before it ships back.",
      "Works on curb, rope, box, cable, figaro, and snake chains in gold, silver, and platinum, including chains under 1mm thickness.",
    ],
    includes: [
      "Precision link realignment under magnification",
      "Metal-matched solder",
      "Seam polishing to hide the repair",
      "Tension test before return",
    ],
    signs: [
      "Chain has visibly separated at one point",
      "A link feels open or loose",
      "Chain keeps coming undone in the same spot",
      "Recent snag or catch left a weak link",
    ],
    types: ["Necklaces", "Bracelets", "Anklets", "Watch Chains"],
    faqs: [
      {
        q: "Will the repaired link be as strong as the rest of the chain?",
        a: "Yes. We use metal-matched solder and test the joined link under tension so it holds up the same as the surrounding links.",
      },
      {
        q: "Can very thin or delicate chains be soldered?",
        a: "Yes, we regularly work on chains under 1mm. The repair is done under magnification with fine-gauge solder to avoid excess bulk at the join.",
      },
      {
        q: "What if multiple links are broken?",
        a: "Let us know in the additional details field — multiple breaks are priced per repair point, and we'll confirm the total before starting work.",
      },
      {
        q: "Will you be able to match the chain's finish afterward?",
        a: "We polish the repaired area to blend with the chain's existing finish, whether high polish, satin, or textured.",
      },
    ],
  },

  "clasp-replacement": {
    name: "Clasp Replacement",
    price: "$55",
    turnaround: "2–3 business days",
    image:
      "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Lobster Clasp",
      subtitle: "Secure spring-loaded closure",
    },
    optionB: {
      title: "Spring Ring Clasp",
      subtitle: "Traditional low-profile closure",
    },
    description: [
      "Clasp replacement for necklaces and bracelets with a closure that's worn out, broken, or difficult to operate. We remove the old clasp and attach a new one matched in metal and scaled to your piece.",
      "Common replacements include lobster clasps, spring rings, toggle clasps, box clasps, and magnetic clasps. If you have a preference, note it in the additional details field, or we'll recommend the best option based on the chain weight and how the piece is worn.",
      "The new clasp is soldered or crimped securely, tested for smooth operation, and polished to match the rest of the piece.",
    ],
    includes: [
      "New clasp matched in metal and karat",
      "Secure soldering or crimping",
      "Function test for smooth open/close",
      "Finish polished to match",
    ],
    signs: [
      "Clasp won't stay closed",
      "Clasp mechanism is stiff or broken",
      "Spring has lost tension",
      "Clasp doesn't match the rest of the piece",
    ],
    types: ["Necklaces", "Bracelets", "Anklets"],
    faqs: [
      {
        q: "Can I choose the type of clasp?",
        a: "Yes. Note your preference in the additional details field — lobster, spring ring, toggle, box, or magnetic are all available depending on the piece.",
      },
      {
        q: "Will the new clasp match my chain's metal?",
        a: "We match the metal type and karat as closely as possible so the clasp doesn't stand out against the rest of the piece.",
      },
      {
        q: "Is a heavier clasp better for a heavier chain?",
        a: "Generally yes — we size the clasp to the chain's weight so it holds securely without being bulky or under-built.",
      },
      {
        q: "Can you also fix a bent jump ring near the clasp?",
        a: "Yes, we inspect and reinforce the connecting jump ring as part of the clasp replacement at no extra step.",
      },
    ],
  },

  "cleanse-restore": {
    name: "Cleanse & Restore",
    price: "$65",
    turnaround: "2–3 business days",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Standard Clean",
      subtitle: "Ultrasonic bath and steam finish",
    },
    optionB: {
      title: "Deep Restore",
      subtitle: "Includes polish and rhodium check",
    },
    description: [
      "Professional cleaning and restoration to bring tarnished, dulled, or heavily worn jewelry back to its original shine. Combines ultrasonic cleaning, steam rinsing, and hand polishing.",
      "Each piece is inspected first — stones are checked for looseness before ultrasonic cleaning, and metal surfaces are evaluated for scratches or tarnish that hand polishing can address.",
      "For white gold pieces, we check the rhodium plating and can note if a re-plating is recommended separately. Antique and heirloom pieces are cleaned with gentler methods to protect original patina where appropriate.",
    ],
    includes: [
      "Pre-clean stone security check",
      "Ultrasonic bath and steam rinse",
      "Hand polishing of metal surfaces",
      "Rhodium condition check on white gold",
    ],
    signs: [
      "Jewelry looks dull or tarnished",
      "Visible buildup around stone settings",
      "Metal has lost its shine",
      "Piece hasn't been professionally cleaned in over a year",
    ],
    types: ["Rings", "Necklaces", "Bracelets", "Earrings", "Heirloom Pieces"],
    faqs: [
      {
        q: "Is ultrasonic cleaning safe for all stones?",
        a: "No — we check stone type and stability first. Fracture-filled, treated, or already-loose stones are cleaned by hand instead of ultrasonic to avoid damage.",
      },
      {
        q: "Will cleaning remove scratches?",
        a: "Light surface scratches are typically improved with hand polishing included in the Deep Restore option. Deeper scratches may need separate polish or refinishing work.",
      },
      {
        q: "My white gold ring looks yellowish — will this fix it?",
        a: "We'll check the rhodium plating during cleaning and let you know if a re-plating service would restore the bright white finish.",
      },
      {
        q: "Is this safe for antique or heirloom jewelry?",
        a: "Yes, we use gentler cleaning methods for antique pieces to preserve original detailing and patina where it's part of the piece's character.",
      },
    ],
  },

  detangle: {
    name: "Detangle",
    price: "$25",
    turnaround: "1 business day",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Single Chain",
      subtitle: "One chain or necklace, knot removal",
    },
    optionB: {
      title: "Multiple Chains",
      subtitle: "A tangled group, separated and untangled",
    },
    description: [
      "Careful, patient detangling of knotted chains without stretching links or damaging fine metal. Done by hand under magnification using fine picks and lubricant, never by pulling.",
      "Works for single stubborn knots as well as a jewelry box's worth of chains tangled together. Each chain is separated, straightened, and inspected for weak links before it's returned.",
      "If a link is found to be stretched or opened during the process, we'll flag it and can solder it closed as part of the same service.",
    ],
    includes: [
      "Hand detangling under magnification",
      "Fine-pick and lubricant technique — no pulling",
      "Weak link inspection",
      "Chains untangled and separated for storage",
    ],
    signs: [
      "Chain is knotted and won't come apart by hand",
      "Multiple chains have tangled together",
      "You're afraid pulling will snap the chain",
      "A knot has been sitting for weeks or longer",
    ],
    types: ["Necklaces", "Bracelets", "Anklets"],
    faqs: [
      {
        q: "Will detangling stretch or damage my chain?",
        a: "No — we use fine picks and lubricant to work knots loose by hand rather than pulling, which is what typically causes stretched or broken links.",
      },
      {
        q: "Can you detangle very fine or delicate chains?",
        a: "Yes, fine chains are actually our specialty for this service since they're the most prone to tight knotting and the most easily damaged by DIY attempts.",
      },
      {
        q: "What if a link breaks during detangling?",
        a: "If a link is already compromised, it may open during the process. We'll solder it closed before returning the piece so it's fully wearable.",
      },
      {
        q: "How many chains can be sent in one order?",
        a: "Choose the Multiple Chains option and note the approximate count in additional details — we'll confirm final pricing if the group is unusually large.",
      },
    ],
  },

  "earrings-backing": {
    name: "Earrings Backing Conversion",
    price: "$40",
    turnaround: "2–3 business days",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Push Back to Screw Back",
      subtitle: "More secure closure for daily wear",
    },
    optionB: {
      title: "Clip-On Conversion",
      subtitle: "For non-pierced ears",
    },
    description: [
      "Conversion of earring backings to a different style — most commonly from standard push backs to screw backs for added security, or to clip-ons for non-pierced ears.",
      "The existing post or mounting is evaluated, and a new backing mechanism is fabricated and attached to match the earring's design and weight.",
      "Popular for heirloom earrings being worn more often, or gifted earrings that need to fit a different ear type.",
    ],
    includes: [
      "Backing mechanism removed and replaced",
      "New backing matched to metal and finish",
      "Fit and comfort check",
      "Weight-balanced for the earring style",
    ],
    signs: [
      "Earrings keep falling out during the day",
      "Backing is loose or worn smooth",
      "You need a clip-on option for non-pierced ears",
      "Heavier earrings need extra security",
    ],
    types: ["Stud Earrings", "Drop Earrings", "Hoop Earrings"],
    faqs: [
      {
        q: "Can any earring be converted to clip-on?",
        a: "Most stud and drop earrings can be converted. Very lightweight or delicate designs are evaluated individually to make sure the clip mechanism won't overwhelm the piece visually.",
      },
      {
        q: "Will the new backing match the original metal?",
        a: "Yes, we match metal type and karat so the new backing blends with the rest of the earring.",
      },
      {
        q: "Is screw back really more secure than push back?",
        a: "Generally yes — screw backs thread onto the post and are far less likely to loosen or slip off during the day compared to friction-fit push backs.",
      },
      {
        q: "Can you do this for just one earring if I lost a backing?",
        a: "Yes, single backing replacements are available — mention it in the additional details field so we quote it correctly.",
      },
    ],
  },

  engraving: {
    name: "Engraving",
    price: "$50",
    turnaround: "3–4 business days",
    image:
      "https://images.unsplash.com/photo-1569388330292-79cc1ec67270?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Hand Engraving",
      subtitle: "Traditional cut, best for wide bands",
    },
    optionB: {
      title: "Machine Engraving",
      subtitle: "Precise text and dates on any surface",
    },
    description: [
      "Custom engraving for rings, pendants, bracelets, and watches — names, dates, initials, coordinates, or short messages, in a range of fonts.",
      "Hand engraving offers a traditional, slightly organic cut favored for wedding bands and heirloom pieces, while machine engraving delivers crisp, consistent text ideal for small or curved surfaces.",
      "Send your exact wording and preferred font style in the additional details field. We confirm placement and a proof before cutting into the metal.",
    ],
    includes: [
      "Font and placement consultation",
      "Proof confirmation before engraving",
      "Hand or machine engraving",
      "Post-engraving polish",
    ],
    signs: [
      "Special occasion piece needs personalization",
      "Wedding band needs an inscription",
      "Gift piece needs a name or date added",
      "Existing engraving needs to be added to",
    ],
    types: ["Rings", "Pendants", "Bracelets", "Watches"],
    faqs: [
      {
        q: "What text length fits on a typical ring?",
        a: "Ring interiors typically fit 15–25 characters depending on band width and font. We'll confirm exact fit once we have your ring size and wording.",
      },
      {
        q: "Can you engrave a symbol or small design instead of text?",
        a: "Yes, simple symbols and small motifs can be engraved — describe or attach a reference image in the additional details field.",
      },
      {
        q: "What's the difference between hand and machine engraving?",
        a: "Hand engraving is cut by a craftsperson and has subtle character prized on traditional bands; machine engraving is computer-guided for very precise, uniform text.",
      },
      {
        q: "Can engraving be removed or changed later?",
        a: "Existing engraving can often be removed or refreshed — see our Engraving Removal service for that process.",
      },
    ],
  },

  "engraving-removal": {
    name: "Engraving Removal",
    price: "$60",
    turnaround: "3–4 business days",
    image:
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Full Removal",
      subtitle: "Surface fully re-polished",
    },
    optionB: {
      title: "Removal + Re-engrave",
      subtitle: "New inscription added after",
    },
    description: [
      "Careful removal of existing engraving through controlled surface reduction and re-polishing, used when a piece is being repurposed, regifted, or simply updated.",
      "The depth of the original engraving determines how much metal needs to be removed — we assess this first and let you know if band thickness will be noticeably affected.",
      "Once removed, the surface is re-polished to a seamless finish. If you'd like a new inscription added afterward, choose the Removal + Re-engrave option.",
    ],
    includes: [
      "Engraving depth assessment",
      "Controlled surface removal",
      "Seamless re-polishing",
      "Optional new engraving after removal",
    ],
    signs: [
      "Ring is being repurposed or regifted",
      "Previous inscription is no longer relevant",
      "Engraving has become hard to read and needs a fresh start",
      "Piece is being resized and engraving needs to move",
    ],
    types: ["Rings", "Pendants", "Bracelets", "Watches"],
    faqs: [
      {
        q: "Will removing the engraving thin out my ring band?",
        a: "Deep engravings do remove some metal thickness. We assess the depth first and will flag it if removal would noticeably thin the band.",
      },
      {
        q: "Can you always fully remove old engraving?",
        a: "Most engraving removes cleanly, but very deep or old hand-cut engraving on thin bands may leave a faint trace — we'll let you know before starting if that's a risk.",
      },
      {
        q: "Can I add a new inscription right after removal?",
        a: "Yes, choose the Removal + Re-engrave option and include your new wording in the additional details field.",
      },
      {
        q: "Does this work on the inside of rings only?",
        a: "We remove engraving from any accessible surface — inside bands, pendant backs, and bracelet plates are all common requests.",
      },
    ],
  },

  plating: {
    name: "Plating",
    price: "$95",
    turnaround: "5–7 business days",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Rhodium Plating",
      subtitle: "Bright white finish for white gold",
    },
    optionB: {
      title: "Gold Plating",
      subtitle: "Yellow or rose gold flash finish",
    },
    description: [
      "Electroplating service to restore or change the surface finish of a piece — most commonly rhodium plating to refresh the bright white look of white gold, or gold flash plating over silver or gold-filled pieces.",
      "The piece is first cleaned and polished to remove surface imperfections, then plated in a controlled bath to an even, durable finish.",
      "Rhodium plating on white gold typically lasts 12–18 months with normal wear before a refresh is needed, depending on daily exposure to lotions, chlorine, and abrasion.",
    ],
    includes: [
      "Pre-plate cleaning and polish",
      "Controlled electroplating bath",
      "Even coverage across all surfaces",
      "Final buff and inspection",
    ],
    signs: [
      "White gold ring looks yellow or dull",
      "Plating has worn thin at high-contact points",
      "Piece looks discolored compared to when new",
      "You want to change a piece's surface color",
    ],
    types: ["Rings", "Bracelets", "Pendants", "Earrings"],
    faqs: [
      {
        q: "How long does rhodium plating last?",
        a: "Typically 12–18 months with normal wear, though it varies based on how much a piece is exposed to lotions, chemicals, and daily friction.",
      },
      {
        q: "Can you plate over engraving or textured surfaces?",
        a: "Yes, plating follows the existing surface, so engraving and texture remain visible underneath the new finish.",
      },
      {
        q: "Can silver-tone pieces be gold plated?",
        a: "Yes, sterling silver and gold-filled pieces can be gold flash plated for a warmer tone, though durability varies with wear.",
      },
      {
        q: "Will plating hide scratches?",
        a: "The pre-plate polish addresses light surface scratches. Deeper scratches may need separate polishing work before plating for the smoothest final result.",
      },
    ],
  },

  polish: {
    name: "Polish",
    price: "$35",
    turnaround: "2–3 business days",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "High Polish",
      subtitle: "Mirror-bright finish",
    },
    optionB: {
      title: "Satin / Matte Polish",
      subtitle: "Soft, brushed finish",
    },
    description: [
      "Professional polishing to remove light surface scratches and restore a piece's intended finish, whether that's a mirror-bright high polish or a soft satin/matte look.",
      "Stones are checked for security before polishing wheels are used near settings, and prongs are inspected so polishing doesn't further stress an already-loose setting.",
      "This service refinishes the metal surface only — for deeper structural issues like bent prongs or a misshapen band, we'll flag those separately.",
    ],
    includes: [
      "Pre-polish stone and prong check",
      "Hand and wheel polishing",
      "Finish matched to your preference",
      "Final inspection under magnification",
    ],
    signs: [
      "Fine scratches have dulled the surface",
      "Piece looks worn compared to when new",
      "You want to switch between high polish and matte",
      "Metal surface has minor surface abrasions",
    ],
    types: ["Rings", "Bracelets", "Necklaces", "Earrings", "Watches"],
    faqs: [
      {
        q: "Will polishing remove deep scratches?",
        a: "Light to moderate surface scratches typically polish out well. Deeper gouges may need targeted refinishing, which we'll flag if we see it during inspection.",
      },
      {
        q: "Is polishing safe for pieces with loose stones?",
        a: "We check stone security first — a loose stone is stabilized or flagged before polishing to avoid it coming out during the process.",
      },
      {
        q: "Can I switch my ring from matte to high polish?",
        a: "Yes, choose the High Polish option and we'll refinish the surface to a mirror shine, moving away from the existing matte texture.",
      },
      {
        q: "Does polishing remove metal?",
        a: "Polishing removes a very thin layer of surface metal, which is normal and accounted for — repeated aggressive polishing over many years is what eventually thins a piece.",
      },
    ],
  },

  "prong-repair": {
    name: "Prong Repair",
    price: "$75",
    turnaround: "3–5 business days",
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Prong Retip",
      subtitle: "Rebuild worn prong tips",
    },
    optionB: {
      title: "Full Prong Rebuild",
      subtitle: "Replace prongs entirely",
    },
    description: [
      "Repair for worn, bent, or broken prongs that hold your center or accent stones in place. Left unaddressed, worn prongs are the leading cause of lost stones.",
      "Each prong is inspected under magnification. Thin or worn tips are rebuilt by adding and reshaping metal (retipping); severely damaged prongs are cut back and replaced entirely.",
      "Stones are removed if necessary to protect them during repair, then reset and checked for a secure, even fit before the piece ships back.",
    ],
    includes: [
      "Magnified prong-by-prong inspection",
      "Retipping or full prong replacement",
      "Stone removal and resetting if needed",
      "Final security check on all prongs",
    ],
    signs: [
      "A prong looks thin, flat, or worn down",
      "Stone feels loose or rocks in its setting",
      "A prong has visibly bent or broken",
      "It's been several years since prongs were checked",
    ],
    types: ["Engagement Rings", "Solitaire Rings", "Halo Settings", "Tennis Bracelets"],
    faqs: [
      {
        q: "How do I know if my prongs need repair?",
        a: "Warning signs include a stone that rocks or feels loose, a prong that looks thin or flat on top, or a prong you can see is bent. We also check prongs as part of routine cleaning.",
      },
      {
        q: "Is my stone safe during the repair?",
        a: "Yes, we remove the stone when needed to protect it during prong work, then carefully reset and verify it's secure before the piece ships back.",
      },
      {
        q: "What's the difference between retipping and full replacement?",
        a: "Retipping rebuilds just the worn tip of an otherwise healthy prong. Full replacement is needed when a prong is too thin or damaged at the base to safely rebuild.",
      },
      {
        q: "How often should prongs be checked?",
        a: "We recommend a prong check every 6–12 months for rings worn daily, since prongs wear gradually and often show no obvious symptoms until a stone is already at risk.",
      },
    ],
  },

  "ring-band-renewal": {
    name: "Ring Band Renewal",
    price: "$110",
    turnaround: "5–7 business days",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Reshank",
      subtitle: "Replace the worn band section",
    },
    optionB: {
      title: "Full Band Rebuild",
      subtitle: "Entire shank recast and rebuilt",
    },
    description: [
      "Renewal for ring bands that have thinned, cracked, or worn unevenly from years of daily wear, especially common on rings worn continuously for a decade or more.",
      "For localized thinning, we cut out and replace the worn section (reshank) while preserving the head and setting. For bands worn thin all the way around, a full rebuild recasts the shank entirely.",
      "The stone and setting are protected throughout, and the new band is shaped, sized, and polished to match the ring's original profile.",
    ],
    includes: [
      "Band thickness assessment",
      "Reshank or full band rebuild",
      "Setting and stone protection throughout",
      "Sizing and finish matched to original",
    ],
    signs: [
      "Band feels thin or fragile in one area",
      "Visible groove or flat spot has worn into the band",
      "Ring has been worn daily for 10+ years without service",
      "Band has developed a small crack",
    ],
    types: ["Wedding Bands", "Engagement Rings", "Eternity Bands"],
    faqs: [
      {
        q: "How do I know if I need a reshank or a full rebuild?",
        a: "We assess this on arrival — localized thinning at one point on the band suggests a reshank, while even wear all the way around usually calls for a full rebuild.",
      },
      {
        q: "Will renewal change my ring size?",
        a: "We rebuild the band to your current size unless you request a size change, which can be done in the same service.",
      },
      {
        q: "Is my stone safe during a full band rebuild?",
        a: "Yes, the setting and stone are protected or temporarily removed during the rebuild, then reset securely once the new band is complete.",
      },
      {
        q: "Can antique or heirloom bands be renewed this way?",
        a: "Yes, though we take extra care to preserve original details and will discuss the approach with you before starting on a sentimental or antique piece.",
      },
    ],
  },

  "ring-resize": {
    name: "Ring Resize",
    price: "$85",
    turnaround: "4–6 business days",
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Size Up",
      subtitle: "Metal added to increase size",
    },
    optionB: {
      title: "Size Down",
      subtitle: "Metal removed to decrease size",
    },
    description: [
      "Ring resizing to get the fit exactly right, whether the ring needs to go up or down in size. Most rings can be resized within a few sizes without affecting structural integrity.",
      "For sizing down, excess metal is cut from the band, the band is rejoined and soldered, then reshaped and polished. For sizing up, metal is added at the same point and shaped to match the original profile.",
      "Eternity bands and rings with stones set all the way around the shank require special handling — let us know your ring style so we can confirm the best approach.",
    ],
    includes: [
      "Precise sizing to your target size",
      "Band cut, resized, and re-soldered",
      "Reshaping to original profile",
      "Final polish and fit check",
    ],
    signs: [
      "Ring spins or slides off easily",
      "Ring is tight or hard to remove",
      "Ring was inherited or gifted at the wrong size",
      "Finger size has changed since the ring was purchased",
    ],
    types: ["Engagement Rings", "Wedding Bands", "Cocktail Rings", "Signet Rings"],
    faqs: [
      {
        q: "How many sizes can a ring be resized?",
        a: "Most rings can safely go up or down 2–3 sizes. Larger changes are possible but may require more extensive rebuilding, which we'll confirm after inspection.",
      },
      {
        q: "Can eternity bands be resized?",
        a: "Eternity bands with stones set all the way around are more limited, since there's no plain metal section to cut. We'll assess your specific band and explain the options.",
      },
      {
        q: "Will resizing weaken my ring?",
        a: "A properly executed resize maintains the ring's strength. We solder the join fully and reshape the band so there's no weak point left behind.",
      },
      {
        q: "Will engraving inside the band be affected?",
        a: "Sizing down can shorten or shift engraving near the cut point; sizing up can stretch it slightly. Let us know if you have engraving so we can plan the cut location around it.",
      },
    ],
  },

  "ring-rounding": {
    name: "Ring Rounding",
    price: "$50",
    turnaround: "2–3 business days",
    image:
      "https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Standard Rounding",
      subtitle: "Restore true circular shape",
    },
    optionB: {
      title: "Rounding + Reinforcement",
      subtitle: "Add strength at the bend point",
    },
    description: [
      "Correction for rings that have bent out of round from impact or pressure, restoring the band to a true circular shape using a mandrel and calibrated pressure.",
      "Bent bands put uneven stress on stone settings, so we check prongs and settings before and after rounding to make sure nothing shifted during the correction.",
      "For rings that bend repeatedly at the same point, we offer an optional reinforcement step to add strength at the weak spot.",
    ],
    includes: [
      "Mandrel-based shape correction",
      "Pre- and post-rounding setting check",
      "Optional reinforcement at the weak point",
      "Final polish",
    ],
    signs: [
      "Ring looks oval or bent instead of circular",
      "Ring was dropped or caught on something",
      "Ring feels uneven when worn",
      "Same spot on the band keeps bending",
    ],
    types: ["Wedding Bands", "Engagement Rings", "Signet Rings"],
    faqs: [
      {
        q: "Can any bent ring be rounded back into shape?",
        a: "Most bends correct well with mandrel rounding. Severely deformed or cracked bands may need a reshank instead, which we'll flag if we see it on inspection.",
      },
      {
        q: "Will rounding affect my stones?",
        a: "We check all settings before and after rounding. If a stone or prong looks stressed from the bend, we'll address it as part of the same service.",
      },
      {
        q: "Why does my ring keep bending in the same spot?",
        a: "This usually means that section of the band has thinned over time. The Rounding + Reinforcement option adds strength there to help prevent it recurring.",
      },
      {
        q: "How did my ring get bent in the first place?",
        a: "Common causes include the ring catching on something, an impact against a hard surface, or gradual pressure from tight-fitting gloves or equipment.",
      },
    ],
  },

  "rings-joining-separation": {
    name: "Rings Joining & Separation",
    price: "$70",
    turnaround: "3–4 business days",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Join Rings",
      subtitle: "Solder two bands into one unit",
    },
    optionB: {
      title: "Separate Rings",
      subtitle: "Split a soldered set apart",
    },
    description: [
      "Soldering a wedding band and engagement ring together into one seamless unit for easier daily wear, or separating a previously joined set back into two individual rings.",
      "For joining, the rings are aligned precisely, soldered at the contact points, and polished so the join is smooth to the touch. For separation, the solder joint is carefully cut and each ring's profile is restored and repolished.",
      "This is fully reversible in most cases — a joined set can typically be separated again later if needed.",
    ],
    includes: [
      "Precise alignment before soldering",
      "Smooth, comfortable join points",
      "Careful cutting and repolishing for separation",
      "Final comfort and fit check",
    ],
    signs: [
      "Rings shift or rotate against each other during the day",
      "You want a single seamless bridal set",
      "A previously soldered set needs to be worn separately again",
      "Rings are catching on clothing when worn together",
    ],
    types: ["Wedding Bands", "Engagement Rings", "Bridal Sets"],
    faqs: [
      {
        q: "Is joining rings permanent?",
        a: "It's durable for daily wear but not permanent — a joined set can typically be separated again later if your needs change.",
      },
      {
        q: "Will joining change how the rings fit?",
        a: "The combined unit is sized to fit comfortably, and we check that no part of the setting or band becomes uncomfortable once joined.",
      },
      {
        q: "Can any two rings be joined?",
        a: "Most wedding and engagement ring pairs join well. Unusual shapes or rings with stones along the joining edge are assessed individually to plan the best contact points.",
      },
      {
        q: "Will separation leave marks on the rings?",
        a: "We repolish both rings after separation so the previous join point isn't visible, restoring each ring's individual profile.",
      },
    ],
  },

  "stone-replacement": {
    name: "Stone Replacement",
    price: "$120",
    turnaround: "5–8 business days",
    image:
      "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Matching Replacement",
      subtitle: "Closest match to original stone",
    },
    optionB: {
      title: "Upgrade Replacement",
      subtitle: "New stone, size or quality upgrade",
    },
    description: [
      "Replacement for a stone that's lost, chipped, or cracked beyond repair — matched as closely as possible to the original in size, cut, and color, or upgraded to a new stone of your choice.",
      "We measure the setting precisely, source a stone to fit, and set it securely with prongs or bezel adjusted as needed for a clean, even seat.",
      "Both natural and lab-grown diamonds and gemstones are available. Let us know your preference and budget in the additional details field and we'll confirm options before sourcing.",
    ],
    includes: [
      "Precise setting measurement",
      "Stone sourced to match or upgrade",
      "Secure setting with prong/bezel adjustment",
      "Final security and symmetry check",
    ],
    signs: [
      "A stone has fallen out and is missing",
      "Stone is visibly chipped or cracked",
      "You want to upgrade a stone's size or quality",
      "Setting is empty and needs a new stone",
    ],
    types: ["Engagement Rings", "Solitaire Settings", "Halo Settings", "Pendants", "Earrings"],
    faqs: [
      {
        q: "Can you match my exact original stone?",
        a: "We source the closest match available in size, cut, and color. Exact matches depend on stone availability, and we'll confirm options before purchasing.",
      },
      {
        q: "Do you offer lab-grown stones?",
        a: "Yes, both natural and lab-grown diamonds and gemstones are available — let us know your preference in the additional details field.",
      },
      {
        q: "What if I don't know the original stone's specs?",
        a: "We measure the empty setting to determine size and can estimate cut and quality range based on the setting style and any documentation you have.",
      },
      {
        q: "Can I upgrade to a larger stone than the original?",
        a: "Often yes, though a larger stone may require setting modifications, which we'll flag and quote separately if needed.",
      },
    ],
  },

  "stone-tightening": {
    name: "Stone Tightening",
    price: "$45",
    turnaround: "2–3 business days",
    image:
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=900&q=80",
    optionA: {
      title: "Single Stone",
      subtitle: "One loose stone secured",
    },
    optionB: {
      title: "Full Piece Check",
      subtitle: "Every stone inspected and tightened",
    },
    description: [
      "Tightening for stones that have become loose in their setting, before they're at risk of falling out. Each prong or bezel is checked and adjusted to hold the stone firmly and evenly.",
      "We test every stone by gently probing under magnification to feel for movement that isn't visible to the eye, then tighten prongs or re-seat bezels as needed.",
      "For pieces with multiple stones, the Full Piece Check option inspects and secures every setting in one visit rather than just the one you noticed.",
    ],
    includes: [
      "Magnified movement test on each stone",
      "Prong tightening or bezel re-seating",
      "Symmetry check after adjustment",
      "Final security confirmation",
    ],
    signs: [
      "A stone rattles or moves when tapped gently",
      "Stone looks slightly off-center in its setting",
      "You've noticed a prong looks loose or lifted",
      "It's been over a year since settings were checked",
    ],
    types: ["Rings", "Earrings", "Bracelets", "Pendants"],
    faqs: [
      {
        q: "How can I tell if a stone is loose?",
        a: "A loose stone often rattles faintly when the piece is gently shaken near your ear, or looks slightly tilted compared to how it sat originally.",
      },
      {
        q: "Is tightening the same as prong repair?",
        a: "Tightening adjusts prongs or bezels that are otherwise healthy but have loosened their grip. If a prong is worn thin or broken, that falls under our Prong Repair service instead.",
      },
      {
        q: "Should I get all my jewelry checked even if nothing feels loose?",
        a: "We recommend a check every 12 months for pieces worn regularly, since early looseness often isn't noticeable until a stone is already at risk.",
      },
      {
        q: "Can this be done while I wait?",
        a: "Single stone tightening is often quick, but for the quality check and proper tooling we recommend the standard mail-in turnaround listed above.",
      },
    ],
  },
};

export default servicesData;
