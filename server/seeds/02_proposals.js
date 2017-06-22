exports.seed = function(knex) {
  return knex('proposals').del()
    .then(() => {
      return knex('proposals').insert([{
        id:1,
        title:"Open-Source EEG Harness and Software",
        summary:"Open-source production of an EEG harness and analytical software that gives power and knowledge to the patient of their own mental health. Enables independent collection and diagnostics of brain wave data that will promote effective and accurate treatment",
        story:"I went to college in a town ridden by Adderall junkies striving to achieve their engineering dreams and neglecting their mental health. I seek to provide an easy-to-use and DIY method of measuring EEG brain waves so that patients can see real-time chemical changes in their brain.",
        votes:56,
        user_id:1
      }, {
        id:2,
        title:"Alert System and Breathing Monitor for Epileptic Infants",
        summary:"An breathing monitor that's tied to a mobile app that will alert you of irregular breathing when your baby is sleeping",
        story:"I am an EMT who is frequently called to houses with infant epileptic breathing issues and feel like this device would allow parents to sleep easier at night knowing the condition of their infant.",
        votes:65,
        user_id:3
      },{
        id:3,
        title:"Family-Protected Pill Box",
        summary:"A smartphone-controlled pill box to dispense patient medications at the correct time and dose.",
        story:"My father has mild cognitive impairment and this device would allow him to more easily control his medication and give him peace of mind with one less thing to remember on a daily basis.",
        votes:72,
        user_id:5
      },{
        id:4,
        title:"All-Natural Migraine Remedies Package",
        summary:"Don't want to swallow pills or go out to the grocery store to buy all the natural remedies? Here it is in one package so that you can get the rest you need without leaving the house.",
        story:"I live in the mountains so it will take me at least 40 minutes to get to a grocery store. I am not a fan of pharmaceuticals and would love to have a package that I can easily access whenever a migraine renders me incapacitated.",
        votes:99,
        user_id:6
      },{
        id:5,
        title:"Walking Metronome for Anxiety",
        summary: "A metronome with slight vibrations that will set the pace for walking, meditation, etc. that also includes a heart rate monitor to calibrate the speed and rate to slow the user down.",
        story: "My patients who struggle with ADHD or anxiety have a hard time going from 100 to 0, so a metronome that would slow them down slowly would be a useful tool.",
        votes: 84,
        user_id: 7
      },{
        id:6,
        title:"******",
        summary: "An app to allow anyone afflicted with Dementia to reference photos of loved ones, read relevant news, and maintain a personal schedule",
        story: "I have a mother with dementia and this app would allow her to remember what is important so that she can spend more time with loved ones.",
        votes: 104,
        user_id: 8
      }
      ]);
    });
};
