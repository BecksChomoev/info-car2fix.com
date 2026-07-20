// Content for the programmatic local-SEO pages rendered by app/(marketing)/[slug].
// Two page types: 'service' (Newark mechanical services) and 'location' (nearby
// city pages). Slugs were specified by the SEO agency — changing one changes a
// live URL, so add redirects if you ever rename.
// Facts to keep accurate everywhere: free estimates, (607) 251-1509,
// 12-month/12,000-mile mechanical warranty, ASE-certified, Newark shop at
// 408 Carnegie Ave (Mon–Fri 8–6, Sat 8–2), Linden body shop at 1420 E Elizabeth Ave.

export const servicePages = [
  {
    slug: 'brake-repair-newark-nj',
    name: 'Brake Repair',
    icon: 'Disc',
    h1: 'Brake Repair in Newark, NJ',
    title: 'Brake Repair in Newark, NJ | Car2Fix Auto Repair',
    description:
      'Brake repair in Newark, NJ by ASE-certified technicians. Pads, rotors, calipers & brake fluid. Free estimates, 12-month/12k-mile warranty. (607) 251-1509.',
    intro:
      'Squealing, grinding, or a soft pedal? Our ASE-certified technicians inspect, repair, and replace brakes on all makes and models — with an honest quote before any work begins.',
    includedHeading: "What's Included in Our Brake Repair Service",
    included: [
      { title: 'Complete Brake Inspection', text: 'Pads, rotors, calipers, brake lines, and fluid condition — with a clear report of what actually needs attention.' },
      { title: 'Brake Pad Replacement', text: 'Quality OEM or aftermarket pads matched to your vehicle and driving.' },
      { title: 'Rotor Resurfacing & Replacement', text: 'We resurface rotors when they are within spec and replace them when they are not.' },
      { title: 'Caliper Repair & Replacement', text: 'Sticking or seized calipers diagnosed and fixed to restore even braking.' },
      { title: 'Brake Fluid Flush', text: 'Old, moisture-contaminated fluid replaced to keep the pedal firm and the system protected.' },
      { title: 'ABS Diagnostics', text: 'ABS warning lights traced with computer diagnostics, not guesswork.' },
    ],
    signsHeading: 'Signs You Need Brake Repair',
    signs: [
      'Squealing or grinding noise when you brake',
      'The pedal feels soft, spongy, or goes closer to the floor',
      'The car pulls to one side when braking',
      'Vibration in the steering wheel while stopping',
      'Brake or ABS warning light on the dash',
    ],
    faqs: [
      {
        question: 'How much does brake repair cost in Newark, NJ?',
        answer:
          'Brake pad replacement typically ranges from $150–$300 per axle depending on your vehicle and pad type. We provide a free written estimate before any work begins so there are no surprises.',
      },
      {
        question: 'How do I know if my brakes need repair?',
        answer:
          'Common signs include squealing or grinding noises, a soft or spongy brake pedal, vibration when stopping, or a pulling sensation to one side. If you notice any of these, bring your car in for a free inspection.',
      },
      {
        question: 'How long does a brake repair take?',
        answer:
          'A standard brake pad and rotor replacement takes about 1–2 hours. More complex work like caliper replacement may take longer. We’ll give you an accurate time estimate when you drop off.',
      },
      {
        question: 'Do you offer a warranty on brake repairs?',
        answer:
          'Yes — all brake repairs at Car2Fix come with a 12-month / 12,000-mile warranty on parts and labor. If anything goes wrong, we’ll make it right.',
      },
      {
        question: 'Can you repair brakes on any car make or model?',
        answer:
          'Yes, our ASE-certified technicians service all domestic and foreign makes and models, including Toyota, Honda, Ford, Chevy, BMW, Mercedes, and more.',
      },
    ],
    related: ['suspension-repair-newark-nj', 'tire-service-newark-nj', 'oil-change-newark-nj'],
  },
  {
    slug: 'engine-repair-newark-nj',
    name: 'Engine Repair',
    icon: 'Wrench',
    h1: 'Engine Repair in Newark, NJ',
    title: 'Engine Repair in Newark, NJ | Car2Fix Auto Repair',
    description:
      'Engine repair in Newark, NJ — from tune-ups and timing belts to rebuilds. ASE-certified, all makes & models, free estimates. Call Car2Fix at (607) 251-1509.',
    intro:
      'From a rough idle to a full rebuild, we repair engines on all makes and models. Honest diagnostics first — we tell you exactly what is wrong and what it takes to fix it.',
    includedHeading: "What's Included in Our Engine Repair Service",
    included: [
      { title: 'Computer Diagnostics First', text: 'We pinpoint the actual problem before quoting, so you never pay for parts you do not need.' },
      { title: 'Tune-Ups', text: 'Spark plugs, ignition coils, filters, and fuel system cleaning to restore power and economy.' },
      { title: 'Timing Belts & Chains', text: 'Replacement at the right interval — before a failure causes serious engine damage.' },
      { title: 'Head Gasket & Valve Work', text: 'Overheating damage, compression loss, and oil-coolant mixing repaired properly.' },
      { title: 'Engine Rebuild & Replacement', text: 'When repair is not enough, we quote rebuild and replacement options side by side.' },
      { title: 'Oil & Coolant Leak Repair', text: 'Leaks traced to the source — gaskets, seals, or hoses — and fixed once.' },
    ],
    signsHeading: 'Signs Your Engine Needs Attention',
    signs: [
      'Check engine light is on or flashing',
      'Knocking, ticking, or tapping noises',
      'Loss of power or rough running',
      'Excessive smoke from the exhaust',
      'Losing oil or coolant between services',
    ],
    faqs: [
      {
        question: 'What are signs my engine needs repair?',
        answer:
          'Warning signs include the check engine light, rough idling, loss of power, unusual noises (knocking or ticking), excessive smoke from the exhaust, or a strong burning smell. Don’t ignore these — early diagnosis saves money.',
      },
      {
        question: 'How much does engine repair cost in Newark, NJ?',
        answer:
          'Costs vary widely depending on the repair needed. A tune-up may be $100–$200, while a timing belt replacement runs $300–$700. We provide a free diagnostic and written estimate before starting any work.',
      },
      {
        question: 'Is it worth repairing an engine or should I replace the car?',
        answer:
          'It depends on the repair cost vs. the vehicle’s value. Our technicians will give you an honest assessment to help you make the right financial decision — we never upsell unnecessary work.',
      },
      {
        question: 'How long does engine repair take?',
        answer:
          'Minor repairs like a tune-up take a few hours. More complex jobs like a timing chain or head gasket repair can take 1–3 days. We’ll give you a clear timeline upfront.',
      },
      {
        question: 'Do you repair both domestic and foreign engines?',
        answer:
          'Yes. Our ASE-certified team services all makes and models including Honda, Toyota, Ford, GM, Nissan, BMW, Mercedes-Benz, and more.',
      },
    ],
    related: ['engine-diagnostics-newark-nj', 'transmission-repair-newark-nj', 'exhaust-repair-newark-nj'],
  },
  {
    slug: 'engine-diagnostics-newark-nj',
    name: 'Engine Diagnostics',
    icon: 'Gauge',
    h1: 'Engine Diagnostics in Newark, NJ',
    title: 'Engine Diagnostics in Newark, NJ | Check Engine Light | Car2Fix',
    description:
      'Check engine light on? Computer engine diagnostics in Newark, NJ. We find the real cause and explain it in plain English. Free estimates — (607) 251-1509.',
    intro:
      'A check engine light can mean a hundred different things. Our diagnostic equipment finds the real cause fast — and we explain it in plain English before any repair.',
    includedHeading: "What's Included in Our Diagnostic Service",
    included: [
      { title: 'Full Computer Scan', text: 'OBD-II trouble codes read and interpreted across engine, transmission, and emissions systems.' },
      { title: 'Check Engine Light Diagnosis', text: 'We trace the code to the actual failing part — a code points to a system, not always the part itself.' },
      { title: 'Drivability Testing', text: 'Stalling, rough idle, hesitation, and poor fuel economy tested under real conditions.' },
      { title: 'Sensor & Electrical Testing', text: 'Oxygen sensors, mass airflow, ignition, and wiring checked before anything is replaced.' },
      { title: 'Written Findings & Estimate', text: 'You get a clear explanation of the problem and a quote before we touch anything.' },
    ],
    signsHeading: 'When to Get a Diagnostic',
    signs: [
      'Check engine light is on — steady or flashing',
      'Rough idle, stalling, or hard starts',
      'Noticeable drop in fuel economy',
      'Hesitation or loss of power when accelerating',
      'A repair shop quoted you a big job without explaining why',
    ],
    faqs: [
      {
        question: 'What does it mean when my check engine light comes on?',
        answer:
          'The check engine light can signal anything from a loose gas cap to a misfiring engine. It means your car’s computer has detected a fault code. A professional diagnostic scan is the only way to know for sure.',
      },
      {
        question: 'Can I drive with my check engine light on?',
        answer:
          'If the light is steady, it’s usually safe to drive short distances, but you should get it checked soon. If it’s flashing, pull over safely and call us — a flashing light indicates a serious issue that can damage your catalytic converter.',
      },
      {
        question: 'How much does an engine diagnostic cost in Newark?',
        answer:
          'We offer free estimates after running a diagnostic scan. The scan itself is competitively priced — call us at (607) 251-1509 for current pricing.',
      },
      {
        question: 'Will you just clear the code without fixing the problem?',
        answer:
          'No. We find and fix the root cause. Clearing a code without repairing the underlying issue only delays the problem — it will come back. We explain exactly what’s wrong before any repair.',
      },
      {
        question: 'How long does a diagnostic take?',
        answer:
          'A full OBD-II diagnostic scan typically takes 30–60 minutes. More complex issues with multiple fault codes may require additional testing, which we’ll discuss with you before proceeding.',
      },
    ],
    related: ['engine-repair-newark-nj', 'auto-electrical-repair-newark-nj', 'exhaust-repair-newark-nj'],
  },
  {
    slug: 'transmission-repair-newark-nj',
    name: 'Transmission Repair',
    icon: 'Cog',
    h1: 'Transmission Repair in Newark, NJ',
    title: 'Transmission Repair in Newark, NJ | Car2Fix Auto Repair',
    description:
      'Transmission repair, rebuild & fluid service in Newark, NJ. Slipping gears or rough shifting diagnosed honestly. Free estimates. Call (607) 251-1509.',
    intro:
      'Slipping gears or rough shifting does not always mean a rebuild. We diagnose first, fix what is actually wrong, and quote honestly — automatic and manual, all makes and models.',
    includedHeading: "What's Included in Our Transmission Service",
    included: [
      { title: 'Transmission Diagnostics', text: 'Computer scan plus road testing to separate fluid, solenoid, and mechanical problems.' },
      { title: 'Fluid & Filter Service', text: 'Fresh fluid and filter at the manufacturer interval — the cheapest transmission insurance there is.' },
      { title: 'Transmission Repair', text: 'Solenoids, valve bodies, seals, and leaks repaired without replacing the whole unit when possible.' },
      { title: 'Rebuilds & Replacement', text: 'When it is truly gone, we quote rebuild and replacement options side by side.' },
      { title: 'Clutch Repair', text: 'Clutch replacement and adjustment for manual transmissions.' },
      { title: 'Axles & Driveline', text: 'CV axles, joints, and driveshaft issues that mimic transmission symptoms.' },
    ],
    signsHeading: 'Signs of Transmission Trouble',
    signs: [
      'Slipping in and out of gear, or RPMs rising without speed',
      'Delayed or harsh shifting',
      'Red fluid spots where you park',
      'Burning smell after driving',
      'Transmission warning light on the dash',
    ],
    faqs: [
      {
        question: 'What are signs of transmission problems?',
        answer:
          'Key warning signs include slipping gears, delayed or rough shifting, a burning smell, transmission fluid leaks (red fluid under the car), or the check engine light. Early diagnosis prevents costly full rebuilds.',
      },
      {
        question: 'How much does transmission repair cost in Newark, NJ?',
        answer:
          'Costs range significantly: a fluid flush runs $100–$200, while a rebuild or replacement can range from $1,500–$3,500+. We diagnose first and provide a written estimate — you always know the cost before we begin.',
      },
      {
        question: 'Should I repair or replace my transmission?',
        answer:
          'It depends on your vehicle’s age, mileage, and overall condition. Our technicians will give you an honest recommendation based on what’s most cost-effective for you — not what makes us the most money.',
      },
      {
        question: 'How long does transmission repair take?',
        answer:
          'A fluid service takes 1–2 hours. A full transmission rebuild or replacement typically takes 2–4 days. We’ll keep you updated throughout the process.',
      },
      {
        question: 'Do you service both automatic and manual transmissions?',
        answer:
          'Yes. We repair and service both automatic and manual transmissions on all domestic and imported vehicles.',
      },
    ],
    related: ['engine-repair-newark-nj', 'engine-diagnostics-newark-nj', 'oil-change-newark-nj'],
  },
  {
    slug: 'oil-change-newark-nj',
    name: 'Oil Change',
    icon: 'Droplets',
    h1: 'Oil Change in Newark, NJ',
    title: 'Oil Change in Newark, NJ | Full Synthetic & Blend | Car2Fix',
    description:
      'Quick, honest oil change in Newark, NJ — full synthetic, blend, or conventional with filter and multi-point check. Mon–Sat at 408 Carnegie Ave. (607) 251-1509.',
    intro:
      'Fast, honest oil changes with no upsell games. Full synthetic, synthetic blend, or conventional — matched to your manufacturer spec, with a multi-point check included.',
    includedHeading: "What's Included in Every Oil Change",
    included: [
      { title: 'Your Choice of Oil', text: 'Full synthetic, synthetic blend, or conventional — we recommend what your manufacturer specifies, not the priciest option.' },
      { title: 'New Oil Filter', text: 'Quality filter replaced with every change.' },
      { title: 'Fluid Top-Off', text: 'Coolant, washer fluid, and other essentials checked and topped off.' },
      { title: 'Multi-Point Check', text: 'Quick look at brakes, belts, hoses, battery, and tires — we flag anything worth watching, with zero pressure.' },
      { title: 'Tire Pressure Check', text: 'All four tires set to spec, including a look at tread wear.' },
    ],
    signsHeading: "Signs You're Due for an Oil Change",
    signs: [
      'Oil change or maintenance light is on',
      "It's been 5,000+ miles or six months since your last one",
      'Oil on the dipstick looks dark or gritty',
      'The engine sounds louder than usual',
    ],
    faqs: [
      {
        question: 'How often should I change my oil in Newark, NJ?',
        answer:
          'Most modern vehicles with full synthetic oil need a change every 7,500–10,000 miles. Conventional oil requires changes every 3,000–5,000 miles. Check your owner’s manual or ask our team for a personalized recommendation.',
      },
      {
        question: 'What type of oil does my car need?',
        answer:
          'It depends on your vehicle’s make, model, and mileage. We’ll check your owner’s manual and recommend the right viscosity and oil type — conventional, blend, or full synthetic — at no extra charge.',
      },
      {
        question: 'How long does an oil change take at Car2Fix?',
        answer:
          'A standard oil change takes about 20–30 minutes. We also perform a complimentary multi-point inspection while we’re at it, so you leave knowing the overall health of your vehicle.',
      },
      {
        question: 'What’s included in your oil change service?',
        answer:
          'We drain and replace the oil with your vehicle’s recommended type, install a new oil filter, check and top off fluids, inspect tire pressure, and perform a visual multi-point inspection — all included.',
      },
      {
        question: 'Can I bring my own oil and filter?',
        answer:
          'Yes, we accept customer-supplied oil and filters. Just let us know when you book your appointment so we can plan accordingly.',
      },
    ],
    related: ['brake-repair-newark-nj', 'tire-service-newark-nj', 'car-inspection-newark-nj'],
  },
  {
    slug: 'suspension-repair-newark-nj',
    name: 'Suspension Repair',
    icon: 'Settings',
    h1: 'Suspension Repair in Newark, NJ',
    title: 'Suspension Repair in Newark, NJ | Shocks & Struts | Car2Fix',
    description:
      'Suspension repair in Newark, NJ — shocks, struts, control arms, tie rods & alignment. Pothole damage fixed right. Free estimates. Call (607) 251-1509.',
    intro:
      'Newark-area roads are brutal on suspensions. We repair shocks, struts, control arms, and steering components so your car rides smooth and tracks straight again.',
    includedHeading: "What's Included in Our Suspension Service",
    included: [
      { title: 'Suspension Inspection', text: 'Shocks, struts, springs, bushings, and mounts checked for wear, leaks, and damage.' },
      { title: 'Shocks & Struts', text: 'Replacement with quality parts to restore ride comfort and braking stability.' },
      { title: 'Control Arms & Bushings', text: 'Worn bushings and ball joints replaced to eliminate clunks and wandering.' },
      { title: 'Tie Rods & Steering', text: 'Steering looseness and uneven tire wear traced to the failing component.' },
      { title: 'Wheel Alignment', text: 'Alignment after repairs so new parts and tires wear the way they should.' },
    ],
    signsHeading: 'Signs of Suspension Problems',
    signs: [
      'Bouncy or floaty ride, especially over bumps',
      'Nose dives forward when braking',
      'Clunking or knocking over potholes',
      'Uneven or cupped tire wear',
      'Car pulls or wanders on a straight road',
    ],
    faqs: [
      {
        question: 'What are signs of suspension problems?',
        answer:
          'Common signs include a rough or bouncy ride, the car pulling to one side, uneven tire wear, clunking noises over bumps, or a nose-dive when braking. NJ potholes are a frequent cause of suspension damage.',
      },
      {
        question: 'How much does suspension repair cost in Newark, NJ?',
        answer:
          'Shock or strut replacement typically costs $200–$500 per axle. Control arm and tie rod repairs range from $150–$400 each. We provide a free written estimate after inspection — no guesswork.',
      },
      {
        question: 'Is it safe to drive with bad shocks or struts?',
        answer:
          'Worn shocks and struts significantly increase stopping distance and reduce vehicle control, especially in emergency situations. We recommend addressing suspension issues promptly for your safety.',
      },
      {
        question: 'How long does suspension repair take?',
        answer:
          'Shock or strut replacement takes 2–3 hours per axle. More complex repairs like control arms or subframe work may take longer. We’ll give you a clear timeline when you come in.',
      },
      {
        question: 'Do you do wheel alignment after suspension repair?',
        answer:
          'Yes. We always recommend a wheel alignment after suspension repairs, as worn components affect alignment angles. Proper alignment protects your new parts and prevents premature tire wear.',
      },
    ],
    related: ['tire-service-newark-nj', 'brake-repair-newark-nj', 'oil-change-newark-nj'],
  },
  {
    slug: 'ac-repair-newark-nj',
    name: 'AC Repair',
    icon: 'Wind',
    h1: 'Car AC Repair in Newark, NJ',
    title: 'Car AC Repair in Newark, NJ | A/C Recharge & Service | Car2Fix',
    description:
      'Car A/C repair in Newark, NJ — leak detection, recharge, compressor & heater repair. EPA-compliant refrigerant handling. Free estimates. (607) 251-1509.',
    intro:
      'Blowing warm air in July? We diagnose and repair car A/C properly — finding the leak instead of just topping off refrigerant — plus heating and blower problems in winter.',
    includedHeading: "What's Included in Our A/C Service",
    included: [
      { title: 'A/C Performance Test', text: 'Vent temperatures, pressures, and compressor operation measured to find the real problem.' },
      { title: 'Leak Detection & Repair', text: 'Dye and electronic leak detection — because low refrigerant always has a cause.' },
      { title: 'Refrigerant Recharge', text: 'Evacuated and recharged to exact factory spec with EPA-compliant handling.' },
      { title: 'Compressor & Condenser Repair', text: 'Failed components replaced with quality parts, warrantied for 12 months/12,000 miles.' },
      { title: 'Heating & Blower Service', text: 'Heater cores, blend doors, and blower motors — comfort in both directions.' },
      { title: 'Cabin Air Filter', text: 'Replaced when clogged, which alone often fixes weak airflow and musty smells.' },
    ],
    signsHeading: 'Signs Your A/C Needs Service',
    signs: [
      'A/C blows warm or only cools at highway speed',
      'Weak airflow even on the highest setting',
      'Musty smell when the A/C runs',
      'Clicking or rattling when the compressor kicks on',
      'Heat not working in winter',
    ],
    faqs: [
      {
        question: 'Why is my car AC blowing warm air?',
        answer:
          'The most common causes are low refrigerant (usually from a leak), a failing AC compressor, a clogged condenser, or an electrical issue. We diagnose the root cause before recommending any repair.',
      },
      {
        question: 'How much does car AC repair cost in Newark, NJ?',
        answer:
          'An AC recharge typically costs $100–$200. Leak repairs and compressor replacements range from $200–$1,000+ depending on the component. We provide a free written estimate after diagnosis.',
      },
      {
        question: 'How long does an AC recharge take?',
        answer:
          'An AC recharge takes about 45–60 minutes. If a leak repair or compressor replacement is needed, we’ll give you a separate time estimate.',
      },
      {
        question: 'Is it safe to drive without AC in New Jersey summers?',
        answer:
          'It’s safe mechanically, but NJ summers can be dangerously hot. We recommend addressing AC issues promptly, especially if you have children or elderly passengers.',
      },
      {
        question: 'Do you handle refrigerant safely?',
        answer:
          'Yes. Our technicians are EPA Section 609 certified for refrigerant handling. We recover, recycle, and recharge refrigerant in full compliance with federal and NJ regulations.',
      },
    ],
    related: ['auto-electrical-repair-newark-nj', 'engine-diagnostics-newark-nj', 'battery-replacement-newark-nj'],
  },
  {
    slug: 'battery-replacement-newark-nj',
    name: 'Battery Replacement',
    icon: 'Battery',
    h1: 'Car Battery Replacement in Newark, NJ',
    title: 'Car Battery Replacement in Newark, NJ | Testing & Install | Car2Fix',
    description:
      'Car battery testing & replacement in Newark, NJ. We test before we replace — battery, alternator & starter. Old battery recycled. Call (607) 251-1509.',
    intro:
      'Slow crank or a dead battery this morning? We test the battery, alternator, and starter before replacing anything — so you only pay for the part that actually failed.',
    includedHeading: "What's Included in Our Battery Service",
    included: [
      { title: 'Battery & Charging-System Test', text: 'Battery health, alternator output, and starter draw tested together — we show you the numbers.' },
      { title: 'Correct Battery Fitment', text: 'The right group size and cold-cranking amps for your vehicle, properly secured and registered when the car requires it.' },
      { title: 'Terminal & Cable Service', text: 'Corroded terminals and worn cables cleaned or replaced for a solid connection.' },
      { title: 'Alternator & Starter Repair', text: 'If the battery is not the problem, we fix what is.' },
      { title: 'Old Battery Recycling', text: 'Your old battery is recycled responsibly — just leave it with us.' },
    ],
    signsHeading: 'Signs Your Battery Is Failing',
    signs: [
      'Engine cranks slowly, especially on cold mornings',
      'Headlights dim at idle',
      'Battery or charging warning light on',
      "You've needed a jump start recently",
      'The battery is more than 3–5 years old',
    ],
    faqs: [
      {
        question: 'How do I know if my car battery needs replacement?',
        answer:
          'Common signs include slow engine cranking, dimming headlights, a battery warning light, or a car that won’t start. Batteries typically last 3–5 years. We test for free — no appointment needed.',
      },
      {
        question: 'How much does a car battery replacement cost in Newark?',
        answer:
          'Battery replacement costs typically range from $100–$250 depending on your vehicle and battery type. We test first to confirm the battery is the actual issue before recommending a replacement.',
      },
      {
        question: 'Do you test the alternator and starter too?',
        answer:
          'Yes. A dead battery can sometimes be caused by a failing alternator or starter. We test all three components to make sure you only pay for what’s actually needed.',
      },
      {
        question: 'How long does a battery replacement take?',
        answer:
          'Most battery replacements take 30–45 minutes, including testing. We can often do it while you wait.',
      },
      {
        question: 'What do you do with the old battery?',
        answer:
          'We recycle all old batteries in compliance with NJ environmental regulations. You don’t have to worry about disposal — we handle everything.',
      },
    ],
    related: ['auto-electrical-repair-newark-nj', 'engine-diagnostics-newark-nj', 'oil-change-newark-nj'],
  },
  {
    slug: 'tire-service-newark-nj',
    name: 'Tire Service',
    icon: 'LifeBuoy',
    h1: 'Tire Service in Newark, NJ',
    title: 'Tire Service in Newark, NJ | Mounting, Rotation & Flat Repair | Car2Fix',
    description:
      'Tire service in Newark, NJ — new tire mounting & balancing, rotation, flat repair & TPMS. Honest advice on repair vs replace. Call (607) 251-1509.',
    intro:
      'From a nail in the tread to a full new set, we mount, balance, rotate, and repair tires — and we tell you honestly when a tire can be saved and when it cannot.',
    includedHeading: "What's Included in Our Tire Service",
    included: [
      { title: 'New Tire Mounting & Balancing', text: 'Tires sourced for your vehicle, size, and budget — mounted and computer-balanced.' },
      { title: 'Flat Repair', text: 'Punctures in the tread repaired properly with plug-patch — not a quick plug that fails later.' },
      { title: 'Tire Rotation', text: 'Even wear means tires last thousands of miles longer.' },
      { title: 'TPMS Service', text: 'Tire pressure sensors diagnosed, replaced, and reset so the light stays off.' },
      { title: 'Pressure & Tread Checks', text: 'Set to spec and measured — we tell you how much life your tires have left.' },
    ],
    signsHeading: 'Signs You Need Tire Service',
    signs: [
      'Tread worn to the wear bars (2/32") or below',
      'Vibration at highway speed',
      'Uneven wear on the edges or center',
      'TPMS / low-pressure light keeps coming on',
      'A bubble, crack, or damage on the sidewall',
    ],
    faqs: [
      {
        question: 'How do I know if I need new tires?',
        answer:
          'Check the tread depth — if it’s below 2/32", it’s time to replace. Other signs include visible bulges or cracks in the sidewall, frequent flats, or vibration at highway speed. We offer a free tire inspection.',
      },
      {
        question: 'Can you repair a flat tire or does it need to be replaced?',
        answer:
          'Many flats can be repaired if the puncture is in the tread area and is smaller than 1/4 inch. Sidewall damage or large punctures require replacement. We’ll give you an honest assessment — we never replace a tire that can safely be repaired.',
      },
      {
        question: 'How much does tire mounting and balancing cost in Newark?',
        answer:
          'Mounting and balancing typically costs $15–$25 per tire. Flat repair runs $20–$40. We can also help source competitively priced tires for your vehicle if needed.',
      },
      {
        question: 'What is TPMS and do you service it?',
        answer:
          'TPMS (Tire Pressure Monitoring System) warns you when a tire is underinflated. We service TPMS sensors — including replacement and resetting the system after new tire installation.',
      },
      {
        question: 'How often should I rotate my tires?',
        answer:
          'Tire rotation is recommended every 5,000–7,500 miles, or every other oil change. Regular rotation extends tire life and ensures even wear across all four tires.',
      },
    ],
    related: ['suspension-repair-newark-nj', 'brake-repair-newark-nj', 'oil-change-newark-nj'],
  },
  {
    slug: 'exhaust-repair-newark-nj',
    name: 'Exhaust Repair',
    icon: 'Flame',
    h1: 'Exhaust Repair in Newark, NJ',
    title: 'Exhaust & Muffler Repair in Newark, NJ | Car2Fix Auto Repair',
    description:
      'Exhaust & muffler repair in Newark, NJ — leaks, mufflers, pipes, catalytic converters & O2 sensors. Quiet your car and pass inspection. (607) 251-1509.',
    intro:
      'A loud exhaust is annoying — an exhaust leak is dangerous. We repair mufflers, pipes, catalytic converters, and sensors so your car runs quiet, clean, and inspection-ready.',
    includedHeading: "What's Included in Our Exhaust Service",
    included: [
      { title: 'Full Exhaust Inspection', text: 'From the manifold to the tailpipe — leaks, rust, and broken hangers identified on a lift.' },
      { title: 'Muffler Repair & Replacement', text: 'Rusted or blown mufflers replaced to bring your car back to factory-quiet.' },
      { title: 'Pipes & Hangers', text: 'Rattles and dragging pipes fixed with proper welds and mounts, not clamps and wire.' },
      { title: 'Catalytic Converter Service', text: 'Efficiency codes diagnosed honestly — sometimes it is a sensor, not the converter.' },
      { title: 'Oxygen Sensor Replacement', text: 'Failed O2 sensors replaced to restore fuel economy and clear emissions codes.' },
    ],
    signsHeading: 'Signs of Exhaust Problems',
    signs: [
      'Loud rumbling or roaring, especially on acceleration',
      'Rattling or knocking from under the car',
      'Exhaust or sulfur (rotten egg) smell',
      'Drop in fuel economy',
      'Check engine light with emissions codes',
    ],
    faqs: [
      {
        question: 'Why is my car suddenly so loud?',
        answer:
          'A loud exhaust is most commonly caused by a hole or crack in the muffler, a broken exhaust pipe, or a loose heat shield. It can also indicate a cracked exhaust manifold. All of these should be repaired promptly.',
      },
      {
        question: 'Will a bad exhaust cause me to fail NJ inspection?',
        answer:
          'Yes. A faulty catalytic converter, failing O2 sensor, or exhaust leak can trigger emissions failures and cause your vehicle to fail NJ state inspection. We can diagnose and repair the issue to get you back on the road legally.',
      },
      {
        question: 'How much does muffler repair cost in Newark, NJ?',
        answer:
          'Simple muffler repairs or patches can cost $50–$150. Full muffler or pipe replacement runs $150–$400. Catalytic converter replacement is $400–$1,200+. We’ll give you a free estimate before starting any work.',
      },
      {
        question: 'Is it dangerous to drive with an exhaust leak?',
        answer:
          'Yes. An exhaust leak can allow carbon monoxide to enter the cabin, which is odorless and potentially fatal. If you suspect an exhaust leak, have it inspected immediately.',
      },
      {
        question: 'How long does exhaust repair take?',
        answer:
          'Most muffler and pipe repairs take 1–2 hours. Catalytic converter or manifold work may take longer. We’ll give you an accurate timeline when you drop off.',
      },
    ],
    related: ['engine-diagnostics-newark-nj', 'engine-repair-newark-nj', 'car-inspection-newark-nj'],
  },
  {
    slug: 'auto-electrical-repair-newark-nj',
    name: 'Auto Electrical Repair',
    icon: 'Zap',
    h1: 'Auto Electrical Repair in Newark, NJ',
    title: 'Auto Electrical Repair in Newark, NJ | Car2Fix Auto Repair',
    description:
      'Auto electrical repair in Newark, NJ — starters, alternators, wiring, shorts, power accessories & warning lights. Methodical diagnostics. (607) 251-1509.',
    intro:
      'Electrical gremlins are the most frustrating car problems there are. We trace them methodically — wiring, grounds, modules, and sensors — instead of swapping parts and hoping.',
    includedHeading: "What's Included in Our Electrical Service",
    included: [
      { title: 'Starting & Charging Repair', text: 'Starters, alternators, and batteries tested as a system and repaired with quality parts.' },
      { title: 'Wiring & Short Tracing', text: 'Damaged harnesses, corroded grounds, and shorts found with proper diagnostic equipment.' },
      { title: 'Power Accessory Repair', text: 'Windows, locks, mirrors, seats, and wipers brought back to life.' },
      { title: 'Lighting Repair', text: 'Headlights, brake lights, and turn signals — bulbs, sockets, switches, and wiring.' },
      { title: 'Fuses & Relays', text: 'Repeat fuse failures diagnosed to the root cause, not just refilled.' },
      { title: 'Module & Sensor Diagnostics', text: 'Computer-level diagnostics for warning lights and intermittent faults.' },
    ],
    signsHeading: 'Signs of an Electrical Problem',
    signs: [
      'Car will not start or starts intermittently',
      'Flickering or dim lights',
      'Power windows, locks, or accessories stopped working',
      'The same fuse keeps blowing',
      'Random warning lights on the dash',
    ],
    faqs: [
      {
        question: 'What are common signs of car electrical problems?',
        answer:
          'Signs include a dead battery (with a good alternator), flickering lights, blown fuses that keep returning, power windows or locks that stop working, strange burning smells, or dashboard warning lights that won’t go off.',
      },
      {
        question: 'How much does auto electrical repair cost in Newark, NJ?',
        answer:
          'Alternator replacement runs $300–$700. Starter replacement is $200–$500. Wiring and short repairs vary based on complexity. We diagnose first and give you a written estimate — no hidden fees.',
      },
      {
        question: 'Can you diagnose an electrical short?',
        answer:
          'Yes. Electrical shorts are one of our specialties. We use methodical diagnostic procedures to trace shorts, parasitic drains, and faulty grounds without unnecessary parts replacement.',
      },
      {
        question: 'Why does my alternator keep dying?',
        answer:
          'A repeatedly failing alternator can be caused by a faulty voltage regulator, corroded connections, an overloaded electrical system, or even a bad battery drawing excessive current. We diagnose the full charging system — not just the alternator.',
      },
      {
        question: 'How long does auto electrical repair take?',
        answer:
          'Simpler repairs like a starter or alternator swap take 2–4 hours. Complex wiring diagnosis and repair can take 1–2 days. We’ll give you a realistic timeline and keep you updated throughout.',
      },
    ],
    related: ['battery-replacement-newark-nj', 'engine-diagnostics-newark-nj', 'ac-repair-newark-nj'],
  },
  {
    slug: 'car-inspection-newark-nj',
    name: 'Car Inspection',
    icon: 'ClipboardCheck',
    h1: 'Car Inspection in Newark, NJ',
    title: 'Car Inspection in Newark, NJ | Pre-Purchase & Failed Inspection Repair | Car2Fix',
    description:
      'Pre-purchase car inspections & failed NJ inspection repairs in Newark. Multi-point checks with a written report by ASE-certified techs. (607) 251-1509.',
    intro:
      'Buying a used car, planning a road trip, or failed your NJ inspection? Our ASE-certified technicians inspect the whole vehicle and give you straight answers in writing.',
    includedHeading: "What's Included in Our Inspection Services",
    included: [
      { title: 'Pre-Purchase Inspection', text: 'Engine, transmission, brakes, suspension, frame, fluids, and computer codes checked before you buy — with a written report.' },
      { title: 'Multi-Point Inspection', text: 'A systematic health check of safety and wear items, perfect before road trips or seasons change.' },
      { title: 'Failed NJ Inspection Repair', text: 'Emissions and safety failures diagnosed and repaired so you pass re-inspection.' },
      { title: 'Brake & Safety Checks', text: 'Brakes, tires, lights, wipers, and steering verified to be road-safe.' },
      { title: 'Written Findings', text: 'Everything documented with honest priorities: fix now, plan ahead, or just watch.' },
    ],
    signsHeading: 'When to Get an Inspection',
    signs: [
      "You're about to buy a used car",
      'Your vehicle failed NJ state inspection',
      'Planning a long road trip',
      'Warning lights or new noises appeared',
      "You bought a car and don't know its service history",
    ],
    faqs: [
      {
        question: 'What does a pre-purchase car inspection include?',
        answer:
          'Our pre-purchase inspection covers the engine, transmission, brakes, suspension, exhaust, tires, lights, and all major systems. You receive a written report so you can make an informed buying decision.',
      },
      {
        question: 'How much does a car inspection cost in Newark, NJ?',
        answer:
          'NJ state inspection requirements and fees are set by the state. For our pre-purchase multi-point inspection, call us at (607) 251-1509 for current pricing — it’s one of the best investments before buying a used car.',
      },
      {
        question: 'I failed my NJ inspection — can you fix the issues?',
        answer:
          'Yes. We repair all common NJ inspection failures including emissions issues, brake defects, exhaust problems, and lighting failures. We’ll diagnose what caused the failure and fix it correctly.',
      },
      {
        question: 'How long does a car inspection take?',
        answer:
          'A standard multi-point inspection takes about 45–60 minutes. We’ll walk you through our findings before you leave so there are no questions unanswered.',
      },
      {
        question: 'Should I get an inspection before buying a used car?',
        answer:
          'Absolutely. A $100–$150 pre-purchase inspection can save you thousands by uncovering hidden problems — especially on used cars sold privately or at smaller dealerships. It’s one of the smartest investments you can make.',
      },
    ],
    related: ['engine-diagnostics-newark-nj', 'brake-repair-newark-nj', 'oil-change-newark-nj'],
  },
  {
    slug: 'cooling-system-repair-newark-nj',
    name: 'Cooling System Repair',
    icon: 'Thermometer',
    h1: 'Cooling System Repair in Newark, NJ',
    title: 'Cooling System Repair in Newark, NJ | Car2Fix Auto Repair',
    description:
      'Cooling system repair in Newark, NJ by ASE-certified techs. Radiators, coolant flushes, water pumps & overheating diagnosis. Free estimates. (607) 251-1509.',
    intro:
      'Watching the temperature gauge climb in stop-and-go traffic? Our ASE-certified technicians find out why your engine is overheating — not just top off the coolant — so a warped head or blown head gasket never gets the chance.',
    includedHeading: 'What\'s Included in Our Cooling System Repair Service',
    included: [
      { title: 'Overheating Diagnosis', text: 'We trace exactly why the engine runs hot — thermostat, water pump, radiator, or a hidden leak — before quoting any repair.' },
      { title: 'Coolant Flush & Fill', text: 'Old, worn-out antifreeze drained and refilled with the correct type for your vehicle and cold NJ winters.' },
      { title: 'Radiator Repair & Replacement', text: 'Clogged, cracked, or leaking radiators repaired or replaced to restore proper heat transfer.' },
      { title: 'Water Pump Replacement', text: 'A failing pump can\'t circulate coolant — we replace it, often alongside the timing belt when the jobs overlap.' },
      { title: 'Thermostat & Hose Service', text: 'Stuck thermostats and brittle, cracked hoses swapped out before they leave you stranded on the shoulder.' },
      { title: 'Heater Core Service', text: 'Weak heat or a sweet smell inside the cabin traced to a leaking heater core and fixed right.' },
    ],
    signsHeading: 'Signs You Need Cooling System Repair',
    signs: [
      'Temperature gauge climbing toward the red, especially in traffic',
      'Sweet-smelling steam or coolant puddles under the car',
      'Weak or no heat from the vents in winter',
      'Low-coolant warning, or you\'re refilling the reservoir often',
      'Engine runs hot on the highway or on long climbs',
    ],
    faqs: [
      {
        question:
          'How much does cooling system repair cost in Newark, NJ?',
        answer:
          'A coolant flush usually runs $100–$180, while thermostat, hose, or water pump work ranges from about $200–$700 depending on the part and labor involved. We provide a free written estimate before any work begins, so there are no surprises.',
      },
      {
        question:
          'Why does my car keep overheating?',
        answer:
          'Overheating usually comes down to low coolant from a leak, a stuck thermostat, a failing water pump, a clogged radiator, or a bad cooling fan. We diagnose the actual cause instead of just topping off coolant, because untreated overheating can warp your cylinder head or blow the head gasket.',
      },
      {
        question:
          'Is it safe to drive with an overheating engine?',
        answer:
          'No. Keep driving a hot engine and you risk warping the head or blowing the head gasket, turning a small repair into a major one. If your gauge is in the red, pull over safely, let it cool down, and have it towed to our Newark shop.',
      },
      {
        question:
          'How often should I flush my coolant?',
        answer:
          'Most vehicles need a coolant flush every 30,000–60,000 miles, though it varies by make and coolant type. Old antifreeze loses its corrosion protection, so we check its condition during any service and tell you honestly whether it can wait.',
      },
      {
        question:
          'Do you warranty cooling system repairs?',
        answer:
          'Yes — cooling system repairs come with a 12-month / 12,000-mile warranty on parts and labor. Our ASE-certified technicians serve drivers across Newark, Elizabeth, Hillside, Irvington, and Union on all makes and models, foreign and domestic.',
      },
    ],
    related: ['engine-repair-newark-nj', 'ac-repair-newark-nj', 'engine-diagnostics-newark-nj'],
  },
  {
    slug: 'fuel-system-repair-newark-nj',
    name: 'Fuel System Repair',
    icon: 'Fuel',
    h1: 'Fuel System Repair in Newark, NJ',
    title: 'Fuel System Repair in Newark, NJ | Car2Fix Auto Repair',
    description:
      'Fuel system repair in Newark, NJ by ASE-certified techs. Pumps, injectors, filters & pressure testing. Free estimates, 12-month/12k warranty. (607) 251-1509.',
    intro:
      'Hard starts, sputtering, or a sudden drop in gas mileage? Our ASE-certified technicians test fuel pressure and delivery before replacing a single part — so you get an honest quote and the right fix the first time.',
    includedHeading: 'What\'s Included in Our Fuel System Repair Service',
    included: [
      { title: 'Fuel Pressure Testing', text: 'We measure actual fuel pressure and delivery to confirm the real problem before quoting any parts.' },
      { title: 'Fuel Pump Replacement', text: 'In-tank or inline pumps replaced with quality parts matched to your vehicle and driving.' },
      { title: 'Fuel Injector Service', text: 'Clogged or leaking injectors cleaned, tested, or replaced to smooth out idle and restore power.' },
      { title: 'Fuel Filter Replacement', text: 'A restricted filter starves the engine — we replace it to protect your pump and injectors.' },
      { title: 'Fuel Line Repair', text: 'Cracked, leaking, or corroded fuel lines repaired to keep the system sealed and safe.' },
      { title: 'Written Findings & Estimate', text: 'A clear explanation of what\'s failing and a free written estimate before any work begins.' },
    ],
    signsHeading: 'Signs You Need Fuel System Repair',
    signs: [
      'Engine cranks a long time or is hard to start',
      'Sputtering, hesitation, or stalling when you accelerate',
      'A noticeable drop in fuel economy',
      'A whining or buzzing noise from the fuel tank area',
      'Check engine light with a fuel-pressure or misfire code',
    ],
    faqs: [
      {
        question:
          'How much does fuel system repair cost in Newark, NJ?',
        answer:
          'A fuel filter replacement often runs $80–$200, while a fuel pump replacement typically ranges from $400–$900 depending on your vehicle and whether the pump is in-tank. We run a fuel pressure test first and give you a free written estimate before any work begins.',
      },
      {
        question:
          'How do I know if it\'s my fuel pump or my fuel injectors?',
        answer:
          'The symptoms overlap, which is exactly why we test fuel pressure and delivery before replacing anything. A failing pump usually causes low pressure and hard starts, while bad injectors tend to cause misfires and rough idle. Our diagnosis pinpoints the real cause so you don\'t pay for the wrong part.',
      },
      {
        question:
          'Why is my car suddenly getting bad gas mileage?',
        answer:
          'A clogged fuel filter, a weak fuel pump, or dirty injectors can all hurt fuel economy. It can also be a sensor issue mimicking a fuel problem, so we diagnose before recommending repairs. Bring it to our Newark shop and we\'ll test the system and explain what we find.',
      },
      {
        question:
          'Do I really need a new fuel pump, or can it be cleaned?',
        answer:
          'Fuel pumps can\'t be cleaned — once one fails or loses pressure, it needs replacement. But we won\'t quote a pump until pressure testing confirms it\'s actually the pump and not a filter, relay, or wiring issue. We never replace parts on a guess.',
      },
      {
        question:
          'Is fuel system repair covered by a warranty?',
        answer:
          'Yes. Our fuel system repairs are backed by a 12-month/12,000-mile warranty, and every job is done by ASE-certified technicians. You\'ll get a free written estimate before we start, so there are no surprises. Call our Newark shop at (607) 251-1509.',
      },
    ],
    related: ['engine-diagnostics-newark-nj', 'engine-repair-newark-nj', 'exhaust-repair-newark-nj'],
  },
]

export const locationPages = [
  {
    slug: 'auto-repair-elizabeth-nj',
    city: 'Elizabeth',
    h1: 'Auto Repair in Elizabeth, NJ',
    title: 'Auto Repair Near Elizabeth, NJ | Car2Fix Mechanical & Body Shop',
    description:
      'Auto repair for Elizabeth, NJ drivers — our Newark mechanical shop sits right at the Elizabeth border, with a certified body shop in nearby Linden. (607) 251-1509.',
    intro:
      'Car2Fix serves Elizabeth drivers from two shops just minutes away: our mechanical shop at 408 Carnegie Ave in Newark sits right at the Elizabeth border, and our certified body shop is on E Elizabeth Ave in neighboring Linden.',
    proximity: {
      mech: 'Right at the Elizabeth border — minutes from North Elizabeth and downtown via Routes 1&9.',
      body: 'Just south of Elizabeth on E Elizabeth Ave in Linden.',
    },
    faqs: [
      {
        question: 'Do you serve Elizabeth, NJ?',
        answer:
          'Yes — Elizabeth drivers are some of our most frequent customers. Our Newark mechanical shop is right at the Elizabeth border near the airport, and our Linden body shop is a few minutes south of the city. Estimates are free at both.',
      },
      {
        question: 'Where should I go for mechanical vs body work?',
        answer:
          'Engine, brakes, transmission, and maintenance go to the mechanical shop at 408 Carnegie Ave, Newark. Collision damage, dents, and paint go to the body shop at 1420 E Elizabeth Ave, Linden. Not sure? Call (607) 251-1509 and we will point you right.',
      },
      {
        question: 'Do you work with insurance for Elizabeth drivers?',
        answer:
          'Yes. For collision repairs we handle the entire claims process and work with all major insurers, including GEICO, State Farm, Progressive, Allstate, Liberty Mutual, and USAA.',
      },
    ],
  },
  {
    slug: 'auto-repair-linden-nj',
    city: 'Linden',
    h1: 'Auto Repair in Linden, NJ',
    title: 'Auto Repair in Linden, NJ | Car2Fix Body Shop & Mechanical',
    description:
      'Auto repair for Linden, NJ — our certified body shop is right in town at 1420 E Elizabeth Ave, with full mechanical service minutes away in Newark. (607) 251-1509.',
    intro:
      'Our certified body shop is right here in Linden at 1420 E Elizabeth Ave — collision repair, painting, and dent removal with a lifetime warranty. For mechanical work, our Newark shop is a quick drive up Routes 1&9.',
    proximity: {
      mech: 'A quick drive north on Routes 1&9 to 408 Carnegie Ave, Newark.',
      body: 'Right in town — 1420 E Elizabeth Ave, Linden, NJ 07036.',
    },
    faqs: [
      {
        question: 'Do you have a shop in Linden?',
        answer:
          'Yes — our auto body shop is at 1420 E Elizabeth Ave, Linden, NJ 07036, open Mon–Fri 8am–6pm. It handles collision repair, painting, dent removal, and all body work, backed by a lifetime warranty.',
      },
      {
        question: 'Where do Linden drivers go for mechanical repairs?',
        answer:
          'Our mechanical shop at 408 Carnegie Ave in Newark — about a 15-minute drive up Routes 1&9. Engine, transmission, brakes, oil changes, and everything in between, warrantied for 12 months/12,000 miles.',
      },
      {
        question: 'Can the Linden shop handle my insurance claim?',
        answer:
          'Yes. We manage the entire claims process for collision repairs and work with all major insurance companies. Bring the car in and we take care of the rest.',
      },
    ],
  },
  {
    slug: 'auto-repair-hillside-nj',
    city: 'Hillside',
    h1: 'Auto Repair in Hillside, NJ',
    title: 'Auto Repair Near Hillside, NJ | Car2Fix Mechanical & Body Shop',
    description:
      'Auto repair for Hillside, NJ drivers — full mechanical service in nearby Newark and a certified body shop in Linden. Free estimates. Call (607) 251-1509.',
    intro:
      'Hillside borders Newark, which puts both Car2Fix shops a short drive away: full mechanical service at 408 Carnegie Ave in Newark, and certified collision and body repair in Linden.',
    proximity: {
      mech: 'A short drive from Hillside via US-22 and Routes 1&9 to 408 Carnegie Ave, Newark.',
      body: 'A few miles south at 1420 E Elizabeth Ave, Linden.',
    },
    faqs: [
      {
        question: 'Do you serve Hillside, NJ?',
        answer:
          'Yes. Hillside sits right against Newark, so our mechanical shop at 408 Carnegie Ave is a short drive away, and the Linden body shop is just a few miles further south. Estimates are free at both shops.',
      },
      {
        question: 'What services do Hillside drivers usually come in for?',
        answer:
          'Everything from oil changes, brakes, and suspension work — Hillside potholes are no joke — to engine diagnostics at the Newark shop, plus collision repair and painting at the Linden body shop.',
      },
      {
        question: 'Do you offer warranties?',
        answer:
          'Yes — mechanical repairs are covered for 12 months/12,000 miles, and body shop work carries a lifetime warranty.',
      },
    ],
  },
]

// Body-shop service detail pages (Linden). Same shape as servicePages plus
// shop: 'body', which routes them to the red BodyServicePageContent renderer and
// the AutoBodyShop provider in JSON-LD. Slugs use the -linden-nj geo suffix.
export const bodyServicePages = [
  {
    slug: 'collision-repair-linden-nj',
    shop: 'body',
    name: 'Collision Repair',
    icon: 'Car',
    h1: 'Collision Repair in Linden, NJ',
    title: 'Collision Repair in Linden, NJ | Car2Fix Body Shop',
    description:
      'Collision repair in Linden, NJ by I-CAR & OEM-certified techs. Frame measuring, OEM parts, paint blending, insurance claims. Lifetime warranty. (908) 525-3681.',
    intro:
      'Been in an accident? Our I-CAR and OEM-certified technicians restore your vehicle to pre-accident condition — structural and cosmetic — and handle the entire insurance claim for you, with a free written estimate before any work begins.',
    includedHeading: 'What\'s Included in Our Collision Repair Service',
    included: [
      { title: 'Computerized Frame Measuring', text: 'We measure the frame and unibody electronically to find hidden structural damage and straighten your vehicle back to factory specs.' },
      { title: 'OEM Replacement Parts', text: 'Panels and components replaced with OEM parts so fit, finish, and safety systems match how your car left the factory.' },
      { title: 'Paint Matching & Blending', text: 'Computer-matched paint blended into the surrounding panels for a finish that disappears into the original.' },
      { title: 'Dent & Panel Repair', text: 'Creased or crushed panels repaired or replaced and refinished until there is no trace of the impact.' },
      { title: 'Full Insurance Claim Handling', text: 'We manage the entire claims process and work directly with all major insurers, so you deal with us and not the paperwork.' },
      { title: 'Post-Repair Quality Check', text: 'A final inspection confirms panel gaps, alignment, and finish before we hand your keys back.' },
    ],
    signsHeading: 'Signs You Need Collision Repair',
    signs: [
      'Your vehicle was in a collision, even a low-speed fender bender',
      'Visible dents, creased panels, or a bumper knocked out of place',
      'Doors, hood, or trunk that no longer line up or close evenly',
      'The car pulls, sits crooked, or feels different after an impact',
      'Cracked or chipped paint, or bare metal showing after a hit',
    ],
    faqs: [
      {
        question:
          'How much does collision repair cost in Linden, NJ?',
        answer:
          'It depends on the damage. Minor panel and paint work often runs $500–$1,500, while structural repairs after a major accident can reach several thousand dollars. We provide a free written estimate before any work begins, and most collision jobs are covered by insurance.',
      },
      {
        question:
          'Do you handle the insurance claim for me?',
        answer:
          'Yes. We manage the entire claims process and work directly with all major insurers, including GEICO, State Farm, Progressive, Allstate, Liberty Mutual, and USAA. You drop the car at our Linden shop and we handle the adjuster and the paperwork — we regularly take in collision work from Linden, Rahway, Roselle, and Union.',
      },
      {
        question:
          'Will my car be restored to its original condition?',
        answer:
          'That is the goal. We use computerized frame measuring and OEM replacement parts to bring the structure back to factory specs, then color-match and blend the paint so the repair is invisible. You get your vehicle back looking and driving like it did before the accident.',
      },
      {
        question:
          'Do you use OEM parts for collision repair?',
        answer:
          'Yes, we use OEM replacement parts so fit, finish, and safety systems match how your vehicle left the factory. If your insurer specifies aftermarket parts, we walk you through the options before any work starts.',
      },
      {
        question:
          'Do you offer a warranty on collision and body work?',
        answer:
          'Yes. Our body and paint work carries a lifetime warranty for as long as you own the vehicle. If anything tied to our repair ever fails, bring it back to our Linden shop and we will make it right.',
      },
    ],
    related: ['frame-straightening-linden-nj', 'body-panel-replacement-linden-nj', 'bumper-repair-linden-nj'],
  },
  {
    slug: 'auto-body-painting-linden-nj',
    shop: 'body',
    name: 'Auto Body Painting',
    icon: 'Paintbrush',
    h1: 'Auto Body Painting in Linden, NJ',
    title: 'Auto Body Painting in Linden, NJ | Car2Fix Body Shop',
    description:
      'Auto body painting in Linden, NJ by I-CAR & OEM-certified techs. Color matching, clear-coat refinishing & lifetime warranty. Free estimates. (908) 525-3681.',
    intro:
      'Faded paint, peeling clear coat, or a panel that no longer matches the rest of your car? Our I-CAR and OEM-certified painters deliver a seamless, factory-quality finish — with a free written estimate before any work begins.',
    includedHeading: 'What\'s Included in Our Linden Auto Body Painting Service',
    included: [
      { title: 'Computerized Color Match', text: 'We read your factory paint code and blend the exact shade so repainted panels disappear into the rest of the car.' },
      { title: 'Full & Partial Repaints', text: 'Whole-vehicle refinishing or a single panel — matched, blended, and cleared for one uniform look.' },
      { title: 'Controlled Booth Finish', text: 'Paint applied and cured in an enclosed, filtered spray booth for a clean, dust-free coat.' },
      { title: 'Clear-Coat & Refinishing', text: 'Fresh clear coat over the base color for added depth, gloss, and long-term UV protection.' },
      { title: 'Surface Prep & Bodywork', text: 'Proper sanding, priming, and repair so the new finish lays flat with no orange peel or fish-eyes.' },
      { title: 'Fade & Oxidation Correction', text: 'Restoring dull, chalky, or peeling factory paint back to a deep, even shine.' },
    ],
    signsHeading: 'Signs Your Vehicle Needs a Repaint or Refinish',
    signs: [
      'Clear coat is peeling, flaking, or looks cloudy and milky',
      'Paint has faded, dulled, or turned chalky from sun and age',
      'A repaired or replaced panel no longer matches the rest of the car',
      'Rust bubbles, chips, or deep scratches are showing through the finish',
      'Color looks blotchy or uneven from panel to panel',
    ],
    faqs: [
      {
        question:
          'How much does a car paint job cost in Linden, NJ?',
        answer:
          'A single-panel repaint typically runs $400-$900, while a full-vehicle repaint generally ranges from $3,000-$7,000 depending on the size of the car, the color, and how much prep is needed. We give you a free written estimate before any work begins, so the price is clear up front.',
      },
      {
        question:
          'Will the new paint match my car\'s original color?',
        answer:
          'Yes. We read your factory paint code and use computerized color matching to mix the exact shade, then blend it into the surrounding panels so the repair is seamless. If your paint has already faded from years of sun, we tint and blend to match how the car looks today, not just the original code.',
      },
      {
        question:
          'How long does an auto body paint job take?',
        answer:
          'A single panel usually takes 2-4 days, and a full repaint often runs 1-2 weeks, since proper prep, curing, and clear-coat time can\'t be rushed. We\'ll give you a realistic timeline along with your written estimate.',
      },
      {
        question:
          'Do you handle insurance claims for paint work in Linden, NJ?',
        answer:
          'Yes. We handle the entire claims process and work with all major insurers, including GEICO, State Farm, Progressive, Allstate, Liberty Mutual, and USAA. Just bring your claim number and we\'ll take it from there.',
      },
      {
        question:
          'Is your paint work guaranteed?',
        answer:
          'The body and paint work we do at our Linden shop carries a lifetime warranty against defects in workmanship. If something isn\'t right with the finish we applied, bring it back and we\'ll make it right.',
      },
    ],
    related: ['scratch-repair-linden-nj', 'dent-removal-linden-nj', 'collision-repair-linden-nj'],
  },
  {
    slug: 'dent-removal-linden-nj',
    shop: 'body',
    name: 'Dent Removal',
    icon: 'Hammer',
    h1: 'Dent Removal in Linden, NJ',
    title: 'Dent Removal in Linden, NJ | Car2Fix Body Shop',
    description:
      'Dent removal in Linden, NJ by I-CAR & OEM-certified techs. Paintless dent repair for door dings & hail, plus filler & refinish. Free estimates. (908) 525-3681.',
    intro:
      'Door ding in a parking lot or hail damage across the hood? Our I-CAR and OEM-certified technicians in Linden, NJ assess the dent, tell you honestly whether paintless repair will work, and give you a free written estimate before any work starts.',
    includedHeading: 'What\'s Included in Our Dent Removal Service',
    included: [
      { title: 'Free Dent Assessment', text: 'We check depth, location, and paint condition to tell you honestly whether paintless repair or traditional filler is the right call.' },
      { title: 'Paintless Dent Repair', text: 'For door dings, hail, and minor dents where the paint is intact, we massage the metal back into shape with no filler and no repaint.' },
      { title: 'Traditional Dent Repair', text: 'For creases and larger damage, we fill, sand, and refinish so the panel matches the rest of your vehicle.' },
      { title: 'Factory-Match Refinishing', text: 'When a repair needs paint, we blend to your vehicle\'s exact color code for a seamless finish.' },
      { title: 'Hail & Multi-Dent Work', text: 'We handle scattered hail damage across hoods, roofs, and panels, and give you a clear count and quote up front.' },
      { title: 'Insurance Claim Handling', text: 'We work directly with all major insurers and manage the paperwork so you\'re not stuck chasing the claim.' },
    ],
    signsHeading: 'Signs You Need Dent Removal',
    signs: [
      'A door ding or shopping-cart dent that\'s bugging you every time you park',
      'Small round dents across the hood or roof after a hailstorm',
      'A shallow dent where the paint is still smooth and unbroken',
      'A crease or larger dent that\'s cracked or chipped the paint',
      'A dent that\'s starting to show surface rust around the edges',
    ],
    faqs: [
      {
        question:
          'How much does dent removal cost in Linden, NJ?',
        answer:
          'Paintless dent repair for a single door ding typically runs $75-$150, while larger dents that need filler and refinishing usually range from $150-$500 depending on size and location. We give you a free written estimate before any work begins, so you\'ll know the exact price up front.',
      },
      {
        question:
          'What\'s the difference between paintless dent repair and traditional dent repair?',
        answer:
          'Paintless dent repair works when the paint is still intact and the metal isn\'t stretched or creased, and it\'s faster and cheaper because there\'s no filler or repaint. Traditional repair is for larger dents, sharp creases, or cracked paint, where we fill, sand, and refinish the panel. We\'ll tell you honestly which one your dent needs during the free assessment.',
      },
      {
        question:
          'How long does paintless dent repair take?',
        answer:
          'Most single dings are done the same day, often in an hour or two. Hail damage with many dents can take a day or more depending on how many panels are affected, and we\'ll give you a realistic timeline with your estimate.',
      },
      {
        question:
          'Will you handle my insurance claim for hail or dent damage?',
        answer:
          'Yes. We handle the entire claims process and work with all major insurers, including GEICO, State Farm, Progressive, Allstate, Liberty Mutual, and USAA. Bring us the details and we\'ll manage the paperwork from your Linden shop visit through completion.',
      },
      {
        question:
          'Is the dent repair guaranteed?',
        answer:
          'Yes. All of our body and paint work at our Linden, NJ shop is backed by a lifetime warranty. If a repair we performed ever fails, we\'ll make it right.',
      },
    ],
    related: ['scratch-repair-linden-nj', 'auto-body-painting-linden-nj', 'bumper-repair-linden-nj'],
  },
  {
    slug: 'frame-straightening-linden-nj',
    shop: 'body',
    name: 'Frame Straightening',
    icon: 'Frame',
    h1: 'Frame Straightening in Linden, NJ',
    title: 'Frame Straightening in Linden, NJ | Car2Fix Body Shop',
    description:
      'Frame straightening in Linden, NJ. Computerized measuring & hydraulic pulling back to factory spec. I-CAR certified, insurance handled. (908) 525-3681.',
    intro:
      'After a collision, a bent frame quietly throws off your alignment, wears your tires unevenly, and compromises the crash protection built into your car. At our Linden shop, our I-CAR and OEM-certified technicians measure your frame with computerized equipment and pull it back to factory spec — with a free written estimate before any work begins.',
    includedHeading: 'What\'s Included in Our Frame Straightening Service',
    included: [
      { title: 'Computerized Frame Measuring', text: 'Computerized measuring compares your frame to factory specs point by point, so we know exactly what moved and by how much.' },
      { title: 'Structural Damage Assessment', text: 'A full inspection of the frame, unibody, and crumple zones to find hidden damage a visual check will miss.' },
      { title: 'Hydraulic Frame Pulling', text: 'Anchored to a frame machine, we apply controlled hydraulic force to bring the structure back into alignment.' },
      { title: 'Unibody & Full-Frame Repair', text: 'We straighten modern unibody cars as well as older full-frame trucks and SUVs.' },
      { title: 'Factory-Spec Restoration', text: 'Frame and mounting points returned to manufacturer specifications so panels, glass, and suspension line up the way they should.' },
      { title: 'Documented Before-and-After Specs', text: 'Printed measurements confirm the frame is back within tolerance — proof for you and your insurer.' },
    ],
    signsHeading: 'Signs Your Vehicle Needs Frame Straightening',
    signs: [
      'The car pulls to one side or the steering wheel sits off-center after a collision',
      'Uneven or rapid tire wear that comes right back after an alignment',
      'Doors, hood, or trunk that no longer line up or close cleanly',
      'Visible bends, kinks, or wrinkles in the frame rails or floor pan',
      'The vehicle took a moderate-to-hard hit, even if it still seems to drive fine',
    ],
    faqs: [
      {
        question:
          'How much does frame straightening cost in Linden, NJ?',
        answer:
          'Frame straightening typically runs $600–$1,200, though severe structural damage can cost more once the measuring is done. We provide a free written estimate before any work begins, and if you\'re filing a claim it often falls under your collision coverage.',
      },
      {
        question:
          'How do I know if my frame is bent after an accident?',
        answer:
          'Common signs are the car pulling to one side, uneven tire wear, doors or the hood not lining up, or visible bends in the frame rails. The only way to be certain is computerized measuring — bring it to our Linden shop for a free inspection.',
      },
      {
        question:
          'Can a bent frame be straightened back to factory spec, or does the car need to be replaced?',
        answer:
          'Most unibody and full-frame vehicles can be measured and pulled back to factory specification on our frame machine. If the damage is beyond a safe repair, we\'ll tell you honestly rather than put an unsafe car back on the road.',
      },
      {
        question:
          'Do you handle the insurance claim for frame and collision damage?',
        answer:
          'Yes. We handle the entire claims process and work with all major insurers, including GEICO, State Farm, Progressive, Allstate, Liberty Mutual, and USAA. Bring the car in to our Linden shop and we take care of the paperwork.',
      },
      {
        question:
          'Is your frame and body work guaranteed?',
        answer:
          'Yes — all body and structural work at our Linden shop carries a lifetime warranty. Our I-CAR and OEM-certified technicians document the before-and-after measurements so you have proof the frame is back within tolerance.',
      },
    ],
    related: ['collision-repair-linden-nj', 'body-panel-replacement-linden-nj', 'bumper-repair-linden-nj'],
  },
  {
    slug: 'scratch-repair-linden-nj',
    shop: 'body',
    name: 'Scratch Repair',
    icon: 'Sparkles',
    h1: 'Scratch Repair in Linden, NJ',
    title: 'Scratch Repair in Linden, NJ | Car2Fix Body Shop',
    description:
      'Scratch & scuff repair in Linden, NJ. I-CAR certified techs buff out clear-coat scratches, color-match & refinish deep ones. Lifetime warranty. (908) 525-3681.',
    intro:
      'A keyed door, a parking-lot scuff, or a scratch down to the primer? Our I-CAR and OEM-certified technicians buff, sand, color-match, and refinish scratches — often without repainting the whole panel, and always with a free written estimate first.',
    includedHeading: 'What\'s Included in Our Scratch Repair Service',
    included: [
      { title: 'Scratch Depth Assessment', text: 'We check whether the scratch sits in the clear coat, the paint, or down to primer — and tell you the honest fix for it.' },
      { title: 'Clear-Coat Buffing', text: 'Surface scuffs and light scratches polished and buffed out with no repainting needed.' },
      { title: 'Deep Scratch Refinishing', text: 'Scratches through the paint sanded, filled, primed, and refinished so the panel looks whole again.' },
      { title: 'Factory Color Matching', text: 'Your exact paint code pulled and blended so the repair disappears into the surrounding finish.' },
      { title: 'Key & Vandalism Scratches', text: 'Long key scratches and keyed panels repaired and blended, with insurance claims handled when they apply.' },
      { title: 'Spot & Panel Refinishing', text: 'We refinish only the affected area when we can, keeping cost down and the rest of your paint untouched.' },
    ],
    signsHeading: 'Signs You Need Scratch Repair',
    signs: [
      'A scratch you can catch a fingernail in — it has gone through the clear coat',
      'White, gray, or primer showing where the color used to be',
      'A key scratch running along a door, fender, or quarter panel',
      'Scuff marks or paint transfer from a parking-lot scrape',
      'Rust starting to form along the edge of a deep scratch',
    ],
    faqs: [
      {
        question:
          'How much does scratch repair cost in Linden, NJ?',
        answer:
          'It depends on depth and size. A clear-coat scratch that buffs out often runs $100–$200, while a deeper scratch that needs sanding, filling, color-matching, and refinishing typically ranges from $300–$800 per panel. You get a free written estimate before any work begins.',
      },
      {
        question:
          'Can a deep scratch be fixed without repainting the whole car?',
        answer:
          'Usually, yes. When the damage is limited to one area, we sand, fill, color-match, and refinish just the affected spot or panel — no need to repaint the entire vehicle. We only recommend more when the scratch is too widespread to blend cleanly.',
      },
      {
        question:
          'Will the repaired scratch match the rest of my paint?',
        answer:
          'Yes. We pull your factory paint code and blend the color into the surrounding finish so the repair is invisible. Our I-CAR and OEM-certified technicians do this work daily, and it is backed by a lifetime warranty on the paint work.',
      },
      {
        question:
          'Someone keyed my car — will insurance cover the scratch repair?',
        answer:
          'Vandalism like keying is often covered under comprehensive coverage. We handle the entire claims process and work with all major insurers, including GEICO, State Farm, Progressive, Allstate, Liberty Mutual, and USAA, so you can just drop the car off with us.',
      },
      {
        question:
          'How long does scratch repair take at your Linden body shop?',
        answer:
          'A clear-coat buff is often same-day. A deeper scratch that needs filling, color-matching, and refinishing usually takes 1–3 days so the paint and clear coat cure properly. We give you an exact timeline with your free written estimate at our Linden shop.',
      },
    ],
    related: ['auto-body-painting-linden-nj', 'dent-removal-linden-nj', 'bumper-repair-linden-nj'],
  },
  {
    slug: 'windshield-replacement-linden-nj',
    shop: 'body',
    name: 'Windshield Replacement',
    icon: 'Glasses',
    h1: 'Windshield Replacement in Linden, NJ',
    title: 'Windshield Replacement in Linden, NJ | Car2Fix Body Shop',
    description:
      'Windshield replacement in Linden, NJ with OEM-quality glass, urethane sealing & ADAS recalibration. Free written estimate, insurance handled. (908) 525-3681.',
    intro:
      'A rock chip that\'s spreading, a crack across your line of sight, or glass that won\'t pass inspection? At our Linden body shop, our I-CAR and OEM-certified technicians replace windshields with OEM-quality glass and proper urethane sealing — with a free written estimate before any work begins.',
    includedHeading: 'What\'s Included in Our Windshield Replacement Service',
    included: [
      { title: 'Chip & Crack Assessment', text: 'We tell you honestly whether the damage can be repaired or the windshield actually needs replacing.' },
      { title: 'OEM-Quality Glass', text: 'Windshields matched to your vehicle for correct fit, tint, and sensor mounting — no cheap substitutes.' },
      { title: 'Proper Urethane Sealing', text: 'Automotive-grade urethane applied and cured to factory spec so the glass bonds tight and won\'t leak.' },
      { title: 'ADAS Camera Recalibration', text: 'If your car runs lane-keep or automatic braking off a windshield camera, we recalibrate it after installation.' },
      { title: 'Same-Day Chip Repair', text: 'Small stone chips caught early are often filled and repaired the same day instead of replaced.' },
      { title: 'Insurance Claim Handling', text: 'We manage the glass claim with your insurer from start to finish, including many zero-deductible policies.' },
    ],
    signsHeading: 'Signs You Need Windshield Replacement',
    signs: [
      'A crack longer than a dollar bill or one that\'s actively spreading',
      'A chip or crack sitting in the driver\'s line of sight',
      'Star or spider cracks that keep growing in heat and cold',
      'Pitting or haze that scatters light and causes glare at night',
      'A windshield that failed, or would fail, NJ state inspection',
    ],
    faqs: [
      {
        question:
          'How much does windshield replacement cost in Linden, NJ?',
        answer:
          'Most windshield replacements run $250-$500 for standard glass, and $500-$1,000+ when your vehicle needs ADAS camera recalibration or heated/acoustic glass. We provide a free written estimate before any work begins, and if you\'re filing a glass claim we\'ll confirm your out-of-pocket cost up front.',
      },
      {
        question:
          'Can a windshield chip be repaired instead of replaced?',
        answer:
          'Often yes. A chip smaller than a quarter that isn\'t in your direct line of sight can usually be repaired the same day, which is faster and cheaper than replacement. Once a crack spreads past a few inches or reaches the edge of the glass, replacement becomes the safe choice — we\'ll tell you honestly which one you need.',
      },
      {
        question:
          'Do you recalibrate the ADAS camera after replacing the glass?',
        answer:
          'Yes. Many newer vehicles have a forward-facing camera mounted to the windshield that runs lane-keep assist and automatic emergency braking. After we install the new glass, we recalibrate those systems so they read the road correctly — skipping this step can leave your safety features misaligned.',
      },
      {
        question:
          'Will a cracked windshield fail NJ inspection?',
        answer:
          'Damage in the driver\'s sight line or anything that obstructs your view can fail New Jersey inspection and is a genuine safety hazard. If your windshield won\'t pass, bring it to our Linden shop and we\'ll give you a free written estimate before any work begins.',
      },
      {
        question:
          'Do you handle insurance for windshield replacement?',
        answer:
          'Yes. We handle the entire glass claim from start to finish and work with all major insurers, including GEICO, State Farm, Progressive, Allstate, Liberty Mutual, and USAA. Many comprehensive policies cover auto glass with a low or zero deductible, and we\'ll confirm your out-of-pocket cost before any work begins.',
      },
    ],
    related: ['collision-repair-linden-nj', 'scratch-repair-linden-nj', 'dent-removal-linden-nj'],
  },
  {
    slug: 'body-panel-replacement-linden-nj',
    shop: 'body',
    name: 'Body Panel Replacement',
    icon: 'Layers',
    h1: 'Body Panel Replacement in Linden, NJ',
    title: 'Body Panel Replacement in Linden, NJ | Car2Fix Body Shop',
    description:
      'Body panel replacement in Linden, NJ by I-CAR & OEM-certified techs. Fenders, doors, hoods & quarter panels. Free estimates, lifetime warranty. (908) 525-3681.',
    intro:
      'Dented fender, crumpled door, or a panel too far gone to fill? Our I-CAR and OEM-certified technicians replace damaged body panels and refinish them to match your existing paint — with an honest written estimate before any work begins.',
    includedHeading: 'What\'s Included in Our Body Panel Replacement Service',
    included: [
      { title: 'Damage Assessment', text: 'A close look at the panel, mounting points, and structure behind it to confirm whether replacement truly beats repair.' },
      { title: 'OEM Panel Replacement', text: 'Fenders, doors, hoods, and quarter panels replaced with OEM parts for a factory-correct fit.' },
      { title: 'Bolt-On & Welded Panels', text: 'Bolt-on panels swapped cleanly, and welded panels cut and re-seamed to manufacturer specs.' },
      { title: 'Rust Repair', text: 'Corroded metal cut out and replaced with sound panel so the rust doesn\'t creep back.' },
      { title: 'Color-Matched Refinishing', text: 'New panels primed, painted, and blended to your existing paint so the repair disappears.' },
      { title: 'Insurance Claim Handling', text: 'We document the damage and work directly with your insurer to keep the claim moving.' },
    ],
    signsHeading: 'Signs You Need Body Panel Replacement',
    signs: [
      'A dent or crease too deep or sharp to pull without piling on filler',
      'Rust holes or bubbling paint eating through a fender, door, or quarter panel',
      'A panel torn, folded, or badly creased from a collision',
      'Doors, hood, or trunk that no longer line up or close the way they should',
      'Old filler repair that\'s cracking, sinking, or showing through the paint',
    ],
    faqs: [
      {
        question:
          'How much does body panel replacement cost in Linden, NJ?',
        answer:
          'Most single-panel replacements run about $500 to $1,500 depending on the panel, whether it bolts on or has to be welded, and the paint blending involved. Welded panels like quarter panels and heavier rust repair sit at the higher end. You\'ll get a free written estimate before any work begins.',
      },
      {
        question:
          'Should a damaged panel be repaired or replaced?',
        answer:
          'If the metal is only dented and the structure underneath is sound, we\'ll repair it — that\'s usually the cheaper route. But when a panel is torn, badly creased, or rusted through, replacement is safer and cleaner than burying the damage in filler. After a free inspection we\'ll tell you honestly which one your car actually needs.',
      },
      {
        question:
          'Do you handle insurance claims for body panel work?',
        answer:
          'Yes. We handle the entire claims process and work with all major insurers, including GEICO, State Farm, Progressive, Allstate, Liberty Mutual, and USAA. Bring us your estimate or claim number and we\'ll take it from there for drivers across Linden, Elizabeth, Rahway, and Roselle.',
      },
      {
        question:
          'Will the new panel match the rest of my car\'s paint?',
        answer:
          'Yes. Our OEM-certified technicians refinish and blend each new panel to your existing paint so the repair isn\'t visible from the driveway. All body and paint work is backed by our lifetime warranty.',
      },
      {
        question:
          'How long does body panel replacement take at your Linden shop?',
        answer:
          'A single bolt-on panel with refinishing is often a few days, while welded panels, rust repair, or multiple panels take longer. We\'ll give you a realistic timeline along with your free written estimate at our Linden, NJ shop before any work starts.',
      },
    ],
    related: ['collision-repair-linden-nj', 'frame-straightening-linden-nj', 'bumper-repair-linden-nj'],
  },
  {
    slug: 'bumper-repair-linden-nj',
    shop: 'body',
    name: 'Bumper Repair',
    icon: 'Wind',
    h1: 'Bumper Repair in Linden, NJ',
    title: 'Bumper Repair in Linden, NJ | Car2Fix Body Shop',
    description:
      'Bumper crack, scuff & sensor repair in Linden, NJ by I-CAR & OEM-certified techs. Color-matched paint, free estimate, lifetime warranty. (908) 525-3681.',
    intro:
      'Cracked, scuffed, or a bumper hanging loose after a fender-bender? Our I-CAR and OEM-certified technicians repair and refinish front and rear bumpers on all makes and models at our Linden, NJ body shop — with a free written estimate before any work begins.',
    includedHeading: 'What\'s Included in Our Linden Bumper Repair Service',
    included: [
      { title: 'Repair vs. Replace Assessment', text: 'An honest look at whether your bumper can be repaired or truly needs replacement — repair is often the cheaper fix for cosmetic damage.' },
      { title: 'Crack & Scuff Repair', text: 'Plastic bumper cracks, gouges, and deep scuffs filled, sanded, and reshaped back to their original contour.' },
      { title: 'Re-Secure & Realign', text: 'Loose or sagging bumpers refastened and realigned to factory gaps and mounting points.' },
      { title: 'Color-Matched Refinishing', text: 'Computerized paint matching and a full repaint so the repair blends seamlessly with your factory finish.' },
      { title: 'Sensor & Camera Reinstallation', text: 'Parking sensors, backup sensors, and cameras removed, reinstalled, and tested for proper operation.' },
      { title: 'Free Written Estimate', text: 'A clear, itemized quote before any work begins — and we handle the insurance claim if one\'s involved.' },
    ],
    signsHeading: 'Signs You Need Bumper Repair in Linden, NJ',
    signs: [
      'Cracks, gouges, or deep scuffs in the plastic bumper cover',
      'The bumper is sagging, loose, or pulling away from the body',
      'Uneven gaps between the bumper and the fenders or headlights',
      'Parking or backup sensors stopped working after an impact',
      'Faded, mismatched, or peeling paint from a previous bumper repair',
    ],
    faqs: [
      {
        question:
          'How much does bumper repair cost in Linden, NJ?',
        answer:
          'Cosmetic bumper repair typically runs $300-$700 depending on the size of the damage and how much refinishing is needed, while a full bumper replacement usually costs more. We provide a free written estimate before any work begins so there are no surprises.',
      },
      {
        question:
          'Should I repair or replace my bumper?',
        answer:
          'For cosmetic damage like cracks, scuffs, and scrapes, repair is usually the faster, cheaper option and looks just as good once it\'s refinished. If the bumper is structurally compromised or its mounting points are broken, we\'ll tell you honestly when replacement is the safer call.',
      },
      {
        question:
          'Will the repaired bumper match the rest of my car?',
        answer:
          'Yes. We use computerized paint matching to blend the repair with your vehicle\'s factory color, so the bumper doesn\'t look off. All body and paint work at our Linden shop is backed by a lifetime warranty.',
      },
      {
        question:
          'Do you reinstall parking sensors and backup cameras?',
        answer:
          'We do. Any parking sensors, backup sensors, or cameras built into the bumper are carefully removed during the repair, then reinstalled and tested afterward to make sure everything works correctly.',
      },
      {
        question:
          'Can Car2Fix in Linden handle my insurance claim for bumper damage?',
        answer:
          'Yes. We handle the entire claims process and work with all major insurers, including GEICO, State Farm, Progressive, Allstate, Liberty Mutual, and USAA. Bring us the details and we\'ll help you weigh whether filing a claim or paying out of pocket makes more sense.',
      },
    ],
    related: ['collision-repair-linden-nj', 'dent-removal-linden-nj', 'scratch-repair-linden-nj'],
  },
]

export function getSeoPage(slug) {
  return (
    servicePages.find((p) => p.slug === slug) ||
    bodyServicePages.find((p) => p.slug === slug) ||
    locationPages.find((p) => p.slug === slug) ||
    null
  )
}

// True for any service detail page (mechanical or body) — both carry `included`.
export function isServicePage(page) {
  return Boolean(page && page.included)
}

// True only for body-shop service pages, which render with the red Linden
// renderer and the AutoBodyShop JSON-LD provider.
export function isBodyServicePage(page) {
  return Boolean(page && page.shop === 'body')
}
