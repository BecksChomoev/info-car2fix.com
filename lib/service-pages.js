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
        question: 'How much does brake repair cost in Newark?',
        answer:
          'It depends on your vehicle and what is actually worn — sometimes it is just pads, sometimes pads and rotors. Estimates at Car2Fix are free, and the price we quote before the work is the price you pay. Call (607) 251-1509 or stop by 408 Carnegie Ave.',
      },
      {
        question: 'How long does brake repair take?',
        answer:
          'Most pad and rotor jobs are completed the same day. You get a clear timeline with your estimate, and we stick to it.',
      },
      {
        question: 'How often should brakes be inspected?',
        answer:
          'At least once a year, or right away if you hear noise or feel a change in the pedal. We check brakes as part of routine service, so an oil change visit is a good time to have them looked at.',
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
        question: 'Should I repair or replace my engine?',
        answer:
          'We diagnose first, then give you an honest comparison. Often a targeted repair solves it for far less than a replacement; when a rebuild or replacement genuinely makes more sense, we say so and quote both options.',
      },
      {
        question: 'How long does engine repair take?',
        answer:
          'Minor repairs like sensors, leaks, or tune-ups are often same or next day. Bigger jobs like head gaskets or rebuilds take longer — you get a clear timeline with your estimate before we start.',
      },
      {
        question: 'Is my older car worth fixing?',
        answer:
          'Sometimes yes, sometimes no — and we will tell you straight. Estimates are free, and we only recommend repairs your car actually needs. That honesty is the reason most of our Newark customers keep coming back.',
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
        question: 'Why is my check engine light on?',
        answer:
          'It can be anything from a loose gas cap to a misfire or a failing sensor. The light only tells you a system reported a fault — our scan and testing identify the exact cause, and we explain it before recommending any repair.',
      },
      {
        question: 'Can I keep driving with the check engine light on?',
        answer:
          'If the light is steady, get it checked soon but you can usually drive. If it is flashing, stop driving — a flashing light usually means an active misfire that can quickly destroy your catalytic converter.',
      },
      {
        question: 'Do you charge for diagnostics?',
        answer:
          'Estimates are always free. If a deeper diagnostic procedure is needed to isolate a tricky fault, we tell you up front and quote it before we start — no surprises.',
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
        question: 'Does slipping mean I need a rebuild?',
        answer:
          'Not necessarily. Low or burnt fluid, a failing solenoid, or a sensor can all cause slipping. We diagnose first — many transmission complaints are fixed for a fraction of a rebuild.',
      },
      {
        question: 'How often should transmission fluid be changed?',
        answer:
          'Typically every 30,000–60,000 miles depending on the vehicle and how it is driven. We can look up your manufacturer schedule and check the fluid condition while you wait.',
      },
      {
        question: 'Rebuild or replace — which is better?',
        answer:
          'It depends on your vehicle, mileage, and budget. When a transmission is beyond repair we quote both honestly, with the warranty coverage on each, so you can make the call.',
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
        question: 'How often should I change my oil?',
        answer:
          'Most modern cars on synthetic oil go 5,000–10,000 miles between changes; conventional oil is closer to 3,000–5,000. The right answer is your manufacturer schedule — we will look it up and tell you, even if it means fewer visits.',
      },
      {
        question: 'Is full synthetic worth it?',
        answer:
          'For most modern engines, yes — better protection in extreme temperatures and longer intervals. But if your vehicle is specified for a blend or conventional oil, we will say so instead of upselling you.',
      },
      {
        question: 'Do I need an appointment for an oil change?',
        answer:
          'Calling ahead at (607) 251-1509 guarantees your spot, and most oil changes are done while you wait. We are at 408 Carnegie Ave, Newark — Mon–Fri 8am–6pm, Sat 8am–2pm.',
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
        question: 'How do I know if my shocks or struts are worn?',
        answer:
          'Common giveaways: the car keeps bouncing after a bump, dips hard when braking, or shows leaking fluid on the shock body. If your vehicle has 50,000+ miles and rides rough, it is worth an inspection — ours are part of every free estimate.',
      },
      {
        question: 'Do I need an alignment with suspension work?',
        answer:
          'Usually yes. Replacing components like control arms, tie rods, or struts changes geometry, and skipping the alignment wears out tires fast. We will tell you when it is needed and when it is not.',
      },
      {
        question: 'Can potholes really damage my suspension?',
        answer:
          'Absolutely — hard pothole hits bend rims, knock out alignment, and accelerate wear on shocks and bushings. After a bad hit, have it checked; catching a damaged component early is much cheaper than the tire and steering problems it causes.',
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
        question: 'Why is my A/C blowing warm air?',
        answer:
          'The most common cause is low refrigerant from a leak — but it can also be a compressor, a sensor, or an electrical fault. We test the system first, find the actual cause, and quote the fix before doing anything.',
      },
      {
        question: 'How often does car A/C need a recharge?',
        answer:
          'A healthy A/C system is sealed and should not need regular recharges. If yours needs one every season, there is a leak — and fixing it costs less in the long run than repeated top-offs.',
      },
      {
        question: 'Is your refrigerant handling EPA-compliant?',
        answer:
          'Yes. We recover, recycle, and recharge refrigerant with EPA-compliant equipment and procedures — good for your A/C system and required by law.',
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
        question: 'How long do car batteries last?',
        answer:
          'Typically 3–5 years. New Jersey summers and winters both shorten battery life, so if yours is past three years and cranking slowly, have it tested before it strands you.',
      },
      {
        question: 'Is it the battery or the alternator?',
        answer:
          'A dead battery and a failing alternator feel identical from the driver seat. We test the whole starting and charging system and show you the results — no replacing parts on a hunch.',
      },
      {
        question: 'Can you test my battery before I buy a new one?',
        answer:
          'Yes — that is exactly how we work. We test first and only recommend replacement if the battery actually fails the test.',
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
        question: 'Can my flat tire be repaired, or do I need a new one?',
        answer:
          'A puncture up to about 1/4" in the tread area can usually be repaired properly. Sidewall damage, large cuts, or a tire driven flat for a distance means replacement — we will show you why before recommending either.',
      },
      {
        question: 'How often should tires be rotated?',
        answer:
          'Every 5,000–8,000 miles — most people just do it with every oil change, which is easy to combine in one visit here.',
      },
      {
        question: 'Do you sell new tires?',
        answer:
          'Yes — tell us your vehicle or tire size and budget and we will source the right tires, mount, balance, and set them up with TPMS. Call (607) 251-1509 for availability and pricing.',
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
        question: 'Is an exhaust leak dangerous?',
        answer:
          'Yes. Besides the noise, a leak ahead of the cabin can let exhaust fumes — including carbon monoxide — into the car. If you smell exhaust while driving, get it inspected right away.',
      },
      {
        question: 'Will a loud exhaust fail NJ inspection?',
        answer:
          'Exhaust and emissions problems are a common reason cars fail New Jersey inspection. We repair the leak or component, clear the related codes, and get you ready for re-inspection.',
      },
      {
        question: 'Do I really need a new catalytic converter?',
        answer:
          'Not always. A P0420-type code can be caused by a lazy oxygen sensor or an exhaust leak upstream. We test before replacing — converters are expensive, and we will not sell you one you do not need.',
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
        question: 'My electrical problem comes and goes — can you find it?',
        answer:
          'Intermittent faults are exactly what proper diagnostics are for. We test circuits under load, wiggle-test harnesses, and check grounds and connectors methodically until the fault shows itself — then fix the cause.',
      },
      {
        question: 'Why does the same fuse keep blowing?',
        answer:
          'A fuse that keeps blowing means a short or overload on that circuit. Putting in bigger fuses risks a fire — the right fix is tracing the circuit and repairing the actual fault, which is what we do.',
      },
      {
        question: 'Is it my battery, starter, or alternator?',
        answer:
          'All three produce similar no-start symptoms. We test the complete starting and charging system and show you the readings, so you replace only the failed component.',
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
        question: 'Do you perform official NJ state inspections?',
        answer:
          'New Jersey emissions inspections are performed at state-run stations and licensed private facilities. What we do: pre-purchase and multi-point inspections, and diagnosis and repair of whatever made your car fail state inspection — so you pass the re-test.',
      },
      {
        question: "What's checked in a pre-purchase inspection?",
        answer:
          'Engine and transmission condition, computer trouble codes, brakes, suspension, tires, frame and body condition, fluid condition, and signs of accident damage or deferred maintenance — summarized in a written report you can negotiate with.',
      },
      {
        question: 'My car failed inspection — what now?',
        answer:
          'Bring us the inspection report. We diagnose the exact cause of the failure, quote the repair before any work, fix it, and verify the car is ready for re-inspection.',
      },
    ],
    related: ['engine-diagnostics-newark-nj', 'brake-repair-newark-nj', 'oil-change-newark-nj'],
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

export function getSeoPage(slug) {
  return (
    servicePages.find((p) => p.slug === slug) ||
    locationPages.find((p) => p.slug === slug) ||
    null
  )
}

export function isServicePage(page) {
  return Boolean(page && page.included)
}
